import { getSecret } from 'astro:env/server';
import { formatConfigStatus, inspectConfig } from './config-status';

let lastReported = '';

export function supabaseConfig() {
  const values = {
    SUPABASE_URL: getSecret('SUPABASE_URL'),
    SUPABASE_PUBLISHABLE_KEY: getSecret('SUPABASE_PUBLISHABLE_KEY'),
    SUPABASE_ADMIN_USER_ID: getSecret('SUPABASE_ADMIN_USER_ID'),
  };
  const { present, missing } = inspectConfig(values);
  const signature = `${present.join(',')}|${missing.join(',')}`;
  if (signature !== lastReported) {
    console.info(`[exo] Supabase runtime variables: ${formatConfigStatus({ present, missing })}`);
    lastReported = signature;
  }
  return {
    url: values.SUPABASE_URL,
    key: values.SUPABASE_PUBLISHABLE_KEY,
    adminId: values.SUPABASE_ADMIN_USER_ID,
    configured: missing.length === 0,
  };
}
