import Link from "next/link";
import { PhoneButton } from "@/components/buttons";
import { container } from "@/components/sections";

export default function NotFound() {
  return (
    <section className={`${container} py-24 text-center`}>
      <p className="text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold">Deze pagina bestaat niet</h1>
      <p className="mx-auto mt-3 max-w-md leading-relaxed">
        De pagina die u zoekt is verplaatst of bestaat niet meer. Ga terug naar de homepage of bel ons direct.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="bg-muted px-6 py-3 font-bold hover:bg-neutral-200">
          Naar de homepage
        </Link>
        <PhoneButton />
      </div>
    </section>
  );
}
