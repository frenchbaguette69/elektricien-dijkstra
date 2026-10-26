import { HardHat, Wrench } from "lucide-react";

export function GroepenkastIllustration() {
  const breakers = Array.from({ length: 8 });
  return (
    <svg viewBox="0 0 120 150" className="h-40 w-auto" role="img" aria-label="Groepenkast">
      <rect x="4" y="4" width="112" height="142" rx="4" fill="#2b2b2b" />
      <rect x="10" y="10" width="100" height="130" rx="2" fill="#3a3a3a" />
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(14 ${18 + row * 42})`}>
          <rect width="92" height="34" fill="#1d1d1d" />
          {breakers.map((_, i) => (
            <g key={i} transform={`translate(${3 + i * 11} 3)`}>
              <rect width="9" height="28" rx="1" fill={row === 1 && i < 2 ? "#1b7f37" : "#f2f2f2"} />
              <rect x="2" y="9" width="5" height="8" fill="#555" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

export function MonteurIllustration() {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center text-brand">
      <HardHat className="h-28 w-28 stroke-[1.5]" aria-hidden />
      <Wrench className="absolute bottom-4 right-3 h-14 w-14 stroke-[1.5]" aria-hidden />
    </div>
  );
}
