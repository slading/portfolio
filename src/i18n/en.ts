/**
 * English copy (default language).
 *
 * Source: the bilingual `copy` dictionary in the original single-file index.html
 * (commit d466d15). Wording is preserved verbatim. Do not add achievements,
 * metrics or experience here without the owner's verified confirmation.
 *
 * Keys ending in `Html` / values used with `data-i18n-html` may contain a small
 * amount of trusted inline markup (<br>, <span>, <em>, <b>). Never put user input here.
 */
export const en = {
  meta: {
    title: 'Żenia Buka — automating boring work',
    description:
      'I build configurators, quoting tools, order forms and small apps that replace manual work.',
  },

  ui: {
    skip: 'Skip to content',
    navAria: 'Main navigation',
    languageAria: 'Language',
    cursorView: 'VIEW',
    emailAria: 'Email Żenia Buka',
    opensLive: 'opens live site in a new tab',
    opensRepo: 'opens GitHub repository in a new tab',
    footerRights: 'All rights reserved.',
  },

  nav: {
    work: 'projects',
    contact: 'contact',
    topline: 'INDEPENDENT BUILDER / WARSAW / PL',
    themeDark: 'dark mode',
    themeLight: 'light mode',
  },

  hero: {
    eyebrow: '01 — process automation',
    scroll: 'scroll ↓',
    availability: 'AVAILABLE FOR AUTOMATION PROJECTS',
    titleHtml: 'AUTOMATING<br><span><em>BORING</em> WORK.</span>',
    lead: 'I build configurators, quoting tools, order forms and small apps that replace manual work.',
    ctaHtml: 'Show me your process <b>↗</b>',
    footer: ['ŻENIA — SELLING', 'AI — BUILDING', 'CLIENT — HOPEFULLY ANSWERING THE PHONE'],
    scrollExploreHtml: 'DRAG / SCROLL TO EXPLORE <b>↓</b>',
  },

  intro: {
    kicker: '02 / why this exists',
    aside: 'no synergy slides',
    statementHtml:
      'If a process has five steps, three spreadsheets and one person who “knows how it works” — <span class="accent">that is my territory.</span>',
  },

  process: {
    kicker: 'how I work',
    copy: 'I do not sell magic. First I untangle the manual work, then I build a tool someone actually wants to open on Monday morning.',
    steps: [
      {
        title: 'A conversation, no form',
        text: 'I look at what happens between “we got an email” and “we sent the quote”.',
      },
      {
        title: 'A small prototype, fast',
        text: 'We test the direction on a working slice, not an abstract mockup.',
      },
      {
        title: 'A tool people use',
        text: 'Clear interface, useful data, less copy-pasting and fewer “where was that?” questions.',
      },
    ],
  },

  works: {
    titleHtml: 'Things<br><span class="accent">built.</span>',
    count: '03 PROJECTS',
    hint: 'hover the index →',
    items: {
      n2d: { meta: 'PRODUCTION / BOOKING SYSTEM', preview: 'PRODUCTION SYSTEM' },
      sentinel: { meta: 'APPLIED AI / BACKEND PROOF', preview: 'REAL PROJECT SCREENSHOT' },
      solana: { meta: 'TYPESCRIPT / TECHNICAL PROOF', preview: 'REPOSITORY / TECHNICAL PROOF' },
    },
  },

  cases: {
    n2d: {
      kicker: 'project / 01',
      kickerTitle: 'N2D — production booking system',
      title: 'N2D',
      accent: 'BOOKING.',
      intro:
        'A production booking system built for a real business operating two salons.',
      scope: ['customer flow', 'staff workflows', 'server-authoritative availability'],
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
      visualCaptions: ['STAFF / CALENDAR / LIVE APP', 'CLIENT / BOOKING FLOW / LIVE APP'],
      visualNote: 'Visual source: a local copy of the real N2D application — demo interface.',
    },
    sentinel: {
      kicker: 'project / 02',
      kickerTitle: 'SentinelAI — regtech / demo',
      title: 'Sentinel',
      accent: 'AI.',
      intro:
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
    solana: {
      kicker: 'project / 03',
      kickerTitle: 'Solana On-chain Intelligence Assistant — technical proof',
      title: 'Solana',
      accent: 'INTEL.',
      intro:
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
      proof: ['RAW RPC', 'NORMALIZED TRANSACTION', 'DIAGNOSTICS'],
    },
  },

  contact: {
    kicker: '03 / let’s talk',
    aside: 'no pitch deck needed',
    titleHtml: 'Got something you still <span>do by hand?</span>',
    note: 'Write two sentences. I will reply with a question, not an automated proposal.',
  },

  music: {
    aria: 'Turn music on',
    ariaOff: 'Turn music off',
    off: 'MUSIC OFF',
    on: 'MUSIC ON',
    add: 'ADD AUDIO FILE',
    unavailable: 'AUDIO UNAVAILABLE',
    loading: 'LOADING…',
  },

  aria: {
    sentinel: 'SentinelAI dashboard screenshot',
    staff: 'N2D staff calendar and booking management interface',
    customer: 'N2D customer booking flow',
  },
};

export type Messages = typeof en;
