/**
 * Favourite movies. Add titles here when the owner supplies them.
 *
 * - `title` and `year` are required.
 * - `poster` is optional: a path under public/ (e.g. "favourites/some-film.jpg").
 *   Only add poster images the owner has the right to publish. Without a poster,
 *   the card shows a text tile with the title.
 * - The list ships EMPTY on purpose. Do not add titles that the owner has not confirmed.
 */
export interface Movie {
  title: string;
  year: number;
  poster?: string;
}

export const movies: Movie[] = [];
