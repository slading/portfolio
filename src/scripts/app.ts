import { initInteractions } from './interactions';
import { initLanguage } from './language';
import { initMusic } from './music';
import { initTheme } from './theme';

function boot() {
  initLanguage(); // sets <html lang> and all translatable text first, so theme labels can read it
  initTheme();
  initInteractions();
  document.querySelectorAll<HTMLElement>('[data-music]').forEach(initMusic);
}

boot();
