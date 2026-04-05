"use client";

import { motion } from "framer-motion";
import {
  cardScrollTransition,
  scrollFadeUpChild,
  scrollHeaderContainer,
  scrollViewport,
} from "@/lib/motion";

const testimonials = [
  {
    quote:
      "We interviewed three shops for our primary bath reno in Brookline. Exquisite was the only team that caught a plumb issue before fabrication—then delivered a frameless enclosure that lines up like it grew there. The installers were quiet, clean, and genuinely proud of the fit.",
    name: "Sarah Chen",
    location: "Brookline, MA",
  },
  {
    quote:
      "Our Portsmouth coastal build needed glass that could handle salt air and still look effortless. They walked the site twice, coordinated with our GC without drama, and the railings went in on the day they promised. It is the detail guests photograph.",
    name: "James Whitaker",
    location: "Portsmouth, NH",
  },
  {
    quote:
      "I was nervous about dust and damage during a full-house project in Concord. They protected floors, explained every step, and the walkthrough at the end wasn’t rushed—we adjusted a hinge feel and they rechecked every seal. Worth every penny.",
    name: "Marcus Delgado",
    location: "Concord, MA",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section
      className="bg-navy-mid py-24 md:py-28 lg:py-32"
      aria-labelledby="testimonials-heading"
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
            What Our Clients Say
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            variants={scrollFadeUpChild}
            className="font-display mt-4 text-4xl font-normal leading-tight tracking-wide text-white-warm md:text-5xl"
          >
            Trusted by Homeowners Across New England
          </motion.h2>
        </motion.div>

        <ul
          className="mt-14 grid list-none grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10"
          aria-label="Featured client testimonials"
        >
          {testimonials.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={cardScrollTransition(index)}
            >
              <article className="border-t border-gold pt-8">
                <blockquote className="font-display text-lg font-light italic leading-relaxed text-white-warm md:text-xl">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-8 font-body text-xs font-medium uppercase tracking-widest text-gold">
                  <cite className="not-italic">{item.name}</cite>
                  <span className="mt-2 block md:mt-1 md:inline md:before:mx-2 md:before:text-gold md:before:content-['·']">
                    {item.location}
                  </span>
                </footer>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
