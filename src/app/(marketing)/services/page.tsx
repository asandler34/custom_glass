import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo/metadata-helpers";
import { SERVICE_PATHS, locationHref } from "@/lib/seo/urls";

export const metadata: Metadata = withCanonical("/services", {
  title: "Glass Installation Services | Showers, Railings, Mirrors | Haverhill MA",
  description:
    "Custom glass services: frameless showers, railings, mirrors, and partitions. Haverhill-based, serving the North Shore, Boston, and southern New Hampshire. Request an estimate.",
});

const ctaClass =
  "inline-flex bg-navy-deep px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-navy-mid";

const services = [
  {
    id: "shower-doors",
    title: "Custom Shower Doors & Enclosures",
    lede: "Frameless and semi-frameless shower glass fabricated to your opening—not a kit adjusted with extra shims. Ideal for primary baths, guest suites, and spec homes where the shower is the centerpiece.",
    body: [
      "We field-measure after tile and pan are set (or coordinate with your contractor on sequencing), verify plumb and level, and produce shop drawings you approve before anything is tempered. That discipline is what keeps hinges aligned, sweeps sealing, and water where it belongs.",
      "Whether you want a single fixed panel, a rolling door, steam-ready transoms, or a full walk-in with a minimal channel profile, we source hardware from trusted lines and install to manufacturer torque and sealant specifications.",
    ],
    specs: [
      "Typical glass: 3/8″ or 1/2″ low-iron or standard clear tempered (per code and opening size)",
      "Coatings: easy-clean / water-repellent treatments available on request",
      "Hardware: wall-mount hinges, pivots, sliders, and custom pulls coordinated with plumbing finishes",
      "Lead time: fabrication commonly 2–4 weeks after sign-off (varies with complexity and season)",
    ],
  },
  {
    id: "railings",
    title: "Glass Railings",
    lede: "Interior stairs, landings, and exterior decks that need guardrail performance without blocking light or views. We engineer to local code, fabricate clean edges and fittings, and install with structural integrity first.",
    body: [
      "Railings are a collaboration: we review post spacing, attachment points, and deflection requirements with your architect or builder before we cut glass. Base-shoe, standoff, or post systems each have a distinct look—we help you choose what matches the architecture and maintenance expectations.",
      "Exterior coastal or high-exposure projects get hardware and glass recommendations suited to salt air and thermal movement so the assembly stays quiet and secure over time.",
    ],
    specs: [
      "Glass: laminated or monolithic tempered per engineer-of-record or prescriptive code path",
      "Interior/exterior metal finishes: powder coat, stainless, and plated options to match design intent",
      "Site verification: laser plumb and template checks before final order",
      "Coordination: shop drawings for GC sign-off; inspections supported as required",
    ],
  },
  {
    id: "mirrors",
    title: "Custom Mirrors",
    lede: "Vanity walls, dressing areas, and entry niches that deserve a mirror cut to the room—not a box-store rectangle floating in the wrong proportion.",
    body: [
      "We template irregular walls, work around outlets and sconces, and deliver bevels or flat polish per your spec. Large panels can be seamed discreetly when a single lite is impractical to handle or transport.",
      "Installation uses appropriate anchors for your substrate and adhesive systems rated for bath humidity where needed, so the mirror stays flat and safe.",
    ],
    specs: [
      "Thickness: commonly 1/4″ mirror; other thicknesses by application",
      "Safety: vinyl-backed or laminated options where code calls for retention",
      "Shapes: radius corners, circles, and cutouts for medicine cabinets or lighting",
      "Lead time: often 1–3 weeks after field template (simpler rectangles may be faster)",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Glass",
    lede: "Storefronts, interior office fronts, transaction windows, and specialty glazing for retail and professional environments across New England—scheduled to keep your business moving.",
    body: [
      "We understand phased work, after-hours access, and coordination with door hardware vendors. Our crews protect finishes, label phases clearly, and communicate with your facilities or project manager so there are no surprises at punch list.",
      "From high-traffic entry systems to discreet frosted partitions for conference rooms, we fabricate to approved details and stand behind the installation.",
    ],
    specs: [
      "Products: tempered, laminated, insulated units (coordinated with suppliers as required)",
      "Films & treatments: privacy, solar, and safety films available",
      "Compliance: ADA-aware hardware coordination; documentation on request",
      "Scheduling: estimates tied to your occupancy or tenant-improvement milestones",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col bg-white-warm">
      <section className="border-b border-gray-light bg-white-pure">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-light tracking-wide text-charcoal md:text-5xl">
            Glass Built for Your Plans—Not a Catalog SKU
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            Every project starts with field verification and honest timelines. Below is how
            we approach the four pillars of our work for homeowners, designers, architects,
            and commercial clients throughout Massachusetts and New Hampshire.
          </p>
          <p className="font-body mt-4 max-w-3xl text-base leading-relaxed text-charcoal/80">
            Want a quick ballpark for a shower project in Haverhill or nearby towns? Start on our{" "}
            <Link href="/#contact" className="underline underline-offset-4 hover:text-gold">
              homepage estimate form
            </Link>{" "}
            and share your town plus rough opening details.
          </p>
          <div className="mt-8 border border-gray-light bg-navy-deep/5 p-6">
            <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
              Dedicated service pages
            </p>
            <ul className="mt-3 grid list-none gap-2 sm:grid-cols-2">
              {SERVICE_PATHS.map((p) => (
                <li key={p}>
                  <Link
                    href={`/${p}`}
                    className="font-body text-sm text-gold underline-offset-2 hover:underline"
                  >
                    {p.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-body text-sm text-charcoal/75">
              Local pages:{" "}
              <Link className="text-gold hover:underline" href="/locations">
                all areas
              </Link>
              {", "}
              <Link className="text-gold hover:underline" href={locationHref("portsmouth-nh")}>
                Portsmouth NH
              </Link>
              {", "}
              <Link className="text-gold hover:underline" href={locationHref("boston-ma")}>
                Boston MA
              </Link>
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-28 border-b border-gray-light ${index % 2 === 0 ? "bg-white-warm" : "bg-white-pure"}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <h2 className="font-display text-3xl font-normal tracking-wide text-charcoal md:text-4xl">
              {service.title}
            </h2>
            <p className="font-body mt-6 max-w-3xl text-lg font-medium leading-relaxed text-charcoal">
              {service.lede}
            </p>
            <div className="font-body mt-6 max-w-3xl space-y-4 leading-relaxed text-charcoal/85">
              {service.body.map((p, i) => (
                <p key={`${service.id}-p-${i}`}>{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
                Specifications &amp; details
              </h3>
              <ul className="font-body mt-4 max-w-3xl list-disc space-y-2 pl-5 text-charcoal/90">
                {service.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className={ctaClass}>
                Request a Free Estimate
              </Link>
              <Link
                href="/gallery"
                className="inline-flex border border-gold px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:border-gold-light hover:text-gold-light"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
