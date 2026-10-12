import { initInteractions } from './interactions';
import { initLanguage } from './language';
import { initMusic } from './music';
import { initSearch } from './search';
import { initTheme } from './theme';

function boot() {
  initLanguage(); // sets <html lang> and all translatable text first, so labels can read it
  initTheme();
  initSearch();
  initInteractions();
  document.querySelectorAll<HTMLElement>('[data-music]').forEach(initMusic);
}

boot();
