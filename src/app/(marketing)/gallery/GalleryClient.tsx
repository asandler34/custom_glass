"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

type Category = "all" | "showers" | "railings" | "mirrors";

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "showers", label: "Showers" },
  { id: "railings", label: "Railings" },
  { id: "mirrors", label: "Mirrors" },
];

const items = [
  {
    id: "a1",
    category: "showers" as const,
    src: "https://images.unsplash.com/photo-1763485956293-873ea83bf095?auto=format&fit=crop&w=1200&q=85",
    alt: "Frameless glass shower enclosure",
  },
  {
    id: "a2",
    category: "showers" as const,
    src: "https://images.unsplash.com/photo-1721743138130-e8ce6e1a7dce?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern bathroom with glass shower partition",
  },
  {
    id: "a3",
    category: "showers" as const,
    src: "https://images.unsplash.com/photo-1722650272509-4e86176d6a6e?auto=format&fit=crop&w=1200&q=85",
    alt: "Walk-in shower with clear glass",
  },
  {
    id: "b1",
    category: "railings" as const,
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior staircase with glass railing",
  },
  {
    id: "b2",
    category: "railings" as const,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85",
    alt: "Open living space with glass guardrail",
  },
  {
    id: "b3",
    category: "railings" as const,
    src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary stair with glass panels",
  },
  {
    id: "c1",
    category: "mirrors" as const,
    src: "https://images.unsplash.com/photo-1629938828025-41bbeeb843fa?auto=format&fit=crop&w=1200&q=85",
    alt: "Bathroom vanity with large mirror",
  },
  {
    id: "c2",
    category: "mirrors" as const,
    src: "https://images.unsplash.com/photo-1712214741533-3dd5b8013ca7?auto=format&fit=crop&w=1200&q=85",
    alt: "Minimal bath with wall mirror",
  },
  {
    id: "c3",
    category: "mirrors" as const,
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    alt: "Round mirror above washstand",
  },
  {
    id: "a4",
    category: "showers" as const,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
    alt: "Spa-like shower with glass door",
  },
  {
    id: "b4",
    category: "railings" as const,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    alt: "Residential interior with glass railing detail",
  },
  {
    id: "c4",
    category: "mirrors" as const,
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior with decorative mirror detail",
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
        className="mt-10 grid list-none grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4"
        aria-label="Project photos"
      >
        {visible.map((item) => (
          <li key={item.id} className="relative aspect-square overflow-hidden">
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
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full md:aspect-video">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="font-body mt-4 text-center text-sm text-white-warm/85">
              {activeItem.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
