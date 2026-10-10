/**
 * Non-copy project data: links, image paths and ids.
 * All user-facing wording lives in src/i18n/{en,pl}.ts.
 * Links are carried over verbatim from the original index.html.
 */
export type ProjectId = 'n2d' | 'sentinel' | 'solana';

export interface ProjectLink {
  label: 'live' | 'github';
  href: string;
}

export interface Project {
  id: ProjectId;
  /** Anchor id of the case-study section. */
  anchor: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 'n2d',
    anchor: 'case-n2d',
    links: [
      { label: 'live', href: 'https://nail-booking-pi.vercel.app' },
      { label: 'github', href: 'https://github.com/slading/nail-booking' },
    ],
  },
  {
    id: 'sentinel',
    anchor: 'case-sentinel',
    links: [
      { label: 'live', href: 'https://sentinel-ai-ten-nu.vercel.app' },
      { label: 'github', href: 'https://github.com/slading/SentinelAI' },
    ],
  },
  {
    id: 'solana',
    anchor: 'case-solana',
    links: [{ label: 'github', href: 'https://github.com/slading/solana-onchain-intel' }],
  },
];

/** Static asset paths (served from /public). */
export const assets = {
  n2dStaff: 'assets/n2d/staff.html',
  n2dCustomer: 'assets/n2d/customer.html',
  sentinelShot: 'assets/sentinel.png',
  mascot: 'assets/mascot/mascot-final.png',
} as const;

export const contactEmail = 'yauhenibuka@gmail.com';
