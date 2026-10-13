import type { APIContext } from 'astro';

export function checkOrigin(context: APIContext) {
  const origin = context.request.headers.get('origin');
  const type = context.request.headers.get('content-type') ?? '';
  const length = Number(context.request.headers.get('content-length') ?? 0);
  return origin === context.url.origin &&
    (type.startsWith('application/x-www-form-urlencoded') || type.startsWith('multipart/form-data')) &&
    Number.isFinite(length) && length <= 150_000;
}

export function privateHeaders(response: Response) {
  response.headers.set('Cache-Control', 'private, no-store');
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}
