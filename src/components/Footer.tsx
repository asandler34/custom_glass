import Image from "next/image";
import Link from "next/link";
import { brandLogo } from "@/lib/branding";

const linkClass =
  "font-body text-sm text-white-warm transition-colors duration-200 hover:text-gold";

const services = [
  { href: "/services#shower-doors", label: "Custom Shower Doors" },
  { href: "/services#railings", label: "Glass Railings" },
  { href: "/services#mirrors", label: "Custom Mirrors" },
  { href: "/services#commercial", label: "Commercial Glass" },
] as const;

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const PHONE_DISPLAY = "(978) 815-8354";
const PHONE_HREF = "tel:+19788158354";
const EMAIL = "hello@exquisitecustomglass.com";
const ADDRESS_LINE = "142 Fabrication Way, Suite 200";
const CITY_LINE = "Lowell, MA 01852";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:pr-4">
            <Link href="/" className="inline-flex shrink-0">
              <Image
                src={brandLogo.onDark}
                alt="Exquisite Custom Glass Showers"
                width={240}
                height={80}
                className="h-9 w-auto sm:h-10"
              />
            </Link>
            <p className="font-body mt-5 max-w-xs text-sm leading-relaxed text-white-warm/75">
              Fully custom glass fabrication and white-glove installation for
              homes and businesses that expect precision—not catalog parts.
            </p>
          </div>

          <div>
            <h2 className="font-body text-xs font-medium uppercase tracking-widest text-gold">
              Services
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-body text-xs font-medium uppercase tracking-widest text-gold">
              Quick Links
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-body text-xs font-medium uppercase tracking-widest text-gold">
              Contact
            </h2>
            <address className="mt-5 flex flex-col gap-3 not-italic">
              <p className="font-body text-sm leading-relaxed text-white-warm">
                {ADDRESS_LINE}
                <br />
                {CITY_LINE}
              </p>
              <a href={PHONE_HREF} className={linkClass}>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className={linkClass}
              >
                {EMAIL}
              </a>
              <p className="font-body text-sm text-white-warm">
                <span className="font-medium">Service area:</span>{" "}
                Massachusetts &amp; New Hampshire
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white-warm/10 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="font-body text-xs text-white-warm/50">
            © {year} Exquisite Custom Glass Showers. All rights reserved.
          </p>
          <p className="font-body text-xs text-white-warm/50">
            Serving Massachusetts &amp; New Hampshire
          </p>
        </div>
      </div>
    </footer>
  );
}
