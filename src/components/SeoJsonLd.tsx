import { getSiteUrl } from "@/lib/site";

/** LocalBusiness + WebSite structured data for Google and other crawlers */
export function SeoJsonLd() {
  const base = getSiteUrl();
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${base}/#business`,
        name: "Exquisite Custom Glass",
        description:
          "Custom frameless shower enclosures, glass railings, architectural mirrors, and bespoke glass fabrication and installation in Massachusetts and New Hampshire.",
        url: base,
        telephone: "+19788158354",
        email: "hello@exquisitecustomglass.com",
        image: `${base}/brand/ecg-logo-horizontal.svg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Haverhill",
          addressRegion: "MA",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "State", name: "Massachusetts" },
          { "@type": "State", name: "New Hampshire" },
        ],
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: "Exquisite Custom Glass",
        description:
          "Precision glass, handcrafted for your space — showers, railings, mirrors, and commercial glass in MA & NH.",
        publisher: { "@id": `${base}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
