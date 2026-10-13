import type { APIRoute } from 'astro';
import { createPublicContentClient } from '../lib/server/supabase';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const { data, error } = await createPublicContentClient().from('blog_posts').select('slug,updated_at')
      .eq('status', 'published').lte('published_at', new Date().toISOString());
    if (error) throw error;
    const entries = (data ?? []).filter((post) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug))
      .map((post) => `<url><loc>https://exotision.fun/blog/${post.slug}/</loc></url>`).join('');
    return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, {
      headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  } catch {
    return new Response('Unavailable', { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }
};
