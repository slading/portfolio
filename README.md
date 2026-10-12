# Yauheni Buka — Portfolio

Personal portfolio: AI-native software and product engineering. Light and dark themes on a grid background, English (default) and Polish copy.

**Canonical site:** https://exotision.fun (canonical and Open Graph URLs). The existing production deployment is still at https://yauheni-buka.vercel.app/; this branch does not change DNS or deploy.

## Stack

- [Astro](https://astro.build) 7 (static output) + TypeScript (strict)
- Plain CSS with design tokens. Narrow centred column (820px max) with thin borders.
- Self-hosted Inter Variable via `@fontsource-variable/inter`. No third-party font requests.
- Brand icons from `simple-icons` (named imports only, so unused icons are not bundled).
- Small client scripts for language, theme, search, the music player and optional interactions. The page reads fine without JS.

## Commands

```bash
npm install
npm run dev          # dev server on 0.0.0.0:4321
npm run check        # astro check (types)
npm run build        # static build to dist/
npm run preview      # serve dist/ on 0.0.0.0:4321
npm run fetch:github # refresh src/data/github-contributions.json (needs an authenticated gh CLI)
npm run verify       # check + build + dist checks
```

## Structure

```
src/
  i18n/          en.ts (default), pl.ts (typed to match en), index.ts (lookup, storage keys)
  data/          projects.ts (featured/additional projects, links, email), stack.ts (tech tiles),
                 music.ts (the single Now Playing track, with verified metadata), github-contributions.json (generated snapshot)
  layouts/       Base.astro (head, theme-before-paint script, column, search dialog)
  components/    Nav, Hero, MusicPlayer, TechStack, Approach, Projects, GitHubActivity,
                 Footer, SearchDialog
  pages/         index.astro (homepage composition)
  scripts/       app.ts (entry), language.ts, theme.ts, search.ts, music.ts, interactions.ts
  styles/        global.css (tokens, grid, components, responsive, reduced motion)
public/
  assets/        N2D demo (static HTML/CSS/JS), SentinelAI screenshot
  favicon.svg
assets-unpublished/   images kept in the repo but not deployed (see its README)
scripts/
  fetch-github.mjs   pulls the 12-month contribution calendar for GITHUB_LOGIN (default slading)
  verify-dist.mjs    post-build checks
```

## Content

- **Copy** lives only in `src/i18n/en.ts` and `src/i18n/pl.ts`. Add a key to both files; TypeScript fails the build if they drift.
- **Projects** are in `src/data/projects.ts`. Each card shows its status (Production / Prototype / Technical proof), stack badges, links, and an in-page case study (the expandable "Case study" panel).
- **Owner review needed:** the hero introduction and the three approach items were written for this redesign. The RFQ project summary (Project 04) describes only the prototype scope in the repository, with AI-assisted extraction marked as planned; its Polish version is a draft to confirm. Text that came from the verified previous site is unchanged.
- Do not add achievements, metrics, employers, or dates that the owner has not verified.

## GitHub activity

`src/data/github-contributions.json` is a committed snapshot of the real `slading` contribution calendar. The build does not call GitHub. To refresh it locally:

```bash
GITHUB_LOGIN=slading npm run fetch:github
```

If the fetch fails, the script exits with an error and leaves the existing file untouched.

## Language and theme

- Default language is **English**. Visitors can switch to Polish with the EN/PL control in the footer. The choice is stored in `localStorage` (`portfolio-language`).
- Theme follows the system preference until the visitor toggles it. The choice is stored as `portfolio-theme`.

## Now Playing (Hero music player)

The Hero shows one track, **Lolibox by Sewerslvt**, in a full-width card the width of the content column. The card is labelled NOW PLAYING. Title and artist are exact, and the Spotify track ID is in `src/data/music.ts`. The title links to the track on Spotify.

**Audio:** `public/music/track.mp3` is the owner's file, committed to the repository.

- Format: MPEG-1 Layer III, 320 kbps CBR, 44.1 kHz, stereo, 20.4 MB, no ID3 tags.
- Duration: **510.093 s (8:30)**, confirmed from the header and by decoding the whole file.
- The browser loads it only when the visitor presses play (`preload="none"`). Until then the total shows `--:--`. Nothing autoplays.

The player has a large play/pause button, a long seek bar, and a time readout showing the real elapsed and total duration. An equalizer shows only while the audio element reports playback. There are no previous or next controls.

The card has two states, decided at build time:

- **Audio file present** (`public/music/track.mp3`): the player described above.
- **Audio file missing:** the same layout appears with the play button and seek bar disabled and the note "Audio file not published yet." The player is never silently replaced by a link. The title still links to Spotify.

The site never uses Spotify's embed, its iFrame API, or a 30-second preview.

**Artwork:** if `public/music/cover.jpg` exists it is used. Otherwise Spotify's own cover image for the track is shown. If that image cannot load, a neutral icon is shown instead.

**Replacing the audio:**
1. Replace `public/music/track.mp3` (MP3: the owner's own recording, or one licensed for this use).
2. Optionally place a square cover at `public/music/cover.jpg`.
3. Rebuild. `scripts/verify-dist.mjs` checks that the file is an MP3, that it is copied to `dist/`, and that the player is enabled.

## Subpages

More menu → **Resume** (`/resume/`) and **Favourite Movies** (`/favourites/`). Both are also in command search (Ctrl+K / ⌘K).

- **Resume:** the page shows the owner's CV only when `public/cv/Yauheni_Buka_CV.pdf` (the path is set in `src/data/cv.ts`) exists at build time. Without it, the page shows a "CV not published yet" state. Never put another person's CV at this path.
- **Favourite Movies:** the list lives in `src/data/favourites.ts` (`movies`, in the owner's order). A card shows its poster only when that file exists under `public/` at build time; otherwise it shows a neutral placeholder. Posters must be authorised official artwork (no AI substitutes, no unofficial downloads). Poster files in `public/favourites/` (all nine present: JPEG, sRGB, at most 600 px wide, metadata stripped, each under 300 KB; `fit: 'contain'` letterboxes Donnie Darko, whose proportions differ from the 2:3 frame). The Covenant source is only 255×378 px, so replace it with a larger official image if one becomes available:
  - `the-covenant-2023.jpg`, `prisoners-2013.jpg`, `donnie-darko-2001.jpg`, `end-of-watch-2012.jpg`, `nightcrawler-2014.jpg`, `alice-in-borderland-2020.jpg`, `we-need-to-talk-about-kevin-2011.jpg`, `whiplash-2014.jpg`, `the-social-network-2010.jpg`

## Notes

- The N2D project embeds a static, local copy of the N2D interface, labelled as a demo.
- Deployment: Astro is detected automatically by Vercel. This branch has not been deployed.
