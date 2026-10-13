import { parse } from 'cookie';
import { createServerClient } from '@supabase/ssr';
import type { APIContext } from 'astro';
import { supabaseConfig } from './config';
export { checkOrigin, privateHeaders } from './request';

export function configured() {
  return supabaseConfig().configured;
}

export function serverClient(context: APIContext) {
  const { url, key } = supabaseConfig();
  if (!url?.trim() || !key?.trim()) throw new Error('Supabase configuration missing');
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
  const { configured: available, adminId } = supabaseConfig();
  if (!available) return null;
  const client = serverClient(context);
  const { data, error } = await client.auth.getUser();
  if (error || !data.user || data.user.id !== adminId) return null;
  return client;
}
