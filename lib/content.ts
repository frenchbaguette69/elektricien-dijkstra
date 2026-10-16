const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_33qDnniYhNCVoiQa2xOxWRN0C7F";

export const images = {
  team: `${CDN}/hf_20261016_073822_82916004-9d41-49c4-a7ed-db269159d646.png`,
  hoofdmonteur: `${CDN}/hf_20261016_073822_b490fc44-cf03-437e-863a-f74ba556bb93.png`,
  kabels: `${CDN}/hf_20261016_073823_45526478-88f4-4bfc-82a3-6e5f07e126ea.png`,
  multimeter: `${CDN}/hf_20261016_073822_edf0fa2f-3ba9-4f20-ad82-aa502ae3bd6b.png`,
};

export const usps = [
  "Vandaag gebeld = vandaag geholpen",
  "Gediplomeerde elektriciens",
  "Landelijk actief",
  "Transparante tarieven",
];

export const voordelen = [
  "24/7 bereikbaar",
  "Erkend elektrobedrijf",
  "Snel ter plaatse",
  "Uitstekende spoedservice",
  "Pinbetaling mogelijk",
  "Ruime ervaring",
  "Heldere, vaste tarieven",
  "Prijsopgave vooraf",
  "Garantie op ons werk",
  "Scherpe offerte",
];

export const spoedPunten = [
  "Vandaag gebeld = vandaag geholpen",
  "Ervaren vakmensen",
  "Gediplomeerde elektriciens",
  "Transparante tarieven",
];

// TODO: vervang door echte klantreviews (bijvoorbeeld uit Google)
export const reviews = [
  {
    name: "Jeroen",
    place: "Almere",
    text: "Zeer tevreden over Elektricien Dijkstra. Ik werd dezelfde dag nog teruggebeld en de monteur kwam op de afgesproken tijd. Hij legde duidelijk uit wat er aan de hand was en gaf vooraf een eerlijke prijs.",
  },
  {
    name: "Sandra",
    place: "Utrecht",
    text: "Onze groepenkast is netjes vervangen. Alles werd keurig opgeruimd en het werk was sneller klaar dan verwacht.",
  },
  {
    name: "Mark",
    place: "Amersfoort",
    text: "Vriendelijke en deskundige monteur. Hij vond de oorzaak van de storing snel en heeft het probleem direct opgelost. Ook kreeg ik goede tips om het in de toekomst te voorkomen.",
  },
  {
    name: "Linda",
    place: "Zwolle",
    text: "Een professioneel bedrijf. Iedereen met wie ik contact had was behulpzaam en duidelijk. Ik zal Elektricien Dijkstra zeker vaker inschakelen en aanbevelen.",
  },
  {
    name: "Bas",
    place: "Haarlem",
    text: "Ik wilde laten weten hoe goed de samenwerking verliep. De afspraak werd snel gemaakt, de monteur was punctueel en de prijs was redelijk.",
  },
  {
    name: "Fatima",
    place: "Lelystad",
    text: "De monteur nam de tijd om alles uit te leggen en gaf een duidelijke offerte. Het werk is precies uitgevoerd zoals afgesproken. Echt een aanrader.",
  },
];

export const faq = [
  {
    q: "Als een meterkast uitvalt, is dat gevaarlijk?",
    a: "Regelmatige onderbrekingen van de stroomonderbreker kunnen een teken zijn dat het circuit ergens wordt overbelast. Een draad, stopcontact of apparaat kan oververhit raken, wat uiteindelijk brand kan veroorzaken.",
  },
  {
    q: "Waarom gaat mijn lamp sneller kapot dan verwacht?",
    a: "Een te hoge spanning, losse aansluitingen of een verkeerde dimmer kunnen de levensduur van een lamp flink verkorten. Een elektricien kan dit meten en verhelpen.",
  },
  {
    q: "Moet ik een stopcontact vervangen als de stekker los zit?",
    a: "Ja. Een losse stekker geeft slecht contact, waardoor het stopcontact warm kan worden. Laat het stopcontact vervangen om brandgevaar te voorkomen.",
  },
  {
    q: "Waarom zoemt mijn meterkast?",
    a: "Een licht gezoem kan normaal zijn, maar luid zoemen of knetteren wijst vaak op een losse verbinding of een defecte schakelaar. Laat dit zo snel mogelijk controleren.",
  },
  {
    q: "Wat is een overspanningsbeveiliging?",
    a: "Een overspanningsbeveiliging beschermt uw apparaten tegen pieken in de spanning, bijvoorbeeld bij blikseminslag. Deze wordt in de groepenkast geplaatst.",
  },
  {
    q: "Wat voor groepenkast heb ik nodig?",
    a: "Dat hangt af van uw woning en gebruik, zoals een inductiekookplaat, warmtepomp of laadpaal. Wij adviseren u graag over het juiste aantal groepen.",
  },
];

export const steden = [
  { naam: "Almere", provincie: "Flevoland" },
  { naam: "Lelystad", provincie: "Flevoland" },
  { naam: "Amsterdam", provincie: "Noord-Holland" },
  { naam: "Haarlem", provincie: "Noord-Holland" },
  { naam: "Hilversum", provincie: "Noord-Holland" },
  { naam: "Utrecht", provincie: "Utrecht" },
  { naam: "Amersfoort", provincie: "Utrecht" },
  { naam: "Rotterdam", provincie: "Zuid-Holland" },
  { naam: "Den Haag", provincie: "Zuid-Holland" },
  { naam: "Zwolle", provincie: "Overijssel" },
  { naam: "Apeldoorn", provincie: "Gelderland" },
  { naam: "Arnhem", provincie: "Gelderland" },
  { naam: "Eindhoven", provincie: "Noord-Brabant" },
  { naam: "Groningen", provincie: "Groningen" },
  { naam: "Leeuwarden", provincie: "Friesland" },
].map((s) => ({
  ...s,
  slug: s.naam.toLowerCase().replace(/\s+/g, "-"),
}));

export type Stad = (typeof steden)[number];

export function getStad(slug: string) {
  return steden.find((s) => s.slug === slug);
}
