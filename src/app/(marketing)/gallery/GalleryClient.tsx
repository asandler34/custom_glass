"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

type Category = "all" | "showers";

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "showers", label: "Showers" },
];

/** Project photos in `/public/gallery` — same set as the homepage “Recent Work” portfolio. */
const items = [
  {
    id: "ecg-home-01",
    category: "showers" as const,
    src: "/gallery/IMG_9236.JPEG",
    alt: "Frameless glass shower with brushed gold hardware and marble-look tile, Portsmouth, NH",
  },
  {
    id: "ecg-home-02",
    category: "showers" as const,
    src: "/gallery/IMG_9237.JPEG",
    alt: "Frameless walk-in shower with backlit mirror and chrome fixtures, Andover, MA",
  },
  {
    id: "ecg-home-03",
    category: "showers" as const,
    src: "/gallery/IMG_9238.jpg",
    alt: "Frameless shower with matte black hardware, bench, and marble-look tile, Haverhill, MA",
  },
  {
    id: "ecg-home-04",
    category: "showers" as const,
    src: "/gallery/IMG_9239.JPEG",
    alt: "Frameless corner shower with subway tile and pebble-look floor, Boston, MA",
  },
  {
    id: "ecg-home-05",
    category: "showers" as const,
    src: "/gallery/IMG_9241.JPEG",
    alt: "Frameless shower with veined marble tile and black hardware, Hampton, NH",
  },
  {
    id: "ecg-home-06",
    category: "showers" as const,
    src: "/gallery/IMG_9242.JPEG",
    alt: "Accessible frameless walk-in shower with bench and grab bars, Marblehead, MA",
  },
  {
    id: "ecg-home-07",
    category: "showers" as const,
    src: "/gallery/IMG_9243.JPEG",
    alt: "Frameless shower with chrome hardware and marble-look wall tile, Lowell, MA",
  },
  {
    id: "ecg-home-08",
    category: "showers" as const,
    src: "/gallery/IMG_9244.JPEG",
    alt: "Frameless corner shower with pebble-look floor and full fixture set, Reading, MA",
  },
] as const;

export function GalleryClient() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = items.filter(
    (item) => filter === "all" || item.category === filter,
  );

  const activeItem = items.find((i) => i.id === lightbox);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    },
    [],
  );

  useEffect(() => {
    if (!lightbox) return;
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox, onKeyDown]);

  return (
    <>
      <nav
        className="flex flex-wrap gap-3 border-b border-gray-light pb-10"
        aria-label="Filter gallery by category"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`font-body text-xs font-medium uppercase tracking-widest transition-colors ${
              filter === f.id
                ? "border-b border-gold pb-1 text-gold"
                : "border-b border-transparent pb-1 text-gold/45 hover:text-gold"
            }`}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <ul
        className="mt-10 grid list-none grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-3"
        aria-label="Project photos"
      >
        {visible.map((item) => (
          <li key={item.id} className="relative aspect-[3/4] overflow-hidden">
            <button
              type="button"
              onClick={() => setLightbox(item.id)}
              className="group relative block h-full w-full cursor-zoom-in"
              aria-label={`Open image: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                quality={85}
                className="object-cover transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover:scale-[1.02]"
              />
            </button>
          </li>
        ))}
      </ul>

      {activeItem && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-deep/92 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-white-warm transition-opacity hover:opacity-80 md:right-8 md:top-8"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            <X className="h-8 w-8" strokeWidth={1.25} />
          </button>
          <div
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
              width={800}
              height={1024}
              quality={90}
              priority
              className="max-h-[min(85vh,920px)] w-auto max-w-full object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="font-body mt-4 text-center text-sm text-white-warm/85">
              {activeItem.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
