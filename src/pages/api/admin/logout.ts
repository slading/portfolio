import type { APIRoute } from 'astro';
import { checkOrigin, configured, privateHeaders, serverClient } from '../../../lib/server/auth';

export const prerender = false;

export const POST: APIRoute = async (context) => {
  if (!checkOrigin(context)) return privateHeaders(new Response('Forbidden', { status: 403 }));
  if (configured()) await serverClient(context).auth.signOut({ scope: 'local' });
  return privateHeaders(context.redirect('/admin/login', 303));
};
