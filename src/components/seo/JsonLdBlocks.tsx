import { getSiteUrl } from "@/lib/site";

type BreadcrumbItem = { name: string; path: string };

export function JsonLdBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${base}${it.path.startsWith("/") ? it.path : `/${it.path}`}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type Faq = { q: string; a: string };

export function JsonLdFAQPage({ faqs }: { faqs: Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type ServiceJson = {
  name: string;
  description: string;
  areaServed: string[];
  urlPath: string;
};

export function JsonLdServiceProduct({ service }: { service: ServiceJson }) {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: "Custom glass installation",
    areaServed: service.areaServed.map((n) => ({ "@type": "City", name: n })),
    url: `${base}${service.urlPath.startsWith("/") ? service.urlPath : `/${service.urlPath}`}`,
    provider: { "@id": `${base}/#business` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
