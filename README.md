# Żenia Buka — Portfolio

Personal portfolio: automation work, engineering case studies, and a grid-based layout with light/dark themes and English/Polish copy.

**Live (current production, unchanged by this branch):** https://yauheni-buka.vercel.app/

## Stack

- [Astro](https://astro.build) 7 (static output) + TypeScript (strict)
- Plain CSS with design tokens, 12-column grid
- Self-hosted fonts via [`@fontsource`](https://fontsource.org) (Space Grotesk, DM Mono). No third-party font requests.
- Small client scripts for language, theme, interactions and the music player. Everything is optional and the page reads fine without JS.

## Commands

```bash
npm install
npm run dev      # dev server on 0.0.0.0:4321
npm run check    # astro check (types)
npm run build    # static build to dist/
npm run preview  # serve dist/ on 0.0.0.0:4321
npm run verify   # check + build + dist checks (links, anchors, i18n keys, no third-party hosts)
```

## Structure

```
src/
  i18n/          en.ts (default), pl.ts (typed to match en), index.ts (lookup, storage keys)
  data/          projects.ts (links, asset paths, email), music.ts (track list)
  layouts/       Base.astro (head, meta, theme-before-paint script, cursor, theme wipe)
  components/    Header, Hero, Intro, Process, Works, CaseStudy, Contact, Footer, MusicPlayer
  pages/         index.astro (page composition)
  scripts/       app.ts (entry), language.ts, theme.ts, interactions.ts, music.ts
  styles/        global.css (tokens, grid, components, responsive, reduced motion)
public/
  assets/        N2D embed (static HTML/CSS/JS), sentinel screenshot, mascot
  favicon.svg
assets-unpublished/   images kept in the repo but not deployed (see its README)
scripts/verify-dist.mjs
```

## Content

- **Copy** lives only in `src/i18n/en.ts` and `src/i18n/pl.ts`. Keys match the original site's wording. Add a key to both files; TypeScript fails the build if they drift.
- **Projects** (links, screenshots) are in `src/data/projects.ts`. Case-study layout is in `src/components/CaseStudy.astro`.
- Do not add achievements, metrics, or experience that the owner has not verified.

## Language and theme

- Default language is **English**. Visitors can switch to Polish with the PL/EN control. The choice is stored in `localStorage` (`portfolio-language`), and the legacy key `zenia-language` is read as a fallback.
- Theme follows the system preference until the visitor toggles it. The choice is stored as `portfolio-theme`. Legacy key `zenia-theme` is read as a fallback.

## Music player

The player is wired up but **ships with no tracks**, because the original site pointed at `/audio/music.mp3`, which was never committed. The control shows a disabled "ADD AUDIO FILE" state until a track is added.

To enable it:
1. Add an audio file you have the rights to use under `public/audio/`.
2. Add an entry to `tracks` in `src/data/music.ts`, for example `{ id: 'main', title: 'Track title', src: '/audio/main.mp3' }`.

Playback never autoplays and nothing is preloaded until the first press. Playback does not persist across page navigations yet; this site is a single page today.

## Notes

- The N2D case study embeds a static, local copy of the N2D interface. Its own header describes it as a demo prototype with local data. The case-study caption says so; see the audit notes before changing that wording.
- Deployment: Astro is detected automatically by Vercel. This branch has not been deployed.
