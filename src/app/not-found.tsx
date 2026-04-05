import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <div className="font-body flex min-h-full flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col items-center justify-center bg-white-warm px-6 py-24 text-center">
      <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
        404
      </p>
      <h1 className="font-display mt-4 max-w-md text-4xl font-light tracking-wide text-charcoal md:text-5xl">
        Page not found
      </h1>
      <p className="font-body mt-5 max-w-md text-base leading-relaxed text-charcoal/80">
        That address isn&apos;t on our site. Head back home or reach out if you need help
        finding custom glass services in Massachusetts or New Hampshire.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex bg-navy-deep px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-navy-mid"
      >
        Return home
      </Link>
      </main>
      <Footer />
    </div>
  );
}
