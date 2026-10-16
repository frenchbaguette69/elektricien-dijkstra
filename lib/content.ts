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

export const diensten = [
  "Elektra aanleggen",
  "Renovatie van elektra",
  "Kortsluiting oplossen",
  "Stroomstoringen oplossen",
  "Schakelaars en bekabelingen",
  "Stroomuitval verhelpen",
  "(LED-)verlichting aansluiten",
  "Elektra problemen",
  "Oude gebouwen renoveren",
  "Groepenkast vervangen",
  "Perilex aansluitingen",
  "Elektra voor nieuwbouw",
  "Meterkast vervangen",
  "Lampen installeren",
  "24/7 spoed elektriciens",
];

export type DienstKaart = {
  title: string;
  image?: string;
  icon?: "groepenkast" | "monteur";
  paragraphs: string[];
  faq: { q: string; a: string }[];
};

export const dienstKaarten: DienstKaart[] = [
  {
    title: "Meterkast & groepenkast vervangen",
    icon: "groepenkast",
    paragraphs: [
      "Bij Elektricien Dijkstra vervangen we dagelijks meterkasten en groepenkasten. Van een verouderde kast met smeltzekeringen tot een uitbreiding voor een inductiekookplaat of laadpaal.",
      "We zijn volledig verzekerd en geen klus is te groot of te klein. U krijgt vooraf een vaste prijs en wij staan 100% achter ons werk.",
    ],
    faq: [
      {
        q: "Hulp bij een groepenkast vervangen",
        a: "Wij komen langs, beoordelen uw huidige kast en adviseren hoeveel groepen en aardlekschakelaars u nodig heeft. Daarna vervangen we de kast meestal binnen één dag.",
      },
      {
        q: "Hoe weet ik of mijn huis een ouderwetse meterkast heeft?",
        a: "Ziet u nog schroefzekeringen (stoppen), weinig of geen aardlekschakelaars of een houten achterwand? Dan is uw meterkast vaak verouderd en is vervangen verstandig.",
      },
      {
        q: "Hoeveel kost het om een meterkast of groepenkast te vervangen?",
        a: "Dat hangt af van het aantal groepen en de staat van de huidige installatie. Na een korte inspectie ontvangt u een vaste prijs zonder verrassingen achteraf.",
      },
    ],
  },
  {
    title: "Elektra aanleggen",
    image: images.kabels,
    paragraphs: [
      "Bij Elektricien Dijkstra vinden we dat u niet meerdere bedrijven hoeft in te huren om één klus te klaren. Daarom bieden we een uitgebreide lijst met elektrische diensten aan.",
      "Onze gecertificeerde elektriciens voeren installaties uit die voldoen aan de geldende voorschriften (NEN 1010), voor uw veiligheid en bescherming.",
    ],
    faq: [
      {
        q: "Onze installatiediensten omvatten:",
        a: "Nieuwe groepen, wandcontactdozen, schakelaars, verlichting, perilex aansluitingen, buitenverlichting en complete elektra voor nieuwbouw en renovatie.",
      },
      {
        q: "Voordelen van onze installaties",
        a: "Veilig en volgens de norm aangelegd, netjes weggewerkt en met garantie. U krijgt vooraf een duidelijke offerte.",
      },
      {
        q: "Elektrische installaties voor alle sectoren",
        a: "We werken voor particulieren, VvE's, winkels, kantoren en bedrijfspanden door heel Nederland.",
      },
    ],
  },
  {
    title: "Kortsluiting",
    image: images.multimeter,
    paragraphs: [
      "Het elektrische systeem in huis is complex en bedient zowel apparaten als verlichting. Een kortsluiting is vaak een teken dat er ergens iets misgaat.",
      "Sommige problemen zijn het gevolg van slechte gewoonten, andere zijn dieper en vereisen de hulp van een getrainde professional. Wij sporen de oorzaak snel op met professionele meetapparatuur.",
    ],
    faq: [
      {
        q: "Wanneer bellen voor reparatie van het uitschakelcircuit?",
        a: "Slaat de aardlekschakelaar steeds opnieuw af, ook nadat u apparaten heeft losgekoppeld? Bel dan een elektricien. Er kan sprake zijn van een defect in de bedrading.",
      },
      {
        q: "Reparatie en vervanging van stroomonderbrekers",
        a: "Defecte automaten en aardlekschakelaars vervangen we direct uit voorraad, zodat u snel weer veilig stroom heeft.",
      },
      {
        q: "Waarom kiezen voor Elektricien Dijkstra?",
        a: "Snel ter plaatse, vaste prijzen vooraf, gediplomeerde monteurs en garantie op het uitgevoerde werk.",
      },
    ],
  },
  {
    title: "24/7 elektra storingsdienst",
    icon: "monteur",
    paragraphs: [
      "Noodsituaties kunnen hoofdpijn veroorzaken, vooral wanneer uw gezin of bedrijf wordt getroffen. Daarom bieden wij een 24/7 elektrische noodservice aan. Wij hebben ervaren servicemonteurs die dag en nacht voor u klaarstaan.",
    ],
    faq: [
      {
        q: "24 uur per dag elektriciens voor noodgevallen",
        a: "Ook 's avonds, in het weekend en op feestdagen kunt u ons bellen bij een storing of stroomuitval.",
      },
      {
        q: "Is er een noodgeval? Hoe wordt het vinden van elektrische storingen gedaan?",
        a: "We meten groep voor groep de installatie door om de storing te lokaliseren en lossen het probleem waar mogelijk direct op.",
      },
      {
        q: "Wat te doen bij een noodgeval?",
        a: "Schakel de hoofdschakelaar uit als u brandlucht ruikt of vonken ziet, raak niets aan en bel ons direct. Bij brand belt u altijd eerst 112.",
      },
    ],
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

export const werkgebied = [
  "Almere",
  "Amsterdam",
  "Utrecht",
  "Rotterdam",
  "Den Haag",
  "Amersfoort",
  "Lelystad",
  "Zwolle",
  "Haarlem",
  "Hilversum",
  "Apeldoorn",
  "Eindhoven",
  "Groningen",
  "Arnhem",
  "Leeuwarden",
];
