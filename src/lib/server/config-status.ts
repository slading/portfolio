export const supabaseVariableNames = ['SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY', 'SUPABASE_ADMIN_USER_ID'] as const;

export type SupabaseVariableName = (typeof supabaseVariableNames)[number];

export function inspectConfig(values: Record<SupabaseVariableName, string | undefined>) {
  const present = supabaseVariableNames.filter((name) => Boolean(values[name]?.trim()));
  const missing = supabaseVariableNames.filter((name) => !values[name]?.trim());
  return { present, missing };
}

export function formatConfigStatus(status: ReturnType<typeof inspectConfig>) {
  return `present=${status.present.join(',') || '(none)'}; missing=${status.missing.join(',') || '(none)'}`;
}
