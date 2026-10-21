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
    title: 'Yauheni Buka | AI Engineer | Applied AI & Backend Systems',
    resumeTitle: 'Resume | Yauheni Buka',
    favouritesTitle: 'Favourite Movies | Yauheni Buka',
    blogTitle: 'Journal | Yauheni Buka',
    notFoundTitle: 'Page not found | Yauheni Buka',
    description:
      'Applied AI engineer building LLM-powered applications, backend systems and real-world software. Python, FastAPI, TypeScript and structured LLM outputs.',
    blogDescription: 'Personal notes on life, engineering, experiments, business and building in public.',
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
    searchButton: 'Search ⌘K',
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
    blog: 'Journal',
    resume: 'Resume',
    movies: 'Favourite Movies',
  },

  hero: {
    name: 'Yauheni Buka',
    title: 'AI Engineer | LLM Applications & Agentic Systems',
    intro:
      'I build AI-powered applications using LLMs, structured outputs, and intelligent workflows. My focus is turning AI capabilities into reliable, production-oriented software with clear validation, human oversight, and robust backend architecture.'
    emailCta: 'Email me',
    githubCta: 'GitHub',
    location: 'Warsaw, PL',
    bannerLabel: 'Full moon behind clouds over a dark night sky',
    avatarLabel: 'Profile picture of Yauheni Buka',
  },

  music: {
    kicker: 'Now playing',
    play: 'Play',
    pause: 'Pause',
    seek: 'Seek',
    error: 'The audio could not be played here. Open the track title to listen on Spotify.',
    missing: 'Audio file not published yet.',
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
    statusEngineeringPrototype: 'Engineering prototype',
    statusProof: 'Technical proof',
    liveLink: 'Live site',
    githubLink: 'GitHub',
    caseStudy: 'Case study',
    previewLabel: 'Live preview',
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
          'A read-only public demo of four synthetic investigations, with structured verdicts, compliance tickets, client notices and aggregate reporting.',
        facts: [
          {
            label: 'PUBLIC DEMO',
            text: 'Explore four precomputed synthetic investigations. The demo is read-only and uses no real customer data, live AI calls, pipeline execution or email delivery.',
          },
          {
            label: 'BUILT',
            text: 'Each investigation presents evidence and a structured AI verdict, followed by a compliance ticket and client notice.',
          },
          {
            label: 'REPORTING',
            text: 'An aggregate report summarizes the synthetic batch, including verdict distribution, recommended actions and stored usage estimates.',
          },
          {
            label: 'STATUS',
            text: 'Prototype with a released, read-only public demo.',
          },
        ],
      },
      rfq: {
        name: 'Project 04 — AI RFQ Operations Agent',
        summary:
          'An engineering prototype for processing incoming requests for quotation (RFQs). Implemented so far: deterministic resolution of customer references, pricing, stock, delivery and discount rules, quote calculation, a blocking ledger, and an eligibility check for human review, stored in SQLite with append-only audit records. AI-assisted extraction and the human approval step are planned for future development.',
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
    scrollLabel: 'GitHub contribution calendar, scrolls horizontally',
  },

  pages: {
    blog: {
      kicker: 'Field notes',
      title: 'Journal',
      intro: 'Thoughts on life, engineering, experiments, business and building in public. A place for the unfinished ideas, too.',
      emptyTitle: 'Nothing here yet',
      emptyText: 'No entries have been published yet. Check back soon.',
      back: 'Back to the portfolio',
    },
    notFound: {
      title: 'Page not found',
      intro: 'The page you are looking for does not exist or has moved.',
      home: 'Back to home',
      resume: 'Resume',
      favourites: 'Favourite Movies',
    },
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
      intro: 'Stories that stay with me. Psychological thrillers, morally complicated characters, impossible choices, and the occasional obsession with ambition. Also, yes — I really like Jake Gyllenhaal.',
      moviesKicker: 'Films and series',
      tvSeries: 'TV series',
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
      blog: 'Journal',
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
