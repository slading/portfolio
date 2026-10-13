create schema if not exists private;

create table private.blog_admins (
  slot boolean primary key default true check (slot),
  user_id uuid not null unique references auth.users (id) on delete restrict
);

revoke all on private.blog_admins from public, anon, authenticated;
alter table private.blog_admins enable row level security;

create function public.is_blog_admin()
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (select 1 from private.blog_admins where user_id = auth.uid());
$$;
revoke all on function public.is_blog_admin() from public;
grant execute on function public.is_blog_admin() to authenticated;

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null check (length(btrim(title)) between 1 and 180),
  slug text not null unique check (length(slug) between 1 and 120 and slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  excerpt text not null default '' check (length(excerpt) <= 500),
  body jsonb not null default '{"version":1,"text":""}'::jsonb
    check (jsonb_typeof(body) = 'object' and body ? 'version' and body ? 'text' and
           body->>'version' = '1' and jsonb_typeof(body->'text') = 'string' and
           length(body->>'text') <= 100000),
  cover_image_path text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  check (status = 'draft' or published_at is not null)
);

create index blog_posts_published_idx on public.blog_posts (published_at desc)
  where status = 'published';

create function public.set_blog_post_updated_at()
returns trigger language plpgsql set search_path = ''
as $$
begin
  if old.published_at is not null and new.slug is distinct from old.slug then
    raise exception 'Published slugs cannot be changed';
  end if;
  new.updated_at = now();
  return new;
end;
$$;

create trigger blog_posts_updated_at before update on public.blog_posts
for each row execute function public.set_blog_post_updated_at();

alter table public.blog_posts enable row level security;
revoke all on public.blog_posts from public, anon, authenticated;
grant select on public.blog_posts to anon, authenticated;
grant insert, update, delete on public.blog_posts to authenticated;

create policy "Published posts are readable" on public.blog_posts
for select to anon, authenticated using (status = 'published' and published_at <= now());

create policy "Admin reads all posts" on public.blog_posts
for select to authenticated using ((select public.is_blog_admin()));

create policy "Admin inserts posts" on public.blog_posts
for insert to authenticated with check ((select public.is_blog_admin()));

create policy "Admin updates posts" on public.blog_posts
for update to authenticated using ((select public.is_blog_admin())) with check ((select public.is_blog_admin()));

create policy "Admin deletes posts" on public.blog_posts
for delete to authenticated using ((select public.is_blog_admin()));
