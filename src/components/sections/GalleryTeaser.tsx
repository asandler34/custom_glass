import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "https://images.unsplash.com/photo-1763485956293-873ea83bf095?auto=format&fit=crop&w=1600&h=1000&q=88",
    alt: "Frameless glass shower with tile surround",
    sizes: "(max-width: 767px) 100vw, 50vw",
    wrapper:
      "col-span-2 min-h-[13rem] md:col-span-4 md:row-span-2 md:min-h-0",
  },
  {
    src: "https://images.unsplash.com/photo-1629938828025-41bbeeb843fa?auto=format&fit=crop&w=900&h=1400&q=88",
    alt: "Bright bathroom interior with custom mirror and glass",
    sizes: "(max-width: 767px) 50vw, 25vw",
    wrapper:
      "min-h-[15rem] md:col-span-2 md:row-span-3 md:min-h-0",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&h=750&q=88",
    alt: "Modern staircase with glass railing",
    sizes: "(max-width: 767px) 50vw, 25vw",
    wrapper:
      "min-h-[12.5rem] md:col-span-2 md:row-span-1 md:min-h-0",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&h=800&q=88",
    alt: "Sunlit living space with large interior windows",
    sizes: "(max-width: 767px) 100vw, 35vw",
    wrapper:
      "col-span-2 min-h-[11rem] md:col-span-2 md:row-span-1 md:min-h-0",
  },
  {
    src: "https://images.unsplash.com/photo-1712214741533-3dd5b8013ca7?auto=format&fit=crop&w=1100&h=900&q=88",
    alt: "Minimal bath with reflective glass surfaces",
    sizes: "(max-width: 767px) 50vw, 30vw",
    wrapper:
      "min-h-[12rem] md:col-span-3 md:row-span-1 md:min-h-0",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&h=900&q=88",
    alt: "Open-plan interior with glass partitions",
    sizes: "(max-width: 767px) 50vw, 30vw",
    wrapper:
      "min-h-[12rem] md:col-span-3 md:row-span-1 md:min-h-0",
  },
] as const;

export function GalleryTeaser() {
  return (
    <section
      className="bg-white-pure py-24 md:py-28 lg:py-32"
      aria-labelledby="gallery-teaser-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="gallery-teaser-heading"
          className="font-display text-4xl font-light leading-tight tracking-wide text-charcoal md:text-5xl"
        >
          Our Work Speaks for Itself
        </h2>

        <div
          className="mt-10 grid grid-cols-2 gap-2 md:mt-12 md:h-[min(85vh,46rem)] md:grid-flow-dense md:grid-cols-6 md:grid-rows-4 md:gap-3 md:auto-rows-[minmax(0,1fr)]"
        >
          {images.map((item) => (
            <div
              key={item.src}
              className={`relative w-full overflow-hidden ${item.wrapper}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.sizes}
                className="object-cover transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/gallery"
            className="inline-flex border border-gold bg-transparent px-8 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors duration-200 hover:border-gold-light hover:text-gold-light"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
