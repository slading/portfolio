/* N2D — interactive nail booking validation prototype.
   All data is local demo data except the confirmed N2D brand, location, hours and service details.
   There is intentionally no backend, Instagram integration, or production integration. */

const STORAGE_KEY = "n2d-salon-prototype-v4";
const LANGUAGE_KEY = "n2d-salon-language";

const STRINGS = {
  cs: {
    pageTitle: "N2D — Rezervace v salonu",
    demoNotice: "Interaktivní ukázka — jména, služby a kalendář jsou vzorové",
    resetDemo: "Obnovit ukázku",
    brandTagline: "rezervace v salonu",
    clientBooking: "Rezervace",
    staffCalendar: "Kalendář salonu",
    savedLocally: "Uloženo v tomto zařízení",
    languageLabel: "Jazyk",
    notebookHome: "Domovská stránka N2D",
    book: "Objednat se",
    schedule: "Kalendář",
    add: "Přidat",
    setup: "Nastavení",
    clientView: "Pro klienty",
    chooseSalon: "Vyberte salon",
    chooseService: "Vyberte službu",
    chooseTime: "Vyberte termín",
    yourDetails: "Vaše údaje",
    review: "Kontrola",
    confirmed: "Potvrzeno",
    bookYourAppointment: "Rezervujte si termín",
    aLittleTime: "Chvilka<br>pro vás.",
    chooseSalonStart: "Nejprve vyberte salon.",
    chooseASalon: "Vyberte salon",
    locationSoon: "Adresa bude doplněna",
    chooseSalonAria: "Vybrat {salon}",
    whatWouldYouLike: "Jakou službu si přejete?",
    chooseServiceHint: "Vyberte službu a zobrazíme volné termíny.",
    serviceAria: "{group}, {name}, {duration} minut",
    whenSuits: "Kdy se vám to hodí?",
    minutesAtSalon: "{duration} minut · {salon}",
    change: "Změnit",
    unavailable: "Nedostupné",
    full: "Obsazeno",
    selectDay: "Vyberte den",
    bookAt: "Rezervovat v {time}",
    noOnlineTimes: "Na tento den nejsou online termíny.",
    chooseAnotherDate: "Vyberte jiný den.",
    noTimesFit: "V tento den není pro tuto službu volný termín.",
    tryAnotherDateService: "Zkuste jiný den nebo službu.",
    almostThere: "Ještě pár údajů",
    howReachYou: "Jak vás můžeme kontaktovat?",
    detailsHint: "Stačí údaje potřebné k rezervaci.",
    yourName: "Jméno",
    bestContact: "Preferovaný kontakt",
    phone: "Telefon",
    instagram: "Instagram",
    phoneNumber: "Telefonní číslo",
    instagramUsername: "Uživatelské jméno na Instagramu",
    appointmentReminder: "Připomenutí termínu",
    requestReminder: "Přeji si připomenutí před návštěvou.",
    reminderAria: "Požádat o připomenutí termínu",
    notesLabel: "Poznámka (nepovinné)",
    notesPlaceholder: "Např. co si přejete nebo s kým byste chtěla rezervaci.",
    notes: "Poznámka",
    photoLabel: "Referenční fotka (nepovinné)",
    photoHint: "Přiložte inspiraci pro nehty — JPG, PNG nebo WebP, max. 1 fotka.",
    photo: "Fotka",
    addPhoto: "Přidat fotku",
    removePhoto: "Odebrat fotku",
    photoAlt: "Referenční fotka nehtů",
    photoInvalidType: "Nahrajte prosím JPG, PNG nebo WebP soubor.",
    photoTooLarge: "Soubor je příliš velký (max. 15 MB).",
    viewPhoto: "Zobrazit fotku na celou obrazovku",
    reviewBooking: "Zkontrolovat rezervaci",
    everythingRight: "Sedí všechno?",
    checkDetails: "Před potvrzením zkontrolujte údaje.",
    salon: "Salon",
    service: "Služba",
    date: "Datum",
    time: "Čas",
    contact: "Kontakt",
    reminder: "Připomenutí",
    on: "Zapnuto",
    off: "Vypnuto",
    confirmAppointment: "Potvrdit rezervaci",
    backAndEdit: "Zpět a upravit",
    bookingConfirmed: "Rezervace potvrzena",
    youreBooked: "Máte rezervováno.",
    appointmentDetailsBelow: "Podrobnosti rezervace najdete níže.",
    bookAnother: "Rezervovat další termín",
    staffNotebook: "Pro salon N2D",
    blockTime: "Blokovat čas",
    todayDay: "Den",
    week: "Týden",
    calendar: "Měsíc",
    weekOf: "Týden od {date}",
    today: "Dnes",
    goToday: "Přejít na dnešek",
    previous: "Předchozí",
    next: "Další",
    hoursTbd: "Otevírací doba neurčena",
    capacityCount: "Kapacita {count}",
    adjustDay: "Upravit den",
    calendarCapacity: "Kapacita: {count}",
    appointmentAria: "{start} až {end}, {name}, {service}",
    blockedAria: "Blokováno, {reason}, {start} až {end}",
    noBookingsYet: "Zatím bez rezervací",
    dayOpenAvailable: "Den je volný.",
    noWorkingHours: "Bez pracovní doby",
    setHoursHint: "Nastavte hodiny, aby bylo možné tento den rezervovat.",
    setHours: "Nastavit hodiny",
    noBookings: "Bez rezervací",
    hoursNotConfigured: "Pracovní doba není nastavena",
    salonSettings: "Nastavení salonu",
    setupDescription: "Služby, pracovní doba a denní dostupnost.",
    beforeLive: "Před spuštěním",
    beforeLiveText: "Potvrďte pracovní dobu, víkendový provoz a konečný seznam služeb. Kapacita určuje, kolik rezervací může salon přijmout současně. Automatická připomenutí zatím nejsou aktivní.",
    servicesDuration: "Služby a délka",
    durationDetermines: "Délka služby určuje, které termíny si klient může rezervovat.",
    addService: "Přidat službu",
    availableToBook: "Aktivní",
    inactive: "Neaktivní",
    weeklyHours: "Týdenní pracovní doba",
    forSalon: "Pro {salon}.",
    workingHours: "Pracovní doba",
    notConfiguredTbd: "Nenastaveno",
    tbd: "Neurčeno",
    selectedDay: "Vybraný den",
    edit: "Upravit",
    hours: "Hodiny",
    bookings: "Rezervace",
    blocks: "Blokace",
    appointmentDetail: "Detail rezervace",
    appointment: "Rezervace",
    bookingNotFound: "Rezervace nebyla nalezena",
    blockNotFound: "Blokace nebyla nalezena",
    notProvided: "Neuvedeno",
    sendingNotConnected: "Automatická připomenutí zatím nejsou aktivní",
    source: "Zdroj",
    editDetails: "Upravit údaje",
    saveDetails: "Uložit údaje",
    reschedule: "Přesunout",
    cancelBooking: "Zrušit rezervaci",
    close: "Zavřít",
    cancelQuestion: "Zrušit rezervaci?",
    cancelExplanation: "Rezervace zmizí z aktivního kalendáře. Termín {date} v {start}–{end} se ihned uvolní pro další klientku.",
    keepBooking: "Ponechat rezervaci",
    cancelRelease: "Zrušit a uvolnit termín",
    originalHeld: "Původní termín zůstane rezervovaný, dokud změnu neuložíte. Zobrazují se jen termíny, do kterých se vejde celých {duration} minut.",
    newDate: "Nové datum",
    availableStart: "Volný začátek",
    noValidSlots: "V tento den není volný termín o délce {duration} minut.",
    cancel: "Zrušit",
    saveNewTime: "Uložit nový termín",
    addBooking: "Přidat rezervaci",
    manualEntry: "Ruční zadání",
    manualNote: "Pro rezervace z telefonu, Instagramu nebo pro klientky bez online rezervace. Platí stejná pravidla kapacity.",
    startTime: "Začátek",
    selectTime: "Vyberte čas",
    clientName: "Jméno klientky",
    phoneOrInstagram: "Telefon nebo Instagram",
    reminderEnabled: "Připomenutí zapnuto",
    addToCalendar: "Přidat do kalendáře",
    editNote: "Zde upravíte kontakt a připomenutí. Pro změnu termínu použijte Přesunout.",
    contactType: "Typ kontaktu",
    blockUnavailable: "Blokovat nedostupný čas",
    availability: "Dostupnost",
    blockNote: "Plná blokace využije celou kapacitu. Částečná blokace označí jednu osobu jako nedostupnou. Stávající rezervace zůstanou beze změny.",
    from: "Od",
    until: "Do",
    capacityToBlock: "Blokovaná kapacita",
    capacityOf: "{used} z {total}",
    reason: "Důvod",
    breakReason: "Pauza",
    unavailableTime: "Nedostupný čas",
    capacityUsed: "Využitá kapacita",
    removeBlock: "Odstranit blokaci",
    adjustThisDay: "Upravit tento den",
    daySettingsNote: "Nastavení platí jen pro tento den. Kapacita určuje počet současných rezervací. Při snížení kapacity zůstanou stávající rezervace beze změny.",
    hoursConfigured: "Pracovní doba nastavena",
    turnOffTbd: "Vypnutím označíte den jako neurčený.",
    open: "Otevřeno",
    closeTime: "Zavřeno",
    capacity: "Kapacita",
    capacityOne: "1 rezervace současně",
    capacityMany: "{count} rezervace současně",
    saveDay: "Uložit den",
    addServiceTitle: "Přidat službu",
    editService: "Upravit službu",
    servicesAndDuration: "Služby a délka",
    serviceChangeNote: "Změny platí pro nové rezervace. Stávajícím rezervacím zůstane původní délka i při přesunu.",
    serviceType: "Typ služby",
    variantOption: "Varianta / možnost",
    duration: "Délka",
    minutes: "{count} minut",
    activeForBooking: "Aktivní pro rezervace",
    inactiveExisting: "Neaktivní služby zůstanou u stávajících rezervací.",
    saveService: "Uložit službu",
    weeklyHoursTitle: "Týdenní pracovní doba",
    hoursNote: "Nastavte běžnou pracovní dobu pro tento den. Bez nastavení se den zobrazí jako neurčený.",
    allowBookingWeekday: "Povolit klientům rezervace v tento den.",
    saveHours: "Uložit pracovní dobu",
    closeDialog: "Zavřít dialog",
    sourceDemo: "Ukázková data",
    sourceClient: "Online rezervace",
    sourceStaff: "Přidáno personálem",
    resetConfirm: "Obnovit původní ukázkový kalendář a odstranit všechny místní změny?",
    demoRestored: "Ukázková data byla obnovena",
    requiredContact: "Doplňte jméno a kontakt",
    invalidName: "Zadejte prosím platné jméno (písmena, ne jen čísla nebo symboly).",
    invalidPhone: "Zadejte prosím platné telefonní číslo.",
    invalidInstagram: "Zadejte prosím platné uživatelské jméno na Instagramu.",
    slotUnavailable: "Tento termín už není volný. Vyberte jiný.",
    manualRequired: "Doplňte jméno klientky, kontakt a volný termín",
    timeNoLongerAvailable: "Tento termín už není volný",
    bookingAdded: "Rezervace byla přidána do kalendáře",
    timeAvailableAgain: "Termín {start}–{end} je znovu volný",
    chooseAvailableTime: "Vyberte volný termín",
    movedReleased: "Rezervace přesunuta z {old}; původní termín je volný",
    detailsUpdated: "Údaje rezervace byly upraveny",
    nameContactRequired: "Jméno a kontakt jsou povinné",
    endAfterStart: "Čas konce musí být po začátku",
    blockedSuccess: "Nedostupný čas byl zablokován",
    blockRemoved: "Blokace byla odstraněna; kapacita je znovu volná",
    dailyUpdated: "Denní dostupnost byla upravena",
    serviceNameRequired: "Doplňte typ a variantu služby",
    serviceSaved: "Služba byla uložena",
    closingAfterOpening: "Zavírací doba musí být po otevírací",
    weeklyUpdated: "Týdenní pracovní doba byla upravena",
    placeholderName: "Jméno",
    placeholderServiceType: "např. Nová modeláž",
    placeholderVariant: "např. S designem",
    placeholderContact: "@uživatelskéjméno nebo telefon",
    addressPlaceholder: "Adresa bude doplněna",
    serviceGroupRefill: "Doplnění",
    serviceGroupNewSet: "Nová modeláž",
    serviceGroupLashes: "Řasy",
    serviceGroupPedicure: "Pedikúra",
    serviceVariantBasic: "Základní / bez zdobení",
    serviceVariantDesign: "Se zdobením",
    serviceVariantLashSet: "Sada řas",
    serviceVariantPedicure: "Klasická",
  },
  en: {
    pageTitle: "N2D — Salon appointments", demoNotice: "Interactive demo — sample names, services & schedule", resetDemo: "Reset demo", brandTagline: "salon appointments", clientBooking: "Client booking", staffCalendar: "Staff calendar", savedLocally: "Saved locally", languageLabel: "Language", notebookHome: "N2D home", book: "Book", schedule: "Schedule", add: "Add", setup: "Setup", clientView: "Client view",
    chooseSalon: "Choose salon", chooseService: "Choose service", chooseTime: "Choose a time", yourDetails: "Your details", review: "Review", confirmed: "Confirmed", bookYourAppointment: "Book your appointment", aLittleTime: "A little time<br>for you.", chooseSalonStart: "Choose your salon to get started.", chooseASalon: "Choose a salon", locationSoon: "Location details coming soon", chooseSalonAria: "Choose {salon}", whatWouldYouLike: "What would you like?", chooseServiceHint: "Choose a service to see times that fit.", serviceAria: "{group}, {name}, {duration} minutes", whenSuits: "When suits you?", minutesAtSalon: "{duration} minutes · {salon}", change: "Change", unavailable: "Unavailable", full: "Full", selectDay: "Select a day", bookAt: "Book at {time}", noOnlineTimes: "No online times this day.", chooseAnotherDate: "Choose another date.", noTimesFit: "No times fit this service on this day.", tryAnotherDateService: "Try another date or service.", almostThere: "Almost there", howReachYou: "How can we reach you?", detailsHint: "Only the details the salon needs for this appointment.", yourName: "Your name", bestContact: "Best contact", phone: "Phone", instagram: "Instagram", phoneNumber: "Phone number", instagramUsername: "Instagram username", appointmentReminder: "Appointment reminder", requestReminder: "Request a reminder before your visit.", reminderAria: "Request an appointment reminder", notesLabel: "Notes (optional)", notesPlaceholder: "E.g. what you'd like, or who you'd prefer to book with.", notes: "Notes", photoLabel: "Reference photo (optional)", photoHint: "Attach nail inspiration — JPG, PNG or WebP, max 1 photo.", photo: "Photo", addPhoto: "Add photo", removePhoto: "Remove photo", photoAlt: "Nail reference photo", photoInvalidType: "Please upload a JPG, PNG, or WebP file.", photoTooLarge: "That file is too large (max 15 MB).", viewPhoto: "View photo full screen", reviewBooking: "Review booking", everythingRight: "Everything look right?", checkDetails: "Check the details before you confirm.", salon: "Salon", service: "Service", date: "Date", time: "Time", contact: "Contact", reminder: "Reminder", on: "On", off: "Off", confirmAppointment: "Confirm appointment", backAndEdit: "Go back and edit", bookingConfirmed: "Booking confirmed", youreBooked: "You're booked.", appointmentDetailsBelow: "Your appointment details are below.", bookAnother: "Book another appointment",
    staffNotebook: "N2D staff", blockTime: "Block time", todayDay: "Today / day", week: "Week", calendar: "Calendar", weekOf: "Week of {date}", today: "Today", goToday: "Go to today", previous: "Previous", next: "Next", hoursTbd: "Hours TBD", capacityCount: "Capacity {count}", adjustDay: "Adjust day", calendarCapacity: "Capacity: {count}", appointmentAria: "{start} to {end}, {name}, {service}", blockedAria: "Blocked, {reason}, {start} to {end}", noBookingsYet: "No bookings yet", dayOpenAvailable: "This day is open and available.", noWorkingHours: "No working hours", setHoursHint: "Set hours to make this day available for booking.", setHours: "Set hours", noBookings: "No bookings", hoursNotConfigured: "Hours not configured",
    salonSettings: "Salon settings", setupDescription: "Services, hours and daily availability.", beforeLive: "Before going live", beforeLiveText: "Confirm weekday hours, weekend availability and the final service list. Capacity is the number of appointments the salon can handle at once. Reminder sending is not connected.", servicesDuration: "Services & duration", durationDetermines: "Duration determines which times clients can book.", addService: "Add service", availableToBook: "Available to book", inactive: "Inactive", weeklyHours: "Weekly working hours", forSalon: "For {salon}.", workingHours: "Working hours", notConfiguredTbd: "Not configured", tbd: "TBD", selectedDay: "Selected day", edit: "Edit", hours: "Hours", bookings: "Bookings", blocks: "Blocks",
    appointmentDetail: "Appointment details", appointment: "Appointment", bookingNotFound: "Booking not found", blockNotFound: "Block not found", notProvided: "Not provided", sendingNotConnected: "Sending is not connected", source: "Source", editDetails: "Edit details", saveDetails: "Save details", reschedule: "Reschedule", cancelBooking: "Cancel booking", close: "Close", cancelQuestion: "Cancel booking?", cancelExplanation: "This will remove the appointment from the active schedule. {date} at {start}–{end} will immediately become available for another client.", keepBooking: "Keep booking", cancelRelease: "Cancel & release time", originalHeld: "The original time remains reserved until you save. Only slots where all {duration} minutes fit are shown.", newDate: "New date", availableStart: "Available start time", noValidSlots: "No valid {duration}-minute slots on this date.", cancel: "Cancel", saveNewTime: "Save new time",
    addBooking: "Add booking", manualEntry: "Manual entry", manualNote: "For walk-ins, phone calls, or Instagram messages. Uses the same capacity rules as client booking.", startTime: "Start time", selectTime: "Select time", clientName: "Client name", phoneOrInstagram: "Phone or Instagram", reminderEnabled: "Reminder enabled", addToCalendar: "Add to calendar", editNote: "Edit the client and reminder details here. Use Reschedule to move the appointment so availability is rechecked.", contactType: "Contact type",
    blockUnavailable: "Block unavailable time", availability: "Availability", blockNote: "A full block uses all capacity. A partial block marks one person as unavailable. Existing bookings stay in place.", from: "From", until: "Until", capacityToBlock: "Capacity to block", capacityOf: "{used} of {total}", reason: "Reason", breakReason: "Break", unavailableTime: "Unavailable time", capacityUsed: "Capacity used", removeBlock: "Remove block", adjustThisDay: "Adjust this day", daySettingsNote: "These settings apply to this day only. Capacity is how many appointments the salon can handle at once. Existing bookings stay in place if capacity is reduced.", hoursConfigured: "Hours configured", turnOffTbd: "Turn off to mark this date as TBD.", open: "Open", closeTime: "Close", capacity: "Capacity", capacityOne: "1 person / appointment at once", capacityMany: "{count} people / appointments at once", saveDay: "Save day",
    addServiceTitle: "Add service", editService: "Edit service", servicesAndDuration: "Services & duration", serviceChangeNote: "Changes apply to new bookings. Existing appointments keep their current duration, including when moved.", serviceType: "Service type", variantOption: "Variant / option", duration: "Duration", minutes: "{count} minutes", activeForBooking: "Active for booking", inactiveExisting: "Inactive services remain on existing appointments.", saveService: "Save service", weeklyHoursTitle: "Weekly hours", hoursNote: "Set the usual hours for this weekday. Leave it unconfigured to show the day as TBD.", allowBookingWeekday: "Allow client booking on this weekday.", saveHours: "Save hours", closeDialog: "Close dialog",
    sourceDemo: "Demo data", sourceClient: "Online booking", sourceStaff: "Added by staff", resetConfirm: "Reset all local changes and restore the original demo schedule?", demoRestored: "Demo data restored", requiredContact: "Please add your name and contact", invalidName: "Please enter a valid name (letters, not just numbers or symbols).", invalidPhone: "Please enter a valid phone number.", invalidInstagram: "Please enter a valid Instagram username.", slotUnavailable: "That time is no longer available. Please choose another.", manualRequired: "Add a client, contact and available time", timeNoLongerAvailable: "That time is no longer available", bookingAdded: "Booking added to the calendar", timeAvailableAgain: "{start}–{end} is available again", chooseAvailableTime: "Choose an available time", movedReleased: "Moved from {old}; the old time was released", detailsUpdated: "Booking details updated", nameContactRequired: "Name and contact are required", endAfterStart: "End time must be after start time", blockedSuccess: "Unavailable time blocked", blockRemoved: "Block removed; capacity is available again", dailyUpdated: "Daily availability updated", serviceNameRequired: "Add a service type and variant", serviceSaved: "Service configuration saved", closingAfterOpening: "Closing time must be after opening", weeklyUpdated: "Weekly hours updated", placeholderName: "Name", placeholderServiceType: "e.g. New set", placeholderVariant: "e.g. With design", placeholderContact: "@username or phone", addressPlaceholder: "Location details coming soon",
    serviceGroupRefill: "Refill", serviceGroupNewSet: "New set", serviceGroupLashes: "Lashes", serviceGroupPedicure: "Pedicure",
    serviceVariantBasic: "Basic / no design", serviceVariantDesign: "With design", serviceVariantLashSet: "Lash set", serviceVariantPedicure: "Pedicure",
  }
};

let language = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "cs";
function t(key, values = {}) {
  let value = STRINGS[language][key] ?? STRINGS.en[key] ?? key;
  Object.entries(values).forEach(([name, replacement]) => { value = value.replaceAll(`{${name}}`, String(replacement)); });
  return value;
}
function uiLocale() { return language === "cs" ? "cs-CZ" : "en-GB"; }
function bookingCountLabel(count) {
  if (language === "en") return `${count} booking${count === 1 ? "" : "s"}`;
  return `${count} ${count === 1 ? "rezervace" : count >= 2 && count <= 4 ? "rezervace" : "rezervací"}`;
}
function timeCountLabel(count) {
  if (language === "en") return `${count} time${count === 1 ? "" : "s"}`;
  return `${count} ${count === 1 ? "termín" : count >= 2 && count <= 4 ? "termíny" : "termínů"}`;
}
function sourceLabel(source) {
  return source === "Demo data" ? t("sourceDemo") : source === "Client booking prototype" ? t("sourceClient") : source === "Added by staff" ? t("sourceStaff") : source;
}
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const ui = {
  mode: "staff",
  staffSection: "schedule",
  staffView: "day",
  salonId: "orli",
  selectedDate: todayISO(),
  modal: null,
  customer: freshCustomer(),
};

let state = loadState();
let toastTimer;
let modalReturnFocus = null;
// Photo lightbox is deliberately kept separate from ui.modal — it layers on top of
// the appointment detail modal (which must stay open/unchanged underneath) rather
// than replacing it, and it does not persist or touch any stored data.
let photoViewer = null; // { src } | null
let photoViewerReturnFocus = null;

function freshCustomer() {
  return {
    step: 0,
    salonId: null,
    serviceId: null,
    date: null,
    start: null,
    name: "",
    phone: "",
    instagram: "",
    notes: "",
    photo: null,
    reminder: true,
    confirmedId: null,
  };
}

function todayISO() { return toISO(new Date()); }
function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function parseISO(value) { return new Date(`${value}T12:00:00`); }
function addDays(value, amount) {
  const d = typeof value === "string" ? parseISO(value) : new Date(value);
  d.setDate(d.getDate() + amount);
  return toISO(d);
}
function startOfWeek(value) {
  const d = parseISO(value);
  const offset = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - offset);
  return toISO(d);
}
function minFromTime(value) {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}
function timeFromMin(value) {
  const safe = Math.max(0, Math.min(1440, value));
  return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
}
function addMinutes(time, amount) { return timeFromMin(minFromTime(time) + Number(amount)); }
function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`; }
function esc(value = "") {
  return String(value).replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
}
function escNotes(value = "") {
  return esc(value).replace(/\n/g, "<br>");
}

// Reference photo attachment — local-only prototype.
// Images are downscaled/re-encoded client-side and stored as a data URL inside
// the existing localStorage JSON blob. This keeps the single confirmed photo
// small enough for typical localStorage quotas, but it is not a production
// file-storage solution (no backend, no external storage, no dependencies).
const ACCEPTED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_PHOTO_SOURCE_BYTES = 15 * 1024 * 1024; // guard against pathological uploads before we even try to decode them
const PHOTO_MAX_DIMENSION = 900;
const PHOTO_JPEG_QUALITY = 0.72;

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("read-failed"));
    reader.readAsDataURL(file);
  });
}
function loadImageFromSrc(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("decode-failed"));
    img.src = src;
  });
}
// Downscales the source image onto a canvas and re-encodes it as JPEG so a single
// prototype booking never stores an oversized data URL in localStorage.
async function compressImageFile(file) {
  const sourceDataUrl = await readFileAsDataURL(file);
  const img = await loadImageFromSrc(sourceDataUrl);
  const scale = Math.min(1, PHOTO_MAX_DIMENSION / Math.max(img.width, img.height));
  const width = Math.max(1, Math.round(img.width * scale));
  const height = Math.max(1, Math.round(img.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", PHOTO_JPEG_QUALITY);
}
async function handlePhotoFile(file, onSuccess) {
  if (!file) return;
  if (!ACCEPTED_PHOTO_TYPES.includes(file.type)) { showToast(t("photoInvalidType")); return; }
  if (file.size > MAX_PHOTO_SOURCE_BYTES) { showToast(t("photoTooLarge")); return; }
  try {
    const dataUrl = await compressImageFile(file);
    onSuccess(dataUrl);
  } catch (e) {
    console.warn("Could not process reference photo", e);
    showToast(t("photoInvalidType"));
  }
}
function photoUploadField(idPrefix, photo) {
  const inputId = `${idPrefix}PhotoInput`;
  const removeAction = `remove-${idPrefix}-photo`;
  return `<div class="field">
    <label>${t("photoLabel")}</label>
    ${photo
      ? `<div class="photo-preview"><img src="${photo}" alt="${t("photoAlt")}" class="photo-thumb"><button type="button" class="quiet-btn" data-action="${removeAction}">${t("removePhoto")}</button></div>`
      : `<label class="photo-upload" for="${inputId}">${t("addPhoto")}<input type="file" id="${inputId}" accept="image/jpeg,image/png,image/webp" hidden></label><p class="microcopy">${t("photoHint")}</p>`}
  </div>`;
}
function photoReviewRow(photo) {
  if (!photo) return "";
  return `<div class="review-row"><span>${esc(t("photo"))}</span><strong><img src="${photo}" alt="${t("photoAlt")}" class="photo-thumb"></strong></div>`;
}
function photoDetailRow(photo, apptId) {
  if (!photo) return "";
  // data-view-photo references the appointment id rather than embedding the (large)
  // data URL a second time in an attribute; the click handler looks it up from state.
  return `<div class="detail-row"><span>${t("photo")}</span><strong><button type="button" class="photo-thumb-btn" data-view-photo="${esc(apptId)}" aria-label="${t("viewPhoto")}"><img src="${photo}" alt="${t("photoAlt")}" class="photo-thumb photo-thumb-lg"></button></strong></div>`;
}

// Lightweight contact validation — intentionally simple, not full i18n phone/username validation.
function isValidName(value) {
  const trimmed = (value || "").trim();
  if (!trimmed) return false;
  // Require at least one Unicode letter somewhere (supports accented/international names).
  return /\p{L}/u.test(trimmed);
}
function isValidPhone(value) {
  const trimmed = (value || "").trim();
  if (!trimmed) return false;
  // Allow +, digits, spaces, parentheses, hyphens only; reject letters and other symbols.
  if (!/^[+\d\s()-]+$/.test(trimmed)) return false;
  const digitCount = (trimmed.match(/\d/g) || []).length;
  return digitCount >= 7 && digitCount <= 15;
}
function isValidInstagram(value) {
  const trimmed = (value || "").trim();
  if (!trimmed) return false;
  const handle = trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
  if (!handle) return false;
  // Instagram-style usernames: letters, numbers, periods, underscores.
  return /^[A-Za-z0-9._]{1,30}$/.test(handle);
}
function fmtDate(value, options = { weekday: "long", day: "numeric", month: "long" }) {
  return new Intl.DateTimeFormat(uiLocale(), options).format(parseISO(value));
}
function fmtShortDate(value) {
  return fmtDate(value, { weekday: "short", day: "numeric", month: "short" });
}
function salonName(id) { return state.salons.find(s => s.id === id)?.name || "Salon"; }
function serviceById(id) { return state.services.find(s => s.id === id); }
const SERVICE_LABEL_KEYS = {
  "refill-simple": { group: "serviceGroupRefill", name: "serviceVariantBasic" },
  "refill-design": { group: "serviceGroupRefill", name: "serviceVariantDesign" },
  "new-simple": { group: "serviceGroupNewSet", name: "serviceVariantBasic" },
  "new-design": { group: "serviceGroupNewSet", name: "serviceVariantDesign" },
  "lashes": { group: "serviceGroupLashes", name: "serviceVariantLashSet" },
  "pedicure": { group: "serviceGroupPedicure", name: "serviceVariantPedicure" },
};
function serviceGroupLabel(s) { const keys = SERVICE_LABEL_KEYS[s.id]; return keys ? t(keys.group) : s.group; }
function serviceVariantLabel(s) { const keys = SERVICE_LABEL_KEYS[s.id]; return keys ? t(keys.name) : s.name; }
function apptById(id) { return state.appointments.find(a => a.id === id); }
function keyFor(salonId, date) { return `${salonId}|${date}`; }
function isOverlap(startA, endA, startB, endB) {
  return minFromTime(startA) < minFromTime(endB) && minFromTime(endA) > minFromTime(startB);
}

function defaultHours() {
  return {
    0: { configured: false, start: "09:00", end: "17:00" },
    1: { configured: true, start: "09:00", end: "19:00" },
    2: { configured: true, start: "09:00", end: "19:00" },
    3: { configured: true, start: "09:00", end: "19:00" },
    4: { configured: true, start: "09:00", end: "19:00" },
    5: { configured: true, start: "09:00", end: "19:00" },
    6: { configured: false, start: "09:00", end: "17:00" },
  };
}

// Confirmed N2D Nails Orlí 17 hours: Mon–Fri 08:00–19:00, Sat–Sun 08:00–18:00.
function orliHours() {
  return {
    0: { configured: true, start: "08:00", end: "18:00" },
    1: { configured: true, start: "08:00", end: "19:00" },
    2: { configured: true, start: "08:00", end: "19:00" },
    3: { configured: true, start: "08:00", end: "19:00" },
    4: { configured: true, start: "08:00", end: "19:00" },
    5: { configured: true, start: "08:00", end: "19:00" },
    6: { configured: true, start: "08:00", end: "18:00" },
  };
}

// Confirmed N2D Nails Kubíčkova hours: Mon–Fri 09:00–20:00, Sat–Sun 09:00–19:00.
function kubickovaHours() {
  return {
    0: { configured: true, start: "09:00", end: "19:00" },
    1: { configured: true, start: "09:00", end: "20:00" },
    2: { configured: true, start: "09:00", end: "20:00" },
    3: { configured: true, start: "09:00", end: "20:00" },
    4: { configured: true, start: "09:00", end: "20:00" },
    5: { configured: true, start: "09:00", end: "20:00" },
    6: { configured: true, start: "09:00", end: "19:00" },
  };
}

function createDemoState() {
  const today = todayISO();
  const tomorrow = addDays(today, 1);
  const nextWork = addDays(today, 2);
  return {
    version: 4,
    salons: [
      { id: "orli", name: "N2D Nails Orlí 17", address: "Orlí 469/17, Brno-střed", defaultCapacity: 2, hours: orliHours() },
      { id: "kubickova", name: "N2D Nails Kubíčkova", address: "Kubíčkova 1080/6, Brno-Bystrc", defaultCapacity: 2, hours: kubickovaHours() },
    ],
    services: [
      { id: "refill-simple", group: "Refill", name: "Basic / no design", duration: 60, active: true, color: 1 },
      { id: "refill-design", group: "Refill", name: "With design", duration: 90, active: true, color: 2 },
      { id: "new-simple", group: "New set", name: "Basic / no design", duration: 60, active: true, color: 3 },
      { id: "new-design", group: "New set", name: "With design", duration: 120, active: true, color: 4 },
      { id: "lashes", group: "Lashes", name: "Lash set", duration: 90, active: true, color: 1 },
      { id: "pedicure", group: "Pedicure", name: "Pedicure", duration: 60, active: true, color: 2 },
    ],
    appointments: [
      demoAppt("a1", "orli", today, "10:00", "refill-simple", "Anna", "+420 601 100 221", "@anna.demo"),
      demoAppt("a2", "orli", today, "11:00", "new-simple", "Sofia", "+420 601 104 552", "@sofia.demo"),
      demoAppt("a3", "orli", today, "12:00", "new-design", "Julia", "+420 601 108 774", "@julia.demo"),
      demoAppt("a4", "orli", today, "14:30", "refill-design", "Maya", "+420 601 112 903", "@maya.demo"),
      demoAppt("b1", "kubickova", today, "09:30", "new-design", "Elise", "+420 601 117 226", "@elise.demo"),
      demoAppt("b2", "kubickova", today, "12:00", "refill-simple", "Nadia", "+420 601 121 358", "@nadia.demo"),
      demoAppt("b3", "kubickova", today, "14:00", "new-simple", "Lena", "+420 601 125 590", "@lena.demo"),
      demoAppt("a5", "orli", tomorrow, "09:30", "new-design", "Marta", "+420 601 129 812", "@marta.demo"),
      demoAppt("a6", "orli", tomorrow, "14:30", "refill-simple", "Olivia", "+420 601 133 044", "@olivia.demo"),
      demoAppt("b4", "kubickova", nextWork, "11:00", "refill-design", "Kasia", "+420 601 137 276", "@kasia.demo"),
    ],
    blocks: [
      { id: "block-1", salonId: "orli", date: today, start: "15:00", end: "15:30", units: 1, reason: "Team break" },
      { id: "block-2", salonId: "orli", date: tomorrow, start: "13:00", end: "14:00", units: 2, reason: "Unavailable" },
      { id: "block-3", salonId: "kubickova", date: today, start: "13:00", end: "13:30", units: 1, reason: "Break" },
    ],
    dayOverrides: {
      [keyFor("kubickova", today)]: { capacity: 1 },
      [keyFor("orli", tomorrow)]: { capacity: 1 },
    },
  };
}

function demoAppt(id, salonId, date, start, serviceId, name, phone, instagram) {
  const catalog = {
    "refill-simple": ["Refill · Basic / no design", 60, 1],
    "refill-design": ["Refill · With design", 90, 2],
    "new-simple": ["New set · Basic / no design", 60, 3],
    "new-design": ["New set · With design", 120, 4],
    "lashes": ["Lashes · Lash set", 90, 1],
    "pedicure": ["Pedicure · Pedicure", 60, 2],
  };
  const [serviceName, duration, color] = catalog[serviceId];
  return { id, salonId, date, start, end: addMinutes(start, duration), serviceId, serviceName, duration, color, name, phone, instagram, reminder: true, source: "Demo data", status: "confirmed", createdAt: Date.now() };
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed?.version === 4) return parsed;
  } catch (e) { console.warn("Could not read local demo state", e); }
  return createDemoState();
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const node = $("#savedState");
  if (node) {
    node.textContent = t("savedLocally");
    node.style.opacity = 1;
    setTimeout(() => { node.style.opacity = .65; }, 800);
  }
}

function getDayConfig(salonId, date) {
  const salon = state.salons.find(s => s.id === salonId);
  const base = salon.hours[parseISO(date).getDay()];
  const override = state.dayOverrides[keyFor(salonId, date)] || {};
  return {
    configured: override.configured ?? base.configured,
    start: override.start || base.start,
    end: override.end || base.end,
    capacity: Number(override.capacity || salon.defaultCapacity),
  };
}

function availableSlots(salonId, date, duration, ignoreAppointmentId = null) {
  const config = getDayConfig(salonId, date);
  if (!config.configured || minFromTime(config.end) <= minFromTime(config.start)) return [];
  const result = [];
  for (let t = minFromTime(config.start); t + duration <= minFromTime(config.end); t += 30) {
    let valid = true;
    for (let q = t; q < t + duration; q += 30) {
      const qStart = timeFromMin(q);
      const qEnd = timeFromMin(Math.min(q + 30, t + duration));
      const occupied = state.appointments
        .filter(a => a.status === "confirmed" && a.id !== ignoreAppointmentId && a.salonId === salonId && a.date === date && isOverlap(a.start, a.end, qStart, qEnd))
        .length;
      const blocked = state.blocks
        .filter(b => b.salonId === salonId && b.date === date && isOverlap(b.start, b.end, qStart, qEnd))
        .reduce((sum, b) => sum + Number(b.units), 0);
      if (occupied + blocked + 1 > config.capacity) { valid = false; break; }
    }
    if (valid) result.push(timeFromMin(t));
  }
  return result;
}

function showToast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove("show"), 2600);
}

function applyStaticTranslations() {
  document.documentElement.lang = language;
  document.title = t("pageTitle");
  $("#demoNotice").textContent = t("demoNotice");
  $("#resetDemo").textContent = t("resetDemo");
  $("#brandTagline").textContent = t("brandTagline");
  $(".brand").setAttribute("aria-label", t("notebookHome"));
  $("#customerModeLabel").textContent = t("clientBooking");
  $("#staffModeLabel").textContent = t("staffCalendar");
  $("#modeSwitch").setAttribute("aria-label", language === "cs" ? "Zvolit zobrazení" : "Choose experience");
  $("#languageSwitch").setAttribute("aria-label", t("languageLabel"));
  $("#savedState").textContent = t("savedLocally");
  $$('[data-language]').forEach(button => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setLanguage(nextLanguage) {
  if (!STRINGS[nextLanguage] || nextLanguage === language) return;
  if (ui.mode === "customer" && ui.customer.step === 3) syncCustomerFields();
  language = nextLanguage;
  localStorage.setItem(LANGUAGE_KEY, language);
  render();
}

function render() {
  applyStaticTranslations();
  document.body.dataset.mode = ui.mode;
  $$("[data-mode]").forEach(b => b.classList.toggle("active", b.dataset.mode === ui.mode));
  $("#app").innerHTML = ui.mode === "customer" ? renderCustomer() : renderStaff();
  renderMobileNav();
  renderModal();
}

function renderMobileNav() {
  const nav = $("#mobileNav");
  if (ui.mode === "customer") {
    nav.innerHTML = `
      <button class="active" data-mode="customer"><span class="nav-icon">✦</span>${t("book")}</button>
      <button data-mode="staff"><span class="nav-icon">▤</span>${t("staffCalendar")}</button>`;
  } else {
    nav.innerHTML = `
      <button class="${ui.staffSection === "schedule" ? "active" : ""}" data-staff-section="schedule"><span class="nav-icon">▤</span>${t("schedule")}</button>
      <button data-action="open-manual" aria-label="${t("addBooking")}"><span class="nav-icon">＋</span>${t("add")}</button>
      <button class="${ui.staffSection === "setup" ? "active" : ""}" data-staff-section="setup"><span class="nav-icon">⌁</span>${t("setup")}</button>
      <button data-mode="customer"><span class="nav-icon">✦</span>${t("clientView")}</button>`;
  }
}

function customerProgress() {
  const c = ui.customer;
  if (c.step >= 5) return 100;
  return [8, 25, 48, 70, 90][c.step] || 8;
}

function renderCustomer() {
  const c = ui.customer;
  const labels = [t("chooseSalon"), t("chooseService"), t("chooseTime"), t("yourDetails"), t("review"), t("confirmed")];
  return `<section class="customer-shell">
    <div class="customer-top">
      ${c.step > 0 && c.step < 5 ? `<button class="back-btn" data-action="customer-back" aria-label="${t("backAndEdit")}">‹</button>` : `<span style="width:31px"></span>`}
      <div class="progress-wrap">
        <div class="progress-label"><span>${esc(labels[c.step])}</span><span>${Math.min(c.step + 1, 5)} / 5</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${customerProgress()}%"></div></div>
      </div>
    </div>
    ${renderCustomerStep()}
  </section>`;
}

function renderCustomerStep() {
  const c = ui.customer;
  if (c.step === 0) {
    return `<div>
      <p class="eyebrow">${t("bookYourAppointment")}</p>
      <h1>${t("aLittleTime")}</h1>
      <p class="subtle">${t("chooseSalonStart")}</p>
      <div style="height:18px"></div>
      <h2>${t("chooseASalon")}</h2>
      <div class="choice-stack">
        ${state.salons.map((salon, i) => `<button class="choice-card" data-customer-salon="${salon.id}" aria-label="${esc(t("chooseSalonAria", { salon: salon.name }))}">
          <span class="choice-main"><span class="salon-symbol">${i + 1}</span><span><strong>${esc(salon.name)}</strong><small>${esc(salon.address || t("locationSoon"))}</small></span></span><span class="choice-arrow" aria-hidden="true">›</span>
        </button>`).join("")}
      </div>
    </div>`;
  }
  if (c.step === 1) {
    const groups = [...new Set(state.services.filter(s => s.active).map(s => s.group))];
    return `<div>
      <p class="eyebrow">${esc(salonName(c.salonId))}</p>
      <h1>${t("whatWouldYouLike")}</h1>
      <p class="subtle">${t("chooseServiceHint")}</p>
      ${groups.map(group => `<section class="service-group">
        <div class="service-group-title">${esc(serviceGroupLabel(state.services.find(s => s.group === group)))}</div>
        <div class="choice-stack">
          ${state.services.filter(s => s.active && s.group === group).map(s => `<button class="choice-card" data-customer-service="${s.id}" aria-label="${esc(t("serviceAria", { group: serviceGroupLabel(s), name: serviceVariantLabel(s), duration: s.duration }))}">
            <span><strong>${esc(serviceVariantLabel(s))}</strong></span><span class="duration-pill">${s.duration} min</span>
          </button>`).join("")}
        </div>
      </section>`).join("")}
    </div>`;
  }
  if (c.step === 2) {
    const service = serviceById(c.serviceId);
    if (!c.date) c.date = firstBookableDate(c.salonId, service.duration);
    const dates = Array.from({ length: 14 }, (_, i) => addDays(todayISO(), i));
    const slots = c.date ? availableSlots(c.salonId, c.date, service.duration) : [];
    return `<div>
      <p class="eyebrow">${t("chooseTime")}</p>
      <h1>${t("whenSuits")}</h1>
      <div class="selection-summary"><span><strong>${esc(serviceGroupLabel(service))} · ${esc(serviceVariantLabel(service))}</strong>${t("minutesAtSalon", { duration: service.duration, salon: esc(salonName(c.salonId)) })}</span><button data-action="change-service">${t("change")}</button></div>
      <div class="date-scroller">
        ${dates.map(date => {
          const d = parseISO(date); const conf = getDayConfig(c.salonId, date); const count = conf.configured ? availableSlots(c.salonId, date, service.duration).length : 0;
          const availabilityLabel = !conf.configured ? t("unavailable") : count ? timeCountLabel(count) : t("full");
          return `<button class="date-chip ${c.date === date ? "selected" : ""} ${!conf.configured || !count ? "unavailable" : ""}" data-customer-date="${date}" aria-pressed="${c.date === date}" aria-label="${esc(fmtShortDate(date))}, ${esc(availabilityLabel)}">
            <span class="dow">${d.toLocaleDateString(uiLocale(), { weekday: "short" })}</span><span class="num">${d.getDate()}</span><span class="tiny">${esc(availabilityLabel)}</span>
          </button>`;
        }).join("")}
      </div>
      <div class="time-header"><h2>${c.date ? esc(fmtShortDate(c.date)) : t("selectDay")}</h2>${c.date ? `<span class="status-pill neutral">${service.duration} min</span>` : ""}</div>
      ${slots.length ? `<div class="time-grid">${slots.map(time => `<button class="time-btn" data-customer-time="${time}" aria-label="${t("bookAt", { time })}">${time}</button>`).join("")}</div>` : `<div class="empty-times">${c.date && !getDayConfig(c.salonId, c.date).configured ? `<strong>${t("noOnlineTimes")}</strong><br>${t("chooseAnotherDate")}` : `<strong>${t("noTimesFit")}</strong><br>${t("tryAnotherDateService")}`}</div>`}
    </div>`;
  }
  if (c.step === 3) {
    const service = serviceById(c.serviceId);
    return `<div>
      <p class="eyebrow">${t("almostThere")}</p><h1>${t("howReachYou")}</h1>
      <p class="subtle">${t("detailsHint")}</p>
      <div class="selection-summary"><span><strong>${esc(fmtShortDate(c.date))}, ${c.start}–${addMinutes(c.start, service.duration)}</strong>${esc(salonName(c.salonId))} · ${esc(serviceGroupLabel(service))} ${esc(serviceVariantLabel(service))}</span></div>
      <div class="field"><label for="customerName">${t("yourName")}</label><input id="customerName" class="input" autocomplete="name" placeholder="Anna" value="${esc(c.name)}"></div>
      <div class="field"><label for="customerPhone">${t("phoneNumber")}</label><input id="customerPhone" class="input" type="tel" autocomplete="tel" inputmode="tel" placeholder="+420 …" value="${esc(c.phone)}"></div>
      <div class="field"><label for="customerInstagram">${t("instagramUsername")}</label><input id="customerInstagram" class="input" autocomplete="off" placeholder="@username" value="${esc(c.instagram)}"></div>
      <div class="toggle-line"><span><strong>${t("appointmentReminder")}</strong><span class="microcopy">${t("requestReminder")}</span></span><label class="toggle"><input id="customerReminder" type="checkbox" ${c.reminder ? "checked" : ""} aria-label="${t("reminderAria")}"><span></span></label></div>
      <div class="field"><label for="customerNotes">${t("notesLabel")}</label><textarea id="customerNotes" class="input" rows="3" placeholder="${t("notesPlaceholder")}">${esc(c.notes)}</textarea></div>
      ${photoUploadField("customer", c.photo)}
      <div style="height:18px"></div><button class="primary-btn full" data-action="customer-details-next">${t("reviewBooking")}</button>
    </div>`;
  }
  if (c.step === 4) {
    const service = serviceById(c.serviceId);
    return `<div>
      <p class="eyebrow">${t("review")}</p><h1>${t("everythingRight")}</h1>
      <p class="subtle">${t("checkDetails")}</p>
      <div class="review-card card">
        ${reviewRow(t("salon"), salonName(c.salonId))}
        ${reviewRow(t("service"), `${serviceGroupLabel(service)} · ${serviceVariantLabel(service)} (${service.duration} min)`)}
        ${reviewRow(t("date"), fmtDate(c.date))}
        ${reviewRow(t("time"), `${c.start}–${addMinutes(c.start, service.duration)}`)}
        ${reviewRow(t("yourName"), c.name)}
        ${reviewRow(t("phone"), c.phone)}
        ${reviewRow(t("instagram"), c.instagram)}
        ${reviewRow(t("reminder"), c.reminder ? t("on") : t("off"))}
        ${c.notes ? reviewRow(t("notes"), escNotes(c.notes)) : ""}
        ${photoReviewRow(c.photo)}
      </div>
      <button class="primary-btn full" data-action="confirm-booking">${t("confirmAppointment")}</button>
      <button class="quiet-btn full" data-action="customer-back">${t("backAndEdit")}</button>
    </div>`;
  }
  const appt = apptById(c.confirmedId);
  if (!appt) { ui.customer = freshCustomer(); return renderCustomerStep(); }
  return `<div class="confirmation">
    <div class="confirm-mark">✓</div><p class="eyebrow">${t("bookingConfirmed")}</p><h1>${t("youreBooked")}</h1>
    <p class="subtle">${t("appointmentDetailsBelow")}</p>
    <div class="review-card card">
      ${reviewRow(t("salon"), salonName(appt.salonId))}${reviewRow(t("service"), `${appt.serviceName} (${appt.duration} min)`)}${reviewRow(t("date"), fmtDate(appt.date))}${reviewRow(t("time"), `${appt.start}–${appt.end}`)}${reviewRow(t("yourName"), appt.name)}${reviewRow(t("phone"), appt.phone)}${reviewRow(t("instagram"), appt.instagram)}${appt.notes ? reviewRow(t("notes"), escNotes(appt.notes)) : ""}${photoReviewRow(appt.photo)}
    </div>
    <button class="secondary-btn full" data-action="book-another">${t("bookAnother")}</button>
  </div>`;
}

function reviewRow(label, value) { return `<div class="review-row"><span>${esc(label)}</span><strong>${value}</strong></div>`; }
function firstBookableDate(salonId, duration) {
  for (let i = 0; i < 30; i++) {
    const date = addDays(todayISO(), i);
    if (availableSlots(salonId, date, duration).length) return date;
  }
  return todayISO();
}

function renderStaff() {
  const side = `<aside class="staff-side">
    <div class="side-date"><div class="big">${parseISO(todayISO()).getDate()}</div><small>${esc(fmtDate(todayISO(), { weekday: "long" }))} · ${esc(fmtDate(todayISO(), { month: "long" }))}</small></div>
    <nav class="side-nav"><button class="${ui.staffSection === "schedule" ? "active" : ""}" data-staff-section="schedule">▤ &nbsp;${t("schedule")}</button><button data-action="open-manual">＋ &nbsp;${t("addBooking")}</button><button class="${ui.staffSection === "setup" ? "active" : ""}" data-staff-section="setup">⌁ &nbsp;${t("setup")}</button><button data-mode="customer">✦ &nbsp;${t("clientBooking")}</button></nav>
  </aside>`;
  return `<div class="staff-layout">${side}<div class="staff-main">${ui.staffSection === "schedule" ? renderSchedule() : renderSetup()}</div></div>`;
}

function salonTabs() {
  return `<div class="segmented salon-tabs">${state.salons.map(s => `<button class="${ui.salonId === s.id ? "active" : ""}" data-staff-salon="${s.id}">${esc(s.name)}</button>`).join("")}</div>`;
}

function renderSchedule() {
  return `<div>
    <div class="staff-heading"><div><p class="eyebrow">${t("staffNotebook")}</p><h1>${t("schedule")}</h1></div><div class="staff-actions"><button class="secondary-btn" data-action="open-block">${t("blockTime")}</button><button class="primary-btn" data-action="open-manual">＋ ${t("add")}</button></div></div>
    <div class="staff-controls-row">${salonTabs()}<div class="viewbar"><div class="segmented">${["day", "week", "month"].map(v => `<button class="${ui.staffView === v ? "active" : ""}" data-staff-view="${v}">${v === "day" ? t("todayDay") : v === "month" ? t("calendar") : t("week")}</button>`).join("")}</div></div></div>
    ${renderDateNav()}
    ${ui.staffView === "day" ? renderDaySchedule() : ui.staffView === "week" ? renderWeek() : renderMonth()}
  </div>`;
}

function renderDateNav() {
  const delta = ui.staffView === "week" ? 7 : ui.staffView === "month" ? 30 : 1;
  const title = ui.staffView === "month" ? fmtDate(ui.selectedDate, { month: "long", year: "numeric" }) : ui.staffView === "week" ? t("weekOf", { date: fmtDate(startOfWeek(ui.selectedDate), { day: "numeric", month: "short" }) }) : fmtDate(ui.selectedDate, { weekday: "long", day: "numeric", month: "long" });
  return `<div class="date-nav"><button class="icon-btn" data-date-move="-${delta}" aria-label="${t("previous")}">‹</button><div class="date-nav-title"><strong>${esc(title)}</strong><small>${ui.selectedDate === todayISO() ? t("today") : `<button style="border:0;background:none;padding:0;color:inherit;cursor:pointer" data-action="go-today">${t("goToday")}</button>`}</small></div><button class="icon-btn" data-date-move="${delta}" aria-label="${t("next")}">›</button></div>`;
}

function renderDaySchedule() {
  const config = getDayConfig(ui.salonId, ui.selectedDate);
  const appts = state.appointments.filter(a => a.status === "confirmed" && a.salonId === ui.salonId && a.date === ui.selectedDate).sort((a, b) => a.start.localeCompare(b.start));
  const blocks = state.blocks.filter(b => b.salonId === ui.salonId && b.date === ui.selectedDate);
  return `<div class="day-meta"><div class="pills"><span class="status-pill neutral">${config.configured ? `${config.start}–${config.end}` : t("hoursTbd")}</span><span class="status-pill ${config.capacity === 1 ? "warn" : ""}">${t("capacityCount", { count: config.capacity })}</span><span class="status-pill neutral">${bookingCountLabel(appts.length)}</span></div><button data-action="open-day-settings">${t("adjustDay")}</button></div>
    <div class="schedule-card">
      ${config.configured ? renderTimeline(config, appts, blocks) : `<div class="no-hours"><div><div class="empty-icon">⌁</div><h2>${t("noWorkingHours")}</h2><p class="subtle">${t("setHoursHint")}</p><button class="secondary-btn" data-action="open-day-settings">${t("setHours")}</button></div></div>`}
    </div>`;
}

function renderTimeline(config, appts, blocks) {
  const start = minFromTime(config.start), end = minFromTime(config.end);
  const pxPerMin = 1;
  const height = Math.max(420, end - start);
  const labels = [];
  for (let t = start; t <= end; t += 60) labels.push(`<span class="time-label" style="top:${t - start}px">${timeFromMin(t)}</span>`);
  const laid = assignLanes(appts, config.capacity);
  const eventHtml = laid.map(({ a, lane }) => {
    const top = minFromTime(a.start) - start + 2;
    const h = Math.max(30, minFromTime(a.end) - minFromTime(a.start) - 4);
    const width = 100 / config.capacity;
    return `<button class="appt-card color-${a.color || 1}" data-appointment="${a.id}" aria-label="${esc(t("appointmentAria", { start: a.start, end: a.end, name: a.name, service: a.serviceName }))}" title="${esc(`${a.name} · ${a.serviceName}`)}" style="top:${top}px;height:${h}px;left:calc(${lane * width}% + 2px);width:calc(${width}% - 4px)"><span class="appt-time">${a.start}–${a.end}</span><strong class="appt-name">${esc(a.name)}</strong><span class="appt-service">${esc(a.serviceName)}</span></button>`;
  }).join("");
  const blockHtml = blocks.map(b => {
    const top = Math.max(0, minFromTime(b.start) - start + 2);
    const h = Math.max(25, minFromTime(b.end) - minFromTime(b.start) - 4);
    const width = Math.min(100, Number(b.units) / config.capacity * 100);
    return `<button class="block-card" data-block="${b.id}" aria-label="${esc(t("blockedAria", { reason: b.reason, start: b.start, end: b.end }))}" title="${esc(`${b.reason} · ${b.start}–${b.end}`)}" style="top:${top}px;height:${h}px;width:calc(${width}% - 3px)">${esc(b.reason)} · ${b.start}</button>`;
  }).join("");
  const emptyState = !appts.length && !blocks.length ? `<div class="timeline-empty"><strong>${t("noBookingsYet")}</strong><span>${t("dayOpenAvailable")}</span></div>` : "";
  return `<div class="schedule-head"><span>${t("time")}</span><span><strong>${esc(salonName(ui.salonId))}</strong> · ${t("calendarCapacity", { count: config.capacity })}</span></div><div class="timeline" style="height:${height}px;background-size:100% 60px">${labels.join("")}${emptyState}<div class="timeline-events">${blockHtml}${eventHtml}</div></div>`;
}

function assignLanes(appts, capacity) {
  const laneEnds = Array(Math.max(1, capacity)).fill(-1);
  return appts.map(a => {
    const s = minFromTime(a.start);
    let lane = laneEnds.findIndex(end => end <= s);
    if (lane < 0) lane = laneEnds.indexOf(Math.min(...laneEnds));
    laneEnds[lane] = minFromTime(a.end);
    return { a, lane };
  });
}

function renderWeek() {
  const start = startOfWeek(ui.selectedDate);
  return `<div class="week-grid">${Array.from({ length: 7 }, (_, i) => {
    const date = addDays(start, i); const conf = getDayConfig(ui.salonId, date);
    const appts = state.appointments.filter(a => a.status === "confirmed" && a.salonId === ui.salonId && a.date === date).sort((a, b) => a.start.localeCompare(b.start));
    return `<article class="week-day card ${date === todayISO() ? "today" : ""}" data-week-day="${date}"><div class="week-day-head"><strong>${esc(fmtDate(date, { weekday: "short" }))} ${parseISO(date).getDate()}</strong><span>${conf.configured ? t("capacityCount", { count: conf.capacity }) : t("tbd")}</span></div>${appts.length ? appts.map(a => `<div class="mini-event color-${a.color}" data-appointment="${a.id}"><b>${a.start}</b> ${esc(a.name)}<br><span>${esc(a.serviceName)}</span></div>`).join("") : `<div class="mini-empty">${conf.configured ? t("noBookings") : t("hoursNotConfigured")}</div>`}</article>`;
  }).join("")}</div>`;
}

function renderMonth() {
  const focus = parseISO(ui.selectedDate); const first = new Date(focus.getFullYear(), focus.getMonth(), 1, 12); const offset = (first.getDay() + 6) % 7; first.setDate(first.getDate() - offset);
  const days = Array.from({ length: 42 }, (_, i) => { const d = new Date(first); d.setDate(d.getDate() + i); return toISO(d); });
  const weekdayLabels = Array.from({ length: 7 }, (_, i) => new Date(2024, 0, i + 1).toLocaleDateString(uiLocale(), { weekday: "short" }));
  return `<div class="month-card card"><div class="month-labels">${weekdayLabels.map(x => `<span>${x}</span>`).join("")}</div><div class="month-grid">${days.map(date => {
    const count = state.appointments.filter(a => a.status === "confirmed" && a.salonId === ui.salonId && a.date === date).length;
    const d = parseISO(date); const muted = d.getMonth() !== focus.getMonth();
    return `<button class="month-day ${muted ? "muted" : ""} ${date === todayISO() ? "today" : ""} ${date === ui.selectedDate ? "selected" : ""}" data-month-day="${date}"><span class="month-num">${d.getDate()}</span>${count ? `<span class="event-dots">${Array.from({ length: Math.min(count, 3) }, () => "<i></i>").join("")}</span><span class="event-count">${count}</span>` : ""}</button>`;
  }).join("")}</div></div>`;
}

function renderSetup() {
  const salon = state.salons.find(s => s.id === ui.salonId);
  const todayConfig = getDayConfig(ui.salonId, ui.selectedDate);
  const dayNames = Array.from({ length: 7 }, (_, i) => new Date(2024, 0, i + 7).toLocaleDateString(uiLocale(), { weekday: "long" }));
  return `<div>
    <div class="setup-header"><p class="eyebrow">${t("salonSettings")}</p><h1>${t("setup")}</h1><p class="subtle">${t("setupDescription")}</p></div>
    ${salonTabs()}
    <div class="assumption-box"><strong>${t("beforeLive")}</strong>${t("beforeLiveText")}</div>
    <div class="setup-columns"><div>
      <section class="setup-section"><div class="section-head"><div><h2>${t("servicesDuration")}</h2><p class="microcopy">${t("durationDetermines")}</p></div><button data-action="add-service">＋ ${t("addService")}</button></div>
        <div class="service-list card">${state.services.map(s => `<button type="button" class="service-row ${s.active ? "" : "inactive"}" data-edit-service="${s.id}"><span><strong>${esc(serviceGroupLabel(s))} · ${esc(serviceVariantLabel(s))}</strong><small>${s.active ? t("availableToBook") : t("inactive")}</small></span><span class="service-meta"><span class="duration-pill">${s.duration} min</span><span aria-hidden="true">›</span></span></button>`).join("")}</div>
      </section>
    </div><div>
      <section class="setup-section"><div class="section-head"><div><h2>${t("weeklyHours")}</h2><p class="microcopy">${t("forSalon", { salon: esc(salon.name) })}</p></div></div>
        <div class="hours-list card">${dayNames.map((name, i) => { const h = salon.hours[i]; return `<button type="button" class="hours-row" data-edit-hours="${i}"><span><strong>${name}</strong><small>${h.configured ? t("workingHours") : t("notConfiguredTbd")}</small></span><span class="${h.configured ? "" : "status-pill warn"}">${h.configured ? `${h.start}–${h.end}` : t("tbd")} &nbsp;<span aria-hidden="true">›</span></span></button>`; }).join("")}</div>
      </section>
      <section class="setup-section"><div class="section-head"><div><h2>${t("selectedDay")}</h2><p class="microcopy">${esc(fmtShortDate(ui.selectedDate))}</p></div><button data-action="open-day-settings">${t("edit")}</button></div>
        <div class="today-config card"><strong>${esc(salon.name)}</strong><div class="config-grid"><div class="config-tile"><span>${t("hours")}</span><strong>${todayConfig.configured ? `${todayConfig.start}–${todayConfig.end}` : t("tbd")}</strong></div><div class="config-tile"><span>${t("capacity")}</span><strong>${todayConfig.capacity}</strong></div><div class="config-tile"><span>${t("bookings")}</span><strong>${state.appointments.filter(a => a.status === "confirmed" && a.salonId === ui.salonId && a.date === ui.selectedDate).length}</strong></div><div class="config-tile"><span>${t("blocks")}</span><strong>${state.blocks.filter(b => b.salonId === ui.salonId && b.date === ui.selectedDate).length}</strong></div></div></div>
      </section>
    </div></div>
  </div>`;
}

function renderModal() {
  const root = $("#modalRoot");
  const existingDialog = root.querySelector(".modal");
  const previousType = root.dataset.modalType;
  const activeId = existingDialog?.contains(document.activeElement) ? document.activeElement.id : "";

  if (!ui.modal) {
    root.innerHTML = "";
    delete root.dataset.modalType;
    document.body.classList.remove("modal-open");
    const returnTarget = modalReturnFocus;
    modalReturnFocus = null;
    if (returnTarget?.isConnected) requestAnimationFrame(() => returnTarget.focus());
    return;
  }

  if (!existingDialog && document.activeElement instanceof HTMLElement) modalReturnFocus = document.activeElement;
  const content = modalContent(ui.modal);
  document.body.classList.add("modal-open");
  root.dataset.modalType = ui.modal.type;
  root.innerHTML = `<div class="modal-backdrop" data-modal-backdrop><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><div class="modal-head"><div><p class="eyebrow">${esc(content.eyebrow || t("staffCalendar"))}</p><h2 id="modalTitle">${esc(content.title)}</h2></div><button class="modal-close" data-action="close-modal" aria-label="${t("closeDialog")}">×</button></div><div class="modal-body">${content.body}</div>${content.foot || ""}</section></div>`;

  requestAnimationFrame(() => {
    const preserved = previousType === ui.modal?.type && activeId ? root.querySelector(`#${CSS.escape(activeId)}`) : null;
    (preserved || root.querySelector(".modal-close"))?.focus();
  });
}

// Full-screen reference-photo viewer. Layers above the appointment modal in its own
// root so opening/closing it never touches ui.modal or re-renders the modal beneath —
// the appointment detail stays exactly as it was when the viewer is dismissed.
function renderPhotoViewer() {
  const root = $("#photoViewerRoot");
  if (!photoViewer) {
    root.innerHTML = "";
    document.body.classList.remove("photo-viewer-open");
    const returnTarget = photoViewerReturnFocus;
    photoViewerReturnFocus = null;
    if (returnTarget?.isConnected) requestAnimationFrame(() => returnTarget.focus());
    return;
  }
  document.body.classList.add("photo-viewer-open");
  root.innerHTML = `<div class="photo-viewer-backdrop" data-photo-viewer-backdrop role="dialog" aria-modal="true" aria-label="${esc(t("photoAlt"))}">
    <button type="button" class="photo-viewer-close" data-action="close-photo-viewer" aria-label="${t("closeDialog")}">×</button>
    <img class="photo-viewer-img" src="${photoViewer.src}" alt="${esc(t("photoAlt"))}">
  </div>`;
  requestAnimationFrame(() => root.querySelector(".photo-viewer-close")?.focus());
}
function openPhotoViewer(src) {
  if (!src) return;
  photoViewerReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  photoViewer = { src };
  renderPhotoViewer();
}
function closePhotoViewer() {
  if (!photoViewer) return;
  photoViewer = null;
  renderPhotoViewer();
}

function modalContent(modal) {
  if (modal.type === "appointment") return appointmentModal(modal);
  if (modal.type === "cancel") return cancelModal(modal);
  if (modal.type === "reschedule") return rescheduleModal(modal);
  if (modal.type === "manual") return manualModal(modal);
  if (modal.type === "edit-appointment") return editAppointmentModal(modal);
  if (modal.type === "block") return blockModal(modal);
  if (modal.type === "block-detail") return blockDetailModal(modal);
  if (modal.type === "day-settings") return daySettingsModal(modal);
  if (modal.type === "service") return serviceModal(modal);
  if (modal.type === "hours") return hoursModal(modal);
  return { title: "", body: "" };
}

function appointmentModal(modal) {
  const a = apptById(modal.id);
  if (!a) return { title: t("bookingNotFound"), body: "" };
  return { title: a.name, eyebrow: t("appointmentDetail"), body: `
    <div class="detail-hero"><span class="status-pill">${t("confirmed")}</span><div class="time-big">${a.start}–${a.end}</div><strong>${esc(fmtDate(a.date))}</strong></div>
    <div class="detail-list"><div class="detail-row"><span>${t("service")}</span><strong>${esc(a.serviceName)}<br><small>${t("minutes", { count: a.duration })}</small></strong></div><div class="detail-row"><span>${t("phone")}</span><strong>${esc(a.phone || t("notProvided"))}</strong></div><div class="detail-row"><span>${t("instagram")}</span><strong>${esc(a.instagram || t("notProvided"))}</strong></div><div class="detail-row"><span>${t("salon")}</span><strong>${esc(salonName(a.salonId))}</strong></div><div class="detail-row"><span>${t("reminder")}</span><strong>${a.reminder ? t("on") : t("off")}${a.reminder ? `<br><small>${t("sendingNotConnected")}</small>` : ""}</strong></div>${a.notes ? `<div class="detail-row"><span>${t("notes")}</span><strong>${escNotes(a.notes)}</strong></div>` : ""}${photoDetailRow(a.photo, a.id)}<div class="detail-row"><span>${t("source")}</span><strong>${esc(sourceLabel(a.source || "Added by staff"))}</strong></div></div>
    <div class="modal-actions-grid"><button data-action="open-edit-appointment" data-id="${a.id}">${t("editDetails")}</button><button data-action="open-reschedule" data-id="${a.id}">${t("reschedule")}</button><button class="danger" data-action="open-cancel" data-id="${a.id}">${t("cancelBooking")}</button><button data-action="close-modal">${t("close")}</button></div>` };
}

function cancelModal(modal) {
  const a = apptById(modal.id);
  const explanation = a ? t("cancelExplanation", { date: fmtShortDate(a.date), start: a.start, end: a.end }) : t("cancelBooking");
  return { title: t("cancelQuestion"), eyebrow: a?.name || t("appointment"), body: `<div class="warning-card">${explanation}</div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("keepBooking")}</button><button class="danger-btn" data-action="confirm-cancel" data-id="${modal.id}">${t("cancelRelease")}</button></div>` };
}

function rescheduleModal(modal) {
  const a = apptById(modal.id); if (!a) return { title: t("bookingNotFound"), body: "" };
  const date = modal.date || a.date; const slots = availableSlots(a.salonId, date, a.duration, a.id);
  return { title: t("reschedule"), eyebrow: a.name, body: `<div class="inline-note">${t("originalHeld", { duration: a.duration })}</div><div class="field"><label for="rescheduleDate">${t("newDate")}</label><input class="input" id="rescheduleDate" type="date" min="${todayISO()}" value="${date}"></div><div class="field"><span class="field-label">${t("availableStart")}</span>${slots.length ? `<div class="slot-picker">${slots.map(slot => `<button class="${modal.time === slot ? "selected" : ""}" data-reschedule-time="${slot}">${slot}</button>`).join("")}</div>` : `<div class="empty-times">${t("noValidSlots", { duration: a.duration })}</div>`}</div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("cancel")}</button><button class="primary-btn" data-action="save-reschedule" data-id="${a.id}" ${modal.time ? "" : "disabled"}>${t("saveNewTime")}</button></div>` };
}

function manualModal(modal) {
  const d = modal.draft;
  const service = serviceById(d.serviceId) || state.services.find(s => s.active);
  const slots = service ? availableSlots(d.salonId, d.date, service.duration) : [];
  if (d.time && !slots.includes(d.time)) d.time = null;
  return { title: t("addBooking"), eyebrow: t("manualEntry"), body: `<div class="inline-note">${t("manualNote")}</div><div class="form-grid">
    <div class="field"><label for="manualSalon">${t("salon")}</label><select class="select" id="manualSalon">${state.salons.map(s => `<option value="${s.id}" ${d.salonId === s.id ? "selected" : ""}>${esc(s.name)}</option>`).join("")}</select></div>
    <div class="field"><label for="manualService">${t("service")}</label><select class="select" id="manualService">${state.services.filter(s => s.active).map(s => `<option value="${s.id}" ${d.serviceId === s.id ? "selected" : ""}>${esc(serviceGroupLabel(s))} · ${esc(serviceVariantLabel(s))} (${s.duration}m)</option>`).join("")}</select></div>
    <div class="field"><label for="manualDate">${t("date")}</label><input class="input" id="manualDate" type="date" value="${d.date}"></div>
    <div class="field"><label for="manualTime">${t("startTime")}</label><select class="select" id="manualTime"><option value="">${t("selectTime")}</option>${slots.map(slot => `<option value="${slot}" ${d.time === slot ? "selected" : ""}>${slot}</option>`).join("")}</select></div>
    <div class="field"><label for="manualName">${t("clientName")}</label><input class="input" id="manualName" placeholder="${t("placeholderName")}" value="${esc(d.name)}"></div>
    <div class="field"><label for="manualPhone">${t("phoneNumber")}</label><input class="input" id="manualPhone" type="tel" placeholder="+420 …" value="${esc(d.phone)}"></div>
    <div class="field"><label for="manualInstagram">${t("instagramUsername")}</label><input class="input" id="manualInstagram" placeholder="@username" value="${esc(d.instagram)}"></div>
    <div class="field span-2"><label for="manualNotes">${t("notesLabel")}</label><textarea id="manualNotes" class="input" rows="3" placeholder="${t("notesPlaceholder")}">${esc(d.notes)}</textarea></div>
    <div class="field span-2"><div class="toggle-line"><span><strong>${t("reminderEnabled")}</strong><span class="microcopy">${t("sendingNotConnected")}.</span></span><label class="toggle"><input id="manualReminder" type="checkbox" ${d.reminder ? "checked" : ""} aria-label="${t("reminderEnabled")}"><span></span></label></div></div>
  </div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("cancel")}</button><button class="primary-btn" data-action="save-manual">${t("addToCalendar")}</button></div>` };
}

function editAppointmentModal(modal) {
  const a = apptById(modal.id); if (!a) return { title: t("bookingNotFound"), body: "" };
  return { title: t("editDetails"), eyebrow: a.name, body: `<div class="inline-note">${t("editNote")}</div><div class="field"><label for="editName">${t("clientName")}</label><input class="input" id="editName" value="${esc(a.name)}"></div><div class="field"><label for="editPhone">${t("phoneNumber")}</label><input class="input" id="editPhone" type="tel" value="${esc(a.phone)}"></div><div class="field"><label for="editInstagram">${t("instagramUsername")}</label><input class="input" id="editInstagram" value="${esc(a.instagram)}"></div><div class="field"><label for="editNotes">${t("notesLabel")}</label><textarea id="editNotes" class="input" rows="3" placeholder="${t("notesPlaceholder")}">${esc(a.notes || "")}</textarea></div><div class="toggle-line"><span><strong>${t("reminderEnabled")}</strong><span class="microcopy">${t("sendingNotConnected")}.</span></span><label class="toggle"><input id="editReminder" type="checkbox" ${a.reminder ? "checked" : ""} aria-label="${t("reminderEnabled")}"><span></span></label></div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("cancel")}</button><button class="primary-btn" data-action="save-edit-appointment" data-id="${a.id}">${t("saveDetails")}</button></div>` };
}

function blockModal(modal) {
  const d = modal.draft; const conf = getDayConfig(d.salonId, d.date);
  return { title: t("blockUnavailable"), eyebrow: t("availability"), body: `<div class="inline-note">${t("blockNote")}</div><div class="form-grid"><div class="field"><label for="blockSalon">${t("salon")}</label><select class="select" id="blockSalon">${state.salons.map(s => `<option value="${s.id}" ${s.id === d.salonId ? "selected" : ""}>${esc(s.name)}</option>`).join("")}</select></div><div class="field"><label for="blockDate">${t("date")}</label><input class="input" id="blockDate" type="date" value="${d.date}"></div><div class="field"><label for="blockStart">${t("from")}</label><input class="input" id="blockStart" type="time" step="1800" value="${d.start}"></div><div class="field"><label for="blockEnd">${t("until")}</label><input class="input" id="blockEnd" type="time" step="1800" value="${d.end}"></div><div class="field"><label for="blockUnits">${t("capacityToBlock")}</label><select class="select" id="blockUnits">${Array.from({length: conf.capacity}, (_,i) => i+1).map(n => `<option value="${n}" ${n === Number(d.units) ? "selected" : ""}>${t("capacityOf", { used: n, total: conf.capacity })}</option>`).join("")}</select></div><div class="field"><label for="blockReason">${t("reason")}</label><input class="input" id="blockReason" value="${esc(d.reason)}" placeholder="${t("breakReason")}"></div></div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("cancel")}</button><button class="primary-btn" data-action="save-block">${t("blockTime")}</button></div>` };
}

function blockDetailModal(modal) {
  const b = state.blocks.find(x => x.id === modal.id); if (!b) return { title: t("blockNotFound"), body: "" };
  return { title: b.reason, eyebrow: t("unavailableTime"), body: `<div class="detail-hero"><div class="time-big">${b.start}–${b.end}</div><strong>${esc(fmtDate(b.date))}</strong></div><div class="detail-row"><span>${t("salon")}</span><strong>${esc(salonName(b.salonId))}</strong></div><div class="detail-row"><span>${t("capacityUsed")}</span><strong>${b.units}</strong></div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("close")}</button><button class="danger-btn" data-action="delete-block" data-id="${b.id}">${t("removeBlock")}</button></div>` };
}

function daySettingsModal(modal) {
  const d = modal.draft;
  return { title: t("adjustThisDay"), eyebrow: `${salonName(d.salonId)} · ${fmtShortDate(d.date)}`, body: `<div class="inline-note">${t("daySettingsNote")}</div><div class="field"><div class="toggle-line"><span><strong>${t("hoursConfigured")}</strong><span class="microcopy">${t("turnOffTbd")}</span></span><label class="toggle"><input id="dayConfigured" type="checkbox" ${d.configured ? "checked" : ""} aria-label="${t("hoursConfigured")}"><span></span></label></div></div><div class="form-grid"><div class="field"><label for="dayStart">${t("open")}</label><input class="input" id="dayStart" type="time" step="1800" value="${d.start}"></div><div class="field"><label for="dayEnd">${t("closeTime")}</label><input class="input" id="dayEnd" type="time" step="1800" value="${d.end}"></div><div class="field span-2"><label for="dayCapacity">${t("capacity")}</label><select class="select" id="dayCapacity">${[1,2,3,4].map(n => `<option value="${n}" ${n === Number(d.capacity) ? "selected" : ""}>${n === 1 ? t("capacityOne") : t("capacityMany", { count: n })}</option>`).join("")}</select></div></div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("cancel")}</button><button class="primary-btn" data-action="save-day-settings">${t("saveDay")}</button></div>` };
}

function serviceModal(modal) {
  const d = modal.draft;
  return { title: modal.isNew ? t("addServiceTitle") : t("editService"), eyebrow: t("servicesAndDuration"), body: `<div class="inline-note">${t("serviceChangeNote")}</div><div class="field"><label for="serviceGroup">${t("serviceType")}</label><input class="input" id="serviceGroup" value="${esc(d.group)}" placeholder="${t("placeholderServiceType")}"></div><div class="field"><label for="serviceName">${t("variantOption")}</label><input class="input" id="serviceName" value="${esc(d.name)}" placeholder="${t("placeholderVariant")}"></div><div class="field"><label for="serviceDuration">${t("duration")}</label><select class="select" id="serviceDuration">${[30,45,60,75,90,105,120,150,180].map(n => `<option value="${n}" ${n === Number(d.duration) ? "selected" : ""}>${t("minutes", { count: n })}</option>`).join("")}</select></div><div class="toggle-line"><span><strong>${t("activeForBooking")}</strong><span class="microcopy">${t("inactiveExisting")}</span></span><label class="toggle"><input id="serviceActive" type="checkbox" ${d.active ? "checked" : ""} aria-label="${t("activeForBooking")}"><span></span></label></div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("cancel")}</button><button class="primary-btn" data-action="save-service">${t("saveService")}</button></div>` };
}

function hoursModal(modal) {
  const dayNames = Array.from({ length: 7 }, (_, i) => new Date(2024, 0, i + 7).toLocaleDateString(uiLocale(), { weekday: "long" })); const d = modal.draft;
  return { title: dayNames[modal.day], eyebrow: `${salonName(ui.salonId)} · ${t("weeklyHoursTitle")}`, body: `<div class="inline-note">${t("hoursNote")}</div><div class="field"><div class="toggle-line"><span><strong>${t("hoursConfigured")}</strong><span class="microcopy">${t("allowBookingWeekday")}</span></span><label class="toggle"><input id="hoursConfigured" type="checkbox" ${d.configured ? "checked" : ""} aria-label="${t("hoursConfigured")}"><span></span></label></div></div><div class="form-grid"><div class="field"><label for="hoursStart">${t("open")}</label><input class="input" id="hoursStart" type="time" step="1800" value="${d.start}"></div><div class="field"><label for="hoursEnd">${t("closeTime")}</label><input class="input" id="hoursEnd" type="time" step="1800" value="${d.end}"></div></div>`, foot: `<div class="modal-foot"><button class="secondary-btn" data-action="close-modal">${t("cancel")}</button><button class="primary-btn" data-action="save-hours">${t("saveHours")}</button></div>` };
}

// Click handling

document.addEventListener("click", (event) => {
  // The photo viewer renders in its own layer above the appointment modal and must
  // intercept clicks first: closing it (via backdrop or the × button) should never
  // also dismiss the appointment modal underneath, which stays open and unchanged.
  if (photoViewer) {
    if (event.target.matches("[data-photo-viewer-backdrop]") || event.target.closest("[data-action=\"close-photo-viewer\"]")) {
      closePhotoViewer();
    }
    return;
  }

  // Outside-click dismissal must only run when the backdrop itself is clicked.
  // Using closest() here would treat clicks on form controls as backdrop clicks.
  if (event.target.matches("[data-modal-backdrop]")) {
    ui.modal = null;
    renderModal();
    return;
  }

  const target = event.target.closest("button, [data-action], [data-appointment], [data-edit-service], [data-edit-hours], [data-week-day]");
  if (!target) return;

  if (target.dataset.viewPhoto) {
    const a = apptById(target.dataset.viewPhoto);
    if (a?.photo) openPhotoViewer(a.photo);
    return;
  }
  if (target.dataset.language) { setLanguage(target.dataset.language); return; }
  if (target.dataset.mode) { ui.mode = target.dataset.mode; if (ui.mode === "staff") ui.staffSection = "schedule"; ui.modal = null; render(); return; }
  if (target.dataset.staffSection) { ui.staffSection = target.dataset.staffSection; ui.modal = null; render(); return; }
  if (target.dataset.staffSalon) { ui.salonId = target.dataset.staffSalon; render(); return; }
  if (target.dataset.staffView) { ui.staffView = target.dataset.staffView; render(); return; }
  if (target.dataset.dateMove) { ui.selectedDate = addDays(ui.selectedDate, Number(target.dataset.dateMove)); render(); return; }
  if (target.dataset.customerSalon) { ui.customer.salonId = target.dataset.customerSalon; ui.customer.step = 1; render(); return; }
  if (target.dataset.customerService) { ui.customer.serviceId = target.dataset.customerService; ui.customer.date = null; ui.customer.start = null; ui.customer.step = 2; render(); return; }
  if (target.dataset.customerDate) { ui.customer.date = target.dataset.customerDate; ui.customer.start = null; render(); return; }
  if (target.dataset.customerTime) { ui.customer.start = target.dataset.customerTime; ui.customer.step = 3; render(); setTimeout(() => $("#customerName")?.focus(), 50); return; }
  if (target.dataset.appointment) { event.stopPropagation(); ui.modal = { type: "appointment", id: target.dataset.appointment }; renderModal(); return; }
  if (target.dataset.block) { ui.modal = { type: "block-detail", id: target.dataset.block }; renderModal(); return; }
  if (target.dataset.weekDay && !event.target.closest("[data-appointment]")) { ui.selectedDate = target.dataset.weekDay; ui.staffView = "day"; render(); return; }
  if (target.dataset.monthDay) { ui.selectedDate = target.dataset.monthDay; ui.staffView = "day"; render(); return; }
  if (target.dataset.editService) { openService(target.dataset.editService); return; }
  if (target.dataset.editHours !== undefined) { openHours(Number(target.dataset.editHours)); return; }
  if (target.dataset.rescheduleTime) { ui.modal.time = target.dataset.rescheduleTime; renderModal(); return; }

  const action = target.dataset.action;
  if (!action) return;
  if (action === "go-staff") { ui.mode = "staff"; ui.staffSection = "schedule"; render(); }
  if (action === "customer-back") { syncCustomerFields(); ui.customer.step = Math.max(0, ui.customer.step - 1); render(); }
  if (action === "change-service") { ui.customer.step = 1; render(); }
  if (action === "customer-details-next") customerDetailsNext();
  if (action === "remove-customer-photo") { syncCustomerFields(); ui.customer.photo = null; render(); }
  if (action === "confirm-booking") confirmCustomerBooking();
  if (action === "book-another") { ui.customer = freshCustomer(); render(); }
  if (action === "view-in-calendar") viewConfirmedInCalendar();
  if (action === "go-today") { ui.selectedDate = todayISO(); render(); }
  if (action === "open-manual") openManual();
  if (action === "open-block") openBlock();
  if (action === "open-day-settings") openDaySettings();
  if (action === "close-modal") { ui.modal = null; renderModal(); }
  if (action === "open-cancel") { ui.modal = { type: "cancel", id: target.dataset.id }; renderModal(); }
  if (action === "confirm-cancel") cancelAppointment(target.dataset.id);
  if (action === "open-reschedule") openReschedule(target.dataset.id);
  if (action === "save-reschedule") saveReschedule(target.dataset.id);
  if (action === "open-edit-appointment") { ui.modal = { type: "edit-appointment", id: target.dataset.id }; renderModal(); }
  if (action === "save-edit-appointment") saveEditAppointment(target.dataset.id);
  if (action === "save-manual") saveManual();
  if (action === "save-block") saveBlock();
  if (action === "delete-block") deleteBlock(target.dataset.id);
  if (action === "save-day-settings") saveDaySettings();
  if (action === "add-service") openService();
  if (action === "save-service") saveService();
  if (action === "save-hours") saveHours();
});

document.addEventListener("change", (event) => {
  const id = event.target.id;
  if (id === "rescheduleDate" && ui.modal?.type === "reschedule") { ui.modal.date = event.target.value; ui.modal.time = null; renderModal(); }
  if (["manualSalon", "manualService", "manualDate"].includes(id) && ui.modal?.type === "manual") {
    const draft = ui.modal.draft;
    draft.salonId = $("#manualSalon").value;
    draft.serviceId = $("#manualService").value;
    draft.date = $("#manualDate").value;
    draft.name = $("#manualName")?.value ?? draft.name;
    draft.phone = $("#manualPhone")?.value ?? draft.phone;
    draft.instagram = $("#manualInstagram")?.value ?? draft.instagram;
    draft.reminder = $("#manualReminder")?.checked ?? draft.reminder;
    draft.time = null;
    renderModal();
  }
  if (id === "manualTime" && ui.modal?.type === "manual") ui.modal.draft.time = event.target.value;
  if (id === "customerPhotoInput") {
    const file = event.target.files?.[0];
    syncCustomerFields();
    handlePhotoFile(file, (dataUrl) => { ui.customer.photo = dataUrl; render(); });
  }
  if (["blockSalon", "blockDate"].includes(id) && ui.modal?.type === "block") {
    const draft = ui.modal.draft;
    draft.salonId = $("#blockSalon").value;
    draft.date = $("#blockDate").value;
    draft.start = $("#blockStart")?.value ?? draft.start;
    draft.end = $("#blockEnd")?.value ?? draft.end;
    draft.units = 1;
    draft.reason = $("#blockReason")?.value ?? draft.reason;
    renderModal();
  }
});

document.addEventListener("keydown", (event) => {
  // Escape closes only the topmost layer: if the photo viewer is open it closes
  // that and leaves the appointment modal untouched underneath.
  if (photoViewer) {
    if (event.key === "Escape") { event.preventDefault(); closePhotoViewer(); }
    return;
  }
  if (!ui.modal) return;
  if (event.key === "Escape") {
    event.preventDefault();
    ui.modal = null;
    renderModal();
    return;
  }
  if (event.key !== "Tab") return;
  const dialog = $("#modalRoot .modal");
  const focusable = $$('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', dialog)
    .filter(node => node.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

$("#resetDemo").addEventListener("click", () => {
  if (!window.confirm(t("resetConfirm"))) return;
  localStorage.removeItem(STORAGE_KEY); state = createDemoState(); ui.customer = freshCustomer(); ui.selectedDate = todayISO(); ui.modal = null; saveState(); render(); showToast(t("demoRestored"));
});

function syncCustomerFields() {
  if (ui.customer.step !== 3) return;
  ui.customer.name = $("#customerName")?.value.trim() || ui.customer.name;
  ui.customer.phone = $("#customerPhone")?.value.trim() ?? ui.customer.phone;
  ui.customer.instagram = $("#customerInstagram")?.value.trim() ?? ui.customer.instagram;
  ui.customer.reminder = $("#customerReminder")?.checked ?? ui.customer.reminder;
  ui.customer.notes = $("#customerNotes")?.value.trim() ?? ui.customer.notes;
}
function customerDetailsNext() {
  syncCustomerFields();
  const c = ui.customer;
  if (!c.name || !c.phone || !c.instagram) { showToast(t("requiredContact")); return; }
  if (!isValidName(c.name)) { showToast(t("invalidName")); return; }
  if (!isValidPhone(c.phone)) { showToast(t("invalidPhone")); return; }
  if (!isValidInstagram(c.instagram)) { showToast(t("invalidInstagram")); return; }
  ui.customer.step = 4; render();
}
function confirmCustomerBooking() {
  const c = ui.customer; const service = serviceById(c.serviceId);
  if (!service || !availableSlots(c.salonId, c.date, service.duration).includes(c.start)) { showToast(t("slotUnavailable")); c.step = 2; c.start = null; render(); return; }
  const appointment = { id: uid("appt"), salonId: c.salonId, date: c.date, start: c.start, end: addMinutes(c.start, service.duration), serviceId: service.id, serviceName: `${service.group} · ${service.name}`, duration: service.duration, color: service.color || 1, name: c.name, phone: c.phone, instagram: c.instagram, notes: c.notes, photo: c.photo || null, reminder: c.reminder, source: "Client booking prototype", status: "confirmed", createdAt: Date.now() };
  state.appointments.push(appointment); c.confirmedId = appointment.id; c.step = 5; saveState(); render();
}
function viewConfirmedInCalendar() {
  const a = apptById(ui.customer.confirmedId); if (!a) return;
  ui.mode = "staff"; ui.staffSection = "schedule"; ui.staffView = "day"; ui.salonId = a.salonId; ui.selectedDate = a.date; render(); setTimeout(() => { ui.modal = { type: "appointment", id: a.id }; renderModal(); }, 150);
}

function openManual() {
  const service = state.services.find(s => s.active);
  ui.modal = { type: "manual", draft: { salonId: ui.salonId, serviceId: service?.id, date: ui.selectedDate, time: null, name: "", phone: "", instagram: "", notes: "", reminder: true } }; renderModal();
}
function saveManual() {
  const d = ui.modal.draft; const service = serviceById(d.serviceId);
  d.time = $("#manualTime")?.value || d.time; d.name = $("#manualName").value.trim(); d.phone = $("#manualPhone").value.trim(); d.instagram = $("#manualInstagram").value.trim(); d.notes = $("#manualNotes")?.value.trim() ?? d.notes; d.reminder = $("#manualReminder").checked;
  if (!d.name || !d.phone || !d.instagram || !d.time) { showToast(t("manualRequired")); return; }
  if (!availableSlots(d.salonId, d.date, service.duration).includes(d.time)) { showToast(t("timeNoLongerAvailable")); renderModal(); return; }
  state.appointments.push({ id: uid("appt"), salonId: d.salonId, date: d.date, start: d.time, end: addMinutes(d.time, service.duration), serviceId: service.id, serviceName: `${service.group} · ${service.name}`, duration: service.duration, color: service.color || 1, name: d.name, phone: d.phone, instagram: d.instagram, notes: d.notes, reminder: d.reminder, source: "Added by staff", status: "confirmed", createdAt: Date.now() });
  ui.salonId = d.salonId; ui.selectedDate = d.date; ui.staffSection = "schedule"; ui.staffView = "day"; ui.modal = null; saveState(); render(); showToast(t("bookingAdded"));
}
function cancelAppointment(id) {
  const a = apptById(id); if (!a) return;
  a.status = "cancelled"; a.cancelledAt = Date.now();
  if (ui.customer.confirmedId === id) ui.customer = freshCustomer();
  ui.modal = null; saveState(); render(); showToast(t("timeAvailableAgain", { start: a.start, end: a.end }));
}
function openReschedule(id) {
  const a = apptById(id); ui.modal = { type: "reschedule", id, date: a.date, time: null }; renderModal();
}
function saveReschedule(id) {
  const a = apptById(id), m = ui.modal;
  if (!m.time || !availableSlots(a.salonId, m.date, a.duration, a.id).includes(m.time)) { showToast(t("chooseAvailableTime")); return; }
  const old = `${fmtShortDate(a.date)} ${a.start}`; a.date = m.date; a.start = m.time; a.end = addMinutes(m.time, a.duration); ui.selectedDate = a.date; ui.salonId = a.salonId; ui.staffView = "day"; ui.modal = null; saveState(); render(); showToast(t("movedReleased", { old }));
}
function saveEditAppointment(id) {
  const a = apptById(id); const name = $("#editName").value.trim(), phone = $("#editPhone").value.trim(), instagram = $("#editInstagram").value.trim(), notes = $("#editNotes")?.value.trim() ?? (a.notes || "");
  if (!name || !phone || !instagram) { showToast(t("nameContactRequired")); return; }
  a.name = name; a.phone = phone; a.instagram = instagram; a.notes = notes; a.reminder = $("#editReminder").checked; ui.modal = null; saveState(); render(); showToast(t("detailsUpdated"));
}
function openBlock() {
  const conf = getDayConfig(ui.salonId, ui.selectedDate);
  ui.modal = { type: "block", draft: { salonId: ui.salonId, date: ui.selectedDate, start: conf.start || "09:00", end: addMinutes(conf.start || "09:00", 60), units: 1, reason: "Break" } }; renderModal();
}
function saveBlock() {
  const d = ui.modal.draft; d.start = $("#blockStart").value; d.end = $("#blockEnd").value; d.units = Number($("#blockUnits").value); d.reason = $("#blockReason").value.trim() || "Unavailable";
  if (minFromTime(d.end) <= minFromTime(d.start)) { showToast(t("endAfterStart")); return; }
  const conf = getDayConfig(d.salonId, d.date); d.units = Math.min(d.units, conf.capacity);
  state.blocks.push({ id: uid("block"), ...d }); ui.salonId = d.salonId; ui.selectedDate = d.date; ui.staffSection = "schedule"; ui.staffView = "day"; ui.modal = null; saveState(); render(); showToast(t("blockedSuccess"));
}
function deleteBlock(id) {
  state.blocks = state.blocks.filter(b => b.id !== id); ui.modal = null; saveState(); render(); showToast(t("blockRemoved"));
}
function openDaySettings() {
  const d = getDayConfig(ui.salonId, ui.selectedDate); ui.modal = { type: "day-settings", draft: { salonId: ui.salonId, date: ui.selectedDate, ...d } }; renderModal();
}
function saveDaySettings() {
  const d = ui.modal.draft; const configured = $("#dayConfigured").checked, start = $("#dayStart").value, end = $("#dayEnd").value, capacity = Number($("#dayCapacity").value);
  if (configured && minFromTime(end) <= minFromTime(start)) { showToast(t("closingAfterOpening")); return; }
  state.dayOverrides[keyFor(d.salonId, d.date)] = { configured, start, end, capacity }; ui.modal = null; saveState(); render(); showToast(t("dailyUpdated"));
}
function openService(id = null) {
  const s = id ? serviceById(id) : null; ui.modal = { type: "service", id, isNew: !s, draft: s ? { ...s } : { group: "", name: "", duration: 60, active: true, color: (state.services.length % 4) + 1 } }; renderModal();
}
function saveService() {
  const d = ui.modal.draft; d.group = $("#serviceGroup").value.trim(); d.name = $("#serviceName").value.trim(); d.duration = Number($("#serviceDuration").value); d.active = $("#serviceActive").checked;
  if (!d.group || !d.name) { showToast(t("serviceNameRequired")); return; }
  if (ui.modal.isNew) state.services.push({ ...d, id: uid("service") }); else Object.assign(serviceById(ui.modal.id), d);
  ui.modal = null; saveState(); render(); showToast(t("serviceSaved"));
}
function openHours(day) {
  const h = state.salons.find(s => s.id === ui.salonId).hours[day]; ui.modal = { type: "hours", day, draft: { ...h } }; renderModal();
}
function saveHours() {
  const m = ui.modal; const configured = $("#hoursConfigured").checked, start = $("#hoursStart").value, end = $("#hoursEnd").value;
  if (configured && minFromTime(end) <= minFromTime(start)) { showToast(t("closingAfterOpening")); return; }
  state.salons.find(s => s.id === ui.salonId).hours[m.day] = { configured, start, end }; ui.modal = null; saveState(); render(); showToast(t("weeklyUpdated"));
}

render();



