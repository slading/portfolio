/**
 * Technologies that appear in the portfolio's real projects (see projects.ts).
 * `icon` is an export name from the `simple-icons` package. Without one, a text tile is shown.
 * Only add a technology after a project actually uses it.
 */
export interface TechItem {
  id: string;
  label: string;
  icon?: string;
}

export const stack: TechItem[] = [
  { id: 'javascript', label: 'JavaScript', icon: 'siJavascript' },
  { id: 'typescript', label: 'TypeScript', icon: 'siTypescript' },
  { id: 'python', label: 'Python', icon: 'siPython' },
  { id: 'fastapi', label: 'FastAPI', icon: 'siFastapi' },
  { id: 'pydantic', label: 'Pydantic', icon: 'siPydantic' },
  { id: 'supabase', label: 'Supabase', icon: 'siSupabase' },
  { id: 'vercel', label: 'Vercel', icon: 'siVercel' },
  { id: 'docker', label: 'Docker', icon: 'siDocker' },
  { id: 'groq', label: 'Groq' },
  { id: 'solana', label: 'Solana', icon: 'siSolana' },
];
