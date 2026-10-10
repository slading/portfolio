/**
 * Progressive enhancements. Everything here is optional: the page is fully
 * readable and usable without it. Motion-heavy effects are skipped when the
 * user prefers reduced motion, and pointer effects only run on fine pointers.
 */
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => matchMedia('(pointer: fine)').matches;

function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('.reveal, .reveal-fade');
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
    { threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));
}

function initCursor() {
  const cursor = document.querySelector<HTMLElement>('.cursor');
  if (!cursor) return;
  document.documentElement.classList.add('cursor-enabled');

  addEventListener(
    'mousemove',
    (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      // Floating project previews follow the pointer while their row is hovered.
      document.querySelectorAll<HTMLElement>('.work-row').forEach((row) => {
        if (!row.matches(':hover')) return;
        const preview = row.querySelector<HTMLElement>('.work-preview');
        if (preview) {
          preview.style.left = `${e.clientX}px`;
          preview.style.top = `${e.clientY}px`;
        }
      });
    },
    { passive: true },
  );

  document.querySelectorAll<HTMLElement>('a, button, .work-row').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('big');
      cursor.dataset.label = el.dataset.cursorLabel ?? '';
    });
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });
}

function initHeroParallax() {
  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) return;
  const targets = hero.querySelectorAll<HTMLElement>('[data-depth]');
  hero.addEventListener(
    'mousemove',
    (e) => {
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      targets.forEach((el) => {
        const depth = Number(el.dataset.depth ?? 0);
        el.style.transform = `translate3d(${x * depth * 65}px, ${y * depth * 45}px, 0)`;
      });
    },
    { passive: true },
  );
}

function initMascotTilt() {
  const cell = document.querySelector<HTMLElement>('[data-tilt]');
  if (!cell) return;
  cell.addEventListener('mousemove', (e) => {
    const r = cell.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
    const y = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
    cell.style.transform = `translate(${x * 3}px, ${y * 2}px)`;
  });
  cell.addEventListener('mouseleave', () => {
    cell.style.transform = '';
  });
}

/** N2D stage: the two frames drift vertically as the section scrolls past. */
function initN2DStage() {
  const stage = document.querySelector<HTMLElement>('[data-parallax-stage]');
  if (!stage) return;
  const frames = stage.querySelectorAll<HTMLElement>('[data-parallax]');
  const update = () => {
    const r = stage.getBoundingClientRect();
    const p = (innerHeight / 2 - r.top) / Math.max(innerHeight, r.height);
    frames.forEach((frame) => {
      frame.style.transform = `translateY(${p * Number(frame.dataset.parallax ?? 0)}px)`;
    });
  };
  addEventListener('scroll', update, { passive: true });
  update();
}

export function initInteractions() {
  initReveal();
  if (reduceMotion()) return;
  initN2DStage();
  if (finePointer()) {
    initCursor();
    initHeroParallax();
    initMascotTilt();
  }
}
