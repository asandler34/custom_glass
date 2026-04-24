import Link from "next/link";
import type { LocationPageData } from "@/lib/seo/location-registry";
import { JsonLdBreadcrumb, JsonLdFAQPage } from "@/components/seo/JsonLdBlocks";
import { QuoteStrip } from "@/components/conversion/QuoteStrip";
import { GbpCta, ReviewPrompt, TrustSignals } from "@/components/conversion/TrustSignals";
import { InlineQuoteForm } from "@/components/conversion/InlineQuoteForm";
import { LOCATION_PATHS, SERVICE_PATHS, locationHref } from "@/lib/seo/urls";

type Props = { data: LocationPageData };

function OtherAreas({ current: cur }: { current: LocationPageData["path"] }) {
  const rest = LOCATION_PATHS.filter((p) => p !== cur);
  return (
    <p className="font-body text-sm text-charcoal/80">
      <span className="font-medium text-charcoal">Nearby: </span>
      {rest.map((p, i) => (
        <span key={p}>
          {i > 0 ? " · " : ""}
          <Link className="text-gold underline-offset-2 hover:underline" href={locationHref(p)}>
            {p.replace(/-/g, " ")}
          </Link>
        </span>
      ))}
    </p>
  );
}

export function SeoLocationPage({ data }: Props) {
  const path = `/${data.path}`;

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/locations" },
          { name: data.placeName, path },
        ]}
      />
      {data.faqs.length > 0 ? <JsonLdFAQPage faqs={data.faqs} /> : null}
      <main className="flex flex-1 flex-col bg-white-warm pb-24">
        <article>
          <header className="border-b border-gray-light bg-white-pure">
            <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
              <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">Service area</p>
              <h1 className="font-display mt-3 text-4xl font-light tracking-wide text-charcoal md:text-5xl">
                {data.h1}
              </h1>
              <p className="font-body mt-6 text-lg leading-relaxed text-charcoal/85">{data.intro}</p>
              <GbpCta />
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-6 py-8">
            <QuoteStrip
              kicker="Quote"
              title={`Request an estimate for work in or near ${data.placeName}.`}
              compact
            />
          </div>

          <section className="border-b border-gray-light bg-white-pure" aria-label="Services">
            <div className="mx-auto max-w-3xl px-6 py-10">
              <h2 className="font-display text-3xl font-light text-charcoal">What we install</h2>
              <p className="font-body mt-4 text-charcoal/85">{data.servicesCopy}</p>
            </div>
          </section>

          <section className="border-b border-gray-light" aria-label="Local context">
            <div className="mx-auto max-w-3xl px-6 py-10">
              <h2 className="font-display text-3xl font-light text-charcoal">On the ground</h2>
              <p className="font-body mt-4 text-charcoal/85">{data.neighborhoodCopy}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 font-body text-charcoal/80">
                {data.localNotes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="mx-auto max-w-3xl px-6 py-4">
            <OtherAreas current={data.path} />
          </div>

          <div className="border-b border-gray-light bg-navy-deep/5">
            <div className="mx-auto max-w-3xl px-6 py-6">
              <h2 className="font-body text-sm font-medium uppercase tracking-widest text-gold">Core services</h2>
              <ul className="mt-3 space-y-1.5">
                {SERVICE_PATHS.map((p) => (
                  <li key={p}>
                    <Link
                      className="font-body text-sm text-gold underline-offset-2 hover:underline"
                      href={`/${p}`}
                    >
                      {p.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="border-b border-gray-light bg-white-pure" id="faqs" aria-label="FAQs">
            <div className="mx-auto max-w-3xl px-6 py-10">
              <h2 className="font-display text-3xl font-light text-charcoal">Local questions</h2>
              <dl className="mt-6 space-y-5">
                {data.faqs.map((f) => (
                  <div key={f.q}>
                    <dt className="font-body font-semibold text-charcoal">{f.q}</dt>
                    <dd className="font-body mt-2 text-charcoal/85">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <div className="mx-auto max-w-3xl px-6 py-4">
            <ReviewPrompt />
          </div>

          <div className="mx-auto max-w-3xl border-t border-gray-light px-6 py-8">
            <InlineQuoteForm heading="Request a quote" />
            <div className="mt-4">
              <TrustSignals />
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-4 px-6 py-4">
            <h2 className="font-body text-xs font-medium uppercase tracking-widest text-gold">Related</h2>
            <ul className="list-disc space-y-1.5 pl-5 font-body text-sm text-charcoal/80">
              {data.relatedServices.map((l) => (
                <li key={l.href + l.label}>
                  <Link className="text-gold hover:underline" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-charcoal/70">
              <Link className="text-gold" href="/blog">
                Read: frameless cost and installation guides
              </Link>{" "}
              — each article includes a direct path to request an estimate.
            </p>
          </div>

          <div className="border-t border-gray-light bg-navy-deep/5">
            <div className="mx-auto max-w-3xl px-6 py-8">
              <QuoteStrip
                kicker="Call or write"
                title="We read every form and return a human reply—usually within one business day."
              />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
