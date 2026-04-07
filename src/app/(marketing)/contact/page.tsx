import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Frameless Shower Door Installers | Haverhill MA",
  description:
    "Contact custom shower glass installers near Haverhill, MA for frameless shower door installation and replacement across North Shore MA and southern NH.",
};

const PHONE_DISPLAY = BUSINESS.phoneDisplay;
const PHONE_HREF = `tel:${BUSINESS.phoneE164}`;
const EMAIL = BUSINESS.email;
const ADDRESS_LINE = BUSINESS.address.streetAddress;
const CITY_LINE = `${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion} ${BUSINESS.address.postalCode}`;

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-white-warm">
      <section className="border-b border-gray-light bg-white-pure">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            Contact
          </p>
          <h1 className="font-display mt-4 text-4xl font-light tracking-wide text-charcoal md:text-5xl">
            Start With a Conversation
          </h1>
          <p className="font-body mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            Tell us about your project and timing. We&apos;ll reply with honest
            next steps—whether that&apos;s a site visit, a ballpark range, or a
            referral if we&apos;re not the right fit.
          </p>
          <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-charcoal/75">
            Looking for pricing guidance first? Review our{" "}
            <Link href="/#faq" className="underline underline-offset-4 hover:text-gold">
              shower door cost FAQs
            </Link>{" "}
            before you submit the form.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl text-charcoal md:text-3xl">
              Send a message
            </h2>
            <p className="font-body mt-3 text-sm text-charcoal/70">
              Form submission is wired for demo—open DevTools console to inspect
              the payload until a backend is connected.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <aside className="lg:col-span-5">
            <h2 className="font-display text-2xl text-charcoal md:text-3xl">
              Business info
            </h2>
            <div className="font-body mt-8 space-y-6 text-charcoal/85">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Address
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  {ADDRESS_LINE}
                  <br />
                  {CITY_LINE}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Phone
                </h3>
                <a
                  href={PHONE_HREF}
                  className="mt-2 inline-block text-sm font-medium text-charcoal underline-offset-4 hover:text-gold hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Email
                </h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 inline-block text-sm font-medium text-charcoal underline-offset-4 hover:text-gold hover:underline"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Hours
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Monday–Friday, 7:30a–4:30p
                  <br />
                  Evenings &amp; Saturdays by appointment
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Service area
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Massachusetts &amp; New Hampshire—Greater Boston, North Shore,
                  Seacoast NH, Nashua, Concord, and select western MA corridors.
                </p>
              </div>
            </div>
            <Link
              href="/gallery"
              className="font-body mt-10 inline-flex text-sm font-medium uppercase tracking-widest text-gold underline-offset-4 hover:underline"
            >
              View gallery →
            </Link>
          </aside>
        </div>

        <div className="mt-20 border-t border-gray-light pt-14">
          <h2 className="font-display text-2xl text-charcoal md:text-3xl">
            What to Expect
          </h2>
          <ol className="font-body mt-8 max-w-3xl list-decimal space-y-4 pl-5 text-charcoal/85">
            <li>
              <strong className="text-charcoal">We read your note same-day</strong>{" "}
              during business hours and usually within one business day on weekends.
            </li>
            <li>
              <strong className="text-charcoal">A quick clarifying call or email</strong>{" "}
              if we need photos, plans, or rough openings before we schedule a visit.
            </li>
            <li>
              <strong className="text-charcoal">On-site consultation when it makes sense</strong>{" "}
              —with a written summary of scope, options, and how we charge—before you
              commit to fabrication.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
