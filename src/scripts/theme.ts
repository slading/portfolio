import { messages, STORAGE } from '../i18n';
import { getLang, LANGUAGE_EVENT } from './language';

type Theme = 'light' | 'dark';

const BG: Record<Theme, string> = { light: '#f2efe8', dark: '#171817' };

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

/** Button label shows the mode you will switch TO (as in the original site). */
function renderLabels() {
  const dict = messages[getLang()].nav;
  const label = getTheme() === 'dark' ? dict.themeLight : dict.themeDark;
  document.querySelectorAll<HTMLElement>('[data-theme-label]').forEach((el) => {
    el.textContent = label;
  });
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', BG[getTheme()]);
}

export function setTheme(next: Theme, origin?: HTMLElement) {
  const root = document.documentElement;
  const wipe = document.querySelector<HTMLElement>('.theme-wipe');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (wipe && origin && !reduceMotion) {
    // Circular wipe from the toggle, in the colour of the incoming theme (as in the original).
    const r = origin.getBoundingClientRect();
    wipe.style.setProperty('--x', `${r.left + r.width / 2}px`);
    wipe.style.setProperty('--y', `${r.top + r.height / 2}px`);
    wipe.style.background = BG[next];
    wipe.classList.remove('go');
    void wipe.offsetWidth; // restart the animation
    root.dataset.theme = next;
    wipe.classList.add('go');
    window.setTimeout(() => wipe.classList.remove('go'), 720);
  } else {
    root.dataset.theme = next;
  }

  try {
    localStorage.setItem(STORAGE.theme, next);
  } catch {
    /* ignore */
  }
  renderLabels();
}

export function initTheme() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  toggle?.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark', toggle);
  });
  document.addEventListener(LANGUAGE_EVENT, renderLabels);
  renderLabels();
}
