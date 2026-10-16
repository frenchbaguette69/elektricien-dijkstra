import type { Metadata } from "next";
import { PhoneButton, QuoteButton } from "@/components/buttons";
import { CheckList } from "@/components/check-list";
import { ContactSection, FaqSection, HelpSidebar, PageHero, container } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kosten elektricien",
  description: `Wat kost een elektricien? ${site.name} werkt met vaste prijzen vooraf en een gratis adviesgesprek.`,
  alternates: { canonical: "/kosten" },
};

const factoren = [
  "Het soort werk en de benodigde materialen",
  "De omvang en staat van uw huidige installatie",
  "De bereikbaarheid van de werkplek",
  "Of het om spoed buiten kantoortijden gaat",
];

const kostenFaq = [
  {
    q: "Krijg ik vooraf een prijs?",
    a: "Ja. Na het bekijken van de situatie ontvangt u altijd eerst een duidelijke prijs. Pas na uw akkoord gaan we aan de slag.",
  },
  {
    q: "Is het adviesgesprek echt gratis?",
    a: "Ja, het adviesgesprek is gratis en vrijblijvend. U zit nergens aan vast.",
  },
  {
    q: "Kan ik met pin betalen?",
    a: "Ja, u kunt na afloop direct bij de monteur pinnen. Voor grotere projecten ontvangt u een factuur.",
  },
  {
    q: "Zijn spoedtarieven hoger?",
    a: "Voor spoed buiten kantoortijden geldt een toeslag. Die hoort u altijd vooraf aan de telefoon.",
  },
];

export default function KostenPage() {
  return (
    <>
      <PageHero eyebrow={site.name} title="Kosten elektricien" breadcrumbs={[{ label: "Kosten" }]} />
      <section className={`${container} grid gap-10 py-12 lg:grid-cols-[1fr_280px] lg:gap-16`}>
        <div>
          <p className="mb-4 leading-relaxed">
            {site.name} prijst diensten van geval tot geval door middel van vooraf vastgestelde prijzen. Ons doel is
            om u een eerlijke prijs te bieden die de onderdelen, arbeid en specificiteit van het werk nauwkeurig
            weerspiegelt.
          </p>
          <p className="mb-6 leading-relaxed">
            Daarom bieden we een gratis en vrijblijvend adviesgesprek aan waarin we uw elektrische behoeften
            beoordelen en u een eerlijke prijs aanbieden. Zo weet u altijd vooraf waar u aan toe bent.
          </p>
          <h2 className="mb-3 text-xl font-bold">Waar hangt de prijs van af?</h2>
          <CheckList items={factoren} className="mb-8 space-y-2" />
          <h2 className="mb-3 text-xl font-bold">Onze afspraken</h2>
          <CheckList
            items={["Vaste prijs vooraf", "Geen verrassingen achteraf", "Pinbetaling mogelijk", "Garantie op ons werk"]}
            className="mb-8 grid gap-2 font-bold sm:grid-cols-2"
          />
          <div className="flex flex-wrap gap-4">
            <PhoneButton className="min-w-[190px]" />
            <QuoteButton className="min-w-[190px]" />
          </div>
        </div>
        <HelpSidebar />
      </section>
      <FaqSection items={kostenFaq} title="Veelgestelde vragen over kosten" />
      <ContactSection />
    </>
  );
}
