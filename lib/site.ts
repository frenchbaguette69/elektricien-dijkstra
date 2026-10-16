export const site = {
  name: "Elektricien Dijkstra",
  domain: "elektriciendijkstra.nl",
  url: "https://elektriciendijkstra.nl",
  description:
    "Elektricien Dijkstra: storingen, groepenkasten en elektra aanleggen. Vakkundig elektrawerk door heel Nederland.",
  serviceArea: "Landelijk",
  // TODO: vervang door het echte telefoonnummer en e-mailadres
  phone: "06 00 00 00 00",
  phoneHref: "tel:+31600000000",
  email: "info@elektriciendijkstra.nl",
  company: {
    legalName: "I.B Techniek",
    kvk: "96113480",
    // Postadres, geen bezoekadres
    address: {
      street: "Markerkant 13 10",
      postalCode: "1314 AN",
      city: "Almere",
      country: "NL",
    },
    hasVisitingAddress: false,
  },
} as const;
