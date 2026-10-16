import { images } from "@/lib/content";

export type Visual = { image: string } | { illustration: "groepenkast" | "monteur" };

export type Dienst = {
  slug: string;
  title: string;
  short: string;
  intro: string[];
  tasks: string[];
  faq: { q: string; a: string }[];
  visual: Visual;
  featured?: boolean;
};

export const diensten: Dienst[] = [
  {
    slug: "groepenkast-vervangen",
    title: "Groepenkast vervangen",
    short: "Een veilige, moderne groepenkast met voldoende groepen en aardlekschakelaars.",
    visual: { illustration: "groepenkast" },
    featured: true,
    intro: [
      "Bij Elektricien Dijkstra vervangen we dagelijks groepenkasten. Van een verouderde kast met smeltzekeringen tot een uitbreiding voor een inductiekookplaat, warmtepomp of laadpaal.",
      "We zijn volledig verzekerd en geen klus is te groot of te klein. U krijgt vooraf een vaste prijs en wij staan 100% achter ons werk.",
    ],
    tasks: [
      "Inspectie van uw huidige groepenkast",
      "Advies over het aantal groepen en aardlekschakelaars",
      "Vervangen van de complete kast, meestal binnen één dag",
      "Extra groepen voor kookplaat, warmtepomp of laadpaal",
      "Controle en meting volgens NEN 1010",
    ],
    faq: [
      {
        q: "Hulp bij een groepenkast vervangen",
        a: "Wij komen langs, beoordelen uw huidige kast en adviseren hoeveel groepen en aardlekschakelaars u nodig heeft. Daarna vervangen we de kast meestal binnen één dag.",
      },
      {
        q: "Hoe weet ik of mijn huis een ouderwetse groepenkast heeft?",
        a: "Ziet u nog schroefzekeringen (stoppen), weinig of geen aardlekschakelaars of een houten achterwand? Dan is uw groepenkast vaak verouderd en is vervangen verstandig.",
      },
      {
        q: "Hoeveel kost het om een groepenkast te vervangen?",
        a: "Dat hangt af van het aantal groepen en de staat van de huidige installatie. Na een korte inspectie ontvangt u een vaste prijs zonder verrassingen achteraf.",
      },
    ],
  },
  {
    slug: "meterkast-vervangen",
    title: "Meterkast vervangen",
    short: "Een verouderde meterkast vernieuwen, inclusief afstemming met de netbeheerder.",
    visual: { illustration: "groepenkast" },
    intro: [
      "Een meterkast bevat de hoofdaansluiting, de meter en de groepenkast. In oudere woningen is de meterkast vaak te klein of niet meer veilig voor het huidige stroomverbruik.",
      "Wij vernieuwen de installatie achter de meter en stemmen waar nodig af met uw netbeheerder, bijvoorbeeld bij een verzwaring van de aansluiting.",
    ],
    tasks: [
      "Beoordeling van de complete meterkast",
      "Vernieuwen van de installatie achter de meter",
      "Hulp bij het aanvragen van een zwaardere aansluiting",
      "Netjes wegwerken van bekabeling",
      "Eindcontrole en uitleg over de nieuwe installatie",
    ],
    faq: [
      {
        q: "Wat is het verschil tussen een meterkast en een groepenkast?",
        a: "De meterkast is de hele kast met de aansluiting en de meter. De groepenkast is het deel waarin de groepen, automaten en aardlekschakelaars zitten.",
      },
      {
        q: "Wanneer moet ik mijn meterkast laten vervangen?",
        a: "Bij brandplekken, smeltzekeringen, een houten achterwand, te weinig ruimte of als u meer vermogen nodig heeft, bijvoorbeeld voor een laadpaal of warmtepomp.",
      },
      {
        q: "Moet de netbeheerder ook langskomen?",
        a: "Alleen als de hoofdaansluiting of meter aangepast moet worden. Wij vertellen u vooraf of dat nodig is en helpen bij de aanvraag.",
      },
    ],
  },
  {
    slug: "elektra-aanleggen",
    title: "Elektra aanleggen",
    short: "Nieuwe groepen, stopcontacten, schakelaars en complete installaties.",
    visual: { image: images.kabels },
    featured: true,
    intro: [
      "Bij Elektricien Dijkstra vinden we dat u niet meerdere bedrijven hoeft in te huren om één klus te klaren. Daarom bieden we een uitgebreide lijst met elektrische diensten aan.",
      "Onze gecertificeerde elektriciens voeren installaties uit die voldoen aan de geldende voorschriften (NEN 1010), voor uw veiligheid en bescherming.",
    ],
    tasks: [
      "Extra stopcontacten en schakelaars plaatsen",
      "Nieuwe groepen aanleggen",
      "Leidingen frezen en netjes wegwerken",
      "Buitenverlichting en tuinstroom",
      "Complete installaties voor woning en bedrijf",
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
    slug: "kortsluiting-oplossen",
    title: "Kortsluiting oplossen",
    short: "De oorzaak van kortsluiting snel opsporen en veilig verhelpen.",
    visual: { image: images.multimeter },
    featured: true,
    intro: [
      "Het elektrische systeem in huis is complex en bedient zowel apparaten als verlichting. Een kortsluiting is vaak een teken dat er ergens iets misgaat.",
      "Sommige problemen zijn het gevolg van slechte gewoonten, andere zijn dieper en vereisen de hulp van een getrainde professional. Wij sporen de oorzaak snel op met professionele meetapparatuur.",
    ],
    tasks: [
      "Groep voor groep doormeten van de installatie",
      "Opsporen van defecte apparaten of bedrading",
      "Vervangen van beschadigde kabels en aansluitingen",
      "Vervangen van defecte automaten",
      "Advies om herhaling te voorkomen",
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
    slug: "24-7-spoed-elektricien",
    title: "24/7 spoed elektricien",
    short: "Dag en nacht hulp bij storingen, stroomuitval en gevaarlijke situaties.",
    visual: { illustration: "monteur" },
    featured: true,
    intro: [
      "Noodsituaties kunnen hoofdpijn veroorzaken, vooral wanneer uw gezin of bedrijf wordt getroffen. Daarom bieden wij een 24/7 elektrische noodservice aan.",
      "Onze ervaren servicemonteurs staan dag en nacht voor u klaar, ook in het weekend en op feestdagen.",
    ],
    tasks: [
      "Hulp bij volledige stroomuitval",
      "Verhelpen van storingen en kortsluiting",
      "Veiligstellen van gevaarlijke situaties",
      "Tijdelijke oplossingen zodat u weer stroom heeft",
      "Definitief herstel, waar mogelijk direct",
    ],
    faq: [
      {
        q: "24 uur per dag elektriciens voor noodgevallen",
        a: "Ook 's avonds, in het weekend en op feestdagen kunt u ons bellen bij een storing of stroomuitval.",
      },
      {
        q: "Hoe wordt het vinden van elektrische storingen gedaan?",
        a: "We meten groep voor groep de installatie door om de storing te lokaliseren en lossen het probleem waar mogelijk direct op.",
      },
      {
        q: "Wat te doen bij een noodgeval?",
        a: "Schakel de hoofdschakelaar uit als u brandlucht ruikt of vonken ziet, raak niets aan en bel ons direct. Bij brand belt u altijd eerst 112.",
      },
    ],
  },
  {
    slug: "stroomstoring-oplossen",
    title: "Stroomstoring oplossen",
    short: "Een groep of het hele huis zonder stroom? Wij vinden de oorzaak.",
    visual: { image: images.multimeter },
    intro: [
      "Een stroomstoring kan veel oorzaken hebben: een defect apparaat, vocht in een buitenstopcontact, een overbelaste groep of een probleem in de bedrading.",
      "Onze monteurs sporen de oorzaak systematisch op en zorgen dat u zo snel mogelijk weer veilig stroom heeft.",
    ],
    tasks: [
      "Controle van groepenkast en aardlekschakelaars",
      "Opsporen van lekstroom en vochtproblemen",
      "Testen van aangesloten apparaten",
      "Herstel van defecte onderdelen",
      "Uitleg over de oorzaak en preventie",
    ],
    faq: [
      {
        q: "Wat kan ik zelf doen bij een stroomstoring?",
        a: "Haal alle stekkers uit de groep die is uitgevallen en zet de schakelaar weer aan. Gaat het goed, steek dan de stekkers één voor één terug om het defecte apparaat te vinden.",
      },
      {
        q: "Is de storing bij mij of bij de netbeheerder?",
        a: "Hebben de buren ook geen stroom, dan ligt de storing vaak bij de netbeheerder. Is het alleen bij u, dan zit het probleem in uw eigen installatie.",
      },
      {
        q: "Hoe snel kunnen jullie er zijn?",
        a: "Bij spoed proberen we dezelfde dag langs te komen. Bel ons voor de actuele beschikbaarheid in uw regio.",
      },
    ],
  },
  {
    slug: "stroomuitval-verhelpen",
    title: "Stroomuitval verhelpen",
    short: "Volledige stroomuitval in huis of bedrijf snel en veilig opgelost.",
    visual: { illustration: "monteur" },
    intro: [
      "Valt de stroom in uw hele woning of bedrijfspand uit, dan wilt u snel weten wat er aan de hand is. Wij helpen u om de oorzaak te vinden en de stroom veilig te herstellen.",
      "Na het herstel krijgt u advies om herhaling te voorkomen, bijvoorbeeld door de groepen beter te verdelen.",
    ],
    tasks: [
      "Controle van hoofdschakelaar en hoofdzekering",
      "Meten van de installatie op lekstroom",
      "Opsporen van overbelaste groepen",
      "Herstel van defecte onderdelen",
      "Advies over een betere verdeling van de groepen",
    ],
    faq: [
      {
        q: "Waarom valt de stroom steeds opnieuw uit?",
        a: "Vaak is een groep overbelast of is er een defect apparaat. Ook vocht of een beschadigde kabel kan de oorzaak zijn.",
      },
      {
        q: "Is herhaalde stroomuitval gevaarlijk?",
        a: "Het kan wijzen op oververhitting of een defect. Laat het daarom altijd controleren door een elektricien.",
      },
      {
        q: "Werken jullie ook voor bedrijven?",
        a: "Ja, we verhelpen storingen bij woningen, winkels, kantoren en bedrijfspanden.",
      },
    ],
  },
  {
    slug: "renovatie-van-elektra",
    title: "Renovatie van elektra",
    short: "Verouderde bedrading en installaties vernieuwen volgens de huidige norm.",
    visual: { image: images.kabels },
    intro: [
      "Bij een verbouwing of in een ouder huis is het verstandig om de elektra te vernieuwen. Oude bedrading kan brandgevaarlijk zijn en voldoet vaak niet meer aan de huidige eisen.",
      "Wij renoveren uw installatie stap voor stap, zodat u veilig en met voldoende capaciteit verder kunt.",
    ],
    tasks: [
      "Vervangen van oude, stoffen of ongeaarde bedrading",
      "Nieuwe leidingen en wandcontactdozen",
      "Aarding aanbrengen waar die ontbreekt",
      "Afstemming met aannemer of verbouwer",
      "Opleveringscontrole volgens NEN 1010",
    ],
    faq: [
      {
        q: "Wanneer is mijn bedrading verouderd?",
        a: "Bij stoffen omhulde draden, ongeaarde stopcontacten, smeltzekeringen of als de installatie ouder is dan 30 tot 40 jaar.",
      },
      {
        q: "Kan ik in huis blijven tijdens de renovatie?",
        a: "Meestal wel. We werken per ruimte of per groep, zodat u zo min mogelijk zonder stroom zit.",
      },
      {
        q: "Werken jullie samen met mijn aannemer?",
        a: "Ja, we stemmen de planning graag af met uw aannemer of andere vakmensen.",
      },
    ],
  },
  {
    slug: "oude-gebouwen-renoveren",
    title: "Oude gebouwen renoveren",
    short: "Elektra in monumenten en oudere panden met zorg vernieuwen.",
    visual: { image: images.team },
    intro: [
      "Oudere panden en monumenten vragen om extra zorg. De bestaande constructie en afwerking wilt u zoveel mogelijk behouden, terwijl de elektra veilig en modern moet worden.",
      "Wij denken mee over slimme oplossingen om leidingen weg te werken zonder onnodige schade.",
    ],
    tasks: [
      "Inventarisatie van de bestaande installatie",
      "Plan voor het wegwerken van leidingen",
      "Vernieuwen van bedrading en groepenkast",
      "Aanleggen van aarding",
      "Netjes afwerken met oog voor detail",
    ],
    faq: [
      {
        q: "Werken jullie ook in monumenten?",
        a: "Ja. We houden rekening met de regels voor monumenten en overleggen vooraf over de aanpak.",
      },
      {
        q: "Moet er veel gesloopt worden?",
        a: "Nee, we zoeken zoveel mogelijk naar bestaande ruimtes en kanalen om leidingen weg te werken.",
      },
      {
        q: "Krijg ik vooraf een prijs?",
        a: "Ja, na een inspectie ontvangt u een duidelijke offerte.",
      },
    ],
  },
  {
    slug: "elektra-voor-nieuwbouw",
    title: "Elektra voor nieuwbouw",
    short: "Complete elektrische installatie voor nieuwbouw, aanbouw en opbouw.",
    visual: { image: images.kabels },
    intro: [
      "Bouwt u een nieuwe woning, aanbouw of bedrijfspand? Wij verzorgen de complete elektrische installatie, van ontwerp tot oplevering.",
      "We denken vooruit, zodat uw installatie klaar is voor een laadpaal, zonnepanelen, warmtepomp of slimme verlichting.",
    ],
    tasks: [
      "Ontwerp van de elektrische installatie",
      "Aanleg van leidingen tijdens de ruwbouw",
      "Plaatsen van groepenkast en eindmontage",
      "Voorbereiding op laadpaal, zonnepanelen en warmtepomp",
      "Oplevering met keuring en documentatie",
    ],
    faq: [
      {
        q: "Wanneer moet ik een elektricien inschakelen bij nieuwbouw?",
        a: "Zo vroeg mogelijk, zodat leidingen tijdens de ruwbouw meegenomen kunnen worden.",
      },
      {
        q: "Kunnen jullie ook een aanbouw aansluiten?",
        a: "Ja, we breiden de bestaande installatie uit of plaatsen een extra groepenkast.",
      },
      {
        q: "Krijg ik tekeningen van de installatie?",
        a: "Ja, bij oplevering ontvangt u een overzicht van de groepen en de installatie.",
      },
    ],
  },
  {
    slug: "schakelaars-en-bekabeling",
    title: "Schakelaars en bekabeling",
    short: "Schakelaars, dimmers, stopcontacten en kabels vervangen of bijplaatsen.",
    visual: { image: images.kabels },
    intro: [
      "Een stopcontact dat los zit, een schakelaar die niet meer goed werkt of te weinig aansluitpunten: kleine klussen die toch vakwerk vragen.",
      "Wij vervangen en plaatsen schakelaars, dimmers en stopcontacten en leggen nieuwe bekabeling netjes aan.",
    ],
    tasks: [
      "Vervangen van schakelaars en stopcontacten",
      "Plaatsen van (LED-)dimmers",
      "Extra aansluitpunten bijplaatsen",
      "Netwerk- en datakabels aanleggen",
      "Wisselschakelingen en bewegingssensoren",
    ],
    faq: [
      {
        q: "Moet ik een stopcontact vervangen als de stekker los zit?",
        a: "Ja. Een losse stekker geeft slecht contact, waardoor het stopcontact warm kan worden. Laat het vervangen om brandgevaar te voorkomen.",
      },
      {
        q: "Welke dimmer heb ik nodig voor LED-lampen?",
        a: "Voor LED-lampen heeft u een geschikte LED-dimmer nodig. Wij adviseren u graag over de juiste combinatie.",
      },
      {
        q: "Doen jullie ook kleine klussen?",
        a: "Ja, geen klus is te klein. We combineren kleine klussen graag in één bezoek.",
      },
    ],
  },
  {
    slug: "led-verlichting-aansluiten",
    title: "(LED-)verlichting aansluiten",
    short: "Binnen- en buitenverlichting, spots en LED-strips vakkundig aangesloten.",
    visual: { image: images.kabels },
    intro: [
      "Goede verlichting maakt een ruimte. Wij sluiten alle soorten verlichting aan, van inbouwspots en hanglampen tot LED-strips en tuinverlichting.",
      "We adviseren over de juiste armaturen, dimmers en schakelingen, zodat u energiezuinig en sfeervol licht heeft.",
    ],
    tasks: [
      "Inbouwspots plaatsen en aansluiten",
      "LED-strips en dimmers installeren",
      "Buiten- en tuinverlichting aanleggen",
      "Bewegingssensoren en schemerschakelaars",
      "Ombouw van oude verlichting naar LED",
    ],
    faq: [
      {
        q: "Kan ik mijn oude verlichting vervangen door LED?",
        a: "In de meeste gevallen wel. Soms is een andere dimmer of transformator nodig. Wij controleren dit voor u.",
      },
      {
        q: "Leggen jullie ook tuinverlichting aan?",
        a: "Ja, inclusief buitenstopcontacten en een eigen groep als dat nodig is.",
      },
      {
        q: "Waarom flikkeren mijn LED-lampen?",
        a: "Vaak door een dimmer die niet geschikt is voor LED of een slechte verbinding. Wij lossen dit op.",
      },
    ],
  },
  {
    slug: "lampen-installeren",
    title: "Lampen installeren",
    short: "Hanglampen, plafondlampen en wandlampen veilig opgehangen en aangesloten.",
    visual: { image: images.kabels },
    intro: [
      "Een nieuwe lamp ophangen lijkt eenvoudig, maar zware armaturen en slechte aansluitingen kunnen gevaarlijk zijn.",
      "Wij hangen uw lampen stevig op en sluiten ze veilig aan, ook op hoge plafonds of lastige plekken.",
    ],
    tasks: [
      "Ophangen van hang- en plafondlampen",
      "Plaatsen van wandlampen",
      "Nieuwe lichtpunten maken",
      "Aansluiten van zware of grote armaturen",
      "Afwerking van plafond en wand",
    ],
    faq: [
      {
        q: "Kunnen jullie een extra lichtpunt maken?",
        a: "Ja, we leggen een nieuwe leiding aan en maken een extra lichtpunt met schakelaar.",
      },
      {
        q: "Hangen jullie ook zware kroonluchters op?",
        a: "Ja, we zorgen voor een stevige bevestiging die het gewicht aankan.",
      },
      {
        q: "Hoe lang duurt het ophangen van een lamp?",
        a: "Meestal is dit binnen een uur klaar, afhankelijk van de lamp en de situatie.",
      },
    ],
  },
  {
    slug: "perilex-aansluitingen",
    title: "Perilex aansluitingen",
    short: "Perilex of krachtstroom voor kookplaten, ovens en zware apparatuur.",
    visual: { image: images.kabels },
    intro: [
      "Voor een elektrische of inductiekookplaat heeft u vaak een perilex aansluiting of een aparte groep nodig. Een gewoon stopcontact kan die belasting niet aan.",
      "Wij leggen een perilex aansluiting aan inclusief de benodigde groepen in de groepenkast.",
    ],
    tasks: [
      "Aanleggen van een perilex aansluiting",
      "Extra groepen in de groepenkast",
      "Aansluiten van inductiekookplaat of oven",
      "Krachtstroom voor werkplaats of bedrijf",
      "Controle van de belasting van uw installatie",
    ],
    faq: [
      {
        q: "Heb ik een perilex aansluiting nodig voor inductie?",
        a: "Voor de meeste inductiekookplaten wel. Wij bekijken wat uw kookplaat nodig heeft en wat uw groepenkast aankan.",
      },
      {
        q: "Moet mijn groepenkast ook aangepast worden?",
        a: "Vaak zijn er twee extra groepen nodig. Is er geen ruimte, dan breiden we de kast uit of vervangen we hem.",
      },
      {
        q: "Hoe lang duurt het aanleggen?",
        a: "In de meeste woningen is dit binnen een dag gerealiseerd.",
      },
    ],
  },
  {
    slug: "elektra-problemen",
    title: "Elektra problemen",
    short: "Flikkerende lampen, warme stopcontacten of een zoemende groepenkast? Wij helpen.",
    visual: { image: images.multimeter },
    intro: [
      "We raden u aan om bij de eerste tekenen van elektrische problemen te bellen. Vroeg opgeloste problemen besparen tijd, geld en frustratie.",
      "Het negeren van een elektrisch probleem kan leiden tot dure reparaties of gevaarlijke situaties.",
    ],
    tasks: [
      "Onderzoek naar flikkerende verlichting",
      "Controle van warme of verkleurde stopcontacten",
      "Opsporen van zoemen of knetteren in de groepenkast",
      "Meten van spanning en aarding",
      "Herstel en advies",
    ],
    faq: [
      {
        q: "Waarom zoemt mijn groepenkast?",
        a: "Een licht gezoem kan normaal zijn, maar luid zoemen of knetteren wijst vaak op een losse verbinding of een defecte schakelaar.",
      },
      {
        q: "Waarom gaat mijn lamp sneller kapot dan verwacht?",
        a: "Een te hoge spanning, losse aansluitingen of een verkeerde dimmer kunnen de levensduur van een lamp flink verkorten.",
      },
      {
        q: "Een stopcontact is warm, wat nu?",
        a: "Haal de stekker eruit en gebruik het stopcontact niet meer. Laat het zo snel mogelijk controleren.",
      },
    ],
  },
];

export function getDienst(slug: string) {
  return diensten.find((d) => d.slug === slug);
}

export const featuredDiensten = diensten.filter((d) => d.featured);
