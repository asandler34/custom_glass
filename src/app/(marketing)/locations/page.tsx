import type { Metadata } from "next";
import Link from "next/link";
import { JsonLdBreadcrumb, JsonLdFAQPage } from "@/components/seo/JsonLdBlocks";
import { QuoteStrip } from "@/components/conversion/QuoteStrip";
import { GbpCta } from "@/components/conversion/TrustSignals";
import { InlineQuoteForm } from "@/components/conversion/InlineQuoteForm";
import { locationPages } from "@/lib/seo/location-registry";
import { LOCATION_PATHS, SERVICE_PATHS, locationHref } from "@/lib/seo/urls";
import { withCanonical } from "@/lib/seo/metadata-helpers";
import { BUSINESS, PUBLIC_CONTACT_EMAIL } from "@/lib/business";

export const metadata: Metadata = withCanonical("/locations", {
  title: "Glass Service Areas | MA & NH | Exquisite Custom Glass",
  description:
    "Custom glass service areas: Haverhill MA, Portsmouth NH, Boston, Newburyport, Rye, Dover, the North Shore, and southern NH. Local measurement and install.",
});

const faqs = [
  {
    q: "How do I know if my town is covered?",
    a: `We work within about ${BUSINESS.serviceRadiusMiles} miles of Haverhill. Send your address or zip with the form and we will confirm before we schedule.`,
  },
  {
    q: "What is the best way to reach you?",
    a: `Call ${BUSINESS.phoneDisplay}, email ${PUBLIC_CONTACT_EMAIL}, or use the quote form on this page.`,
  },
];

export default function LocationsHubPage() {
  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/locations" },
        ]}
      />
      <JsonLdFAQPage faqs={faqs} />
      <main className="flex flex-1 flex-col bg-white-warm pb-24">
        <section className="border-b border-gray-light bg-white-pure">
            <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
            <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">Coverage</p>
            <h1 className="font-display mt-3 text-4xl font-light tracking-wide text-charcoal md:text-5xl">
              Where we install custom glass
            </h1>
            <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/85">
              Exquisite Custom Glass is headquartered in Haverhill, Massachusetts, and travels for
              templating and installation throughout the North Shore, greater Boston (within our
              radius), and southern New Hampshire—including Portsmouth, Rye, Dover, and nearby
              Seacoast towns. Use the links below for area-specific context, or jump straight to a
              service page.
            </p>
            <GbpCta />
          </div>
        </section>

        <div className="mx-auto w-full max-w-5xl px-6 py-8">
          <QuoteStrip
            kicker="Quote"
            title="Add your zip in the form—we will confirm service area in our reply."
            compact
          />
        </div>

        <section className="border-y border-gray-light bg-navy-deep/5" aria-label="Cities and regions">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="font-display text-3xl font-light text-charcoal">Locations</h2>
            <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2">
              {LOCATION_PATHS.map((p) => {
                const d = locationPages[p];
                return (
                  <li
                    key={p}
                    className="border border-gray-light bg-white-pure p-5 transition-shadow hover:shadow-sm"
                  >
                    <Link
                      href={locationHref(p)}
                      className="font-display text-xl text-charcoal hover:text-gold"
                    >
                      {d.placeName}
                    </Link>
                    <p className="font-body mt-2 text-sm leading-relaxed text-charcoal/75">
                      {d.intro.slice(0, 160)}
                      {d.intro.length > 160 ? "…" : ""}
                    </p>
                    <p className="mt-2">
                      <Link
                        className="font-body text-xs font-medium uppercase tracking-widest text-gold"
                        href={locationHref(p)}
                      >
                        Read more
                      </Link>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="border-b border-gray-light" aria-label="Services">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="font-display text-3xl font-light text-charcoal">Services (same crew)</h2>
            <p className="font-body mt-3 max-w-2xl text-charcoal/80">
              Every service below uses the same measurement and fabrication workflow—no matter
              which town you are in.
            </p>
            <ul className="mt-6 grid list-none gap-2 sm:grid-cols-2">
              {SERVICE_PATHS.map((p) => (
                <li key={p}>
                  <Link
                    className="font-body text-gold underline-offset-2 hover:underline"
                    href={`/${p}`}
                  >
                    {p.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white-pure" id="faqs" aria-label="FAQs">
          <div className="mx-auto max-w-3xl px-6 py-12">
            <h2 className="font-display text-3xl font-light text-charcoal">Service area questions</h2>
            <dl className="mt-6 space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-body font-semibold text-charcoal">{f.q}</dt>
                  <dd className="font-body mt-2 text-charcoal/85">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 py-8">
          <h2 className="font-body text-xs font-medium uppercase tracking-widest text-gold">Request a quote</h2>
          <p className="font-body mt-2 text-sm text-charcoal/75">
            Same form we use for service and location pages—name, contact, zip, and a short project
            note.
          </p>
          <div className="mt-4">
            <InlineQuoteForm heading="Request a quote" />
          </div>
        </div>

        <div className="border-t border-gray-light">
          <div className="mx-auto max-w-3xl px-6 py-8">
            <QuoteStrip
              kicker="Next step"
              title="Prefer to talk? Call and mention your town—we will route you to scheduling."
            />
          </div>
        </div>
      </main>
    </>
  );
}
