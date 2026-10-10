import { DEFAULT_LANG, isLang, messages, type Lang, STORAGE, tryLookup } from '../i18n';

export const LANGUAGE_EVENT = 'portfolio:languagechange';

/** Current language, read from <html lang>. */
export function getLang(): Lang {
  const v = document.documentElement.lang;
  return isLang(v) ? v : DEFAULT_LANG;
}

function readStored(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE.lang);
    return isLang(v) ? v : null;
  } catch {
    return null;
  }
}

function fill(text: string, el: HTMLElement): string {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => el.dataset[key] ?? '');
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)?.setAttribute('content', value);
}

/** Replace every translatable node. Keys are dot-paths into the message dictionary. */
function applyText(lang: Lang) {
  const dict = messages[lang];
  const root = document.documentElement;

  root.lang = lang;
  document.title = dict.meta.title;
  setMeta('name', 'description', dict.meta.description);
  setMeta('property', 'og:title', dict.meta.title);
  setMeta('property', 'og:description', dict.meta.description);

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    // Placeholders such as {total} are filled from data-* attributes on the element.
    el.textContent = fill(tryLookup(lang, el.dataset.i18n ?? ''), el);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', tryLookup(lang, el.dataset.i18nAria ?? ''));
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-alt]').forEach((el) => {
    el.setAttribute('alt', tryLookup(lang, el.dataset.i18nAlt ?? ''));
  });
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = tryLookup(lang, el.dataset.i18nPlaceholder ?? '');
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((el) => {
    el.setAttribute('title', tryLookup(lang, el.dataset.i18nTitle ?? ''));
  });
  document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((btn) => {
    const active = btn.dataset.setLang === lang;
    btn.setAttribute('aria-pressed', String(active));
    btn.classList.toggle('is-active', active);
  });
}

export function setLanguage(lang: Lang) {
  applyText(lang);
  try {
    localStorage.setItem(STORAGE.lang, lang);
  } catch {
    /* storage unavailable: the choice applies to this page only */
  }
  document.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: lang }));
}

export function initLanguage() {
  // English is the default. A saved choice overrides it.
  setLanguage(readStored() ?? DEFAULT_LANG);

  document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.setLang;
      if (isLang(v)) setLanguage(v);
    });
  });
}
