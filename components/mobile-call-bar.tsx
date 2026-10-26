import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <a
      href={site.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3 bg-accent px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-lg font-bold text-ink shadow-[0_-2px_10px_rgba(0,0,0,0.15)] sm:hidden"
      aria-label={`Bel direct ${site.phone}`}
    >
      <Phone className="h-5 w-5 fill-current" aria-hidden />
      Bel direct: {site.phone}
    </a>
  );
}
