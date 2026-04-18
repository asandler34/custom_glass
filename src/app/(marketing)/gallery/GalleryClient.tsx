"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

type Category = "all" | "commercial" | "showers" | "railings";

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial" },
  { id: "showers", label: "Showers" },
  { id: "railings", label: "Railings" },
];

/**
 * Project photos in `/public/gallery` (mostly client installs).
 * `ecg-residential-shower-corner-install.jpg` — Unsplash, Unsplash License (photo-1600566753190); alt town is representative, not a verified job site.
 */
const items = [
  {
    id: "ecg-9109",
    category: "commercial" as const,
    src: "/gallery/ecg-commercial-glass-office.jpg",
    alt: "Commercial glass partition wall and doors with black framing in Winchester, MA",
  },
  {
    id: "ecg-9110",
    category: "commercial" as const,
    src: "/gallery/ecg-commercial-glass-installation.jpg",
    alt: "Glass partition installation with brick interior and drop ceiling in Haverhill, MA",
  },
  {
    id: "ecg-9108",
    category: "railings" as const,
    src: "/gallery/ecg-railing-boston-balcony.jpg",
    alt: "Exterior glass balcony railing with city views in Salem, MA",
  },
  {
    id: "ecg-9105",
    category: "railings" as const,
    src: "/gallery/ecg-railing-residential-dusk.jpg",
    alt: "Glass railing on a modern balcony at dusk in Portsmouth, NH",
  },
  {
    id: "ecg-9104",
    category: "railings" as const,
    src: "/gallery/ecg-railing-residential-exterior.jpg",
    alt: "Two-story home with glass balcony railing and large glass doors in Rye Beach, NH",
  },
  {
    id: "ecg-9097",
    category: "showers" as const,
    src: "/gallery/ecg-shower-frameless-vaulted.jpg",
    alt: "Custom frameless shower enclosure with vaulted ceiling and marble tile in Lexington, MA",
  },
  {
    id: "ecg-9111",
    category: "showers" as const,
    src: "/gallery/ecg-residential-marble-glass-shower.jpg",
    alt: "Walk-in frameless shower with marble-look tile, black hardware, and built-in bench in Marblehead, MA",
  },
  {
    id: "ecg-9112",
    category: "showers" as const,
    src: "/gallery/ecg-residential-shower-corner-install.jpg",
    alt: "Modern bathroom with clear glass shower enclosure, neutral tile, and warm wood vanity in Reading, MA",
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
