# EXO blog setup (manual, Preview first)

This repository does not apply migrations automatically. Confirm the Supabase dashboard says **exo-portfolio**, its project reference matches the intended Vercel Preview configuration, and a current backup/export exists before making any change. Review `migrations/202610130001_blog_posts.sql`. Apply it once to **exo-portfolio only** using its SQL editor or an approved migration workflow; verify the tables, function, trigger, indexes and RLS policies afterward. This migration is additive, but do not rerun it or run against other projects.

In Supabase Auth, keep public signup disabled. Create or invite exactly one owner with a password using the dashboard. Copy the owner's Auth **user UUID** privately (not into the repo). In the same project's SQL editor, run after review:

```sql
insert into private.blog_admins (user_id) values ('<OWNER_AUTH_USER_UUID>');
```

The `slot` primary key allows only one row. Do not replace it with editable `user_metadata`. The server additionally checks `SUPABASE_ADMIN_USER_ID`, which must match the allowlist row. No service-role key is used by the app. The current password form does not implement a second-factor challenge; enable an MFA enrollment policy only with a tested AAL2 sign-in flow.

Configure these as **server runtime** variables in the intended Vercel Preview environment, not in `PUBLIC_` variables or Git:

- `SUPABASE_URL` — this project's API URL.
- `SUPABASE_PUBLISHABLE_KEY` — publishable/anon key, never a service-role or secret key.
- `SUPABASE_ADMIN_USER_ID` — the same allowlisted Auth UUID.

For local testing, put them in an ignored `.env` file. After any Preview environment change, redeploy the intended branch; later **publishing posts** does not require a build.

Before an approved production release, configure these same **server-side** names in the intended Vercel Production environment: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_ADMIN_USER_ID`. Confirm that the URL and publishable key belong to **exo-portfolio** and the ID matches its single allowlisted Auth user. Do not add values to Git, use `PUBLIC_` variables, or add a service-role key. Production settings and deployment must remain untouched until owner approval.

Verify in the Preview environment with the real project: anonymous SELECT returns only published rows; anonymous writes fail; a second authenticated user cannot read drafts or write; the allowlisted user can read and write drafts. Verify draft URLs return 404, published URLs become visible without a deployment, unpublishing hides them immediately, preview is private, login/logout survives a refresh, cross-origin POST fails, and raw HTML is printed as text. Record results without including credentials or draft text in logs. Do not call the implementation end-to-end tested until these checks pass.

Images are intentionally deferred: `cover_image_path` exists for a later private Storage design, but the app has no upload control, bucket, or image delivery path. The repository currently uses `https://exotision.fun` for canonicals, sitemap URLs and robots; the owner reports production at `https://www.exotision.fun`. If `www` is the intended permanent public host, recommend `www` canonicals and permanent apex-to-`www` redirects; otherwise retain apex canonicals and permanently redirect `www` to apex. Confirm the domain/redirect decision with the owner before changing Astro `site`, robots, the dynamic blog sitemap or SEO assertions.
