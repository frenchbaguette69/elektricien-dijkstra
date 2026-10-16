import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/accordion";
import { ContactSection, PageHero, container } from "@/components/sections";
import { faq } from "@/lib/content";
import { diensten } from "@/lib/diensten";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: `Antwoorden op veelgestelde vragen over elektra, storingen en groepenkasten van ${site.name}.`,
  alternates: { canonical: "/veelgestelde-vragen" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow={site.name}
        title="Veelgestelde vragen aan onze elektriciens"
        breadcrumbs={[{ label: "Veelgestelde vragen" }]}
      />
      <section className={`${container} py-12`}>
        <div className="mb-12 bg-brand px-4 py-8 sm:px-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">Algemene vragen</h2>
          <FaqAccordion items={faq} />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {diensten.map((d) => (
            <div key={d.slug} className="bg-muted p-5 sm:p-6">
              <h2 className="mb-3 text-lg font-bold">
                <Link href={`/diensten/${d.slug}`} className="hover:text-brand">
                  {d.title}
                </Link>
              </h2>
              <FaqAccordion items={d.faq} defaultOpen={false} />
            </div>
          ))}
        </div>
      </section>
      <ContactSection title="Staat uw vraag er niet tussen?" />
    </>
  );
}
