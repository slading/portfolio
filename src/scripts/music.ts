/**
 * "My Rotation" showcase: previous/next through the six tracks.
 *
 * This only changes which slide is visible and updates the counter. It does not load Spotify,
 * play audio, or start anything automatically. Every track link opens Spotify in a new tab.
 */
export function initMusic(root: HTMLElement) {
  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-music-slide]'));
  const counter = root.querySelector<HTMLElement>('[data-music-counter]');
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-music-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-music-next]');
  if (slides.length === 0 || !prevBtn || !nextBtn) return;

  const pad = (n: number) => String(n).padStart(2, '0');
  const total = slides.length;
  let index = Math.max(
    0,
    slides.findIndex((s) => !s.hidden),
  );

  function show(i: number) {
    index = (i + total) % total;
    slides.forEach((slide, k) => {
      slide.hidden = k !== index;
    });
    if (counter) counter.textContent = `${pad(index + 1)} / ${pad(total)}`;
  }

  prevBtn.addEventListener('click', () => show(index - 1));
  nextBtn.addEventListener('click', () => show(index + 1));

  // Only now that the buttons work do they appear.
  root.classList.add('is-ready');
  show(index);
}
