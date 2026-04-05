import Image from "next/image";
import Link from "next/link";

/** Soft abstract glass / light refraction — barely visible under navy overlay. */
const TEXTURE_IMAGE =
  "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=2000&q=75";

const PHONE_DISPLAY = "(978) 815-8354";
const PHONE_HREF = "tel:+19788158354";

export function CTABanner() {
  return (
    <section
      className="relative isolate w-full overflow-hidden py-20 md:py-24 lg:py-28"
      aria-labelledby="cta-banner-heading"
    >
      <Image
        src={TEXTURE_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.18]"
        aria-hidden
        priority={false}
      />
      <div
        className="absolute inset-0 bg-navy-deep/92"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white-pure/[0.05] via-transparent to-navy-mid/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white-pure/[0.04] to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2
          id="cta-banner-heading"
          className="font-display text-4xl font-light leading-tight tracking-wide text-white-warm sm:text-5xl"
        >
          Ready to Transform Your Space?
        </h2>
        <p className="font-body mx-auto mt-5 max-w-xl text-base leading-relaxed text-white-warm/85 md:text-lg">
          Share a few details about your project—we&apos;ll respond with next
          steps, a realistic timeline, and a free estimate with no pressure.
        </p>
        <div className="mt-10 flex flex-col items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex bg-gold px-10 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-navy-deep transition-colors duration-200 hover:bg-gold-light"
          >
            Request Your Free Estimate
          </Link>
          <a
            href={PHONE_HREF}
            className="font-body text-sm font-medium text-white-warm underline-offset-4 transition-opacity hover:opacity-90 hover:underline md:text-base"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
