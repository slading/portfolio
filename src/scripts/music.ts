import { messages } from '../i18n';
import { musicSettings, type Track } from '../data/music';
import { getLang, LANGUAGE_EVENT } from './language';

type State = 'empty' | 'idle' | 'loading' | 'playing' | 'error';

/**
 * Music player controller.
 *
 * States: empty (no tracks configured, control disabled) → idle ⇄ loading → playing,
 * with error for files that fail to load or play. Audio is created on the first press,
 * so nothing is downloaded until the visitor asks for it. Browsers only start audio
 * from a user gesture, so there is no autoplay.
 *
 * Tracks come from data-tracks (set at build time from src/data/music.ts).
 */
export function initMusic(root: HTMLElement) {
  const button = root.querySelector<HTMLButtonElement>('[data-music-toggle]');
  const label = root.querySelector<HTMLElement>('[data-music-label]');
  if (!button || !label) return;
  const btn: HTMLButtonElement = button;
  const lbl: HTMLElement = label;

  let tracks: Track[] = [];
  try {
    tracks = JSON.parse(root.dataset.tracks ?? '[]') as Track[];
  } catch {
    tracks = [];
  }

  let state: State = tracks.length > 0 ? 'idle' : 'empty';
  let index = 0;
  let audio: HTMLAudioElement | null = null;

  function render() {
    const m = messages[getLang()].music;
    root.dataset.state = state;
    lbl.textContent = {
      empty: m.add,
      idle: m.off,
      loading: m.loading,
      playing: m.on,
      error: m.unavailable,
    }[state];
    btn.disabled = state === 'empty';
    btn.setAttribute(
      'aria-label',
      state === 'empty' ? m.add : state === 'playing' || state === 'loading' ? m.ariaOff : m.aria,
    );
    btn.setAttribute('aria-pressed', String(state === 'playing' || state === 'loading'));
    btn.title = tracks[index]?.title ?? '';
  }

  function ensureAudio(): HTMLAudioElement {
    if (audio) return audio;
    const a = new Audio();
    a.preload = 'none';
    a.volume = musicSettings.volume;
    a.addEventListener('ended', () => {
      if (tracks.length > 1) {
        index = (index + 1) % tracks.length;
        void play();
      } else {
        state = 'idle';
        render();
      }
    });
    a.addEventListener('error', () => {
      state = 'error';
      render();
    });
    audio = a;
    return a;
  }

  function load() {
    const a = ensureAudio();
    const track = tracks[index];
    if (!track) return;
    a.src = track.src;
    a.loop = tracks.length === 1 && musicSettings.loopTrack;
  }

  async function play() {
    load();
    state = 'loading';
    render();
    try {
      await ensureAudio().play();
      state = 'playing';
    } catch (err) {
      // An AbortError means a pause or track change interrupted playback; that is not a failure.
      state = err instanceof DOMException && err.name === 'AbortError' ? 'idle' : 'error';
    }
    render();
  }

  function pause() {
    audio?.pause();
    state = 'idle';
    render();
  }

  btn.addEventListener('click', () => {
    if (state === 'empty') return;
    if (state === 'playing' || state === 'loading') pause();
    else void play();
  });

  document.addEventListener(LANGUAGE_EVENT, render);
  render();
}
