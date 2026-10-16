import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function PhoneButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={`inline-flex items-center justify-center gap-3 bg-accent px-6 py-3 font-bold text-ink transition-colors hover:bg-accent-dark ${className}`}
    >
      <Phone className="h-4 w-4 fill-current" aria-hidden />
      {site.phone}
    </a>
  );
}

export function QuoteButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center justify-center gap-3 bg-accent px-6 py-3 font-bold text-ink transition-colors hover:bg-accent-dark ${className}`}
    >
      <Mail className="h-4 w-4" aria-hidden />
      Offerte aanvragen
    </a>
  );
}
