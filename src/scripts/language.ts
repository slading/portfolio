import { DEFAULT_LANG, isLang, marqueeLine, messages, type Lang, STORAGE, tryLookup } from '../i18n';

export const LANGUAGE_EVENT = 'portfolio:languagechange';

/** Current language, read from <html lang>. */
export function getLang(): Lang {
  const v = document.documentElement.lang;
  return isLang(v) ? v : DEFAULT_LANG;
}

function readStored(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE.lang) ?? localStorage.getItem(STORAGE.legacyLang);
    return isLang(v) ? v : null;
  } catch {
    return null;
  }
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
    el.textContent = tryLookup(lang, el.dataset.i18n ?? '');
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    el.innerHTML = tryLookup(lang, el.dataset.i18nHtml ?? '');
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', tryLookup(lang, el.dataset.i18nAria ?? ''));
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-alt]').forEach((el) => {
    el.setAttribute('alt', tryLookup(lang, el.dataset.i18nAlt ?? ''));
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((el) => {
    el.setAttribute('title', tryLookup(lang, el.dataset.i18nTitle ?? ''));
  });

  // The marquee strip is built from a list of strings (the hero footer items).
  document.querySelectorAll<HTMLElement>('[data-i18n-marquee]').forEach((el) => {
    const items = listAt(lang, el.dataset.i18nMarquee ?? '');
    el.textContent = marqueeLine(items);
  });

  document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang));
  });
}

function listAt(lang: Lang, path: string): string[] {
  let node: unknown = messages[lang];
  for (const part of path.split('.')) {
    node = node && typeof node === 'object' ? (node as Record<string, unknown>)[part] : undefined;
  }
  return Array.isArray(node) ? node.filter((v): v is string => typeof v === 'string') : [];
}

export function setLanguage(lang: Lang) {
  applyText(lang);
  try {
    localStorage.setItem(STORAGE.lang, lang);
  } catch {
    /* storage unavailable (private mode): keep the choice for this page only */
  }
  document.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: lang }));
}

export function initLanguage() {
  // English is the default. A saved choice (or the legacy key from the old site) overrides it.
  setLanguage(readStored() ?? DEFAULT_LANG);

  document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.setLang;
      if (isLang(v)) setLanguage(v);
    });
  });
}
