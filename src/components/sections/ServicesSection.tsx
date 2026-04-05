"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  cardScrollTransition,
  scrollFadeUpChild,
  scrollHeaderContainer,
  scrollViewport,
} from "@/lib/motion";

const services = [
  {
    title: "Custom Shower Doors",
    description:
      "Frameless and fully custom shower enclosures, measured and installed for a precise, watertight fit in your bathroom.",
    image:
      "https://images.unsplash.com/photo-1763485956293-873ea83bf095?auto=format&fit=crop&w=800&h=1200&q=88",
    alt: "Walk-in shower with clear glass panels and refined tilework",
  },
  {
    title: "Glass Railings",
    description:
      "Interior and exterior railing systems that preserve sightlines while meeting code—engineered, polished, and built to last.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=1200&q=88",
    alt: "Modern staircase with glass railing panels",
  },
  {
    title: "Custom Mirrors",
    description:
      "Beveled and fitted mirrors cut to your dimensions so entries, vanities, and dressing areas feel finished and intentional.",
    image:
      "https://images.unsplash.com/photo-1629938828025-41bbeeb843fa?auto=format&fit=crop&w=800&h=1200&q=88",
    alt: "Elegant bathroom vanity with a large custom mirror",
  },
  {
    title: "Commercial Glass",
    description:
      "Storefronts, interior partitions, and specialty glazing for offices and retail—fabricated and installed with minimal disruption.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&h=1200&q=88",
    alt: "Bright office interior with glass walls and open workspace",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      className="bg-white-warm py-24 md:py-28 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="max-w-3xl"
          variants={scrollHeaderContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.p
            variants={scrollFadeUpChild}
            className="font-body text-xs font-medium uppercase tracking-widest text-gold"
          >
            Our Services
          </motion.p>
          <motion.h2
            id="services-heading"
            variants={scrollFadeUpChild}
            className="font-display mt-4 text-4xl font-normal leading-tight tracking-wide text-charcoal md:text-5xl"
          >
            Crafted for Every Space
          </motion.h2>
          <motion.p
            variants={scrollFadeUpChild}
            className="font-body mt-5 text-lg leading-relaxed text-charcoal/85"
          >
            We are a local premium glass fabrication and installation team serving
            Massachusetts and New Hampshire—specializing in shower enclosures,
            railings, mirrors, and bespoke interior glass for discerning homeowners,
            designers, architects, and commercial clients who expect precision and
            white-glove service.
          </motion.p>
        </motion.div>

        <ul
          className="mt-14 grid list-none grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-6"
          aria-label="Core services"
        >
          {services.map((service, index) => (
            <li key={service.title}>
              <motion.article
                className="group flex h-full flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={cardScrollTransition(index)}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover:scale-[1.02]"
                  />
                </div>
                <div className="relative flex flex-1 flex-col pt-6 pb-1">
                  <h3 className="font-display text-2xl font-semibold leading-snug tracking-wide text-charcoal md:text-[1.35rem] lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="font-body mt-3 text-sm leading-relaxed text-charcoal/80 md:text-base">
                    {service.description}
                  </p>
                  <div
                    className="pointer-events-none mt-5 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover:scale-x-100"
                    aria-hidden
                  />
                </div>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
