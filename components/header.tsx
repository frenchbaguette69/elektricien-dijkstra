import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

const nav = [
  { href: "#spoedservice", label: "Spoedservice" },
  { href: "#reviews", label: "Reviews" },
  { href: "#diensten", label: "Diensten" },
  { href: "#faq", label: "Veelgestelde vragen" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-3">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 text-[15px] lg:flex">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:text-brand ${i === 0 ? "font-bold" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-3 bg-accent px-7 py-3 text-sm font-bold hover:bg-accent-dark sm:inline-flex"
        >
          <Mail className="h-4 w-4" aria-hidden />
          Offerte aanvragen
        </a>
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 bg-accent px-4 py-3 text-sm font-bold sm:hidden"
          aria-label={`Bel ${site.phone}`}
        >
          <Phone className="h-4 w-4 fill-current" aria-hidden />
          Bel direct
        </a>
      </div>
    </header>
  );
}
