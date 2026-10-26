import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/branding/elektricien-dijkstra-logo.svg"
        alt="Elektricien Dijkstra"
        width={280}
        height={80}
        className="h-12 w-auto max-w-[218px] sm:h-14 sm:max-w-[260px]"
        priority
      />
    </span>
  );
}
