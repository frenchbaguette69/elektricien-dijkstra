export const site = {
  name: "Elektricien Dijkstra",
  domain: "elektriciendijkstra.nl",
  url: "https://elektriciendijkstra.nl",
  description:
    "Elektricien Dijkstra: vakkundig elektrawerk door heel Nederland.",
  serviceArea: "Landelijk",
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
