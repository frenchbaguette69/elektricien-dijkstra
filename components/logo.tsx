export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 44" className="h-10 w-9 shrink-0" aria-hidden>
        <path
          d="M20 2 37 11.5v21L20 42 3 32.5v-21Z"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M23 9 12 25h7l-3 11 12-17h-7l2-10Z" fill="#dd3a33" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500">
          ELEKTRICIEN
        </span>
        <span className="text-2xl font-bold tracking-tight text-brand">
          DIJKSTRA
        </span>
      </span>
    </span>
  );
}
