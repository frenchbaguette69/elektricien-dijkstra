import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { GoogleBox, TrustBadges } from "@/components/badges";
import { Logo } from "@/components/logo";
import { featuredDiensten } from "@/lib/diensten";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 font-bold">Uw elektricien in heel Nederland</p>
          <div className="mt-4">
            <TrustBadges />
          </div>
        </div>
        <div className="text-sm">
          <h2 className="mb-2 font-bold">Contactgegevens</h2>
          <p className="font-bold">{site.name}</p>
          <a href={site.phoneHref} className="mt-1 flex items-center gap-2 hover:text-brand">
            <Phone className="h-3.5 w-3.5 fill-brand text-brand" aria-hidden />
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="mt-1 flex items-center gap-2 hover:text-brand">
            <Mail className="h-3.5 w-3.5 text-brand" aria-hidden />
            {site.email}
          </a>
          <address className="mt-3 not-italic">
            {site.company.legalName}
            <br />
            {site.company.address.street}
            <br />
            {site.company.address.postalCode} {site.company.address.city}
            <br />
            KVK: {site.company.kvk}
          </address>
          <p className="mt-2 text-xs text-neutral-600">
            Postadres, geen bezoekadres. Wij werken landelijk.
          </p>
        </div>
        <div className="text-sm">
          <h2 className="mb-2 font-bold">Menu</h2>
          <ul className="space-y-1">
            {[...mainNav, { href: "/werkgebied", label: "Werkgebied" }, { href: "/site-overzicht", label: "Sitemap" }].map(
              (item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <h2 className="mb-2 mt-4 font-bold">Populaire diensten</h2>
          <ul className="space-y-1">
            {featuredDiensten.map((d) => (
              <li key={d.slug}>
                <Link href={`/diensten/${d.slug}`} className="hover:text-brand">
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <GoogleBox />
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-600">
        © <CurrentYear /> {site.name}, onderdeel van {site.company.legalName}
      </div>
    </footer>
  );
}
