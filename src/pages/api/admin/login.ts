import type { APIRoute } from 'astro';
import { checkOrigin, configured, privateHeaders, serverClient } from '../../../lib/server/auth';

export const prerender = false;

export const POST: APIRoute = async (context) => {
  if (!checkOrigin(context)) return privateHeaders(new Response('Forbidden', { status: 403 }));
  if (!configured()) return privateHeaders(new Response('Unavailable', { status: 503 }));
  const form = await context.request.formData();
  const email = form.get('email');
  const password = form.get('password');
  if (typeof email !== 'string' || typeof password !== 'string' || email.length > 254 || password.length > 1024) {
    return privateHeaders(new Response('Invalid request', { status: 400 }));
  }
  const client = serverClient(context);
  const { error } = await client.auth.signInWithPassword({ email, password });
  const { data } = error ? { data: null } : await client.auth.getUser();
  if (error || data?.user?.id !== process.env.SUPABASE_ADMIN_USER_ID) {
    await client.auth.signOut({ scope: 'local' });
    return privateHeaders(context.redirect('/admin/login?error=1', 303));
  }
  return privateHeaders(context.redirect('/admin', 303));
};
