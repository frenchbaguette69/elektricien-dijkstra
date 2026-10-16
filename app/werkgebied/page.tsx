import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ContactSection, MapEmbed, PageHero, container } from "@/components/sections";
import { steden } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werkgebied",
  description: `${site.name} werkt landelijk. Bekijk in welke plaatsen onze elektriciens actief zijn.`,
  alternates: { canonical: "/werkgebied" },
};

export default function WerkgebiedPage() {
  const provincies = [...new Set(steden.map((s) => s.provincie))];
  return (
    <>
      <PageHero eyebrow={site.name} title="Ons werkgebied: heel Nederland" breadcrumbs={[{ label: "Werkgebied" }]} />
      <section className={`${container} py-12`}>
        <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed">
          {site.name} is landelijk actief. Onze monteurs rijden dagelijks door het hele land met goed uitgeruste
          bussen. Staat uw plaats er niet tussen? Bel ons gerust, wij komen ook bij u langs.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {provincies.map((provincie) => (
            <div key={provincie} className="bg-muted p-5">
              <h2 className="mb-3 font-bold">{provincie}</h2>
              <ul className="space-y-1.5 text-sm">
                {steden
                  .filter((s) => s.provincie === provincie)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/werkgebied/${s.slug}`} className="flex items-center gap-2 hover:text-brand">
                        <MapPin className="h-4 w-4 shrink-0 fill-brand text-white" aria-hidden />
                        Elektricien {s.naam}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <MapEmbed />
      <ContactSection />
    </>
  );
}
