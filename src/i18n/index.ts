import { en, type Messages } from './en';
import { pl } from './pl';

export const LANGUAGES = ['en', 'pl'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'en';

export const messages: Record<Lang, Messages> = { en, pl };

/** localStorage keys. Legacy keys from the original single-file site are read as a fallback. */
export const STORAGE = {
  lang: 'portfolio-language',
  theme: 'portfolio-theme',
  legacyLang: 'zenia-language',
  legacyTheme: 'zenia-theme',
} as const;

export function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'pl';
}

/**
 * Resolve a dot-path such as "hero.footer.0" or "process.steps.1.title"
 * against a message dictionary. Throws in dev if the key is missing, so typos
 * in templates fail the build instead of rendering blank text.
 */
export function lookup(dict: Messages, path: string): string {
  let node: unknown = dict;
  for (const part of path.split('.')) {
    if (node && typeof node === 'object' && part in node) {
      node = (node as Record<string, unknown>)[part];
    } else {
      throw new Error(`[i18n] Missing message key: "${path}"`);
    }
  }
  if (typeof node !== 'string') {
    throw new Error(`[i18n] Key "${path}" is not a string`);
  }
  return node;
}

/** Build-time translator used by Astro components. */
export function t(path: string, lang: Lang = DEFAULT_LANG): string {
  return lookup(messages[lang], path);
}

/** Client-side lookup: never throws. Falls back to the English string, then to the key. */
export function tryLookup(lang: Lang, path: string): string {
  try {
    return lookup(messages[lang], path);
  } catch {
    try {
      return lookup(messages.en, path);
    } catch {
      return path;
    }
  }
}

/** Marquee strip: the item list is repeated so the CSS loop is seamless. Shared by SSR and client. */
export function marqueeLine(items: readonly string[]): string {
  return [...items, ...items].join('\u3000 /\u3000 ') + '\u3000 /\u3000 ';
}
