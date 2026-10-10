import { messages } from '../i18n';
import { getLang, LANGUAGE_EVENT } from './language';

/**
 * "My Rotation" player for the owner's own audio file.
 *
 * - Plays only the file in public/music/track.mp3, through the native HTML5 <audio> element.
 * - Nothing loads until the visitor presses play (preload="none"). Nothing autoplays.
 * - The equalizer, time and seek position come only from the element's own events.
 *   The player never shows a playing state that the audio element does not report.
 * - A missing or unplayable file shows a message. The Spotify link stays available.
 */
type PlayState = 'idle' | 'playing' | 'paused' | 'error';

const fmt = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return '--:--';
  const total = Math.floor(seconds);
  const m = Math.floor(total / 60);
  const s = (total % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

export function initMusic(root: HTMLElement) {
  const audio = root.querySelector<HTMLAudioElement>('[data-music-audio]');
  const playBtn = root.querySelector<HTMLButtonElement>('[data-music-play]');
  const seek = root.querySelector<HTMLInputElement>('[data-music-seek]');
  const time = root.querySelector<HTMLElement>('[data-music-time]');
  const status = root.querySelector<HTMLElement>('[data-music-status]');
  // No audio file at build time: the card is a showcase with a Spotify link only.
  if (!audio || !playBtn || !seek || !time || !status) return;

  const m = () => messages[getLang()].music;
  let state: PlayState = 'idle';

  function setState(next: PlayState) {
    state = next;
    root.dataset.state = next;
    playBtn!.setAttribute('aria-label', next === 'playing' ? m().pause : m().play);
  }

  function render() {
    const current = audio!.currentTime || 0;
    time!.textContent = `${fmt(current)} / ${fmt(audio!.duration)}`;
    if (document.activeElement !== seek) seek!.value = String(current);
  }

  function showError() {
    setState('error');
    status!.textContent = m().error;
    status!.hidden = false;
  }

  playBtn.addEventListener('click', async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        showError();
      }
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    seek.max = String(audio.duration);
    seek.disabled = false;
    render();
  });
  audio.addEventListener('timeupdate', render);
  audio.addEventListener('play', () => {
    setState('playing');
    status.hidden = true;
  });
  audio.addEventListener('pause', () => {
    if (state !== 'error') setState('paused');
  });
  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    setState('idle');
    render();
  });
  audio.addEventListener('error', showError);

  seek.addEventListener('input', () => {
    audio.currentTime = Number(seek.value);
    render();
  });

  // Keep the button label in the current language.
  window.addEventListener(LANGUAGE_EVENT, () => {
    playBtn.setAttribute('aria-label', state === 'playing' ? m().pause : m().play);
  });

  root.classList.add('is-ready');
  setState('idle');
  render();
}
