import Image from "next/image";
import { PhoneButton, QuoteButton } from "@/components/buttons";
import { CheckList } from "@/components/check-list";
import {
  ContactSection,
  DienstenCompact,
  DienstenSection,
  FaqSection,
  HelpSidebar,
  KostenSection,
  MapEmbed,
  OverOnsSection,
  ReviewsSection,
  SpoedSection,
  WerkgebiedSection,
  container,
} from "@/components/sections";
import { faq, images, voordelen } from "@/lib/content";
import { featuredDiensten } from "@/lib/diensten";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
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

      <section className={`${container} grid gap-10 py-10 lg:grid-cols-[1fr_280px] lg:gap-16`}>
        <div className="order-2 lg:order-1">
          <p className="text-lg">{site.name}</p>
          <h1 className="mb-3 text-2xl font-bold">Elektricien voor heel Nederland</h1>
          <p className="mb-4 text-sm leading-relaxed">
            Voor uw veiligheid kunt u elektrische reparaties en installaties het beste overlaten aan professionals.{" "}
            {site.name} is uw full-service elektrische aannemer, landelijk actief. Wij zijn de enige
            residentiële en commerciële elektricien die u ooit nodig zult hebben. We houden ons aan alle huidige
            elektrische normen om veiligheid en functionaliteit te garanderen.
          </p>
          <h2 className="mb-3 text-lg font-bold">De voordelen van {site.name}</h2>
          <CheckList items={voordelen} className="mb-4 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2" />
          <p className="mb-4 text-sm leading-relaxed">
            Onze monteurs zijn volledig verzekerd en betrouwbaar, zodat u zich veilig kunt voelen als ze bij u thuis
            of op uw bedrijf aan het werk zijn.
          </p>
          <p className="mb-8 text-sm leading-relaxed">
            Of het nu gaat om een storing die direct opgelost moet worden, een nieuwe groepenkast, een laadpaal of
            de complete elektra van een verbouwing: wij denken met u mee en leveren vakwerk. Onze bussen zijn volledig
            ingericht met materiaal en meetapparatuur, zodat we de meeste klussen in één bezoek afronden.
          </p>
          <div className="flex flex-wrap gap-4">
            <PhoneButton className="min-w-[190px]" />
            <QuoteButton className="min-w-[190px]" />
          </div>
        </div>
        <div className="order-1 lg:relative lg:z-10 lg:order-2 lg:-mt-[150px]">
          <p className="mb-3 hidden text-center text-lg font-bold text-white drop-shadow lg:block">
            Hoe kunnen wij u helpen?
          </p>
          <HelpSidebar />
        </div>
      </section>

      <section className={`${container} pb-14`}>
        <h2 className="mb-2 text-center text-2xl font-bold">Onze diensten</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed">
          Van een losse wandcontactdoos tot een complete installatie voor nieuwbouw. Bekijk hieronder wat{" "}
          {site.name} voor u kan doen of bel ons direct voor advies.
        </p>
        <DienstenCompact />
      </section>

      <SpoedSection />
      <ReviewsSection limit={6} />
      <DienstenSection cards={featuredDiensten} title={`De diensten van ${site.name}`} />
      <OverOnsSection />
      <KostenSection />
      <FaqSection items={faq} />
      <WerkgebiedSection />
      <MapEmbed />
      <ContactSection />
    </>
  );
}
