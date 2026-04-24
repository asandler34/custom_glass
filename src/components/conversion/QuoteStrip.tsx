import Link from "next/link";
import { TrustSignals } from "./TrustSignals";

const btn =
  "inline-flex bg-navy-deep px-7 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-navy-mid";
const btnOutline =
  "inline-flex border border-gold px-7 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:border-gold-light hover:text-gold-light";

export function QuoteStrip({
  id = "quote",
  kicker = "Request a quote",
  title = "Tell us your town and a rough idea of the project.",
  compact = false,
}: {
  id?: string;
  kicker?: string;
  title?: string;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={compact ? "border border-gray-light bg-white-pure p-6" : "border-y border-gray-light bg-navy-deep/5 py-10"}
      aria-label="Request a quote"
    >
      <div className="mx-auto max-w-3xl">
        <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">{kicker}</p>
        <h2
          className={`font-display font-light tracking-wide text-charcoal ${
            compact ? "mt-2 text-2xl" : "mt-3 text-3xl md:text-4xl"
          }`}
        >
          {title}
        </h2>
        <TrustSignals />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className={btn}>
            Request a quote
          </Link>
          <a href="tel:+19788158354" className={btnOutline}>
            Call (978) 815-8354
          </a>
        </div>
      </div>
    </section>
  );
}
