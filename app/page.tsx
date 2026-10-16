import Image from "next/image";
import { CalendarDays, Check, Mail, MapPin, PhoneCall, Phone } from "lucide-react";
import { CardAccordion, FaqAccordion } from "@/components/accordion";
import { Badge247, GoogleBox, TrustBadges } from "@/components/badges";
import { PhoneButton, QuoteButton } from "@/components/buttons";
import { CheckList } from "@/components/check-list";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { GroepenkastIllustration, MonteurIllustration } from "@/components/illustrations";
import { Logo } from "@/components/logo";
import {
  dienstKaarten,
  diensten,
  faq,
  images,
  reviews,
  spoedPunten,
  usps,
  voordelen,
  werkgebied,
} from "@/lib/content";
import { site } from "@/lib/site";

const container = "mx-auto w-full max-w-[1100px] px-4";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header />

      {/* USP balk */}
      <div className="bg-brand text-white">
        <ul className={`${container} flex flex-wrap justify-center gap-x-12 gap-y-1 py-3 text-sm font-bold`}>
          {usps.map((usp, i) => (
            <li key={usp} className={`items-center gap-2 ${i > 0 ? "hidden md:flex" : "flex"}`}>
              <Check className="h-4 w-4 stroke-[3]" aria-hidden />
              {usp}
            </li>
          ))}
        </ul>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[220px] sm:h-[320px] lg:h-[360px]">
          <Image
            src={images.team}
            alt={`Het team van ${site.name} voor de bedrijfsbussen`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Intro + zijbalk */}
        <section className={`${container} grid gap-10 py-10 lg:grid-cols-[1fr_280px] lg:gap-16`}>
          <div className="order-2 lg:order-1">
            <p className="text-lg">{site.name}</p>
            <h1 className="mb-3 text-2xl font-bold">Elektricien voor heel Nederland</h1>
            <p className="mb-4 text-sm leading-relaxed">
              Voor uw veiligheid kunt u elektrische reparaties en installaties het beste overlaten aan
              professionals. {site.name} is uw full-service elektrische aannemer, landelijk actief vanuit
              Almere. Wij zijn de enige residentiële en commerciële elektricien die u ooit nodig zult hebben.
              We houden ons aan alle huidige elektrische normen om veiligheid en functionaliteit te garanderen.
            </p>
            <h2 className="mb-3 text-lg font-bold">De voordelen van {site.name}</h2>
            <CheckList items={voordelen} className="mb-4 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2" />
            <p className="mb-8 text-sm leading-relaxed">
              Onze monteurs zijn volledig verzekerd en betrouwbaar, zodat u zich veilig kunt voelen als ze bij
              u thuis of op uw bedrijf aan het werk zijn.
            </p>
            <div className="flex flex-wrap gap-4">
              <PhoneButton className="min-w-[190px]" />
              <QuoteButton className="min-w-[190px]" />
            </div>
          </div>

          <aside className="order-1 lg:order-2 lg:-mt-[150px] lg:relative lg:z-10">
            <p className="mb-3 hidden text-center text-lg font-bold text-white drop-shadow lg:block">
              Hoe kunnen wij u helpen?
            </p>
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
                <a
                  key={label}
                  href="#contact"
                  className="flex items-center justify-between border-b border-white/25 px-4 py-4 uppercase last:border-0 hover:bg-brand-dark"
                >
                  {label}
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </nav>
            <div className="mt-2">
              <GoogleBox />
            </div>
            <div className="mt-4 flex justify-center">
              <TrustBadges />
            </div>
          </aside>
        </section>

        {/* Spoed */}
        <section id="spoedservice" className="scroll-mt-20 bg-brand text-white">
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
              <CheckList
                items={spoedPunten}
                className="mb-6 space-y-1.5 text-sm font-bold"
                iconClassName="text-white"
              />
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

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-20 bg-muted py-14">
          <div className={container}>
            <h2 className="text-center text-2xl font-bold">Dit is wat klanten over ons zeggen.</h2>
            <p className="mx-auto mb-10 max-w-xs text-center text-lg">
              Wij worden op verschillende platforms beoordeeld door onze klanten.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
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
          </div>
        </section>

        {/* Diensten */}
        <section id="diensten" className="scroll-mt-20 py-14">
          <div className={`${container}`}>
            <div className="bg-muted px-4 py-10 sm:px-10">
              <h2 className="mb-6 text-center text-xl font-bold">De diensten van {site.name}</h2>
              <CheckList
                items={diensten}
                className="mx-auto mb-6 grid max-w-3xl gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3"
              />
              <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed">
                We raden u aan om bij de eerste tekenen van elektrische problemen in uw huis of kantoor te bellen.
                Vroeg opgeloste problemen besparen tijd, geld en frustratie en helpen vooral om veiligheidsrisico&apos;s
                te voorkomen. Het negeren van een elektrisch probleem kan leiden tot dure reparaties of grotere
                problemen.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {dienstKaarten.map((kaart) => (
                  <article key={kaart.title} className="flex flex-col bg-white p-6 text-center sm:p-8">
                    <div className="mb-6 flex h-40 items-center justify-center">
                      {kaart.image ? (
                        <Image
                          src={kaart.image}
                          alt={kaart.title}
                          width={160}
                          height={160}
                          className="h-40 w-40 object-contain"
                        />
                      ) : kaart.icon === "groepenkast" ? (
                        <GroepenkastIllustration />
                      ) : (
                        <MonteurIllustration />
                      )}
                    </div>
                    <h3 className="mb-3 text-lg font-bold">{kaart.title}</h3>
                    {kaart.paragraphs.map((p) => (
                      <p key={p} className="mb-3 text-sm leading-relaxed">
                        {p}
                      </p>
                    ))}
                    <div className="mt-auto">
                      <CardAccordion items={kaart.faq} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kosten */}
        <section className={`${container} grid items-center gap-10 pb-16 md:grid-cols-2`}>
          <div>
            <h2 className="mb-3 text-xl font-bold">Kosten elektricien</h2>
            <p className="mb-4 text-sm leading-relaxed">
              {site.name} prijst diensten van geval tot geval door middel van vooraf vastgestelde prijzen. Ons doel
              is om u een eerlijke prijs te bieden die de onderdelen, arbeid en specificiteit van het werk
              nauwkeurig weerspiegelt. Om deze reden bieden we een gratis en vrijblijvend adviesgesprek aan waarin
              we uw elektrische behoeften beoordelen en u een eerlijke prijs aanbieden.
            </p>
            <CheckList
              items={["Landelijk actief", "24/7 bereikbaar bij spoed", "Hoge klanttevredenheid"]}
              className="mb-6 space-y-1.5 text-sm font-bold"
            />
            <PhoneButton />
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

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 pb-16">
          <div className={container}>
            <div className="bg-brand px-4 py-10 sm:px-8">
              <h2 className="mb-8 text-center text-2xl font-bold text-white">
                Veelgestelde vragen aan onze elektriciens
              </h2>
              <FaqAccordion items={faq} />
            </div>
          </div>
        </section>

        {/* Werkgebied */}
        <section className={`${container} pb-12`}>
          <h2 className="mx-auto mb-6 max-w-sm text-center text-xl font-bold">
            Werkgebied van onze elektriciens in heel Nederland
          </h2>
          <ul className="mx-auto grid max-w-2xl grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
            {werkgebied.map((plaats) => (
              <li key={plaats} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 fill-brand text-white" aria-hidden />
                {plaats}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-sm">En alle andere plaatsen in Nederland.</p>
        </section>

        {/* Kaart */}
        <iframe
          title="Werkgebied Nederland"
          src="https://www.google.com/maps?q=Nederland&z=7&output=embed"
          className="block h-[300px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-brand text-white">
          <div className={`${container} grid gap-10 py-10 md:grid-cols-2`}>
            <div>
              <h2 className="mb-3 text-2xl font-bold">Direct een elektricien nodig?</h2>
              <p className="mb-4 text-sm leading-relaxed">
                Van uw apparaten tot uw verlichting en uw beveiligingssysteem: u vertrouwt op elektriciteit vanaf
                het moment dat u wakker wordt tot u &apos;s avonds gaat slapen. Wanneer uw elektrische systeem
                zelfs het kleinste probleem ondervindt, merkt u onmiddellijk de effecten. {site.name} is er om
                ervoor te zorgen dat uw huis de hele dag, elke dag van stroom blijft.
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
      </main>

      {/* Footer */}
      <footer className="bg-muted">
        <div className={`${container} grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3`}>
          <div>
            <Logo />
            <p className="mt-3 font-bold">Uw elektricien in heel Nederland</p>
            <div className="mt-4">
              <TrustBadges />
            </div>
          </div>
          <div className="text-sm">
            <h2 className="mb-2 font-bold">Contactgegevens</h2>
            <p className="font-bold">{site.name}</p>
            <a href={site.phoneHref} className="mt-1 flex items-center gap-2 hover:text-brand">
              <Phone className="h-3.5 w-3.5 fill-brand text-brand" aria-hidden />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="mt-1 flex items-center gap-2 hover:text-brand">
              <Mail className="h-3.5 w-3.5 text-brand" aria-hidden />
              {site.email}
            </a>
            <address className="mt-3 not-italic">
              {site.company.legalName}
              <br />
              {site.company.address.street}
              <br />
              {site.company.address.postalCode} {site.company.address.city}
              <br />
              KVK: {site.company.kvk}
            </address>
            <p className="mt-2 text-xs text-neutral-600">
              Postadres, geen bezoekadres. Wij werken landelijk.
            </p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <GoogleBox />
          </div>
        </div>
        <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-600">
          © <CurrentYear /> {site.name}, onderdeel van {site.company.legalName}
        </div>
      </footer>
    </div>
  );
}
