/**
 * Project data: status, links, images and stack. Wording lives in src/i18n/{en,pl}.ts.
 *
 * Status is shown on every card: "production" = deployed and used; "prototype" = demo or
 * proof-of-concept. Keep the two clearly separate.
 */
export type ProjectStatus = 'production' | 'prototype' | 'proof';

export interface ProjectLink {
  label: 'live' | 'github';
  href: string;
}

export interface Project {
  id: 'n2d' | 'sentinel' | 'rfq' | 'solana';
  status: ProjectStatus;
  /** Anchor for the in-page search and links. */
  anchor: string;
  /** Path under public/ for the card image. Omit for a text-only card (no placeholder is shown). */
  image?: string;
  /** Optional i18n key for the status label, when a project needs more than the generic status. */
  statusKey?: string;
  /** Renders the N2D demo iframe instead of a static image. */
  liveFrame?: 'n2d';
  links: ProjectLink[];
  /** Tech ids from src/data/stack.ts. */
  stack: string[];
}

export const featured: Project[] = [
  {
    id: 'n2d',
    status: 'production',
    anchor: 'project-n2d',
    liveFrame: 'n2d',
    links: [
      { label: 'live', href: 'https://nail-booking-pi.vercel.app' },
      { label: 'github', href: 'https://github.com/slading/nail-booking' },
    ],
    stack: ['javascript', 'supabase', 'vercel'],
  },
  {
    id: 'rfq',
    status: 'prototype',
    statusKey: 'statusEngineeringPrototype',
    anchor: 'project-rfq',
    links: [],
    stack: [],
  },
  {
    id: 'sentinel',
    status: 'prototype',
    anchor: 'project-sentinel',
    image: 'assets/sentinel.png',
    links: [
      { label: 'live', href: 'https://sentinel-ai-ten-nu.vercel.app' },
      { label: 'github', href: 'https://github.com/slading/SentinelAI' },
    ],
    stack: ['python', 'fastapi', 'pydantic', 'groq', 'docker', 'vercel'],
  },
];

export const additional: Project[] = [
  {
    id: 'solana',
    status: 'proof',
    anchor: 'project-solana',
    links: [{ label: 'github', href: 'https://github.com/slading/solana-onchain-intel' }],
    stack: ['typescript', 'solana'],
  },
];

export const contactEmail = 'yauhenibuka@gmail.com';
export const githubProfile = 'https://github.com/slading';
