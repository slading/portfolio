import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from './config';

export function createPublicContentClient() {
  const { url, key } = supabaseConfig();
  if (!url?.trim() || !key?.trim()) throw new Error('Supabase public content configuration is missing');

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}
