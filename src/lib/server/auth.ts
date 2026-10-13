import { parse } from 'cookie';
import { createServerClient } from '@supabase/ssr';
import type { APIContext } from 'astro';

export function configured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_PUBLISHABLE_KEY && process.env.SUPABASE_ADMIN_USER_ID);
}

export function serverClient(context: APIContext) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error('Supabase configuration missing');
  const values = new Map<string, string>();
  for (const [name, value] of Object.entries(parse(context.request.headers.get('cookie') ?? ''))) {
    if (value !== undefined) values.set(name, value);
  }
  return createServerClient(url, key, {
    cookies: {
      getAll: () => [...values].map(([name, value]) => ({ name, value })),
      setAll: (items) => {
        for (const { name, value, options } of items) {
          values.set(name, value);
          context.cookies.set(name, value, {
            ...options,
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: !import.meta.env.DEV,
          });
        }
      },
    },
  });
}

export async function adminClient(context: APIContext) {
  if (!configured()) return null;
  const client = serverClient(context);
  const { data, error } = await client.auth.getUser();
  if (error || !data.user || data.user.id !== process.env.SUPABASE_ADMIN_USER_ID) return null;
  return client;
}

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
