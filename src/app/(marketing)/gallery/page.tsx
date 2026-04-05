import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Exquisite Custom Glass Showers",
  description:
    "Project gallery: custom showers, glass railings, and commercial glass installations across Massachusetts and New Hampshire.",
};

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col bg-white-pure">
      <section className="border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            Gallery
          </p>
          <h1 className="font-display mt-4 text-4xl font-light tracking-wide text-charcoal md:text-5xl">
            Our Work Speaks for Itself
          </h1>
          <p className="font-body mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            Real installations: frameless showers, glass railings, commercial partitions, and
            architectural glass across Massachusetts and New Hampshire.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-6 py-14 md:py-16">
        <GalleryClient />
      </section>
    </main>
  );
}
