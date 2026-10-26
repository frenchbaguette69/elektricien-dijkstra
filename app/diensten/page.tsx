import type { Metadata } from "next";
import {
  ContactSection,
  DienstenGrid,
  PageHero,
  ReviewsSection,
  container,
} from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diensten",
  description: `Alle diensten van ${site.name}: groepenkast vervangen, elektra aanleggen, storingen oplossen en meer. Landelijk actief.`,
  alternates: { canonical: "/diensten" },
};

export default function DienstenPage() {
  return (
    <>
      <PageHero eyebrow={site.name} title="Onze diensten" breadcrumbs={[{ label: "Diensten" }]} />
      <section className={`${container} py-12`}>
        <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed">
          Van een losse wandcontactdoos tot een complete installatie voor nieuwbouw: {site.name} doet het allemaal.
          Kies hieronder de dienst die u zoekt of neem direct contact met ons op.
        </p>
        <DienstenGrid />
      </section>
      <ReviewsSection limit={3} />
      <ContactSection />
    </>
  );
}
