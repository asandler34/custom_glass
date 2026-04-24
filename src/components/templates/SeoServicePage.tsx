import Image from "next/image";
import Link from "next/link";
import type { ServicePageData } from "@/lib/seo/service-registry";
import { JsonLdBreadcrumb, JsonLdFAQPage, JsonLdServiceProduct } from "@/components/seo/JsonLdBlocks";
import { QuoteStrip } from "@/components/conversion/QuoteStrip";
import { TrustSignals, GbpCta, ReviewPrompt } from "@/components/conversion/TrustSignals";
import { InlineQuoteForm } from "@/components/conversion/InlineQuoteForm";
import { LOCATION_PATHS, SERVICE_PATHS, locationHref } from "@/lib/seo/urls";

function RelatedLinksBlock({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div className="mt-8 border-t border-gray-light pt-8">
      <h2 className="font-body text-xs font-medium uppercase tracking-widest text-gold">Related</h2>
      <ul className="mt-4 flex flex-col gap-2">
        {items.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="font-body text-sm text-gold underline-offset-2 hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/locations" className="font-body text-sm text-charcoal/80 underline-offset-2 hover:underline">
            Glass service areas — Massachusetts and New Hampshire
          </Link>
        </li>
        <li>
          <Link
            href={locationHref("portsmouth-nh")}
            className="font-body text-sm text-charcoal/80 underline-offset-2 hover:underline"
          >
            custom glass in Portsmouth NH
          </Link>
        </li>
        <li>
          <Link
            href={locationHref("haverhill-ma")}
            className="font-body text-sm text-charcoal/80 underline-offset-2 hover:underline"
          >
            custom glass in Haverhill MA
          </Link>
        </li>
      </ul>
    </div>
  );
}

function ServiceCrossLinks({ current: cur }: { current: ServicePageData["path"] }) {
  const rest = SERVICE_PATHS.filter((p) => p !== cur);
  return (
    <p className="font-body text-sm text-charcoal/80">
      <span className="font-medium text-charcoal">Other services: </span>
      {rest.map((p, i) => (
        <span key={p}>
          {i > 0 ? " · " : ""}
          <Link className="text-gold underline-offset-2 hover:underline" href={`/${p}`}>
            {p.replace(/-/g, " ")}
          </Link>
        </span>
      ))}
    </p>
  );
}

type Props = { data: ServicePageData };

export function SeoServicePage({ data }: Props) {
  const path = `/${data.path}`;
  const areaNames = [
    "Haverhill",
    "Portsmouth",
    "Boston",
    "Newburyport",
    "Rye",
    "Dover",
    "North Shore Massachusetts",
  ];

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: data.h1, path },
        ]}
      />
      <JsonLdFAQPage faqs={data.faqs} />
      <JsonLdServiceProduct
        service={{
          name: data.serviceSchema.name,
          description: data.serviceSchema.description,
          areaServed: areaNames,
          urlPath: path,
        }}
      />
      <main className="flex flex-1 flex-col bg-white-warm pb-24">
        <article>
          <header className="border-b border-gray-light bg-white-pure">
            <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
              <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">Service</p>
              <h1 className="font-display mt-3 text-4xl font-light tracking-wide text-charcoal md:text-5xl">
                {data.h1}
              </h1>
              <p className="font-body mt-6 text-lg leading-relaxed text-charcoal/85">{data.intro}</p>
              <GbpCta />
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-6 py-10">
            <QuoteStrip
              kicker="Free estimate"
              title="Get pricing for your opening."
              compact
            />
          </div>

          <section className="border-b border-gray-light bg-white-pure" aria-label="Benefits">
            <div className="mx-auto max-w-3xl px-6 py-12">
              <h2 className="font-display text-3xl font-light text-charcoal">What you get</h2>
              <ul className="mt-6 space-y-6">
                {data.benefits.map((b) => (
                  <li key={b.title}>
                    <h3 className="font-body text-base font-semibold text-charcoal">{b.title}</h3>
                    <p className="font-body mt-2 text-charcoal/85">{b.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-light" aria-label="Use cases">
            <div className="mx-auto max-w-3xl px-6 py-12">
              <h2 className="font-display text-3xl font-light text-charcoal">Where this fits</h2>
              <ul className="mt-6 list-disc space-y-2 pl-5 font-body text-charcoal/85">
                {data.useCases.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="mx-auto max-w-3xl px-6 py-8">
            <ServiceCrossLinks current={data.path} />
          </div>

          <section className="border-b border-gray-light bg-white-pure" aria-label="Process">
            <div className="mx-auto max-w-3xl px-6 py-12">
              <h2 className="font-display text-3xl font-light text-charcoal">Measurement and install</h2>
              <ol className="mt-6 list-decimal space-y-5 pl-5 font-body text-charcoal/85">
                {data.processSteps.map((s) => (
                  <li key={s.title}>
                    <strong className="text-charcoal">{s.title}.</strong> {s.body}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-b border-gray-light" aria-label="Example project">
            <div className="mx-auto max-w-3xl px-6 py-12">
              <h2 className="font-display text-3xl font-light text-charcoal">{data.project.title}</h2>
              <p className="font-body mt-4 text-charcoal/85">{data.project.body}</p>
              {data.project.imageSrc ? (
                <div className="relative mt-8 aspect-[4/3] w-full max-w-2xl overflow-hidden border border-gray-light">
                  <Image
                    src={data.project.imageSrc}
                    alt={data.project.imageAlt || data.h1}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 42rem"
                    loading="lazy"
                  />
                </div>
              ) : null}
            </div>
          </section>

          <section className="border-b border-gray-light bg-white-pure" id="faqs" aria-label="FAQs">
            <div className="mx-auto max-w-3xl px-6 py-12">
              <h2 className="font-display text-3xl font-light text-charcoal">Questions we hear a lot</h2>
              <dl className="mt-6 space-y-6">
                {data.faqs.map((f) => (
                  <div key={f.q}>
                    <dt className="font-body font-semibold text-charcoal">{f.q}</dt>
                    <dd className="font-body mt-2 text-charcoal/85">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <div className="mx-auto max-w-3xl px-6 py-8">
            <ReviewPrompt />
          </div>

          <div className="mx-auto max-w-3xl px-6 py-4">
            <InlineQuoteForm heading="Request a quote" />
            <div className="mt-4 text-charcoal/80">
              <TrustSignals />
            </div>
          </div>

          <div className="border-t border-gray-light bg-navy-deep/5">
            <div className="mx-auto max-w-3xl px-6 py-10">
              <h2 className="font-display text-2xl font-light text-charcoal">Local coverage</h2>
              <p className="font-body mt-3 text-charcoal/80">
                We are based in Haverhill, MA, and work across the North Shore, Boston, and Seacoast NH,
                including{" "}
                {LOCATION_PATHS.map((l, i) => (
                  <span key={l}>
                    <Link className="text-gold underline-offset-2 hover:underline" href={locationHref(l)}>
                      {l.replace(/-/g, " ")}
                    </Link>
                    {i < LOCATION_PATHS.length - 1 ? ", " : ""}
                  </span>
                ))}
                . If your zip is nearby, we will confirm in one reply.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-6 py-6">
            <QuoteStrip
              kicker="Next step"
              title="We will reply with next steps and a time window for a site visit if it makes sense."
            />
            <RelatedLinksBlock items={data.relatedLinks} />
            <p className="mt-6 font-body text-sm text-charcoal/70">
              Internal resources:{" "}
              <Link className="text-gold" href="/blog">
                glass guides
              </Link>
              ,{" "}
              <Link className="text-gold" href="/gallery">
                project photos
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
