import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhoneButton, QuoteButton } from "@/components/buttons";
import { CheckList } from "@/components/check-list";
import {
  ContactSection,
  DienstVisual,
  DienstenLinks,
  FaqSection,
  HelpSidebar,
  PageHero,
  ReviewsSection,
  container,
} from "@/components/sections";
import { diensten, getDienst } from "@/lib/diensten";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return diensten.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/diensten/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const dienst = getDienst(slug);
  if (!dienst) return {};
  return {
    title: dienst.title,
    description: `${dienst.short} ${site.name}, landelijk actief.`,
    alternates: { canonical: `/diensten/${dienst.slug}` },
  };
}

export default async function DienstPage({ params }: PageProps<"/diensten/[slug]">) {
  const { slug } = await params;
  const dienst = getDienst(slug);
  if (!dienst) notFound();

  return (
    <>
      <PageHero
        eyebrow={site.name}
        title={dienst.title}
        breadcrumbs={[{ href: "/diensten", label: "Diensten" }, { label: dienst.title }]}
      />
      <section className={`${container} grid gap-10 py-12 lg:grid-cols-[1fr_280px] lg:gap-16`}>
        <div>
          <div className="mb-6 flex justify-center bg-muted py-6 sm:float-right sm:mb-4 sm:ml-6 sm:w-56">
            <DienstVisual visual={dienst.visual} alt={dienst.title} size={170} />
          </div>
          <p className="mb-2 text-lg font-bold">{dienst.short}</p>
          {dienst.intro.map((p) => (
            <p key={p} className="mb-4 leading-relaxed">
              {p}
            </p>
          ))}
          <h2 className="mb-3 mt-8 clear-both text-xl font-bold">Wat wij voor u doen</h2>
          <CheckList items={dienst.tasks} className="mb-8 space-y-2" />
          <h2 className="mb-3 text-xl font-bold">Zo werken wij</h2>
          <ol className="mb-8 space-y-3">
            {[
              "U belt ons of vult het contactformulier in.",
              "We plannen een afspraak die u goed uitkomt, bij spoed vaak nog dezelfde dag.",
              "De monteur bekijkt de situatie en u krijgt vooraf een duidelijke prijs.",
              "Na uw akkoord voeren we het werk direct en netjes uit.",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-4">
            <PhoneButton className="min-w-[190px]" />
            <QuoteButton className="min-w-[190px]" />
          </div>
        </div>
        <div className="space-y-8">
          <HelpSidebar />
          <div className="bg-muted p-5">
            <h2 className="mb-3 font-bold">Alle diensten</h2>
            <DienstenLinks className="space-y-1.5 text-sm" />
          </div>
        </div>
      </section>
      <FaqSection items={dienst.faq} title={`Veelgestelde vragen over ${dienst.title.toLowerCase()}`} />
      <ReviewsSection limit={3} />
      <ContactSection />
    </>
  );
}
