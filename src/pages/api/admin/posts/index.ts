import type { APIRoute } from 'astro';
import { adminClient, checkOrigin, privateHeaders } from '../../../../lib/server/auth';
import { parsePost } from '../../../../lib/server/posts';

export const prerender = false;

export const POST: APIRoute = async (context) => {
  if (!checkOrigin(context)) return privateHeaders(new Response('Forbidden', { status: 403 }));
  const client = await adminClient(context);
  if (!client) return privateHeaders(new Response('Unauthorized', { status: 401 }));
  const post = parsePost(await context.request.formData());
  if (!post) return privateHeaders(new Response('Invalid post fields', { status: 400 }));
  const { data, error } = await client.from('blog_posts').insert({ ...post, status: 'draft' }).select('id').single();
  if (error || !data) return privateHeaders(new Response(error?.code === '23505' ? 'Slug already used' : 'Could not save post', { status: error?.code === '23505' ? 409 : 503 }));
  return privateHeaders(context.redirect(`/admin/posts/${data.id}`, 303));
};
