export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "frameless-vs-framed-shower-doors",
    title: "Frameless vs Framed Shower Doors: What Homeowners Should Know",
    excerpt:
      "A practical breakdown of cost, maintenance, and design tradeoffs so you can choose the right shower door for your bathroom.",
    publishedAt: "2026-04-01",
    readMinutes: 6,
    tags: ["Shower Doors", "Frameless Glass", "Buying Guide"],
    content: [
      "Choosing between framed and frameless shower doors usually comes down to three factors: look, upkeep, and budget. Framed systems can lower upfront cost, while frameless options give cleaner lines and a more open feel in most bathrooms.",
      "Frameless doors use thicker tempered glass and minimal hardware, which typically means fewer places for soap residue to build up. If your goal is a premium, low-clutter finish, frameless is often the better long-term fit.",
      "Framed doors can still be a good choice in certain remodels, especially where the opening or budget is tight. The best route is to measure the opening first and compare scope options before selecting hardware and glass thickness.",
      "If you are in Haverhill, North Shore MA, or nearby Seacoast NH towns, a site visit usually makes the choice clear quickly because wall conditions and opening geometry drive most of the decision.",
    ],
  },
  {
    slug: "how-shower-glass-pricing-works-massachusetts",
    title: "How Shower Glass Pricing Works in Massachusetts",
    excerpt:
      "Understand what affects custom shower glass pricing, from panel size and glass type to hardware and installation conditions.",
    publishedAt: "2026-04-03",
    readMinutes: 5,
    tags: ["Pricing", "Custom Glass", "Massachusetts"],
    content: [
      "Most custom shower glass quotes are based on opening size, panel layout, and hardware selection. Larger panels, specialty cutouts, and premium finishes all influence final pricing.",
      "Glass specification matters as well. Clear tempered glass is common, while low-iron glass can increase material cost in exchange for a brighter, cleaner appearance.",
      "Installation conditions can also affect labor. Out-of-plumb walls, complex curb transitions, and access constraints usually require additional setup time to ensure proper fit and sealing.",
      "For homeowners in Haverhill, Andover, North Andover, Methuen, Lawrence, Salem NH, and Plaistow NH, the best way to budget is a field-measured estimate with itemized options.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
