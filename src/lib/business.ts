/** Only inbox shown on the site (mailto, footer, contact, JSON-LD). */
export const PUBLIC_CONTACT_EMAIL = "exquisitecustomglass@gmail.com" as const;

export const BUSINESS = {
  name: "Exquisite Custom Glass",
  legalName: "Exquisite Custom Glass Showers",
  phoneDisplay: "(978) 815-8354",
  phoneE164: "+19788158354",
  email: PUBLIC_CONTACT_EMAIL,
  address: {
    streetAddress: "690 S. Main St.",
    addressLocality: "Haverhill",
    addressRegion: "MA",
    postalCode: "01830",
    addressCountry: "US",
  },
  serviceRadiusMiles: 36,
  serviceRadiusMeters: 57936,
  geo: {
    latitude: 42.7762,
    longitude: -71.0773,
  },
  serviceAreas: [
    "Haverhill",
    "Andover",
    "North Andover",
    "Methuen",
    "Lawrence",
    "Salem NH",
    "Plaistow NH",
    "North Shore",
    "Merrimack Valley",
    "Boston",
    "Nashua",
    "Manchester",
    "Portsmouth",
    "Seacoast NH",
  ],
  openingHours: [
    {
      daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "16:30",
    },
  ],
} as const;
