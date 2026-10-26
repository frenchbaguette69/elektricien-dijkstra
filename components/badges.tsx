import Link from "next/link";

export function Badge247({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} role="img" aria-label="24/7 service">
      <path d="M8 30a24 24 0 0 1 46-14" fill="none" stroke="#1d4ed8" strokeWidth="3" />
      <path d="m52 10 3 7-7 0Z" fill="#1d4ed8" />
      <text x="10" y="27" fontSize="17" fontWeight="700" fill="#1e3a8a" fontStyle="italic">24/7</text>
      <text x="12" y="38" fontSize="8" fontWeight="700" fill="#1e3a8a">SERVICE</text>
    </svg>
  );
}

export function BadgePinnen({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex flex-col text-[15px] font-bold leading-[0.95] tracking-tight text-blue-800 ${className}`}
    >
      <span>PINNEN</span>
      <span>JA GRAAG</span>
    </span>
  );
}

export function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export function GoogleBox() {
  return (
    <Link
      href="/reviews"
      className="flex flex-col items-center gap-2 bg-muted px-4 py-5 text-center transition-shadow hover:shadow-md"
    >
      <GoogleMark className="h-14 w-14" />
      <span className="text-amber-500" aria-hidden>
        ★★★★★
      </span>
      <span className="text-lg font-bold">Bekijk onze reviews</span>
    </Link>
  );
}

export function TrustBadges() {
  return (
    <div className="flex items-center gap-4">
      <Badge247 className="h-10 w-16" />
      <BadgePinnen />
    </div>
  );
}
