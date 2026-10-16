import { Check } from "lucide-react";

export function CheckList({
  items,
  className = "",
  iconClassName = "text-brand",
  itemClassName = "",
}: {
  items: readonly string[];
  className?: string;
  iconClassName?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2 ${itemClassName}`}>
          <Check className={`mt-0.5 h-4 w-4 shrink-0 stroke-[3] ${iconClassName}`} aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
