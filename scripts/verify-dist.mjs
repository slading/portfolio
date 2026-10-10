#!/usr/bin/env node
/**
 * Post-build checks on dist/. Run via `npm run verify` (after `astro check` and `astro build`).
 *
 * Checks:
 *  - page metadata (lang, title, description, canonical)
 *  - every local src/href and url() resolves to a file in dist/
 *  - required section anchors exist
 *  - no third-party font/CSS/JS hosts (fonts are self-hosted)
 *  - no "undefined", "[object Object]" or "NaN" leaked into markup
 *  - every data-i18n* key resolves in BOTH en and pl dictionaries
 *  - every English dictionary string that is rendered at build time appears in the page
 *  - music control: disabled when no tracks are configured; no dangling <audio> sources
 *  - unpublished assets are not present in dist/
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
const fail = (msg) => {
  failures++;
  console.error(`  ✗ ${msg}`);
};
const pass = (msg) => {
  passes++;
  console.log(`  ✓ ${msg}`);
};
const check = (cond, okMsg, badMsg) => (cond ? pass(okMsg) : fail(badMsg));

if (!existsSync(indexPath)) {
  console.error('dist/index.html is missing. Run `npm run build` first.');
  process.exit(1);
}

const html = readFileSync(indexPath, 'utf8');
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
const text = decode(html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, ''))
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ');

// ---------------------------------------------------------------- dictionaries
// Transpile the TypeScript dictionaries and load them, so the checks use the real source strings.
async function loadDict(relPath) {
  const src = readFileSync(join(root, relPath), 'utf8');
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
  });
  // Dictionaries have no runtime imports except the type-only import in pl.ts, which transpiles away.
  const mod = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
  return mod;
}
const enMod = await loadDict('src/i18n/en.ts');
const plMod = await loadDict('src/i18n/pl.ts');
const en = enMod.en;
const pl = plMod.pl;

const resolveKey = (dict, path) => {
  let node = dict;
  for (const part of path.split('.')) {
    if (node && typeof node === 'object' && part in node) node = node[part];
    else return undefined;
  }
  return node;
};

// ---------------------------------------------------------------- 1. metadata
console.log('Metadata');
check(/<html[^>]*lang="en"/.test(html), 'html lang is "en" (default language)', 'html lang is not "en"');
check(html.includes(`<title>${en.meta.title}</title>`), 'title matches EN dictionary', 'title does not match EN dictionary');
check(
  html.includes(`content="${en.meta.description}"`),
  'meta description matches EN dictionary',
  'meta description missing or different',
);
check(/<link rel="canonical" href="https:\/\/[^"]+\/"/.test(html), 'canonical URL present', 'canonical URL missing');

// ---------------------------------------------------------------- 2. local references
console.log('Local references');
const refRe = /\b(?:src|href)="([^"]+)"/g;
const refs = [...html.matchAll(refRe)].map((m) => m[1]);
const cssFiles = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.css')) cssFiles.push(p);
  }
};
walk(dist);
const urlRefs = cssFiles.flatMap((f) =>
  [...readFileSync(f, 'utf8').matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)]
    .map((m) => m[1])
    // Skip data: URIs and SVG filter fragments such as url(%23n) inside them.
    .filter((u) => !u.startsWith('data:') && !u.startsWith('#') && !u.startsWith('%23')),
);
let missing = 0;
for (const ref of [...new Set(refs)]) {
  if (ref.startsWith('#') || ref.startsWith('mailto:') || ref.startsWith('http') || ref.startsWith('data:')) continue;
  const clean = ref.split('#')[0].split('?')[0];
  const target = clean.startsWith('/') ? join(dist, clean) : join(dist, clean);
  if (!existsSync(target) && !(clean === '' || clean.endsWith('/'))) {
    fail(`missing local file: ${ref}`);
    missing++;
  }
}
for (const ref of [...new Set(urlRefs)]) {
  // CSS urls are relative to the css file's directory; fontsource/Vite emit them under /_astro/.
  const clean = ref.split('#')[0].split('?')[0];
  if (!clean || clean.startsWith('http')) continue;
  const candidates = [join(dist, clean), join(dist, '_astro', clean)];
  if (!candidates.some((c) => existsSync(c))) {
    fail(`missing CSS url target: ${ref}`);
    missing++;
  }
}
check(missing === 0, `all ${new Set(refs).size} HTML references and ${new Set(urlRefs).size} CSS urls resolve`, `${missing} broken reference(s)`);

// ---------------------------------------------------------------- 3. anchors
console.log('Anchors');
for (const id of ['top', 'home', 'works', 'case-n2d', 'case-sentinel', 'case-solana', 'contact']) {
  check(html.includes(`id="${id}"`), `#${id} present`, `#${id} missing`);
}

// ---------------------------------------------------------------- 4. third-party hosts
console.log('Third-party requests');
const thirdPartyHosts = ['fonts.googleapis.com', 'fonts.gstatic.com', 'googletagmanager', 'cdn.jsdelivr', 'unpkg.com'];
const assetText = [html, ...cssFiles.map((f) => readFileSync(f, 'utf8'))].join('\n');
const hits = thirdPartyHosts.filter((h) => assetText.includes(h));
check(hits.length === 0, 'no third-party font/CDN/analytics hosts in page or CSS', `third-party hosts found: ${hits.join(', ')}`);

// ---------------------------------------------------------------- 5. leaked values
console.log('Markup hygiene');
const leaks = ['undefined', '[object Object]', 'NaN'].filter((s) => html.includes(s));
check(leaks.length === 0, 'no undefined / [object Object] / NaN in markup', `leaked: ${leaks.join(', ')}`);

// ---------------------------------------------------------------- 6. i18n keys
console.log('i18n keys');
const keyRe = /data-i18n(?:-html|-aria|-alt|-title|-marquee)?="([^"]+)"/g;
const keys = [...new Set([...html.matchAll(keyRe)].map((m) => m[1]))];
const unresolved = [];
for (const key of keys) {
  for (const [lang, dict] of [['en', en], ['pl', pl]]) {
    const v = resolveKey(dict, key);
    const ok = typeof v === 'string' || (Array.isArray(v) && v.length > 0);
    if (!ok) unresolved.push(`${lang}:${key}`);
  }
}
check(
  unresolved.length === 0,
  `all ${keys.length} data-i18n keys resolve in EN and PL`,
  `unresolved keys: ${unresolved.join(', ')}`,
);

// Strings that are only written at runtime (after a language switch or a music state change)
// are not in the build-time HTML, so they are excluded from the "rendered" check.
// music.off / music.aria are only rendered when tracks are configured (the empty state shows "add").
const CLIENT_ONLY = new Set([
  'music.on',
  'music.off',
  'music.aria',
  'music.ariaOff',
  'music.loading',
  'music.unavailable',
  'nav.themeLight',
]);
const leaves = [];
(function collect(node, path) {
  if (typeof node === 'string') leaves.push([path, node]);
  else if (Array.isArray(node)) node.forEach((v, i) => collect(v, `${path}.${i}`));
  else if (node && typeof node === 'object') for (const k of Object.keys(node)) collect(node[k], path ? `${path}.${k}` : k);
})(en, '');
const notRendered = [];
for (const [path, value] of leaves) {
  if (CLIENT_ONLY.has(path)) continue;
  // Tags (e.g. <br>, <span>) become a space, matching how the page text is extracted above.
  const plain = value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (!plain) continue;
  // Visible text, or an attribute value (aria-label, alt, title) in the raw markup.
  if (!text.includes(plain) && !decode(html).includes(plain)) notRendered.push(path);
}
check(
  notRendered.length === 0,
  `all ${leaves.length - CLIENT_ONLY.size} build-time EN strings appear in the page`,
  `EN strings not found in page: ${notRendered.join(', ')}`,
);

const plEmpty = [];
(function collectPl(node, path) {
  if (typeof node === 'string') {
    if (!node.trim()) plEmpty.push(path);
  } else if (Array.isArray(node)) node.forEach((v, i) => collectPl(v, `${path}.${i}`));
  else if (node && typeof node === 'object') for (const k of Object.keys(node)) collectPl(node[k], path ? `${path}.${k}` : k);
})(pl, '');
check(plEmpty.length === 0, 'no empty PL strings', `empty PL strings: ${plEmpty.join(', ')}`);

// ---------------------------------------------------------------- 7. music
console.log('Music player');
const musicMatch = html.match(/<div class="music"[^>]*>/);
check(!!musicMatch, 'music control present', 'music control missing');
const tracksAttr = musicMatch?.[0].match(/data-tracks="([^"]*)"/)?.[1] ?? '[]';
const trackCount = JSON.parse(decode(tracksAttr)).length;
if (trackCount === 0) {
  check(/data-music-toggle[^>]*\sdisabled/.test(html), 'no tracks configured → control disabled', 'no tracks but control enabled');
} else {
  check(!/data-music-toggle[^>]*\sdisabled/.test(html), `${trackCount} track(s) configured → control enabled`, 'tracks configured but control disabled');
}
const audioSrcs = [...html.matchAll(/<audio[^>]*src="([^"]+)"/g)].map((m) => m[1]);
check(audioSrcs.every((s) => existsSync(join(dist, s.replace(/^\//, '')))), 'all <audio> sources exist', 'dangling <audio> source');
check(!/\/audio\/music\.mp3/.test(html), 'no reference to the never-committed /audio/music.mp3', 'stale /audio/music.mp3 reference found');

// ---------------------------------------------------------------- 8. published assets
console.log('Publishing');
const unpublished = ['orchestrator.png', 'repolens.png', 'voice-order-agent.png'];
const leakedFiles = unpublished.filter((f) => existsSync(join(dist, 'assets', f)));
check(leakedFiles.length === 0, 'unpublished screenshots are not in dist/', `unpublished files shipped: ${leakedFiles.join(', ')}`);
const iframes = (html.match(/<iframe/g) || []).length;
check(iframes === 3, `3 embedded N2D frames (list preview + 2 in case study)`, `expected 3 iframes, found ${iframes}`);

console.log(`\n${passes} passed, ${failures} failed`);
if (failures > 0) process.exit(1);
