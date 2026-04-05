"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brandLogo } from "@/lib/branding";
import { EASE } from "@/lib/motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerSolid = scrolled || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ease-[cubic-bezier(0.42,0,0.58,1)] ${
          headerSolid ? "bg-navy-deep" : "bg-transparent"
        }`}
        aria-label="Site header"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="group relative inline-flex shrink-0 items-center"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src={brandLogo.onDark}
              alt="Exquisite Custom Glass Showers"
              width={220}
              height={74}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Main"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium uppercase tracking-widest text-white-warm transition-opacity duration-200 hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex border border-gold px-5 py-2.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors duration-200 hover:border-gold-light hover:text-gold-light"
            >
              Free Estimate
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-white-warm md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-overlay"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-overlay"
            className="fixed inset-0 z-40 flex min-h-dvh flex-col bg-navy-deep md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <div className="h-[4.5rem] shrink-0" aria-hidden />
            <motion.nav
              className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-12"
              aria-label="Mobile main"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.05 },
                },
              }}
            >
              {navLinks.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: EASE },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    className="font-body text-sm font-medium uppercase tracking-widest text-white-warm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: EASE },
                  },
                }}
              >
                <Link
                  href="/contact"
                  className="inline-flex border border-gold px-6 py-3 font-body text-sm font-medium uppercase tracking-widest text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  Free Estimate
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[4.5rem] shrink-0" aria-hidden />
    </>
  );
}
