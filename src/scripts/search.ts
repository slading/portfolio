/**
 * Search dialog: a real <dialog> with keyboard support.
 * Opens with the button, Ctrl+K or ⌘K. Filters the list of links rendered in the page.
 */
export function initSearch() {
  const dialog = document.querySelector<HTMLDialogElement>('#search-dialog');
  const input = document.querySelector<HTMLInputElement>('#search-input');
  const list = document.querySelector<HTMLUListElement>('#search-list');
  const empty = document.querySelector<HTMLElement>('#search-empty');
  if (!dialog || !input || !list) return;

  const items = () => Array.from(list.querySelectorAll<HTMLLIElement>('[data-search-item]'));
  let active = -1;

  const visible = () => items().filter((li) => !li.hidden);

  function setActive(i: number) {
    const v = visible();
    v.forEach((li) => li.classList.remove('is-active'));
    if (v.length === 0) {
      active = -1;
      input!.removeAttribute('aria-activedescendant');
      return;
    }
    active = (i + v.length) % v.length;
    const el = v[active];
    if (!el) return;
    el.classList.add('is-active');
    input!.setAttribute('aria-activedescendant', el.id);
    el.scrollIntoView({ block: 'nearest' });
  }

  function filter() {
    const q = input!.value.trim().toLowerCase();
    let count = 0;
    items().forEach((li) => {
      const hit = !q || (li.dataset.searchText ?? li.textContent ?? '').toLowerCase().includes(q);
      li.hidden = !hit;
      if (hit) count++;
    });
    if (empty) empty.hidden = count > 0;
    setActive(0);
  }

  function open() {
    if (dialog!.open) return;
    input!.value = '';
    filter();
    dialog!.showModal();
    input!.focus();
  }

  function close() {
    if (dialog!.open) dialog!.close();
  }

  document.querySelectorAll<HTMLElement>('[data-search-open]').forEach((el) => {
    el.addEventListener('click', open);
  });
  document.querySelectorAll<HTMLElement>('[data-search-close]').forEach((el) => {
    el.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (dialog.open) close();
      else open();
    }
  });

  input.addEventListener('input', filter);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(active + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(active - 1);
    } else if (e.key === 'Escape') {
      // Escape on a search input clears its text by default; close the dialog instead.
      e.preventDefault();
      close();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      visible()[active]?.querySelector<HTMLAnchorElement>('a')?.click();
    }
  });

  // Clicking a result navigates; close the dialog first so the hash target is visible.
  list.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) close();
  });

  dialog.addEventListener('click', (e) => {
    // Click on the backdrop (the dialog element itself) closes it.
    if (e.target === dialog) close();
  });
}
