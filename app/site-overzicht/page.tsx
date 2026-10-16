import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, container } from "@/components/sections";
import { steden } from "@/lib/content";
import { diensten } from "@/lib/diensten";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description: `Overzicht van alle pagina's op de website van ${site.name}.`,
  alternates: { canonical: "/site-overzicht" },
};

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-3 text-lg font-bold">{title}</h2>
      <ul className="space-y-1.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-brand hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteOverzichtPage() {
  return (
    <>
      <PageHero eyebrow={site.name} title="Sitemap" breadcrumbs={[{ label: "Sitemap" }]} />
      <section className={`${container} grid gap-10 py-12 sm:grid-cols-3`}>
        <Column
          title="Pagina's"
          links={[{ href: "/", label: "Home" }, ...mainNav, { href: "/werkgebied", label: "Werkgebied" }]}
        />
        <Column title="Diensten" links={diensten.map((d) => ({ href: `/diensten/${d.slug}`, label: d.title }))} />
        <Column
          title="Werkgebied"
          links={steden.map((s) => ({ href: `/werkgebied/${s.slug}`, label: `Elektricien ${s.naam}` }))}
        />
      </section>
    </>
  );
}
