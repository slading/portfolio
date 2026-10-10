/**
 * English copy (default language).
 *
 * Project facts are carried over verbatim from the previously verified content.
 * Text marked DRAFT was written for this redesign and needs the owner's review.
 * Do not add achievements, metrics, employers or dates without verification.
 *
 * Values that contain markup (<br>, <span>, <b>) are only ever our own strings.
 */
export const en = {
  meta: {
    title: 'Yauheni Buka | AI-native Software / Product Engineer',
    description:
      'AI-native software and product engineer. Booking systems, AI-assisted tools and engineering case studies.',
  },

  ui: {
    skip: 'Skip to content',
    navAria: 'Main navigation',
    langAria: 'Language',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    themeLabelDark: 'dark',
    themeLabelLight: 'light',
    searchOpen: 'Search',
    searchShortcut: '⌘K',
    searchTitle: 'Search',
    searchPlaceholder: 'Search sections and projects…',
    searchEmpty: 'No results.',
    searchHint: '↑ ↓ to move · Enter to open · Esc to close',
    close: 'Close',
    moreMenu: 'More',
    soon: 'soon',
    opensLive: 'opens live site in a new tab',
    opensRepo: 'opens GitHub repository in a new tab',
    localTime: 'Your time',
    warsawTime: 'Warsaw',
    footerRights: 'All rights reserved.',
  },

  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    resume: 'Resume',
    movies: 'Favourite Movies',
  },

  hero: {
    name: 'Yauheni Buka',
    title: 'AI-native Software / Product Engineer',
    intro:
      'I build production software and AI-assisted tools: booking systems, risk-analysis dashboards and the engineering behind them.',
    emailCta: 'Email me',
    githubCta: 'GitHub',
    location: 'Warsaw, PL',
    bannerLabel: 'Full moon behind clouds over a dark night sky',
    avatarLabel: 'Profile picture of Yauheni Buka',
  },

  music: {
    kicker: 'Music',
    noTrackTitle: 'No track added yet',
    noTrackArtist: 'Tracks will appear here.',
    coverAlt: 'Album artwork',
    play: 'Play',
    pause: 'Pause',
    prev: 'Previous track',
    next: 'Next track',
    seek: 'Seek',
    loading: 'Loading…',
    error: 'This track could not be played.',
    nowPlaying: 'Now playing',
    trackCount: 'tracks',
  },

  tech: {
    kicker: 'Tech stack',
    heading: 'Built with',
    note: 'Only technologies used in the projects below.',
  },

  approach: {
    kicker: 'Approach',
    heading: 'AI-native engineering',
    items: [
      {
        title: 'Start from the manual process',
        text: 'I map how work actually moves between people, spreadsheets and inboxes before choosing any tools.',
      },
      {
        title: 'Prototype on a working slice',
        text: 'Direction gets tested on a small working version, not on an abstract mockup.',
      },
      {
        title: 'Keep AI accountable',
        text: 'Deterministic checks come first. Language models are used where structured judgement helps, with explicit fallbacks and audit trails.',
      },
    ],
  },

  projects: {
    kicker: 'Featured',
    heading: 'Projects',
    statusProduction: 'Production',
    statusPrototype: 'Prototype',
    statusProof: 'Technical proof',
    liveLink: 'Live site',
    githubLink: 'GitHub',
    caseStudy: 'Case study',
    previewLabel: 'Live preview',
    screenshotPlaceholder: 'Screenshot placeholder',
    previewPending: 'Demo details to come',
    pendingSummary: 'Description and repository link to be added by the owner.',
    items: {
      n2d: {
        name: 'N2D Nails',
        summary:
          'A production booking system built for a real business operating two salons.',
        visualNote: 'Visual source: a local copy of the real N2D application — demo interface.',
        facts: [
          {
            label: 'PROBLEM',
            text: 'Bookings, availability and schedule changes need one consistent process for clients and salon staff.',
          },
          {
            label: 'BUILT',
            text: 'Customer booking flow, staff/admin workflows, Supabase-backed database and auth, plus server-authoritative availability and capacity logic.',
          },
          {
            label: 'CAPABILITIES',
            text: 'Salon/service/date/time selection, duration-aware scheduling, manual staff bookings, blocked periods, rescheduling, cancellation, customer contact information, notes and optional reference photo.',
          },
          {
            label: 'STATUS',
            text: 'Production deployment on Vercel. Production behavior manually verified.',
          },
        ],
      },
      sentinel: {
        name: 'SentinelAI',
        summary:
          'A dashboard for detecting suspicious transaction patterns and routing alerts into compliance workflows.',
        facts: [
          {
            label: 'PROBLEM',
            text: 'Suspicious transaction patterns are difficult to review consistently at scale.',
          },
          {
            label: 'BUILT',
            text: 'Multi-hop, velocity and location anomaly detection with structured risk verdicts, routing and a chained audit trail.',
          },
          {
            label: 'ENGINEERING',
            text: 'Statistical fraud/anomaly signals and chained SHA-256 audit logging, with Docker and Vercel deployment paths.',
          },
          {
            label: 'STATUS',
            text: 'Applied-AI/backend technical proof.',
          },
        ],
      },
      rfq: {
        name: 'Project 04 — AI RFQ Operations Agent',
        summary: 'Details pending. The owner will provide the description and repository link.',
        facts: [],
      },
      solana: {
        name: 'Solana On-chain Intelligence Assistant',
        summary:
          'Engineering proof-of-work: turning raw Solana transaction data into deterministic, explainable structure.',
        facts: [
          {
            label: 'PROBLEM',
            text: 'Raw on-chain transaction data is nested, inconsistent and difficult to explain without a canonical model.',
          },
          {
            label: 'BUILT',
            text: 'TypeScript CLI, real Solana mainnet transactions through JSON-RPC, canonical normalization, top-level and inner instruction processing, logs and balance changes.',
          },
          {
            label: 'DETAIL',
            text: 'Action/effect/swap summaries, explicit unknown-data diagnostics, exact balance-delta handling, versioned transactions and fixture-based tests from recorded RPC payloads.',
          },
          {
            label: 'STATUS',
            text: 'Technical engineering proof.',
          },
        ],
      },
    },
    moreHeading: 'More projects',
  },

  github: {
    kicker: 'GitHub activity',
    heading: 'Contributions',
    caption: '{total} contributions in the last 12 months',
    handle: '@slading',
    less: 'Less',
    more: 'More',
    snapshot: 'Snapshot from {date}',
    unavailable: 'Activity data is not available right now.',
  },

  pages: {
    resume: {
      title: 'Resume',
      intro: 'My CV in PDF form: experience, education and skills.',
      openPdf: 'Open PDF',
      download: 'Download',
      viewerTitle: 'Resume PDF',
      viewerFallback: 'If the PDF does not display here, use Open PDF.',
      pendingTitle: 'CV not published yet',
      pendingText: 'The PDF will appear here once it is added to the site.',
    },
    favourites: {
      title: 'Favourites',
      intro: 'Films I keep coming back to. The list is added title by title.',
      moviesKicker: 'Movies',
      emptyTitle: 'No films listed yet',
      emptyText: 'The list will appear here once it is added.',
    },
  },

  search: {
    emailHint: 'email',
    items: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      n2d: 'N2D Nails',
      sentinel: 'SentinelAI',
      rfq: 'Project 04 — AI RFQ Operations Agent',
      solana: 'Solana On-chain Intelligence Assistant',
      github: 'GitHub activity',
      music: 'Music',
      contact: 'Email me',
      resume: 'Resume',
      favourites: 'Favourite Movies',
    },
  },

};

export type Messages = typeof en;
