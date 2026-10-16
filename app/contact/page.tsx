import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { TrustBadges } from "@/components/badges";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed, PageHero, container } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Neem contact op met ${site.name}. Bel direct, vraag een offerte aan of laat u terugbellen.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { company } = site;
  return (
    <>
      <PageHero eyebrow={site.name} title="Contact en offerte aanvragen" breadcrumbs={[{ label: "Contact" }]} />
      <section className={`${container} grid gap-10 py-12 md:grid-cols-[1fr_1.3fr]`}>
        <div>
          <h2 className="mb-3 text-xl font-bold">Direct contact</h2>
          <p className="mb-6 leading-relaxed">
            Bel ons voor spoed of een snelle vraag. Voor een offerte, terugbelverzoek of afspraak kunt u ook het
            formulier invullen. Wij reageren zo snel mogelijk.
          </p>
          <ul className="mb-6 space-y-3">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 font-bold hover:text-brand">
                <span className="flex h-10 w-10 items-center justify-center bg-accent">
                  <Phone className="h-4 w-4 fill-current" aria-hidden />
                </span>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-bold hover:text-brand">
                <span className="flex h-10 w-10 items-center justify-center bg-accent">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <address className="not-italic">
                <span className="font-bold">{company.legalName}</span>
                <br />
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
                <br />
                KVK: {company.kvk}
              </address>
            </li>
          </ul>
          <p className="mb-6 bg-muted p-4 text-sm leading-relaxed">
            Let op: dit is ons postadres. Wij hebben geen bezoekadres, onze monteurs komen naar u toe. Wij werken
            in heel Nederland.
          </p>
          <TrustBadges />
        </div>
        <div className="bg-muted p-6 sm:p-8">
          <h2 className="mb-6 text-xl font-bold">Contactformulier</h2>
          <ContactForm />
        </div>
      </section>
      <MapEmbed />
    </>
  );
}
