/**
 * Polish copy (secondary language). Same keys as en.ts; TypeScript enforces parity.
 * Project facts are the previously verified Polish wording. Text marked DRAFT is new
 * and needs the owner's review.
 */
import type { Messages } from './en';

export const pl: Messages = {
  meta: {
    title: 'Yauheni Buka | AI Engineer | Applied AI & Backend Systems',
    resumeTitle: 'CV | Yauheni Buka',
    favouritesTitle: 'Ulubione filmy | Yauheni Buka',
    blogTitle: 'Dziennik | Yauheni Buka',
    notFoundTitle: 'Nie znaleziono strony | Yauheni Buka',
    description:
      'Inżynier Applied AI tworzący aplikacje oparte na LLM, systemy backendowe i oprogramowanie dla rzeczywistych firm. Python, FastAPI, TypeScript i ustrukturyzowane wyniki LLM.',
    blogDescription: 'Osobiste notatki o życiu, inżynierii, eksperymentach, biznesie i budowaniu publicznie.',
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
    searchButton: 'Szukaj ⌘K',
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
    blog: 'Dziennik',
    resume: 'CV',
    movies: 'Ulubione filmy',
  },

  hero: {
    name: 'Yauheni Buka',
    title: 'AI-native Software / Product Engineer',
    intro:
      'Tworzę aplikacje wykorzystujące AI i niezawodne systemy backendowe. Łączę integracje LLM, ustrukturyzowane wyniki AI, API oraz oprogramowanie dla rzeczywistych firm.',
    emailCta: 'Napisz do mnie',
    githubCta: 'GitHub',
    location: 'Warszawa, PL',
    bannerLabel: 'Pełnia księżyca za chmurami nad ciemnym niebem',
    avatarLabel: 'Zdjęcie profilowe Yauheni Buki',
  },

  music: {
    kicker: 'Teraz gra',
    play: 'Odtwórz',
    pause: 'Pauza',
    seek: 'Przewiń',
    error: 'Nie udało się odtworzyć nagrania tutaj. Kliknij tytuł utworu, aby posłuchać go w Spotify.',
    missing: 'Plik audio nie jest jeszcze opublikowany.',
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
    statusEngineeringPrototype: 'Prototyp inżynierski',
    statusProof: 'Dowód techniczny',
    liveLink: 'Strona na żywo',
    githubLink: 'GitHub',
    caseStudy: 'Studium przypadku',
    previewLabel: 'Podgląd na żywo',
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
            label: 'ZBUDOWANO',
            text: 'Customer booking flow, staff/admin workflows, baza danych i auth oparte o Supabase oraz serwerowa logika dostępności i pojemności.',
          },
          {
            label: 'MOŻLIWOŚCI',
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
          'Publiczne demo tylko do odczytu z czterema syntetycznymi dochodzeniami, ustrukturyzowanymi werdyktami, zgłoszeniami compliance, powiadomieniami klientów i raportowaniem zbiorczym.',
        facts: [
          {
            label: 'PUBLICZNE DEMO',
            text: 'Demo prezentuje cztery wstępnie przygotowane syntetyczne dochodzenia. Jest tylko do odczytu i nie wykorzystuje prawdziwych danych klientów, wywołań AI na żywo, uruchamiania pipeline’u ani wysyłki e-maili.',
          },
          {
            label: 'ZBUDOWANO',
            text: 'Każde dochodzenie przedstawia dowody i ustrukturyzowany werdykt AI, a następnie zgłoszenie compliance i powiadomienie klienta.',
          },
          {
            label: 'RAPORTOWANIE',
            text: 'Raport zbiorczy podsumowuje syntetyczną partię, w tym rozkład werdyktów, zalecane działania i zapisane szacunki użycia.',
          },
          {
            label: 'STATUS',
            text: 'Prototyp z udostępnionym publicznie demo tylko do odczytu.',
          },
        ],
      },
      rfq: {
        name: 'Project 04 — AI RFQ Operations Agent',
        summary:
          'Prototyp inżynierski do przetwarzania przychodzących zapytań ofertowych (RFQ). Zrealizowano: deterministyczne rozpoznawanie odniesień klienta do katalogu, reguły cen, zapasów, dostaw i rabatów, obliczanie ofert, rejestr blokad oraz sprawdzenie kwalifikacji oferty do przeglądu przez człowieka, zapisywane w SQLite z niezmiennymi zapisami audytowymi. Ekstrakcja danych wspomagana przez AI oraz krok zatwierdzenia przez człowieka są zaplanowane na przyszły rozwój.',
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
            label: 'ZBUDOWANO',
            text: 'TypeScript CLI, realne transakcje Solana mainnet przez JSON-RPC, normalizacja do kanonicznego modelu, obsługa instrukcji top-level i inner, logów oraz zmian salda.',
          },
          {
            label: 'SZCZEGÓŁY',
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
    scrollLabel: 'Kalendarz aktywności na GitHub, przewijany w poziomie',
  },

  pages: {
    blog: {
      kicker: 'Notatki',
      title: 'Dziennik',
      intro: 'Myśli o życiu, inżynierii, eksperymentach, biznesie i budowaniu publicznie. Także miejsce na niedokończone pomysły.',
      emptyTitle: 'Na razie pusto',
      emptyText: 'Nie opublikowano jeszcze żadnych wpisów. Zajrzyj tu wkrótce.',
      back: 'Wróć do portfolio',
    },
    notFound: {
      title: 'Nie znaleziono strony',
      intro: 'Strona, której szukasz, nie istnieje lub została przeniesiona.',
      home: 'Wróć na stronę główną',
      resume: 'CV',
      favourites: 'Ulubione filmy',
    },
    resume: {
      title: 'CV',
      intro: 'Moje CV w formie PDF: doświadczenie, edukacja i umiejętności.',
      openPdf: 'Otwórz PDF',
      download: 'Pobierz',
      viewerTitle: 'CV w formacie PDF',
      viewerFallback: 'Jeśli PDF nie wyświetla się tutaj, użyj opcji Otwórz PDF.',
      pendingTitle: 'CV nie zostało jeszcze opublikowane',
      pendingText: 'PDF pojawi się tutaj, gdy zostanie dodany do strony.',
    },
    favourites: {
      title: 'Ulubione',
      intro: 'Historie, które zostają ze mną. Thrillery psychologiczne, moralnie skomplikowane postaci, niemożliwe wybory i od czasu do czasu obsesja na punkcie ambicji. A tak, naprawdę lubię Jake’a Gyllenhaala.',
      moviesKicker: 'Filmy i seriale',
      tvSeries: 'serial TV',
      emptyTitle: 'Nie dodano jeszcze filmów',
      emptyText: 'Lista pojawi się tutaj po jej dodaniu.',
    },
  },

  search: {
    emailHint: 'e-mail',
    items: {
      home: 'Start',
      about: 'O mnie',
      projects: 'Projekty',
      blog: 'Dziennik',
      n2d: 'N2D Nails',
      sentinel: 'SentinelAI',
      rfq: 'Project 04 — AI RFQ Operations Agent',
      solana: 'Solana On-chain Intelligence Assistant',
      github: 'Aktywność na GitHub',
      music: 'Muzyka',
      contact: 'Napisz do mnie',
      resume: 'CV',
      favourites: 'Ulubione filmy',
    },
  },

};
