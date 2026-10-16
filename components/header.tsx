import Link from "next/link";
import { Check, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { usps } from "@/lib/content";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-3">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo />
          </Link>
          <nav className="hidden items-center gap-6 text-[15px] lg:flex">
            {mainNav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-brand ${i === 0 ? "font-bold" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center gap-3 bg-accent px-7 py-3 text-sm font-bold hover:bg-accent-dark sm:inline-flex"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Offerte aanvragen
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 bg-accent px-4 py-3 text-sm font-bold sm:hidden"
              aria-label={`Bel ${site.phone}`}
            >
              <Phone className="h-4 w-4 fill-current" aria-hidden />
              Bel direct
            </a>
            <details className="group lg:hidden">
              <summary
                className="flex h-11 w-11 cursor-pointer items-center justify-center"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6 group-open:hidden" aria-hidden />
                <X className="hidden h-6 w-6 group-open:block" aria-hidden />
              </summary>
              <nav className="absolute inset-x-0 top-full border-t border-neutral-200 bg-white shadow-md">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block border-b border-neutral-100 px-4 py-3 font-bold hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>
      <div className="bg-brand text-white">
        <ul className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-x-12 gap-y-1 px-4 py-3 text-sm font-bold">
          {usps.map((usp, i) => (
            <li key={usp} className={`items-center gap-2 ${i > 0 ? "hidden md:flex" : "flex"}`}>
              <Check className="h-4 w-4 stroke-[3]" aria-hidden />
              {usp}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
