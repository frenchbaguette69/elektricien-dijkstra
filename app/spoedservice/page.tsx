import type { Metadata } from "next";
import { PhoneButton } from "@/components/buttons";
import { CheckList } from "@/components/check-list";
import {
  ContactSection,
  FaqSection,
  HelpSidebar,
  PageHero,
  ReviewsSection,
  SpoedSection,
  container,
} from "@/components/sections";
import { getDienst } from "@/lib/diensten";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spoedservice 24/7",
  description: `Spoed elektricien nodig? ${site.name} is 24/7 bereikbaar voor storingen, stroomuitval en gevaarlijke situaties in heel Nederland.`,
  alternates: { canonical: "/spoedservice" },
};

const spoedSituaties = [
  "Volledige stroomuitval in huis of bedrijf",
  "Aardlekschakelaar die steeds afslaat",
  "Brandlucht of rook uit een stopcontact of groepenkast",
  "Vonken of knetterende geluiden",
  "Water in de buurt van elektra",
  "Beschadigde kabels na een verbouwing",
];

export default function SpoedservicePage() {
  const spoedFaq = [...(getDienst("24-7-spoed-elektricien")?.faq ?? []), ...(getDienst("stroomstoring-oplossen")?.faq ?? [])];
  return (
    <>
      <PageHero
        eyebrow="Voor spoedstoringen zijn wij 24/7 beschikbaar"
        title="Spoed elektricien in heel Nederland"
        image="/services/24-7-spoed-elektricien.svg"
        breadcrumbs={[{ label: "Spoedservice" }]}
      />
      <section className={`${container} grid gap-10 py-12 lg:grid-cols-[1fr_280px] lg:gap-16`}>
        <div>
          <p className="mb-4 leading-relaxed">
            Een elektrisch probleem wacht niet tot kantoortijd. Daarom is {site.name} dag en nacht bereikbaar, ook in
            het weekend en op feestdagen. Belt u ons vandaag, dan helpen we u vandaag.
          </p>
          <h2 className="mb-3 mt-8 text-xl font-bold">Wanneer belt u de spoedservice?</h2>
          <CheckList items={spoedSituaties} className="mb-8 space-y-2" />
          <div className="mb-8 border-l-4 border-brand bg-muted p-5">
            <h2 className="mb-2 font-bold">Wat doet u zelf in afwachting van de monteur?</h2>
            <ol className="list-decimal space-y-1 pl-5 text-sm leading-relaxed">
              <li>Ruikt u brandlucht of ziet u vonken? Zet de hoofdschakelaar in de meterkast uit.</li>
              <li>Raak beschadigde kabels of natte apparaten niet aan.</li>
              <li>Haal de stekkers uit de groep die is uitgevallen.</li>
              <li>Is er brand? Bel altijd eerst 112.</li>
            </ol>
          </div>
          <PhoneButton />
        </div>
        <HelpSidebar />
      </section>
      <SpoedSection />
      <ReviewsSection limit={3} />
      <div className="pt-14">
        <FaqSection items={spoedFaq} title="Veelgestelde vragen over spoed" />
      </div>
      <ContactSection />
    </>
  );
}
