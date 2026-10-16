import type { Metadata } from "next";
import { GoogleBox } from "@/components/badges";
import { ContactSection, PageHero, ReviewsSection, container } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Lees wat klanten zeggen over ${site.name}.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow={site.name} title="Reviews van onze klanten" breadcrumbs={[{ label: "Reviews" }]} />
      <ReviewsSection />
      <section className={`${container} grid items-center gap-8 py-12 md:grid-cols-[1fr_280px]`}>
        <div>
          <h2 className="mb-3 text-xl font-bold">Bent u ook klant bij ons geweest?</h2>
          <p className="leading-relaxed">
            Wij horen graag hoe u onze service heeft ervaren. Met uw review helpt u andere klanten bij het kiezen
            van een betrouwbare elektricien, en helpt u ons om onze service nog beter te maken.
          </p>
        </div>
        <GoogleBox />
      </section>
      <ContactSection />
    </>
  );
}
