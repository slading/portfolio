import type { APIRoute } from 'astro';
import { adminClient, checkOrigin, privateHeaders } from '../../../../lib/server/auth';
import { bodyText, isId, parsePost } from '../../../../lib/server/posts';

export const prerender = false;

export const POST: APIRoute = async (context) => {
  if (!checkOrigin(context)) return privateHeaders(new Response('Forbidden', { status: 403 }));
  const client = await adminClient(context);
  if (!client) return privateHeaders(new Response('Unauthorized', { status: 401 }));
  const id = context.params.id;
  if (!isId(id)) return privateHeaders(new Response('Not Found', { status: 404 }));
  const form = await context.request.formData();
  const intent = form.get('intent');
  if (!['save', 'publish', 'unpublish', 'delete'].includes(String(intent))) return privateHeaders(new Response('Invalid action', { status: 400 }));
  const { data: existing, error: lookupError } = await client.from('blog_posts').select('id,status,slug,published_at,body').eq('id', id).maybeSingle();
  if (lookupError) return privateHeaders(new Response('Unavailable', { status: 503 }));
  if (!existing) return privateHeaders(new Response('Not Found', { status: 404 }));

  if (intent === 'delete') {
    if (form.get('confirm') !== 'yes') return privateHeaders(new Response('Confirmation required', { status: 400 }));
    const { data, error } = await client.from('blog_posts').delete().eq('id', id).select('id').maybeSingle();
    return error || !data ? privateHeaders(new Response('Could not delete post', { status: 503 })) : privateHeaders(context.redirect('/admin/posts', 303));
  }

  if (intent === 'save') {
    const post = parsePost(form);
    if (!post) return privateHeaders(new Response('Invalid post fields', { status: 400 }));
    if (existing.published_at && post.slug !== existing.slug) return privateHeaders(new Response('Published slugs cannot be changed', { status: 400 }));
    const { data, error } = await client.from('blog_posts').update(post).eq('id', id).select('id').maybeSingle();
    return error || !data ? privateHeaders(new Response(error?.code === '23505' ? 'Slug already used' : 'Could not save post', { status: error?.code === '23505' ? 409 : 503 })) : privateHeaders(context.redirect(`/admin/posts/${id}?saved=1`, 303));
  }

  if (intent === 'publish' && !bodyText(existing.body)?.trim()) return privateHeaders(new Response('Write and save the post before publishing', { status: 400 }));
  const update = intent === 'publish'
    ? { status: 'published', published_at: existing.published_at ?? new Date().toISOString() }
    : { status: 'draft' };
  const { data, error } = await client.from('blog_posts').update(update).eq('id', id).select('id').maybeSingle();
  return error || !data ? privateHeaders(new Response('Could not change status', { status: 503 })) : privateHeaders(context.redirect(`/admin/posts/${id}`, 303));
};
