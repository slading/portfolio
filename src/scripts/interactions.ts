/**
 * Progressive enhancements: all optional, the page reads and works without them.
 * Motion is skipped for users who prefer reduced motion.
 */
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('.reveal');
  if (reduceMotion() || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('show'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  items.forEach((el) => io.observe(el));
}

/** Close the "More" menu on outside click or Escape. */
function initMoreMenu() {
  const menus = document.querySelectorAll<HTMLDetailsElement>('details[data-menu]');
  document.addEventListener('click', (e) => {
    menus.forEach((m) => {
      if (m.open && !m.contains(e.target as Node)) m.open = false;
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menus.forEach((m) => (m.open = false));
  });
}

/** Warsaw local time, refreshed every 30 s. The server renders a placeholder. */
function initWarsawClock() {
  const els = document.querySelectorAll<HTMLElement>('[data-warsaw-time]');
  if (els.length === 0) return;
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const tick = () => {
    const text = fmt.format(new Date());
    els.forEach((el) => (el.textContent = text));
  };
  tick();
  window.setInterval(tick, 30_000);
}

export function initInteractions() {
  initReveal();
  initMoreMenu();
  initWarsawClock();
}
