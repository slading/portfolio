#!/usr/bin/env node
/**
 * Post-build checks on dist/. Run via `npm run verify` (after `astro check` and `astro build`).
 *
 * Checks:
 *  - page metadata and lang
 *  - section anchors and project card anchors exist
 *  - local href/src/url() targets resolve to files in dist/
 *  - no third-party font/CDN/analytics hosts
 *  - no "undefined", "[object Object]" or "NaN" in markup
 *  - every data-i18n key resolves in BOTH en and pl dictionaries
 *  - music: six Spotify tracks in the owner's order; embed and audio are not in static HTML
 *  - GitHub grid renders one cell per day in src/data/github-contributions.json
 *  - retired Phase 1 assets are not in dist/
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const indexPath = join(dist, 'index.html');

let failures = 0;
let passes = 0;
const pass = (msg) => {
  passes++;
  console.log(`  ✓ ${msg}`);
};
const fail = (msg) => {
  failures++;
  console.error(`  ✗ ${msg}`);
};
const check = (ok, msg) => (ok ? pass(msg) : fail(msg));

if (!existsSync(indexPath)) {
  console.error('dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}
const html = readFileSync(indexPath, 'utf8');

/** Load a TS dictionary by transpiling it to CommonJS (no extra dependencies). */
function loadDict(file) {
  const src = readFileSync(join(root, 'src/i18n', file), 'utf8');
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  new Function('exports', 'module', 'require', outputText)(mod.exports, mod, () => ({}));
  return mod.exports;
}
const dicts = { en: loadDict('en.ts').en, pl: loadDict('pl.ts').pl };
const resolveKey = (dict, path) =>
  path.split('.').reduce((node, part) => (node && typeof node === 'object' ? node[part] : undefined), dict);

console.log('Metadata');
check(/<html[^>]*lang="en"/.test(html), 'html lang is en by default');
check(/<title>[^<]+<\/title>/.test(html), 'title present');
check(/<meta name="description" content="[^"]+"/.test(html), 'meta description present');
check(/<link rel="canonical" href="https:\/\/exotision\.fun\/"/.test(html), 'canonical URL is https://exotision.fun/');
check(/<meta property="og:url" content="https:\/\/exotision\.fun\/"/.test(html), 'og:url is https://exotision.fun/');
check(!/yauheni-buka\.vercel\.app/.test(html), 'no old vercel URL in page metadata');
check(/rel="icon" href="\/favicon\.svg"/.test(html), 'favicon link present');
check(/rel="apple-touch-icon" href="\/apple-touch-icon\.png"/.test(html), 'apple-touch-icon link present');
check(!/>YB</.test(html), 'nav uses the E mark, not the YB monogram');

console.log('Sections');
const anchors = [
  'top',
  'about',
  'music',
  'stack',
  'approach',
  'projects',
  'project-n2d',
  'project-sentinel',
  'project-rfq',
  'project-solana',
  'github',
];
for (const id of anchors) check(new RegExp(`id="${id}"`).test(html), `#${id} present`);
check(!/id="(home|works|contact|case-n2d)"/.test(html), 'no Phase 1 anchors remain');

console.log('Links and assets');
const refs = [...html.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)].map((m) => m[1]);
const local = refs.filter((r) => r.startsWith('/') && !r.startsWith('//'));
const missing = local.filter((r) => {
  const p = join(dist, decodeURIComponent(r));
  return !(existsSync(p) && statSync(p).isFile()) && !(r === '/' || r.endsWith('/'));
});
check(missing.length === 0, `all ${local.length} local references resolve${missing.length ? ` (missing: ${missing.join(', ')})` : ''}`);

const thirdParty = [...html.matchAll(/https?:\/\/([^/"' )]+)/g)]
  .map((m) => m[1])
  .filter((h) => !/^(exotision\.fun|github\.com|nail-booking-pi\.vercel\.app|sentinel-ai-ten-nu\.vercel\.app|www\.w3\.org|open\.spotify\.com|image-cdn-(ak|fa)\.spotifycdn\.com)$/.test(h));
// Allowed: the owner's own site, GitHub, the two live project links in projects.ts, and Spotify
// (track links and cover artwork for the music player; playback itself is Spotify's official embed).
check(thirdParty.length === 0, `no unexpected hosts in markup${thirdParty.length ? ': ' + thirdParty.join(', ') : ''}`);

const cssFiles = readdirSync(join(dist, '_astro')).filter((f) => f.endsWith('.css'));
const cssText = cssFiles.map((f) => readFileSync(join(dist, '_astro', f), 'utf8')).join('\n');
check(!/url\(\s*["']?https?:\/\//.test(cssText), 'no remote url() in CSS (fonts are self-hosted)');

console.log('Markup hygiene');
check(!/undefined|\[object Object\]|NaN/.test(html), 'no undefined / [object Object] / NaN in markup');

console.log('i18n keys');
const keys = new Set([
  ...[...html.matchAll(/data-i18n(?:-[a-z]+)?="([^"]+)"/g)].map((m) => m[1]),
]);
let keyFail = 0;
for (const key of keys) {
  for (const lang of ['en', 'pl']) {
    const v = resolveKey(dicts[lang], key);
    if (typeof v !== 'string' || v.trim() === '') {
      keyFail++;
      fail(`${lang}: key "${key}" missing or empty`);
    }
  }
}
if (keyFail === 0) pass(`all ${keys.size} data-i18n keys resolve in EN and PL`);

console.log('Music player (Spotify embed)');
// The owner's six tracks, in the owner's order. Hard-coded on purpose, so the data file is checked against it.
const expectedSpotifyIds = [
  '4vP2Y2WVTCKeQjyJUmIfwl',
  '3ctwglyi5wn9Okd1h1ZkPT',
  '6DSR0HsTfpDlkJm7vEmLIr',
  '3I32SxStmqEZORu2Q4phUO',
  '0HEb8h395qcvn2KGZy3KFn',
  '3Ksyal4c4OD5g69t52Sc4e',
];
const musicSource = readFileSync(join(root, 'src/data/music.ts'), 'utf8');
const sourceIds = [...musicSource.matchAll(/spotifyId: '([^']+)'/g)].map((m) => m[1]);
check(JSON.stringify(sourceIds) === JSON.stringify(expectedSpotifyIds), "music data: six Spotify track IDs in the owner's exact order");
const musicMatch = html.match(/<div class="music"[^>]*data-tracks="([^"]*)"/);
check(!!musicMatch, 'music player rendered');
const tracks = musicMatch ? JSON.parse(musicMatch[1].replace(/&quot;/g, '"')) : [];
check(JSON.stringify(tracks.map((t) => t.spotifyId)) === JSON.stringify(expectedSpotifyIds), "music player: track order in the page matches the owner's list");
check(tracks.length === 6 && tracks.every((t) => t.title && t.title.trim() && t.artist && t.artist.trim()), 'music player: every track has a verified title and artist');
check(tracks.every((t) => t.artwork === null || /^https:\/\/image-cdn-(ak|fa)\.spotifycdn\.com\//.test(t.artwork)), 'music player: artwork is Spotify CDN only (or absent)');
for (const id of expectedSpotifyIds) {
  check(musicMatch[1].includes(id), `track present in player data: ${id}`);
}
check(/data-music-open[^>]*href="https:\/\/open\.spotify\.com\/track\/[^"]+"[^>]*target="_blank"[^>]*rel="noopener noreferrer"/.test(html), 'Open in Spotify link present (new tab, rel=noopener)');
check(/<div class="music-embed"[^>]*data-music-embed[^>]*hidden/.test(html), 'embed container hidden until the visitor presses play');
check(!/<iframe[^>]*open\.spotify\.com/i.test(html), 'no Spotify iframe in static HTML (the embed loads on interaction)');
check(!/iframe-api/.test(html), 'Spotify iFrame API script not in static HTML (loads on interaction)');
check(!/<audio[\s>]/i.test(html), 'no <audio> element (nothing hosted or downloaded)');
check(!/autoplay/i.test(html), 'no autoplay attribute');
check(/data-music-eq/.test(html), 'equalizer markup present (shown only while playing)');
check(/class="music-note"/.test(html), 'playback limitation note present');

console.log('GitHub activity');
const gh = JSON.parse(readFileSync(join(root, 'src/data/github-contributions.json'), 'utf8'));
const dayCount = gh.weeks.reduce((n, w) => n + w.days.length, 0);
const cellCount = (html.match(/class="gh-cell"[^>]*data-level/g) || []).length;
// The legend adds five cells with aria-hidden; count only the grid cells.
const gridMatch = html.match(/<div class="gh-grid"[\s\S]*?<\/div>/);
const gridCells = gridMatch ? (gridMatch[0].match(/class="gh-cell"/g) || []).length : 0;
check(gridCells === dayCount, `grid renders ${gridCells} cells for ${dayCount} days (${cellCount} incl. legend)`);
check(gh.login === 'slading', 'contribution data belongs to the slading account');

console.log('Publishing');
const retired = ['assets/mascot', 'assets-unpublished'];
for (const r of retired) {
  check(!existsSync(join(dist, r)), `retired path not published: ${r}`);
}
// Discontinued project: must not appear in any published HTML.
{
  const htmlFiles = [];
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const f = join(d, e.name);
      if (e.isDirectory()) walk(f);
      else if (e.name.endsWith('.html')) htmlFiles.push(f);
    }
  };
  walk(dist);
  const hits = htmlFiles.filter((f) => /voice[\s_-]?order/i.test(readFileSync(f, 'utf8')));
  check(hits.length === 0, `discontinued project (Voice Order) absent from published HTML${hits.length ? ` (found in: ${hits.join(', ')})` : ''}`);
}

console.log('Subpages');
const subpages = [
  { file: 'resume/index.html', path: '/resume/' },
  { file: 'favourites/index.html', path: '/favourites/' },
];
// The CV path comes from src/data/cv.ts so the checks follow the single source of truth.
const cvSource = readFileSync(join(root, 'src/data/cv.ts'), 'utf8');
const cvRelPath = cvSource.match(/cvFile = '([^']+)'/)[1];
const cvPresent = existsSync(join(root, 'public', cvRelPath));
// Count movie entries in src/data/favourites.ts (entries are the lines with a string title).
for (const page of subpages) {
  const p = join(dist, page.file);
  if (!existsSync(p)) {
    fail(`${page.path} was not built`);
    continue;
  }
  const h = readFileSync(p, 'utf8');
  check(h.includes(`<link rel="canonical" href="https://exotision.fun${page.path}">`), `${page.path}: canonical URL`);
  check(/<h1[^>]*class="page-title"/.test(h), `${page.path}: page heading present`);
  check(/href="\/resume\/"/.test(h) && /href="\/favourites\/"/.test(h), `${page.path}: More menu links to both pages`);
  check(/href="\/#about"/.test(h), `${page.path}: nav links to homepage sections with absolute paths`);
  check(!/undefined|\[object Object\]|NaN/.test(h), `${page.path}: no undefined / NaN in markup`);
  const pageKeys = [...h.matchAll(/data-i18n(?:-[a-z]+)?="([^"]+)"/g)].map((m) => m[1]);
  const badKeys = pageKeys.filter((k) => ['en', 'pl'].some((lang) => {
    const v = resolveKey(dicts[lang], k);
    return typeof v !== 'string' || v.trim() === '';
  }));
  check(badKeys.length === 0, `${page.path}: all i18n keys resolve in EN and PL${badKeys.length ? ` (bad: ${badKeys.join(', ')})` : ''}`);
  const pageLocal = [...h.matchAll(/(?:href|src)="(\/[^"#?]+)/g)].map((m) => m[1]);
  const pageMissing = pageLocal.filter((r) => {
    const f = join(dist, decodeURIComponent(r));
    return !(existsSync(f) && statSync(f).isFile()) && !r.endsWith('/');
  });
  check(pageMissing.length === 0, `${page.path}: local references resolve${pageMissing.length ? ` (missing: ${pageMissing.join(', ')})` : ''}`);
}
const resumeHtml = readFileSync(join(dist, 'resume/index.html'), 'utf8');
if (cvPresent) {
  check(resumeHtml.includes(`<iframe src="/${cvRelPath}#view=FitH"`), '/resume: CV viewer rendered with the committed CV');
  check(resumeHtml.includes(`href="/${cvRelPath}" download="Yauheni_Buka_CV.pdf"`), '/resume: Download button points at the CV with a stable filename');
  check(resumeHtml.includes(`href="/${cvRelPath}" target="_blank"`), '/resume: Open PDF button points at the CV');
  check(!resumeHtml.includes('aria-disabled="true"'), '/resume: Open PDF and Download are enabled (no disabled markup)');
} else {
  check(!/<iframe/.test(resumeHtml), '/resume: no viewer without the CV file (no substitute document)');
  check(/CV not published yet/.test(resumeHtml), '/resume: "not published yet" state shown');
}
const favSource = readFileSync(join(root, 'src/data/favourites.ts'), 'utf8');
const movies = [...favSource.matchAll(/^\s+\{ title: (["'])(.+?)\1, year: (\d{4})/gm)].map((m) => ({ title: m[2], year: m[3] }));
const favHtml = readFileSync(join(dist, 'favourites/index.html'), 'utf8');
const favCount = (favHtml.match(/class="poster-card"/g) || []).length;
check(favCount === movies.length, `/favourites: poster count matches src/data/favourites.ts (${favCount}/${movies.length})`);
if (movies.length === 0) check(/No films listed yet/.test(favHtml), '/favourites: empty state shown');
if (movies.length > 0) {
  const decode = (s) => s.replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
  const shownTitles = [...favHtml.matchAll(/class="poster-title">([^<]+)</g)].map((m) => decode(m[1]));
  const shownYears = [...favHtml.matchAll(/class="poster-meta"><span>(\d{4})<\/span>/g)].map((m) => m[1]);
  check(JSON.stringify(shownTitles) === JSON.stringify(movies.map((m) => m.title)), '/favourites: titles appear in the owner\'s exact order');
  check(JSON.stringify(shownYears) === JSON.stringify(movies.map((m) => m.year)), '/favourites: years match the data');
  const seriesCount = (favHtml.match(/data-i18n="pages\.favourites\.tvSeries"/g) || []).length;
  check(seriesCount === 1 && /Alice in Borderland/.test(favHtml), '/favourites: Alice in Borderland labelled as a TV series (exactly one label)');
  const posterSrcs = [...favHtml.matchAll(/<img[^>]+src="\/?([^"]*favourites\/[^"]+)"/g)].map((m) => m[1]);
  check(posterSrcs.every((src) => existsSync(join(dist, src))), '/favourites: every poster image in the markup exists in the build');
  // Posters: each listed file exists, is a real JPEG under 300 KB, and is rendered when present.
  const posterPaths = [...favSource.matchAll(/poster: '([^']+)'/g)].map((m) => m[1]);
  check(posterPaths.length === movies.length, `/favourites: every entry declares a poster path (${posterPaths.length}/${movies.length})`);
  const missingPosters = posterPaths.filter((p) => !existsSync(join(root, 'public', p)));
  check(missingPosters.length === 0, `/favourites: all listed poster files present${missingPosters.length ? ` (missing: ${missingPosters.join(', ')})` : ''}`);
  for (const p of posterPaths) {
    const file = join(root, 'public', p);
    if (!existsSync(file)) continue;
    const buf = readFileSync(file);
    check(buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff, `poster is a real JPEG (magic bytes): ${p}`);
    check(buf.length <= 300_000, `poster under 300 KB: ${p} (${buf.length} bytes)`);
    check(favHtml.includes(`src="/${p}"`), `/favourites: poster rendered on the page: ${p}`);
  }
  check(!/[Rr]ating|review|★/.test(favHtml), '/favourites: no ratings or review markup');
}

console.log(`\n${passes} passed, ${failures} failed`);
process.exit(failures ? 1 : 0);
