"use client";

import { motion } from "framer-motion";
import {
  cardScrollTransition,
  scrollFadeUpChild,
  scrollHeaderContainer,
  scrollViewport,
} from "@/lib/motion";

const steps = [
  {
    title: "Consultation & Measurement",
    description: [
      "We visit your home or job site to understand how you use the space, review design intent with you or your designer, and capture field measurements so every panel is fabricated to fit—not almost, but exactly.",
      "You leave with a clear picture of scope, options, and what happens next before we ever cut glass.",
    ],
  },
  {
    title: "Custom Design & Fabrication",
    description: [
      "Our shop translates approved details into shop drawings and fabricates from premium glass and hardware, with edges finished and components checked against your specifications.",
      "Nothing is released for installation until it clears our internal quality review.",
    ],
  },
  {
    title: "Professional Installation",
    description: [
      "Our installers work cleanly and deliberately: protected surfaces, crisp sealant lines, and hardware set to manufacturer torque so performance matches the look.",
      "We coordinate with contractors and trades so the handoff feels seamless and your schedule stays respected.",
    ],
  },
  {
    title: "Final Inspection & Walkthrough",
    description: [
      "We review the completed work with you—hardware, drainage, safety details, and finish—and address any fine adjustments on the spot.",
      "You receive straightforward care guidance so your glass stays brilliant and functional for years to come.",
    ],
  },
] as const;

export function ProcessSection() {
  const lastIndex = steps.length - 1;

  return (
    <section
      className="bg-navy-deep py-24 md:py-28 lg:py-32"
      aria-labelledby="process-heading"
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
            How It Works
          </motion.p>
          <motion.h2
            id="process-heading"
            variants={scrollFadeUpChild}
            className="font-display mt-4 text-4xl font-normal leading-tight tracking-wide text-white-warm md:text-5xl"
          >
            From Concept to Completion
          </motion.h2>
        </motion.div>

        <ol
          className="mt-14 flex list-none flex-col gap-12 lg:mt-16 lg:flex-row lg:gap-6"
          aria-label="How we work, step by step"
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              className="relative flex gap-5 lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={cardScrollTransition(index)}
            >
              {/* Mobile: number + vertical connector */}
              <div className="flex shrink-0 flex-col items-center lg:hidden">
                <span className="font-display text-5xl font-light tabular-nums leading-none text-gold">
                  {index + 1}
                </span>
                {index < lastIndex && (
                  <div
                    className="mt-4 w-px flex-1 min-h-[3.5rem] bg-gold/55"
                    aria-hidden
                  />
                )}
              </div>

              <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                {/* Desktop: number row + horizontal connector */}
                <div className="mb-6 hidden items-center lg:mb-8 lg:flex">
                  <span className="font-display text-6xl font-light tabular-nums leading-none text-gold lg:text-[3.5rem]">
                    {index + 1}
                  </span>
                  {index < lastIndex && (
                    <div
                      className="ml-4 h-px flex-1 bg-gold/70"
                      aria-hidden
                    />
                  )}
                </div>

                <h3 className="font-display text-xl font-semibold leading-snug tracking-wide text-white-warm md:text-2xl">
                  {step.title}
                </h3>
                <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-white-warm/88 md:text-base">
                  {step.description.map((paragraph, pi) => (
                    <p key={`${step.title}-${pi}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
