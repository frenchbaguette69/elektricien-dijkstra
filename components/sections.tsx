import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronRight, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { CardAccordion, FaqAccordion } from "@/components/accordion";
import { Badge247, GoogleBox, TrustBadges } from "@/components/badges";
import { PhoneButton } from "@/components/buttons";
import { CheckList } from "@/components/check-list";
import { ContactForm } from "@/components/contact-form";
import { GroepenkastIllustration, MonteurIllustration } from "@/components/illustrations";
import { images, reviews, spoedPunten, steden } from "@/lib/content";
import { diensten, type Dienst, type Visual } from "@/lib/diensten";
import { site } from "@/lib/site";

export const container = "mx-auto w-full max-w-[1100px] px-4";

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Kruimelpad" className="text-sm text-white/90">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  title,
  eyebrow,
  breadcrumbs,
  image = images.team,
}: {
  title: string;
  eyebrow?: string;
  breadcrumbs: { href?: string; label: string }[];
  image?: string;
}) {
  return (
    <section className="relative">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className={`${container} relative py-14 text-white sm:py-20`}>
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow && <p className="mt-4 text-lg">{eyebrow}</p>}
        <h1 className="mt-1 max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h1>
      </div>
    </section>
  );
}

export function HelpSidebar() {
  return (
    <aside>
      <a
        href={site.phoneHref}
        className="flex items-center justify-between bg-accent px-4 py-3 font-bold hover:bg-accent-dark"
      >
        <span className="flex items-center gap-2">
          {site.phone}
          <Phone className="h-4 w-4 fill-current" aria-hidden />
        </span>
        <Badge247 className="h-8 w-12" />
      </a>
      <nav className="bg-brand text-sm font-bold text-white">
        {[
          { label: "Bel mij terug", icon: PhoneCall },
          { label: "Afspraak maken", icon: CalendarDays },
          { label: "Contactformulier", icon: Mail },
        ].map(({ label, icon: Icon }) => (
          <Link
            key={label}
            href="/contact"
            className="flex items-center justify-between border-b border-white/25 px-4 py-4 uppercase last:border-0 hover:bg-brand-dark"
          >
            {label}
            <Icon className="h-4 w-4" aria-hidden />
          </Link>
        ))}
      </nav>
      <div className="mt-2">
        <GoogleBox />
      </div>
      <div className="mt-4 flex justify-center">
        <TrustBadges />
      </div>
    </aside>
  );
}

export function SpoedSection() {
  return (
    <section className="bg-brand text-white">
      <div className={`${container} grid items-end gap-10 pt-10 lg:grid-cols-[1fr_270px]`}>
        <div className="pb-10">
          <p className="text-lg">Voor spoedstoringen zijn wij 24/7 beschikbaar.</p>
          <h2 className="mb-3 text-2xl font-bold">Spoed elektricien in heel Nederland</h2>
          <p className="mb-3 text-sm leading-relaxed">
            Elektrische noodgevallen zijn vaak eng, frustrerend en onhandig. Daarom staat ons team van ervaren
            elektriciens klaar om zelfs de meest complexe elektrische problemen op te lossen. Groot of klein,{" "}
            {site.name} begrijpt dat u onmiddellijk hulp nodig heeft.
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            Onze goed uitgeruste bussen staan elke dag klaar voor elk soort elektrisch klusje. We hebben de
            benodigde onderdelen bij ons, zodat we meteen kunnen beginnen en de klus in één keer goed kunnen
            afronden. Vooraf krijgt u een duidelijke prijs van onze experts.
          </p>
          <CheckList items={spoedPunten} className="mb-6 space-y-1.5 text-sm font-bold" iconClassName="text-white" />
          <PhoneButton />
        </div>
        <div className="flex flex-col items-center bg-white pt-6 text-ink">
          <p className="mb-4">Hoofdmonteur</p>
          <Image
            src={images.hoofdmonteur}
            alt={`Hoofdmonteur van ${site.name}`}
            width={270}
            height={360}
            className="h-auto w-full"
            sizes="270px"
          />
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection({ limit, headingLevel = "h2" }: { limit?: number; headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const items = limit ? reviews.slice(0, limit) : reviews;
  return (
    <section className="bg-muted py-14">
      <div className={container}>
        <Heading className="text-center text-2xl font-bold">Dit is wat klanten over ons zeggen.</Heading>
        <p className="mx-auto mb-10 max-w-xs text-center text-lg">
          Wij worden op verschillende platforms beoordeeld door onze klanten.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <figure key={r.name} className="flex flex-col bg-white p-5 shadow-sm">
              <span className="mb-4 text-sm text-amber-500" aria-label="5 sterren">
                ★★★★★
              </span>
              <blockquote className="mb-6 text-sm italic leading-relaxed">{r.text}</blockquote>
              <figcaption className="mt-auto text-sm">
                <span className="block font-bold">{r.name}</span>
                {r.place}
              </figcaption>
            </figure>
          ))}
        </div>
        {limit && (
          <p className="mt-8 text-center">
            <Link href="/reviews" className="inline-flex items-center gap-2 font-bold text-brand hover:underline">
              Alle reviews bekijken
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

export function DienstVisual({ visual, alt, size = 160 }: { visual: Visual; alt: string; size?: number }) {
  if ("image" in visual) {
    return (
      <Image
        src={visual.image}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
    );
  }
  return visual.illustration === "groepenkast" ? <GroepenkastIllustration /> : <MonteurIllustration />;
}

export function DienstCard({ dienst }: { dienst: Dienst }) {
  return (
    <article className="flex flex-col bg-white p-6 text-center sm:p-8">
      <div className="mb-6 flex h-40 items-center justify-center">
        <DienstVisual visual={dienst.visual} alt={dienst.title} />
      </div>
      <h3 className="mb-3 text-lg font-bold">{dienst.title}</h3>
      {dienst.intro.map((p) => (
        <p key={p} className="mb-3 text-sm leading-relaxed">
          {p}
        </p>
      ))}
      <div className="mt-auto">
        <CardAccordion items={dienst.faq} />
        <Link
          href={`/diensten/${dienst.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
        >
          Meer over {dienst.title.toLowerCase()}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function DienstenGrid({ items = diensten }: { items?: Dienst[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((d) => (
        <Link
          key={d.slug}
          href={`/diensten/${d.slug}`}
          className="group flex flex-col items-center bg-muted p-6 text-center transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex h-40 items-center justify-center">
            <DienstVisual visual={d.visual} alt={d.title} size={140} />
          </div>
          <h3 className="mb-2 text-lg font-bold group-hover:text-brand">{d.title}</h3>
          <p className="mb-4 text-sm leading-relaxed">{d.short}</p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand">
            Meer informatie
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function DienstenCompact({ items = diensten }: { items?: Dienst[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((d) => (
        <li key={d.slug}>
          <Link
            href={`/diensten/${d.slug}`}
            className="group flex h-full items-start gap-3 border-l-4 border-brand bg-muted p-4 transition-shadow hover:shadow-md"
          >
            <span className="flex-1">
              <span className="block font-bold group-hover:text-brand">{d.title}</span>
              <span className="mt-1 block text-sm leading-relaxed">{d.short}</span>
            </span>
            <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 stroke-[3] text-brand" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function OverOnsSection() {
  return (
    <section className={`${container} grid items-center gap-10 py-14 md:grid-cols-2`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={images.hoofdmonteur}
          alt={`Monteur van ${site.name} aan het werk`}
          fill
          sizes="(min-width: 768px) 520px, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="mb-3 text-xl font-bold">Over {site.name}</h2>
        <p className="mb-4 text-sm leading-relaxed">
          {site.name} is een elektrotechnisch installatiebedrijf voor particulieren, verhuurders en bedrijven.
          Onze monteurs zijn gediplomeerd en hebben jarenlange ervaring met storingen, groepenkasten, renovaties en
          complete installaties. Elke klus voeren we uit volgens de geldende normen, zodat u zeker weet dat uw
          installatie veilig is.
        </p>
        <p className="mb-4 text-sm leading-relaxed">
          Wij geloven in eerlijk advies. Is iets niet nodig, dan zeggen we dat ook. U krijgt vooraf een duidelijke
          prijs, onze monteurs werken netjes en ruimen na afloop alles op. Na de klus leggen we uit wat we hebben
          gedaan en waar u in de toekomst op moet letten.
        </p>
        <h3 className="mb-2 font-bold">Zo werken wij</h3>
        <ol className="space-y-2 text-sm">
          {[
            "U belt of vult het contactformulier in en vertelt wat er aan de hand is.",
            "Wij plannen een afspraak die u uitkomt, bij spoed vaak nog dezelfde dag.",
            "De monteur bekijkt de situatie en geeft vooraf een duidelijke prijs.",
            "Na akkoord voeren we het werk direct uit en testen we alles goed na.",
          ].map((stap, i) => (
            <li key={stap} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-brand text-xs font-bold text-white">
                {i + 1}
              </span>
              {stap}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function DienstenLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={className}>
      {diensten.map((d) => (
        <li key={d.slug}>
          <Link href={`/diensten/${d.slug}`} className="flex items-start gap-2 hover:text-brand">
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 stroke-[3] text-brand" aria-hidden />
            {d.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function DienstenSection({ cards, title }: { cards: Dienst[]; title: string }) {
  return (
    <section className="py-14">
      <div className={container}>
        <div className="bg-muted px-4 py-10 sm:px-10">
          <h2 className="mb-6 text-center text-xl font-bold">{title}</h2>
          <DienstenLinks className="mx-auto mb-6 grid max-w-3xl gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3" />
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed">
            We raden u aan om bij de eerste tekenen van elektrische problemen in uw huis of kantoor te bellen.
            Vroeg opgeloste problemen besparen tijd, geld en frustratie en helpen vooral om veiligheidsrisico&apos;s
            te voorkomen. Het negeren van een elektrisch probleem kan leiden tot dure reparaties of grotere
            problemen.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((d) => (
              <DienstCard key={d.slug} dienst={d} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function KostenSection() {
  return (
    <section className={`${container} grid items-center gap-10 pb-16 md:grid-cols-2`}>
      <div>
        <h2 className="mb-3 text-xl font-bold">Kosten elektricien</h2>
        <p className="mb-4 text-sm leading-relaxed">
          {site.name} prijst diensten van geval tot geval door middel van vooraf vastgestelde prijzen. Ons doel is
          om u een eerlijke prijs te bieden die de onderdelen, arbeid en specificiteit van het werk nauwkeurig
          weerspiegelt. Om deze reden bieden we een gratis en vrijblijvend adviesgesprek aan waarin we uw
          elektrische behoeften beoordelen en u een eerlijke prijs aanbieden.
        </p>
        <CheckList
          items={["Landelijk actief", "24/7 bereikbaar bij spoed", "Hoge klanttevredenheid"]}
          className="mb-6 space-y-1.5 text-sm font-bold"
        />
        <div className="flex flex-wrap items-center gap-4">
          <PhoneButton />
          <Link href="/kosten" className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline">
            Meer over onze tarieven
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={images.team}
          alt={`Monteurs van ${site.name}`}
          fill
          sizes="(min-width: 768px) 520px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

export function FaqSection({
  items,
  title = "Veelgestelde vragen aan onze elektriciens",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="pb-16">
      <div className={container}>
        <div className="bg-brand px-4 py-10 sm:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">{title}</h2>
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}

export function WerkgebiedSection() {
  return (
    <section className={`${container} pb-12`}>
      <h2 className="mx-auto mb-6 max-w-sm text-center text-xl font-bold">
        Werkgebied van onze elektriciens in heel Nederland
      </h2>
      <ul className="mx-auto grid max-w-2xl grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
        {steden.map((stad) => (
          <li key={stad.slug}>
            <Link href={`/werkgebied/${stad.slug}`} className="flex items-center gap-2 hover:text-brand">
              <MapPin className="h-4 w-4 shrink-0 fill-brand text-white" aria-hidden />
              {stad.naam}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-sm">
        En alle andere plaatsen in Nederland.{" "}
        <Link href="/werkgebied" className="font-bold text-brand hover:underline">
          Bekijk ons werkgebied
        </Link>
      </p>
    </section>
  );
}

export function MapEmbed({ query = "Nederland", zoom = 7 }: { query?: string; zoom?: number }) {
  return (
    <iframe
      title={`Kaart ${query}`}
      src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`}
      className="block h-[300px] w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export function ContactSection({ title = "Direct een elektricien nodig?" }: { title?: string }) {
  return (
    <section id="contact" className="scroll-mt-20 bg-brand text-white">
      <div className={`${container} grid gap-10 py-10 md:grid-cols-2`}>
        <div>
          <h2 className="mb-3 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Van uw apparaten tot uw verlichting en uw beveiligingssysteem: u vertrouwt op elektriciteit vanaf het
            moment dat u wakker wordt tot u &apos;s avonds gaat slapen. Wanneer uw elektrische systeem zelfs het
            kleinste probleem ondervindt, merkt u onmiddellijk de effecten. {site.name} is er om ervoor te zorgen
            dat uw huis de hele dag, elke dag van stroom blijft.
          </p>
          <CheckList
            items={["Snelle spoedservice", "Landelijk actief", "Prijsopgave vooraf"]}
            className="mb-6 space-y-1.5 text-sm font-bold"
            iconClassName="text-white"
          />
          <PhoneButton />
        </div>
        <div className="bg-white p-6 text-ink sm:p-8">
          <h3 className="mb-6 text-xl font-bold">Contactformulier</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
