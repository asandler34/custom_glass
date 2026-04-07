import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Exquisite Custom Glass Showers",
  description:
    "Learn about Exquisite Custom Glass—craftsmanship, values, and service across Massachusetts and New Hampshire.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white-warm">
      <section className="border-b border-gray-light bg-white-pure">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            About
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-light tracking-wide text-charcoal md:text-5xl">
            Local Craft, Measured Twice
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            Exquisite Custom Glass Showers began as a response to a simple frustration: too much
            “close enough” glass in high-end homes. Today we partner with homeowners, designers,
            architects, and builders who want field-verified work and installers who treat a
            jobsite like their own.
          </p>
          <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-charcoal/75">
            If you are comparing local installers, our{" "}
            <Link href="/#services" className="underline underline-offset-4 hover:text-gold">
              custom frameless shower door services
            </Link>{" "}
            section shows exactly how we approach measurement, fabrication, and installation.
          </p>
        </div>
      </section>

      <section className="border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-normal tracking-wide text-charcoal md:text-4xl">
            Our Story
          </h2>
          <div className="font-body mt-8 max-w-3xl space-y-5 leading-relaxed text-charcoal/85">
            <p>
              From a small fabrication bay north of Boston, we built a reputation one difficult
              opening at a time—steam showers that actually seal, railings that meet code without
              looking industrial, and mirrors that land flush on imperfect plaster.
            </p>
            <p>
              Growth has meant better equipment and deeper vendor relationships, not shortcuts.
              We still sign off on shop drawings in-house, still roll our own trucks to site, and
              still pick up the phone when a past client calls with a question two years later.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-light bg-white-pure">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-normal tracking-wide text-charcoal md:text-4xl">
            What We Stand For
          </h2>
          <ul className="font-body mt-8 max-w-3xl list-none space-y-6 text-charcoal/90">
            <li>
              <span className="font-semibold text-charcoal">Precision over speed.</span>{" "}
              We would rather reschedule a measure than fabricate from bad numbers.
            </li>
            <li>
              <span className="font-semibold text-charcoal">Transparency.</span>{" "}
              You see scope, lead times, and what could change before we cash your deposit.
            </li>
            <li>
              <span className="font-semibold text-charcoal">Respect for the home.</span>{" "}
              Protection, vacuuming, and quiet communication are part of the quote—not add-ons.
            </li>
            <li>
              <span className="font-semibold text-charcoal">Accountability.</span>{" "}
              If we install it, we stand behind it—and we answer when something needs tuning.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-normal tracking-wide text-charcoal md:text-4xl">
            Service Area
          </h2>
          <p className="font-body mt-6 max-w-2xl leading-relaxed text-charcoal/85">
            We routinely fabricate and install across{" "}
            <strong className="text-charcoal">Massachusetts</strong> and{" "}
            <strong className="text-charcoal">New Hampshire</strong>—from Greater Boston and the
            North Shore to the Seacoast, Nashua, Concord, and points west on a project basis.
          </p>
          <div className="mt-10 border border-gold/40 bg-navy-deep/5 p-8 md:p-10">
            <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
              MA · NH Coverage
            </p>
            <pre className="font-body mt-4 overflow-x-auto text-sm leading-relaxed text-charcoal">
{`    ╭──────────────────────────────────────╮
    │  NH    Concord · Nashua · Seacoast │
    │         ─────────────────────────    │
    │  MA    Boston · North Shore · 495  │
    │         Haverhill Andover │
    ╰──────────────────────────────────────╯
           Not sure if you're in range?
           Call us—we'll be direct.`}
            </pre>
            <p className="font-body mt-6 text-sm text-charcoal/75">
              Out-of-area commissions happen when schedules align; ask about travel and minimums.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-pure">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-normal tracking-wide text-charcoal md:text-4xl">
            Team
          </h2>
          <p className="font-body mt-6 max-w-2xl leading-relaxed text-charcoal/75">
            Team photos and bios are coming soon. Until then, you&apos;ll meet us on site and on
            the phone—the same people who quote your job are involved in fabrication and install.
          </p>
          <div className="mt-10 flex aspect-[21/9] max-w-3xl flex-col items-center justify-center gap-2 border border-dashed border-charcoal/20 bg-gray-light/40 px-6 text-center">
            <span className="font-body text-sm font-medium text-charcoal/70">
              Team portraits coming soon
            </span>
            <span className="font-body max-w-md text-xs leading-relaxed text-charcoal/55">
              We&apos;re scheduling photography with our install leads and fabricators—the same
              people who quote and deliver your job.
            </span>
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex bg-navy-deep px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-navy-mid"
            >
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
