import { messages, STORAGE } from '../i18n';
import { getLang, LANGUAGE_EVENT } from './language';

type Theme = 'light' | 'dark';

const BG: Record<Theme, string> = { light: '#fbfbfa', dark: '#0e0f0f' };

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

/** The toggle's accessible name describes the mode you will switch TO. */
function renderToggle() {
  const ui = messages[getLang()].ui;
  const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (toggle) {
    toggle.setAttribute('aria-label', getTheme() === 'dark' ? ui.themeToLight : ui.themeToDark);
    toggle.title = getTheme() === 'dark' ? ui.themeToLight : ui.themeToDark;
  }
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', BG[getTheme()]);
}

export function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(STORAGE.theme, next);
  } catch {
    /* ignore */
  }
  renderToggle();
}

export function initTheme() {
  document
    .querySelector<HTMLButtonElement>('[data-theme-toggle]')
    ?.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  document.addEventListener(LANGUAGE_EVENT, renderToggle);
  renderToggle();
}
