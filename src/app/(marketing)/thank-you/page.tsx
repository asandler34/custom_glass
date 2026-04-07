import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Exquisite Custom Glass",
  description:
    "Thanks for reaching out to Exquisite Custom Glass. Our team received your request and will follow up shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="flex flex-1 flex-col bg-white-warm">
      <section className="mx-auto w-full max-w-4xl px-6 py-20 md:py-28">
        <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
          Thank You
        </p>
        <h1 className="font-display mt-4 text-4xl font-light tracking-wide text-charcoal md:text-5xl">
          We Received Your Request
        </h1>
        <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/85">
          Our team will review your details and follow up as soon as possible with next steps.
          If your project is time-sensitive, call us directly at{" "}
          <a
            href="tel:+19788158354"
            className="underline underline-offset-4 hover:text-gold"
          >
            (978) 815-8354
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex bg-navy-deep px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-navy-mid"
          >
            Back to Home
          </Link>
          <Link
            href="/gallery"
            className="inline-flex border border-gold px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:border-gold-light hover:text-gold-light"
          >
            View Gallery
          </Link>
        </div>
      </section>
    </main>
  );
}
