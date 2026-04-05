"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE, fadeUpTransition } from "@/lib/motion";

/** Walk-in glass shower interior — Unsplash (high-res, editorial use). */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1763485956293-873ea83bf095?auto=format&fit=crop&w=2400&q=90";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-dvh w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src={HERO_IMAGE}
        alt="Luxury frameless glass shower enclosure with refined tile and fixtures"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-navy-deep/65"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <motion.div
          className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-28 pt-32 md:pb-32 md:pt-36"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUpVariants}
            className="font-body text-xs font-medium uppercase tracking-widest text-gold"
          >
            Exquisite Custom Glass Showers
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={fadeUpVariants}
            className="font-display mt-4 max-w-4xl text-4xl font-light leading-[1.1] tracking-wide text-white-warm sm:text-6xl lg:text-7xl"
          >
            Glass, Crafted to Perfection
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-white-warm/80"
          >
            Custom shower doors, railings, and interior glass — made to measure
            for homes across Massachusetts and New Hampshire.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
          >
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center bg-navy-deep px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors duration-200 hover:bg-navy-mid sm:w-auto"
            >
              Request Free Estimate
            </Link>
            <Link
              href="/gallery"
              className="inline-flex w-full items-center justify-center border border-gold bg-transparent px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors duration-200 hover:border-gold-light hover:text-gold-light sm:w-auto"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white-warm/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: EASE }}
          aria-label="More content below"
        >
          <span className="sr-only">Scroll to explore more content</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          >
            <ChevronDown className="h-8 w-8" strokeWidth={1.25} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
