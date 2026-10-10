/**
 * Polish copy (secondary language). Same keys as en.ts; TypeScript enforces parity.
 * Project facts are the previously verified Polish wording. Text marked DRAFT is new
 * and needs the owner's review.
 */
import type { Messages } from './en';

export const pl: Messages = {
  meta: {
    title: 'Yauheni Buka | AI-native Software / Product Engineer',
    description:
      'Inżynier oprogramowania i produktu AI-native. Systemy rezerwacji, narzędzia wspierane AI i studia przypadków inżynierskich.',
  },

  ui: {
    skip: 'Przejdź do treści',
    navAria: 'Główna nawigacja',
    langAria: 'Język',
    themeToDark: 'Przełącz na ciemny motyw',
    themeToLight: 'Przełącz na jasny motyw',
    themeLabelDark: 'ciemny',
    themeLabelLight: 'jasny',
    searchOpen: 'Szukaj',
    searchShortcut: '⌘K',
    searchTitle: 'Szukaj',
    searchPlaceholder: 'Szukaj sekcji i projektów…',
    searchEmpty: 'Brak wyników.',
    searchHint: '↑ ↓ przesuwanie · Enter otwórz · Esc zamknij',
    close: 'Zamknij',
    moreMenu: 'Więcej',
    soon: 'wkrótce',
    opensLive: 'otwiera działającą stronę w nowej karcie',
    opensRepo: 'otwiera repozytorium GitHub w nowej karcie',
    localTime: 'Twój czas',
    warsawTime: 'Warszawa',
    footerRights: 'Wszelkie prawa zastrzeżone.',
  },

  nav: {
    home: 'Start',
    about: 'O mnie',
    projects: 'Projekty',
    resume: 'CV',
    movies: 'Ulubione filmy',
  },

  hero: {
    name: 'Yauheni Buka',
    title: 'AI-native Software / Product Engineer',
    intro:
      'Buduję produkcyjne oprogramowanie i narzędzia wspierane AI: systemy rezerwacji, panele analizy ryzyka i inżynierię, która za nimi stoi.',
    emailCta: 'Napisz do mnie',
    githubCta: 'GitHub',
    location: 'Warszawa, PL',
    bannerLabel: 'Pełnia księżyca za chmurami nad ciemnym niebem',
    avatarLabel: 'Zdjęcie profilowe Yauheni Buki',
  },

  music: {
    kicker: 'Muzyka',
    noTrackTitle: 'Nie dodano jeszcze utworu',
    noTrackArtist: 'Utwory pojawią się tutaj.',
    coverAlt: 'Okładka albumu',
    play: 'Odtwórz',
    pause: 'Pauza',
    prev: 'Poprzedni utwór',
    next: 'Następny utwór',
    seek: 'Przewiń',
    loading: 'Wczytywanie…',
    error: 'Nie udało się odtworzyć tego utworu.',
    nowPlaying: 'Teraz gra',
    trackCount: 'utworów',
  },

  tech: {
    kicker: 'Stack technologiczny',
    heading: 'Zbudowane z',
    note: 'Tylko technologie użyte w projektach poniżej.',
  },

  approach: {
    kicker: 'Podejście',
    heading: 'Inżynieria AI-native',
    items: [
      {
        title: 'Zacznij od ręcznego procesu',
        text: 'Mapuję, jak praca naprawdę przechodzi między ludźmi, arkuszami i skrzynkami, zanim wybiorę narzędzia.',
      },
      {
        title: 'Prototyp na działającym fragmencie',
        text: 'Kierunek testujemy na małej, działającej wersji, a nie na abstrakcyjnej makiecie.',
      },
      {
        title: 'AI z odpowiedzialnością',
        text: 'Najpierw deterministyczne kontrole. Modele językowe używam tam, gdzie pomaga ustrukturyzowana ocena, z jawnymi ścieżkami awaryjnymi i logami audytowymi.',
      },
    ],
  },

  projects: {
    kicker: 'Wybrane',
    heading: 'Projekty',
    statusProduction: 'Produkcja',
    statusPrototype: 'Prototyp',
    statusProof: 'Dowód techniczny',
    liveLink: 'Strona na żywo',
    githubLink: 'GitHub',
    caseStudy: 'Studium przypadku',
    previewLabel: 'Podgląd na żywo',
    screenshotPlaceholder: 'Miejsce na zrzut ekranu',
    previewPending: 'Szczegóły demo wkrótce',
    pendingSummary: 'Opis i link do repozytorium uzupełni właściciel.',
    items: {
      n2d: {
        name: 'N2D Nails',
        summary:
          'Produkcyjny system rezerwacji zbudowany dla realnego biznesu prowadzącego dwa salony.',
        visualNote: 'Źródło wizualne: lokalna kopia rzeczywistej aplikacji N2D — interfejs demonstracyjny.',
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
      },
      sentinel: {
        name: 'SentinelAI',
        summary:
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
      rfq: {
        name: 'Project 04 — AI RFQ Operations Agent',
        summary: 'Szczegóły w przygotowaniu. Właściciel uzupełni opis i link do repozytorium.',
        facts: [],
      },
      solana: {
        name: 'Solana On-chain Intelligence Assistant',
        summary:
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
      },
    },
    moreHeading: 'Więcej projektów',
  },

  github: {
    kicker: 'Aktywność na GitHub',
    heading: 'Wkład w kod',
    caption: '{total} wkładów w ciągu ostatnich 12 miesięcy',
    handle: '@slading',
    less: 'Mniej',
    more: 'Więcej',
    snapshot: 'Stan z {date}',
    unavailable: 'Dane o aktywności są teraz niedostępne.',
  },

  search: {
    items: {
      home: 'Start',
      about: 'O mnie',
      projects: 'Projekty',
      n2d: 'N2D Nails',
      sentinel: 'SentinelAI',
      rfq: 'Project 04 — AI RFQ Operations Agent',
      solana: 'Solana On-chain Intelligence Assistant',
      github: 'Aktywność na GitHub',
      music: 'Muzyka',
      contact: 'Napisz do mnie',
    },
  },

};
