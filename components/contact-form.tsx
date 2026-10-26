"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const onderwerpen = ["Offerte aanvragen", "Bel mij terug", "Afspraak maken", "Klacht"];

const inputClass =
  "w-full border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-brand";

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block">
        {label} <span className="text-brand">*</span>
      </span>
      <input name={name} type={type} required placeholder={placeholder} className={inputClass} />
    </label>
  );
}

// Opent het e-mailprogramma van de bezoeker met een ingevuld bericht.
// TODO: koppel aan een mailservice (bijvoorbeeld Resend) voor verzenden vanaf de site.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "");
    const onderwerp = get("onderwerp");
    const body = [
      `Naam: ${get("voornaam")} ${get("achternaam")}`,
      `Telefoon: ${get("telefoon")}`,
      `E-mail: ${get("email")}`,
      `Woonplaats: ${get("woonplaats")}`,
      `Waarmee kunnen wij helpen: ${onderwerp}`,
      "",
      get("bericht"),
    ].join("\n");
    window.location.href = `mailto:${site.formEmail}?subject=${encodeURIComponent(
      `${onderwerp} via website`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Voornaam" name="voornaam" />
        <Field label="Achternaam" name="achternaam" />
      </div>
      <Field label="Telefoonnummer" name="telefoon" type="tel" placeholder="06 12345678" />
      <Field label="E-mail" name="email" type="email" placeholder="naam@voorbeeld.nl" />
      <Field label="Woonplaats" name="woonplaats" />
      <fieldset className="text-sm">
        <legend className="mb-2">
          Waar kunnen wij u bij helpen? <span className="text-brand">*</span>
        </legend>
        <div className="space-y-1.5">
          {onderwerpen.map((o, i) => (
            <label key={o} className="flex items-center gap-2">
              <input type="radio" name="onderwerp" value={o} required defaultChecked={i === 0} />
              {o}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm">
        <span className="mb-1 block">
          Bericht <span className="text-brand">*</span>
        </span>
        <textarea name="bericht" required rows={4} className={inputClass} />
      </label>
      <div className="flex items-center justify-between gap-4">
        {sent ? (
          <p className="text-sm text-green-700">Uw e-mailprogramma is geopend. Verstuur het bericht daar.</p>
        ) : (
          <span />
        )}
        <button
          type="submit"
          className="bg-accent px-6 py-2.5 text-sm font-bold hover:bg-accent-dark"
        >
          Versturen
        </button>
      </div>
    </form>
  );
}
