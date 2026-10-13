import test from 'node:test';
import assert from 'node:assert/strict';
import { bodyText, parsePost, paragraphs, isId } from '../src/lib/server/posts.ts';
import { checkOrigin } from '../src/lib/server/request.ts';
import { inspectConfig, formatConfigStatus } from '../src/lib/server/config-status.ts';

const form = (entries) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(entries)) data.set(key, value);
  return data;
};

test('accepts only constrained post fields and JSON document', () => {
  const post = parsePost(form({ title: '  A note ', slug: 'a-note', excerpt: '', text: '<script>alert(1)</script>' }));
  assert.equal(post.title, 'A note');
  assert.deepEqual(post.body, { version: 1, text: '<script>alert(1)</script>' });
  assert.equal(bodyText(post.body), '<script>alert(1)</script>');
  assert.equal(bodyText({ version: 1, html: '<img onerror=alert(1)>' }), null);
  assert.equal(bodyText({ version: 2, text: 'no' }), null);
  assert.equal(bodyText({ version: 1, text: { node: 'script' } }), null);
  assert.deepEqual(paragraphs('First\nline\n\nSecond'), ['First\nline', 'Second']);
  assert.equal(parsePost(form({ title: 'Post', slug: '../bad', excerpt: '', text: 'body' })), null);
  assert.equal(parsePost(form({ title: '', slug: 'good', excerpt: '', text: 'body' })), null);
  assert.equal(isId('cf327ec0-34b3-4bae-8768-3a92f3620555'), true);
  assert.equal(isId('bad'), false);
});

test('runtime configuration detection reports names only', () => {
  const values = {
    SUPABASE_URL: 'https://example.invalid',
    SUPABASE_PUBLISHABLE_KEY: 'secret-marker-never-log',
    SUPABASE_ADMIN_USER_ID: '  ',
  };
  const partial = inspectConfig(values);
  assert.deepEqual(partial.present, ['SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY']);
  assert.deepEqual(partial.missing, ['SUPABASE_ADMIN_USER_ID']);
  const diagnostic = formatConfigStatus(partial);
  assert.match(diagnostic, /missing=SUPABASE_ADMIN_USER_ID/);
  assert.ok(!diagnostic.includes(values.SUPABASE_PUBLISHABLE_KEY));
  assert.ok(!diagnostic.includes(values.SUPABASE_URL));
  assert.deepEqual(inspectConfig({ ...values, SUPABASE_ADMIN_USER_ID: 'user-id' }).missing, []);
  assert.equal(inspectConfig({ ...values, SUPABASE_PUBLISHABLE_KEY: undefined }).missing.includes('SUPABASE_PUBLISHABLE_KEY'), true);
});

test('mutations require a matching Origin and form body', () => {
  const ctx = (origin, type = 'application/x-www-form-urlencoded', length = '90') => ({
    url: new URL('https://preview.example/admin'),
    request: { headers: new Headers({ ...(origin && { Origin: origin }), 'Content-Type': type, 'Content-Length': length }) },
  });
  assert.equal(checkOrigin(ctx('https://preview.example')), true);
  assert.equal(checkOrigin(ctx('https://attacker.example')), false);
  assert.equal(checkOrigin(ctx(null)), false);
  assert.equal(checkOrigin(ctx('https://preview.example', 'application/json')), false);
  assert.equal(checkOrigin(ctx('https://preview.example', 'application/x-www-form-urlencoded', '150001')), false);
});
