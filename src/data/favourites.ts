/**
 * Favourite films and series, in the owner's order. Titles and years are as supplied by the owner.
 *
 * - `title` and `year` are required. `kind` defaults to a film; set 'series' for TV series.
 * - `poster` is a path under public/ (e.g. "favourites/the-covenant-2023.jpg"). The page only
 *   shows a poster when that file exists at build time. Otherwise a neutral placeholder is shown,
 *   so nothing is ever a broken image. Only add posters the owner has the right to publish; do not
 *   use AI-generated substitutes or posters from unofficial sources.
 * - No ratings, reviews or descriptions belong in this file.
 */
export interface Movie {
  title: string;
  year: number;
  kind?: 'film' | 'series';
  poster?: string;
}

export const movies: Movie[] = [
  { title: "Guy Ritchie's The Covenant", year: 2023, poster: 'favourites/the-covenant-2023.jpg' },
  { title: 'Prisoners', year: 2013, poster: 'favourites/prisoners-2013.jpg' },
  { title: 'Donnie Darko', year: 2001, poster: 'favourites/donnie-darko-2001.jpg' },
  { title: 'End of Watch', year: 2012, poster: 'favourites/end-of-watch-2012.jpg' },
  { title: 'Nightcrawler', year: 2014, poster: 'favourites/nightcrawler-2014.jpg' },
  { title: 'Alice in Borderland', year: 2020, kind: 'series', poster: 'favourites/alice-in-borderland-2020.jpg' },
  { title: 'We Need to Talk About Kevin', year: 2011, poster: 'favourites/we-need-to-talk-about-kevin-2011.jpg' },
  { title: 'Whiplash', year: 2014, poster: 'favourites/whiplash-2014.jpg' },
  { title: 'The Social Network', year: 2010, poster: 'favourites/the-social-network-2010.jpg' },
];
