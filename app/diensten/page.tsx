import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ContactSection,
  DienstVisual,
  PageHero,
  ReviewsSection,
  container,
} from "@/components/sections";
import { diensten } from "@/lib/diensten";
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diensten.map((d) => (
            <Link
              key={d.slug}
              href={`/diensten/${d.slug}`}
              className="group flex flex-col items-center bg-muted p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-40 items-center justify-center">
                <DienstVisual visual={d.visual} alt={d.title} size={140} />
              </div>
              <h2 className="mb-2 text-lg font-bold group-hover:text-brand">{d.title}</h2>
              <p className="mb-4 text-sm leading-relaxed">{d.short}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand">
                Meer informatie
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <ReviewsSection limit={3} />
      <ContactSection />
    </>
  );
}
