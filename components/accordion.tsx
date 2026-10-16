import { Minus, Plus, Play } from "lucide-react";

export function CardAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-6 text-left">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-neutral-200">
          <summary className="flex cursor-pointer items-start justify-between gap-4 py-3 text-sm font-bold">
            {item.q}
            <Play className="mt-0.5 h-3 w-3 shrink-0 fill-current transition-transform group-open:rotate-90" aria-hidden />
          </summary>
          <p className="pb-4 text-sm leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqAccordion({
  items,
  defaultOpen = true,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: boolean;
}) {
  return (
    <div className="bg-white">
      {items.map((item, i) => (
        <details key={item.q} open={defaultOpen && i === 0} className="group border-b border-brand/30 last:border-0">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-4 font-bold sm:px-6">
            {item.q}
            <Plus className="h-5 w-5 shrink-0 stroke-[3] group-open:hidden" aria-hidden />
            <Minus className="hidden h-5 w-5 shrink-0 stroke-[3] group-open:block" aria-hidden />
          </summary>
          <p className="border-t border-brand/30 px-4 py-5 text-sm leading-relaxed sm:px-6">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
