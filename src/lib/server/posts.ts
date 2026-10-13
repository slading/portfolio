export type PostBody = { version: 1; text: string };
export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: unknown;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
  published_at: string | null;
  cover_image_path: string | null;
};

export function bodyText(body: unknown): string | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const value = body as Record<string, unknown>;
  return value.version === 1 && typeof value.text === 'string' && value.text.length <= 100_000 ? value.text : null;
}

export function parsePost(form: FormData) {
  const field = (name: string) => {
    const value = form.get(name);
    return typeof value === 'string' ? value.trim() : '';
  };
  const title = field('title');
  const slug = field('slug');
  const excerpt = field('excerpt');
  const text = field('text');
  if (!title || title.length > 180 || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 120 || excerpt.length > 500 || text.length > 100_000) {
    return null;
  }
  return { title, slug, excerpt, body: { version: 1, text } satisfies PostBody };
}

export function isId(id: string | undefined): id is string {
  return Boolean(id && /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(id));
}

export function paragraphs(text: string) {
  return text.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
}
