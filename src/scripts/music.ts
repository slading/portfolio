import { messages } from '../i18n';
import { getLang, LANGUAGE_EVENT } from './language';

/**
 * Spotify music player controller.
 *
 * - Playback uses Spotify's official embed through its iFrame API. Nothing is hosted or downloaded.
 * - Nothing loads until the visitor presses play: the API script and the embed are added on the
 *   first interaction. No autoplay, and no Spotify login is required.
 * - The equalizer and progress come only from the API's playback_update events. They are never
 *   simulated. If the embed is blocked or never reports ready, the card says so and keeps the
 *   "Open in Spotify" link.
 */

type TrackData = { spotifyId: string; title: string; artist: string; artwork: string | null };
type PlayState = 'idle' | 'loading' | 'playing' | 'paused' | 'blocked';

interface PlaybackData {
  isPaused?: boolean;
  isBuffering?: boolean;
  /** Milliseconds, per Spotify's embed API. */
  duration?: number;
  /** Milliseconds, per Spotify's embed API. */
  position?: number;
}

interface EmbedController {
  addListener(event: 'ready' | 'playback_update', cb: (e: { data: PlaybackData }) => void): void;
  loadUri(uri: string): void;
  play(): void;
  pause(): void;
}

interface IFrameApi {
  createController(
    element: HTMLElement,
    options: { uri: string; width?: string | number; height?: number },
    callback: (controller: EmbedController) => void,
  ): void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: IFrameApi) => void;
  }
}

const API_SRC = 'https://open.spotify.com/embed/iframe-api/v1';
const READY_TIMEOUT_MS = 10000;

let apiPromise: Promise<IFrameApi> | null = null;
let loadedApi: IFrameApi | null = null;

function loadApi(): Promise<IFrameApi> {
  if (loadedApi) return Promise.resolve(loadedApi);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<IFrameApi>((resolve, reject) => {
    window.onSpotifyIframeApiReady = (api) => {
      loadedApi = api;
      resolve(api);
    };
    const script = document.createElement('script');
    script.src = API_SRC;
    script.async = true;
    script.onerror = () => {
      apiPromise = null;
      reject(new Error('iframe api failed to load'));
    };
    document.head.appendChild(script);
    window.setTimeout(() => reject(new Error('iframe api timeout')), READY_TIMEOUT_MS);
  });
  return apiPromise;
}

export function initMusic(root: HTMLElement) {
  const playBtn = root.querySelector<HTMLButtonElement>('[data-music-play]');
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-music-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-music-next]');
  const embedBox = root.querySelector<HTMLElement>('[data-music-embed]');
  const openLink = root.querySelector<HTMLAnchorElement>('[data-music-open]');
  const titleEl = root.querySelector<HTMLElement>('[data-music-title]');
  const artistEl = root.querySelector<HTMLElement>('[data-music-artist]');
  const counter = root.querySelector<HTMLElement>('[data-music-counter]');
  const cur = root.querySelector<HTMLElement>('[data-music-current]');
  const dur = root.querySelector<HTMLElement>('[data-music-duration]');
  const fill = root.querySelector<HTMLElement>('[data-music-fill]');
  const bar = root.querySelector<HTMLElement>('[data-music-bar]');
  const status = root.querySelector<HTMLElement>('[data-music-status]');
  const placeholder = root.querySelector<SVGElement>('[data-music-placeholder]');
  let coverEl = root.querySelector<HTMLImageElement>('[data-music-cover]');
  if (!playBtn || !embedBox) return;

  let tracks: TrackData[] = [];
  try {
    tracks = JSON.parse(root.dataset.tracks ?? '[]') as TrackData[];
  } catch {
    tracks = [];
  }
  if (tracks.length === 0) return;
  const embedHeight = Number(root.dataset.embedHeight) || 80;

  const trackAt = (i: number): TrackData => {
    const n = tracks.length;
    return tracks[((i % n) + n) % n] as TrackData;
  };
  const m = () => messages[getLang()].music;
  const uriOf = (i: number) => `spotify:track:${trackAt(i).spotifyId}`;
  const fmt = (ms: number) => {
    if (!Number.isFinite(ms) || ms < 0) return '0:00';
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  };

  let index = 0;
  let controller: EmbedController | null = null;
  let creating = false;
  let readySeen = false;
  let isPaused = true;
  let wantPlay = false;
  let readyTimer: number | undefined;

  function setStatus(text: string) {
    if (status) status.textContent = text;
  }

  function setState(state: PlayState) {
    root.dataset.state = state;
    const playing = state === 'playing';
    playBtn!.setAttribute('aria-pressed', String(playing));
    playBtn!.setAttribute('aria-label', playing ? m().pause : m().play);
  }

  function resetProgress() {
    if (cur) cur.textContent = '0:00';
    if (dur) dur.textContent = '0:00';
    if (fill) fill.style.width = '0%';
    if (bar) bar.setAttribute('aria-valuenow', '0');
  }

  function renderOpenLink() {
    if (!openLink) return;
    const track = trackAt(index);
    openLink.href = `https://open.spotify.com/track/${track.spotifyId}`;
    openLink.setAttribute('aria-label', `${m().openSpotify}: ${track.title} — ${track.artist}`);
  }

  function renderTrack() {
    const track = trackAt(index);
    if (titleEl) titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = track.artist;
    if (counter) counter.textContent = `${index + 1} / ${tracks.length}`;
    renderOpenLink();
    if (track.artwork) {
      if (!coverEl) {
        coverEl = document.createElement('img');
        coverEl.setAttribute('data-music-cover', '');
        coverEl.decoding = 'async';
        coverEl.referrerPolicy = 'no-referrer';
        root.querySelector('.music-cover')?.prepend(coverEl);
      }
      coverEl.alt = m().coverAlt;
      coverEl.src = track.artwork;
      coverEl.hidden = false;
    } else if (coverEl) {
      coverEl.hidden = true;
      coverEl.removeAttribute('src');
    }
    if (placeholder) placeholder.style.display = track.artwork ? 'none' : '';
    resetProgress();
  }

  function onPlayback(d: PlaybackData) {
    readySeen = true;
    isPaused = d.isPaused !== false;
    if (!isPaused) {
      wantPlay = false; // already playing: nothing left to start
    } else if (wantPlay && controller) {
      // Track switch: the new track has loaded and is paused, so start it.
      wantPlay = false;
      controller.play();
    }
    setState(isPaused ? 'paused' : 'playing');
    if (typeof d.duration === 'number' && typeof d.position === 'number' && d.duration > 0) {
      const pct = Math.min(100, Math.max(0, (d.position / d.duration) * 100));
      if (fill) fill.style.width = `${pct}%`;
      if (bar) bar.setAttribute('aria-valuenow', String(Math.round(pct)));
      if (cur) cur.textContent = fmt(d.position);
      if (dur) dur.textContent = fmt(d.duration);
    }
    setStatus(isPaused ? '' : m().nowPlaying);
  }

  function fail() {
    window.clearTimeout(readyTimer);
    creating = false;
    controller = null;
    wantPlay = false;
    embedBox!.innerHTML = '';
    embedBox!.hidden = true;
    setState('blocked');
    setStatus(m().blocked);
  }

  async function activate() {
    if (controller || creating) return;
    creating = true;
    readySeen = false;
    embedBox!.hidden = false;
    setState('loading');
    setStatus(m().loading);
    try {
      const api = await loadApi();
      api.createController(embedBox!, { uri: uriOf(index), width: '100%', height: embedHeight }, (c) => {
        controller = c;
        creating = false;
        c.addListener('ready', () => {
          readySeen = true;
          window.clearTimeout(readyTimer);
          if (wantPlay) {
            wantPlay = false;
            c.play();
          }
          setStatus('');
        });
        c.addListener('playback_update', (e) => onPlayback(e.data));
      });
      readyTimer = window.setTimeout(() => {
        if (!readySeen) fail();
      }, READY_TIMEOUT_MS);
    } catch {
      fail();
    }
  }

  playBtn.addEventListener('click', () => {
    if (!controller) {
      wantPlay = true;
      void activate();
      return;
    }
    if (isPaused) controller.play();
    else controller.pause();
  });

  function go(delta: number) {
    const wasPlaying = Boolean(controller) && !isPaused;
    index = (index + delta + tracks.length) % tracks.length;
    renderTrack();
    if (!controller) return; // nothing loaded yet: the new track is used when play is pressed
    isPaused = true;
    controller.loadUri(uriOf(index));
    wantPlay = wasPlaying;
  }

  prevBtn?.addEventListener('click', () => go(-1));
  nextBtn?.addEventListener('click', () => go(1));

  // Keep translated labels in step with the language switch. Progress is left as it is.
  window.addEventListener(LANGUAGE_EVENT, () => {
    setState((root.dataset.state as PlayState) || 'idle');
    renderOpenLink();
  });

  setState('idle');
  renderTrack();
}
