import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneButton, QuoteButton } from "@/components/buttons";
import { CheckList } from "@/components/check-list";
import {
  ContactSection,
  DienstenLinks,
  FaqSection,
  HelpSidebar,
  MapEmbed,
  PageHero,
  ReviewsSection,
  container,
} from "@/components/sections";
import { faq, getStad, steden, voordelen } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return steden.map((s) => ({ stad: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/werkgebied/[stad]">): Promise<Metadata> {
  const { stad: slug } = await params;
  const stad = getStad(slug);
  if (!stad) return {};
  return {
    title: `Elektricien ${stad.naam}`,
    description: `Elektricien nodig in ${stad.naam}? ${site.name} helpt bij storingen, groepenkasten en elektra aanleggen in ${stad.naam} en omgeving.`,
    alternates: { canonical: `/werkgebied/${stad.slug}` },
  };
}

export default async function StadPage({ params }: PageProps<"/werkgebied/[stad]">) {
  const { stad: slug } = await params;
  const stad = getStad(slug);
  if (!stad) notFound();
  const andere = steden.filter((s) => s.slug !== stad.slug && s.provincie === stad.provincie);

  return (
    <>
      <PageHero
        eyebrow={site.name}
        title={`Elektricien in ${stad.naam} en omgeving`}
        breadcrumbs={[{ href: "/werkgebied", label: "Werkgebied" }, { label: stad.naam }]}
      />
      <section className={`${container} grid gap-10 py-12 lg:grid-cols-[1fr_280px] lg:gap-16`}>
        <div>
          <p className="mb-4 leading-relaxed">
            Zoekt u een betrouwbare elektricien in {stad.naam}? {site.name} helpt particulieren en bedrijven in{" "}
            {stad.naam} en de rest van {stad.provincie} met alle elektrische werkzaamheden. Van een storing tot het
            vervangen van een complete groepenkast.
          </p>
          <p className="mb-6 leading-relaxed">
            Onze monteurs komen met een goed uitgeruste bus naar u toe, zodat we de meeste klussen in één bezoek
            kunnen afronden. U krijgt altijd vooraf een duidelijke prijs.
          </p>
          <h2 className="mb-3 text-xl font-bold">Waarom {site.name} in {stad.naam}?</h2>
          <CheckList items={voordelen} className="mb-8 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2" />
          <h2 className="mb-3 text-xl font-bold">Onze diensten in {stad.naam}</h2>
          <DienstenLinks className="mb-8 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2" />
          <div className="flex flex-wrap gap-4">
            <PhoneButton className="min-w-[190px]" />
            <QuoteButton className="min-w-[190px]" />
          </div>
          {andere.length > 0 && (
            <p className="mt-8 text-sm">
              Ook actief in:{" "}
              {andere.map((s, i) => (
                <span key={s.slug}>
                  {i > 0 && ", "}
                  <Link href={`/werkgebied/${s.slug}`} className="font-bold text-brand hover:underline">
                    {s.naam}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </div>
        <HelpSidebar />
      </section>
      <ReviewsSection limit={3} />
      <div className="pt-14">
        <FaqSection items={faq} />
      </div>
      <MapEmbed query={`${stad.naam}, Nederland`} zoom={11} />
      <ContactSection title={`Direct een elektricien in ${stad.naam} nodig?`} />
    </>
  );
}
