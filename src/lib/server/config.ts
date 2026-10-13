import { getSecret } from 'astro:env/server';

export function supabaseConfig() {
  const url = getSecret('SUPABASE_URL');
  const key = getSecret('SUPABASE_PUBLISHABLE_KEY');
  const adminId = getSecret('SUPABASE_ADMIN_USER_ID');
  return {
    url,
    key,
    adminId,
    configured: Boolean(url?.trim() && key?.trim() && adminId?.trim()),
  };
}
