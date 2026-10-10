import { messages } from '../i18n';
import { musicSettings, type Track } from '../data/music';
import { getLang, LANGUAGE_EVENT } from './language';

/**
 * Music player controller for a real <audio> element.
 *
 * - Nothing loads or plays until the visitor presses play (no autoplay, no preload).
 * - Tracks come from data-tracks (JSON built from src/data/music.ts at build time).
 * - With no tracks the player shows its empty state and every control is disabled.
 */
export function initMusic(root: HTMLElement) {
  const audio = root.querySelector<HTMLAudioElement>('[data-music-audio]');
  const playBtn = root.querySelector<HTMLButtonElement>('[data-music-play]');
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-music-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-music-next]');
  const seek = root.querySelector<HTMLInputElement>('[data-music-seek]');
  const cur = root.querySelector<HTMLElement>('[data-music-current]');
  const dur = root.querySelector<HTMLElement>('[data-music-duration]');
  const titleEl = root.querySelector<HTMLElement>('[data-music-title]');
  const artistEl = root.querySelector<HTMLElement>('[data-music-artist]');
  let coverEl = root.querySelector<HTMLImageElement>('[data-music-cover]');
  const placeholder = root.querySelector<SVGElement>('[data-music-placeholder]');
  const counter = root.querySelector<HTMLElement>('[data-music-counter]');
  const status = root.querySelector<HTMLElement>('[data-music-status]');
  if (!audio || !playBtn || !seek) return;

  let tracks: Track[] = [];
  try {
    tracks = JSON.parse(root.dataset.tracks ?? '[]') as Track[];
  } catch {
    tracks = [];
  }

  let index = 0;
  let loaded = false;
  let errored = false;

  const fmt = (s: number) => {
    if (!Number.isFinite(s) || s < 0) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  function setStatus(text: string) {
    if (status) status.textContent = text;
  }

  function renderTrack() {
    const track = tracks[index];
    if (!track) return;
    if (titleEl) titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = track.artist;
    if (track.cover) {
      if (!coverEl) {
        // Artwork img is created only when a track has cover art (see MusicPlayer.astro).
        coverEl = document.createElement('img');
        coverEl.setAttribute('data-music-cover', '');
        root.querySelector('.music-cover')?.prepend(coverEl);
      }
      coverEl.alt = messages[getLang()].music.coverAlt;
      coverEl.src = track.cover;
      coverEl.hidden = false;
    } else if (coverEl) {
      coverEl.hidden = true;
      coverEl.removeAttribute('src');
    }
    if (placeholder) placeholder.style.display = track.cover ? 'none' : '';
    if (counter) counter.textContent = `${index + 1} / ${tracks.length}`;
  }

  function renderPlayState() {
    const m = messages[getLang()].music;
    const playing = !audio!.paused;
    playBtn!.setAttribute('aria-label', playing ? m.pause : m.play);
    playBtn!.dataset.state = playing ? 'playing' : 'idle';
    root.dataset.state = playing ? 'playing' : 'idle';
  }

  function loadCurrent() {
    const track = tracks[index];
    if (!track) return;
    if (audio!.getAttribute('src') !== track.src) {
      audio!.src = track.src;
      audio!.load();
    }
    loaded = true;
    errored = false;
    seek!.value = '0';
    if (cur) cur.textContent = '0:00';
    renderTrack();
  }

  async function play() {
    if (tracks.length === 0) return;
    loadCurrent();
    try {
      setStatus(messages[getLang()].music.loading);
      await audio!.play();
      setStatus(messages[getLang()].music.nowPlaying);
    } catch {
      errored = true;
      setStatus(messages[getLang()].music.error);
    }
    renderPlayState();
  }

  function pause() {
    audio!.pause();
    renderPlayState();
  }

  function go(delta: number) {
    if (tracks.length === 0) return;
    const wasPlaying = !audio!.paused;
    index = (index + delta + tracks.length) % tracks.length;
    audio!.pause();
    loaded = false;
    loadCurrent();
    if (wasPlaying) void play();
    else renderPlayState();
  }

  // Wire controls
  playBtn.addEventListener('click', () => {
    if (!loaded || errored) void play();
    else if (audio.paused) void play();
    else pause();
  });
  prevBtn?.addEventListener('click', () => go(-1));
  nextBtn?.addEventListener('click', () => go(1));

  seek.addEventListener('input', () => {
    if (!loaded || !Number.isFinite(audio.duration)) return;
    audio.currentTime = (Number(seek.value) / 100) * audio.duration;
  });

  audio.addEventListener('timeupdate', () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      seek.value = String((audio.currentTime / audio.duration) * 100);
    }
    if (cur) cur.textContent = fmt(audio.currentTime);
  });
  audio.addEventListener('loadedmetadata', () => {
    if (dur) dur.textContent = fmt(audio.duration);
  });
  audio.addEventListener('ended', () => {
    if (tracks.length > 1) go(1);
    else if (musicSettings.loopTrack) void play();
    else renderPlayState();
  });
  audio.addEventListener('error', () => {
    errored = true;
    setStatus(messages[getLang()].music.error);
    renderPlayState();
  });
  audio.addEventListener('pause', renderPlayState);
  audio.addEventListener('play', renderPlayState);

  document.addEventListener(LANGUAGE_EVENT, () => {
    if (!audio.paused) setStatus(messages[getLang()].music.nowPlaying);
    renderPlayState();
  });

  // Initial state
  audio.volume = musicSettings.volume;
  if (tracks.length === 0) {
    root.dataset.state = 'empty';
    playBtn.disabled = true;
    prevBtn && (prevBtn.disabled = true);
    nextBtn && (nextBtn.disabled = true);
    seek.disabled = true;
    return;
  }
  renderTrack();
  if (counter && tracks.length < 2) counter.hidden = true;
  if (prevBtn && nextBtn && tracks.length < 2) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }
  renderPlayState();
}
