import { getSiteUrl } from "@/lib/site";
import { BUSINESS, PUBLIC_CONTACT_EMAIL } from "@/lib/business";

/** LocalBusiness + WebSite structured data for Google and other crawlers */
export function SeoJsonLd() {
  const base = getSiteUrl();
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${base}/#business`,
        name: BUSINESS.name,
        description:
          "Custom glass shower doors, frameless shower door installation, glass railings, and architectural mirrors in a 36-mile service area from Haverhill, MA.",
        url: base,
        telephone: BUSINESS.phoneE164,
        email: PUBLIC_CONTACT_EMAIL,
        image: `${base}/brand/ecg-logo-horizontal.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.streetAddress,
          addressLocality: BUSINESS.address.addressLocality,
          addressRegion: BUSINESS.address.addressRegion,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: BUSINESS.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        areaServed: BUSINESS.serviceAreas.map((area) => ({
          "@type": "City",
          name: area,
        })),
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: BUSINESS.geo.latitude,
            longitude: BUSINESS.geo.longitude,
          },
          geoRadius: BUSINESS.serviceRadiusMeters,
        },
        openingHoursSpecification: BUSINESS.openingHours.map((hours) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: hours.daysOfWeek,
          opens: hours.opens,
          closes: hours.closes,
        })),
        priceRange: "$$",
        sameAs: [
          "https://www.instagram.com/exquisite__customglass_showers",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: BUSINESS.name,
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
