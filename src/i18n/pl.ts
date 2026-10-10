/**
 * Polish copy (secondary language).
 *
 * Source: the `pl` entries of the bilingual `copy` dictionary in the original
 * single-file index.html (commit d466d15). Wording is preserved verbatim.
 * `satisfies`-style typing (`: Messages`) guarantees the same keys as en.ts.
 */
import type { Messages } from './en';

export const pl: Messages = {
  meta: {
    title: 'Żenia Buka — automatyzuję nudne rzeczy',
    description:
      'Buduję konfiguratory, narzędzia do ofertowania, formularze zamówień i małe aplikacje, które zastępują ręczną robotę.',
  },

  ui: {
    skip: 'Przejdź do treści',
    navAria: 'Główna nawigacja',
    languageAria: 'Język',
    cursorView: 'VIEW',
    emailAria: 'Napisz do Żeni Buki',
    opensLive: 'otwiera działającą stronę w nowej karcie',
    opensRepo: 'otwiera repozytorium GitHub w nowej karcie',
    footerRights: 'Wszelkie prawa zastrzeżone.',
  },

  nav: {
    work: 'projekty',
    contact: 'kontakt',
    topline: 'INDEPENDENT BUILDER / WARSAW / PL',
    themeDark: 'dark mode',
    themeLight: 'light mode',
  },

  hero: {
    eyebrow: '01 — automatyzacja procesów',
    scroll: 'scroll ↓',
    availability: 'DOSTĘPNY DO PROJEKTÓW AUTOMATYZACJI',
    titleHtml: 'AUTOMATYZUJĘ<br><span><em>NUDNE</em> RZECZY.</span>',
    lead: 'Buduję konfiguratory, narzędzia do ofertowania, formularze zamówień i małe aplikacje, które zastępują ręczną robotę.',
    ctaHtml: 'Pokaż mi swój proces <b>↗</b>',
    footer: ['ŻENIA — SELLING', 'AI — BUILDING', 'CLIENT — HOPEFULLY ANSWERING THE PHONE'],
    scrollExploreHtml: 'DRAG / SCROLL TO EXPLORE <b>↓</b>',
  },

  intro: {
    kicker: '02 / po co to wszystko',
    aside: 'bez slajdów o synergii',
    statementHtml:
      'Jeśli proces ma pięć kroków, trzy arkusze i jedną osobę, która „wie jak to działa” — <span class="accent">to jest mój teren.</span>',
  },

  process: {
    kicker: 'jak pracuję',
    copy: 'Nie sprzedaję magii. Najpierw rozplątuję ręczną robotę, potem buduję narzędzie, które ktoś naprawdę chce otworzyć w poniedziałek rano.',
    steps: [
      {
        title: 'Rozmowa bez formularza',
        text: 'Patrzę na to, co dzieje się między „dostaliśmy maila” a „wysłaliśmy ofertę”.',
      },
      {
        title: 'Mały prototyp, szybko',
        text: 'Sprawdzamy kierunek na działającym kawałku, nie na abstrakcyjnej makiecie.',
      },
      {
        title: 'Narzędzie do używania',
        text: 'Prosty interfejs, konkretne dane, mniej przeklejania i mniej pytań „gdzie to było?”.',
      },
    ],
  },

  works: {
    titleHtml: 'Rzeczy<br><span class="accent">zrobione.</span>',
    count: '03 PROJEKTY',
    hint: 'najedź na indeks →',
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
        'Produkcyjny system rezerwacji zbudowany dla realnego biznesu prowadzącego dwa salony.',
      scope: ['customer flow', 'staff workflows', 'server-authoritative availability'],
      facts: [
        {
          label: 'PROBLEM',
          text: 'Rezerwacje, dostępność i zmiany terminów wymagają spójnego procesu po stronie klientek i zespołu salonu.',
        },
        {
          label: 'BUILT',
          text: 'Customer booking flow, staff/admin workflows, baza danych i auth oparte o Supabase oraz serwerowa logika dostępności i pojemności.',
        },
        {
          label: 'CAPABILITIES',
          text: 'Wybór salonu, usługi, daty i godziny; planowanie uwzględniające czas trwania; ręczne rezerwacje personelu; zablokowane okresy; zmiana terminu; anulowanie; dane kontaktowe klientki; notatki i opcjonalne zdjęcie referencyjne.',
        },
        {
          label: 'STATUS',
          text: 'Wdrożenie produkcyjne na Vercel. Zachowanie produkcji ręcznie zweryfikowane.',
        },
      ],
      visualCaptions: ['STAFF / CALENDAR / LIVE APP', 'CLIENT / BOOKING FLOW / LIVE APP'],
      visualNote:
        'Źródło wizualne: lokalna kopia rzeczywistej aplikacji N2D — interfejs demonstracyjny.',
    },
    sentinel: {
      kicker: 'project / 02',
      kickerTitle: 'SentinelAI — regtech / demo',
      title: 'Sentinel',
      accent: 'AI.',
      intro:
        'Dashboard do wykrywania podejrzanych wzorców transakcji i kierowania alertów do workflow compliance.',
      facts: [
        {
          label: 'PROBLEM',
          text: 'Podejrzane wzorce transakcji trudno konsekwentnie przeglądać na większą skalę.',
        },
        {
          label: 'BUILT',
          text: 'Wykrywanie anomalii wieloetapowych, skoków częstotliwości i niezgodności lokalizacji; ustrukturyzowane oceny ryzyka, routing alertów i łańcuch audytowy.',
        },
        {
          label: 'ENGINEERING',
          text: 'Statystyczne sygnały fraud/anomaly i łańcuch logów audytowych SHA-256, z możliwymi ścieżkami wdrożenia przez Docker i Vercel.',
        },
        {
          label: 'STATUS',
          text: 'Proof inżynierski.',
        },
      ],
    },
    solana: {
      kicker: 'project / 03',
      kickerTitle: 'Solana On-chain Intelligence Assistant — technical proof',
      title: 'Solana',
      accent: 'INTEL.',
      intro:
        'Inżynierski proof-of-work: zamiana surowych danych transakcji Solana w deterministyczną, objaśnialną strukturę.',
      facts: [
        {
          label: 'PROBLEM',
          text: 'Surowe dane transakcji on-chain są zagnieżdżone, niespójne i trudne do wyjaśnienia bez kanonicznego modelu.',
        },
        {
          label: 'BUILT',
          text: 'TypeScript CLI, realne transakcje Solana mainnet przez JSON-RPC, normalizacja do kanonicznego modelu, obsługa instrukcji top-level i inner, logów oraz zmian salda.',
        },
        {
          label: 'DETAIL',
          text: 'Podsumowania akcji/efektów/swapów, jawne diagnostyki nieznanych danych, dokładne delty salda, transakcje wersjonowane i testy fixture-based z zapisanych payloadów RPC.',
        },
        {
          label: 'STATUS',
          text: 'Proof inżynierski.',
        },
      ],
      proof: ['RAW RPC', 'NORMALIZED TRANSACTION', 'DIAGNOSTICS'],
    },
  },

  contact: {
    kicker: '03 / porozmawiajmy',
    aside: 'no pitch deck needed',
    titleHtml: 'Masz coś, co nadal <span>robicie ręcznie?</span>',
    note: 'Napisz dwa zdania. Odpiszę z pytaniem, nie z automatyczną ofertą.',
  },

  music: {
    aria: 'Włącz muzykę',
    ariaOff: 'Wyłącz muzykę',
    off: 'MUSIC OFF',
    on: 'MUSIC ON',
    add: 'ADD AUDIO FILE',
    unavailable: 'AUDIO NIEDOSTĘPNE',
    loading: 'WCZYTYWANIE…',
  },

  aria: {
    sentinel: 'SentinelAI dashboard screenshot',
    staff: 'N2D staff calendar and booking management interface',
    customer: 'N2D customer booking flow',
  },
};
