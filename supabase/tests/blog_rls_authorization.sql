-- Run the whole script in one SQL Editor session. Replace both UUID placeholders
-- in a local copy only; never commit or share the filled-in script.
-- On any error, execute ROLLBACK in the same session before retrying.
-- The SQL Editor's privileged role is used only to set up and inspect the probe.
-- All ALLOWED/DENIED assertions run after SET LOCAL ROLE authenticated.

-- Commit only the session-local probe ID, before creating any rows. A SQL Editor
-- may submit the entire batch as one implicit transaction; without this boundary,
-- the fixture ROLLBACK would also erase the ID needed for the cleanup check.
BEGIN;
SELECT set_config('exo.rls_probe_id', gen_random_uuid()::text, false);
COMMIT;

BEGIN;
SET LOCAL statement_timeout = '15s';
SET LOCAL row_security = on;
SELECT set_config('exo.rls_admin_id', '<ADMIN_AUTH_UUID>', true);
SELECT set_config('exo.rls_nonadmin_id', '<NON_ADMIN_AUTH_UUID>', true);
SELECT set_config('exo.rls_insert_id', gen_random_uuid()::text, true);

DO $setup$
DECLARE
  admin_id uuid := current_setting('exo.rls_admin_id')::uuid;
  nonadmin_id uuid := current_setting('exo.rls_nonadmin_id')::uuid;
  probe_id uuid := current_setting('exo.rls_probe_id')::uuid;
BEGIN
  IF current_user = 'authenticated' OR admin_id = nonadmin_id THEN
    RAISE EXCEPTION 'Setup requires a privileged role and two distinct Auth users';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE id = admin_id)
     OR NOT EXISTS (SELECT 1 FROM auth.users WHERE id = nonadmin_id) THEN
    RAISE EXCEPTION 'Both UUIDs must belong to existing Auth users';
  END IF;
  IF (SELECT count(*) FROM private.blog_admins) <> 1
     OR NOT EXISTS (SELECT 1 FROM private.blog_admins WHERE user_id = admin_id)
     OR EXISTS (SELECT 1 FROM private.blog_admins WHERE user_id = nonadmin_id) THEN
    RAISE EXCEPTION 'Admin allowlist does not match the supplied users';
  END IF;
  IF EXISTS (SELECT 1 FROM public.blog_posts WHERE id = probe_id) THEN
    RAISE EXCEPTION 'Probe ID already exists';
  END IF;
  INSERT INTO public.blog_posts (id, title, slug, body, status)
  VALUES (probe_id, 'RLS authorization probe', 'rls-probe-' || replace(probe_id::text, '-', ''),
          '{"version":1,"text":"Temporary authorization test"}'::jsonb, 'draft');
  IF (SELECT count(*) FROM public.blog_posts WHERE id = probe_id AND status = 'draft') <> 1 THEN
    RAISE EXCEPTION 'Draft fixture was not created';
  END IF;
  RAISE NOTICE 'PASS: existing draft fixture confirmed under setup role';
END $setup$;

SET LOCAL ROLE authenticated;
SELECT set_config('request.jwt.claim.sub', current_setting('exo.rls_nonadmin_id'), true);
SELECT set_config('request.jwt.claim.role', 'authenticated', true);
SELECT set_config('request.jwt.claims',
  json_build_object('sub', current_setting('exo.rls_nonadmin_id'), 'role', 'authenticated')::text, true);

DO $nonadmin$
DECLARE
  probe_id uuid := current_setting('exo.rls_probe_id')::uuid;
  insert_id uuid := current_setting('exo.rls_insert_id')::uuid;
  affected integer;
BEGIN
  IF current_user <> 'authenticated'
     OR (SELECT rolbypassrls FROM pg_roles WHERE rolname = current_user) IS DISTINCT FROM false
     OR (SELECT pg_get_userbyid(relowner) FROM pg_class WHERE oid = 'public.blog_posts'::regclass) = current_user
     OR current_setting('row_security')::boolean IS NOT true
     OR auth.uid() IS DISTINCT FROM current_setting('exo.rls_nonadmin_id')::uuid
     OR public.is_blog_admin() IS NOT false THEN
    RAISE EXCEPTION 'Non-admin role/JWT/RLS context is invalid';
  END IF;
  IF NOT has_table_privilege(current_user, 'public.blog_posts', 'SELECT')
     OR NOT has_table_privilege(current_user, 'public.blog_posts', 'INSERT')
     OR NOT has_table_privilege(current_user, 'public.blog_posts', 'UPDATE')
     OR NOT has_table_privilege(current_user, 'public.blog_posts', 'DELETE') THEN
    RAISE EXCEPTION 'Table grants are missing; this would not test RLS';
  END IF;

  IF (SELECT count(*) FROM public.blog_posts WHERE id = probe_id) <> 0 THEN
    RAISE EXCEPTION 'Non-admin SELECT exposed the draft';
  END IF;
  RAISE NOTICE 'PASS: non-admin SELECT draft DENIED';

  UPDATE public.blog_posts SET title = 'Unauthorized update' WHERE id = probe_id;
  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 0 THEN
    RAISE EXCEPTION 'Non-admin UPDATE changed the existing draft';
  END IF;
  RAISE NOTICE 'PASS: non-admin UPDATE existing draft DENIED';

  DELETE FROM public.blog_posts WHERE id = probe_id;
  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 0 THEN
    RAISE EXCEPTION 'Non-admin DELETE removed the existing draft';
  END IF;
  RAISE NOTICE 'PASS: non-admin DELETE existing draft DENIED';

  BEGIN
    INSERT INTO public.blog_posts (id, title, slug, body, status)
    VALUES (insert_id, 'Unauthorized insert', 'rls-probe-' || replace(insert_id::text, '-', ''),
            '{"version":1,"text":"Should be rejected"}'::jsonb, 'draft');
    RAISE EXCEPTION 'Non-admin INSERT unexpectedly succeeded';
  EXCEPTION WHEN insufficient_privilege THEN
    IF SQLERRM <> 'new row violates row-level security policy for table "blog_posts"' THEN
      RAISE;
    END IF;
    RAISE NOTICE 'PASS: non-admin INSERT DENIED by RLS';
  END;
END $nonadmin$;

RESET ROLE;
SET LOCAL ROLE authenticated;
SELECT set_config('request.jwt.claim.sub', current_setting('exo.rls_admin_id'), true);
SELECT set_config('request.jwt.claim.role', 'authenticated', true);
SELECT set_config('request.jwt.claims',
  json_build_object('sub', current_setting('exo.rls_admin_id'), 'role', 'authenticated')::text, true);

DO $admin$
BEGIN
  IF current_user <> 'authenticated'
     OR (SELECT rolbypassrls FROM pg_roles WHERE rolname = current_user) IS DISTINCT FROM false
     OR (SELECT pg_get_userbyid(relowner) FROM pg_class WHERE oid = 'public.blog_posts'::regclass) = current_user
     OR current_setting('row_security')::boolean IS NOT true
     OR auth.uid() IS DISTINCT FROM current_setting('exo.rls_admin_id')::uuid
     OR public.is_blog_admin() IS NOT true THEN
    RAISE EXCEPTION 'Admin role/JWT/RLS context is invalid';
  END IF;
  IF (SELECT count(*) FROM public.blog_posts
      WHERE id = current_setting('exo.rls_probe_id')::uuid
        AND status = 'draft' AND title = 'RLS authorization probe') <> 1 THEN
    RAISE EXCEPTION 'Admin cannot SELECT the unchanged existing draft';
  END IF;
  RAISE NOTICE 'PASS: admin SELECT draft ALLOWED';
END $admin$;

RESET ROLE;
DO $before_rollback$
BEGIN
  IF (SELECT count(*) FROM public.blog_posts
      WHERE id = current_setting('exo.rls_probe_id')::uuid
        AND status = 'draft' AND title = 'RLS authorization probe') <> 1
     OR EXISTS (SELECT 1 FROM public.blog_posts WHERE id = current_setting('exo.rls_insert_id')::uuid) THEN
    RAISE EXCEPTION 'Fixture changed or unauthorized insert survived';
  END IF;
  RAISE NOTICE 'PASS: probe draft still exists and is unchanged before rollback';
END $before_rollback$;

ROLLBACK;

DO $cleanup$
BEGIN
  IF current_user <> session_user THEN
    RAISE EXCEPTION 'Session role was not restored';
  END IF;
  IF EXISTS (SELECT 1 FROM public.blog_posts WHERE id = current_setting('exo.rls_probe_id')::uuid) THEN
    RAISE EXCEPTION 'Probe draft survived rollback';
  END IF;
  RAISE NOTICE 'PASS: temporary data cleanup VERIFIED';
END $cleanup$;

RESET exo.rls_probe_id;
