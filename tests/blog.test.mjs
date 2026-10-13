import test from 'node:test';
import assert from 'node:assert/strict';
import { bodyText, parsePost, paragraphs, isId } from '../src/lib/server/posts.ts';
import { checkOrigin } from '../src/lib/server/auth.ts';

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
