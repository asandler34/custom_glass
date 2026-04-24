export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  tags: string[];
  content: string[];
  faqs?: { q: string; a: string }[];
  relatedLinks?: { href: string; label: string }[];
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
      "Choosing between framed and frameless shower doors usually comes down to three factors: look, upkeep, and budget. Framed systems can lower upfront material cost, while frameless options give cleaner lines and a more open feel in most bathrooms.",
      "Frameless doors use thicker tempered glass and minimal hardware, which often means fewer places for soap residue to accumulate along metal channels. If your goal is a premium, low-clutter finish, frameless is usually the better long-term fit—but only when the walls and curb can support the hardware layout.",
      "Framed doors can still be appropriate when the opening is narrow, budgets are fixed, or you need a faster path to close out a rental. The decision should follow a field check, not a brochure photo.",
      "Across Haverhill, the North Shore, Portsmouth NH, and Boston-area remodels (within service radius), we typically recommend reading our cost guide for NH and MA, then booking a template once tile locations are firm.",
    ],
    faqs: [
      {
        q: "Is frameless always more expensive?",
        a: "Often yes on materials (thicker glass and premium hardware), but not always on total project cost once you factor in fit issues on framed kits in difficult openings.",
      },
    ],
    relatedLinks: [
      { href: "/frameless-shower-doors", label: "frameless shower doors" },
      { href: "/blog/cost-of-frameless-shower-doors-nh-ma", label: "cost of frameless shower doors in NH and MA" },
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
      "Glass specification matters as well. Clear tempered glass is common, while low-iron glass can increase material cost in exchange for a brighter appearance with less green cast at the edge.",
      "Installation conditions can also affect labor. Out-of-plumb walls, complex curb transitions, and access constraints require more time to set plumb and seal predictably.",
      "For homeowners in Haverhill, Andover, North Andover, Methuen, Lawrence, Salem NH, and Plaistow NH, the most reliable budget is a field-measured estimate with itemized options—not a phone guess from opening width alone.",
    ],
    relatedLinks: [
      { href: "/blog/cost-of-frameless-shower-doors-nh-ma", label: "regional cost ranges for NH and MA" },
      { href: "/custom-glass-shower-enclosures", label: "custom glass shower enclosures" },
    ],
  },
  {
    slug: "cost-of-frameless-shower-doors-nh-ma",
    title: "Cost of Frameless Shower Doors in New Hampshire and Massachusetts",
    excerpt:
      "What actually moves the number: glass thickness, hardware line, panel count, and site conditions—plus how to compare quotes apples to apples.",
    publishedAt: "2026-04-10",
    readMinutes: 7,
    tags: ["Pricing", "Frameless", "NH", "MA"],
    content: [
      "When people ask what frameless shower doors “should” cost in Nashua, Portsmouth, Haverhill, or the North Shore, the honest answer is: it depends on the opening and the glass package. Two bathrooms with the same rough width can land on different quotes if one needs a heavier glass package for span, a different hinge family for wall structure, or more site time for an out-of-plumb surround.",
      "Material drivers usually include monolithic tempered size, low-iron versus clear, and hardware finish. Labor drivers include floor protection, carry path, corner conditions, and whether we are working around a live home with kids, pets, and tight parking—common in Boston-adjacent towns and Seacoast NH summer weeks.",
      "To compare quotes, look for the same panel count, glass thickness, hardware model line, and sealant scope. If one quote omits field verification, you are not comparing the same risk profile.",
      "For a range you can plan around before a site visit, pair this article with our contact form: add your zip (NH or MA), a photo of the opening, and whether tile is finished. We will tell you if you are in range for a standard single-door package or if the site looks like a multi-panel custom run from the start.",
    ],
    faqs: [
      {
        q: "Do NH and MA projects price the same?",
        a: "Scope and glass drive price more than the state line. Travel inside our service radius is normal; your town and parking access matter more than which side of the border you are on.",
      },
    ],
    relatedLinks: [
      { href: "/portsmouth-nh", label: "custom glass in Portsmouth NH" },
      { href: "/haverhill-ma", label: "glass install in Haverhill MA" },
      { href: "/frameless-shower-doors", label: "frameless shower doors service page" },
    ],
  },
  {
    slug: "glass-railing-cost-guide-ma-nh",
    title: "Glass Railing Cost Guide: What Moves the Number in MA & NH",
    excerpt:
      "From interior stairs to exterior guards: posts, glass type, spans, and code coordination—and how to avoid a low bid that ignores structure.",
    publishedAt: "2026-04-12",
    readMinutes: 6,
    tags: ["Railings", "Pricing", "Code"],
    content: [
      "Glass railings are priced on the same axis as other structural guards: height, load path, span, and attachment. A short interior run with frequent posts is a different job than a long exterior deck with fewer posts and higher wind exposure—common in Seacoast NH and North Shore coastal homes.",
      "Glass itself may be monolithic tempered, layered, or engineered per your detail set. Hardware may be base-shoe, standoff, or post systems, each with different shop time and adjustment needs.",
      "The expensive mistakes are usually upstream: changing the guard line after steel or wood is set, or selecting a profile that cannot be adjusted for the as-built deck. We prefer to see anchor intent before the finish floor and fascia are complete when possible.",
      "If you are pricing a Rye or Portsmouth property with salt air, plan maintenance into the finish selection—the right powder coat or stainless class saves callbacks. Link the design to our glass railings service page and we can align shop drawings with your architect early.",
    ],
    faqs: [
      {
        q: "Can you match an existing builder package?",
        a: "Often yes if the system is still available and code-appropriate. Bring photos and any model names; we will confirm what can be matched versus what must be revised for current guard rules.",
      },
    ],
    relatedLinks: [
      { href: "/glass-railings", label: "glass railings for decks and stairs" },
      { href: "/rye-nh", label: "glass work in Rye NH" },
    ],
  },
  {
    slug: "best-glass-options-bathroom-remodels",
    title: "Best Glass Options for Bathroom Remodels (Shower + Mirror)",
    excerpt:
      "Clear versus low-iron, thickness choices, texture, and mirror placement—without upselling you into glass you do not need.",
    publishedAt: "2026-04-14",
    readMinutes: 6,
    tags: ["Bathroom", "Design", "Glass"],
    content: [
      "The “best” glass is the one that matches your lighting, tile, and cleaning habits. Low-iron shower glass can look stunning against white marble because it reduces green edge color, but standard clear is still right for many warm-toned baths and budget-focused projects in Newburyport, Andover, and Dover NH.",
      "Thickness follows span and door width—your fabricator should choose a package that meets deflection and safety expectations, not a one-size default.",
      "For mirrors, think in terms of sight lines: a full-width run needs flat walls and well-timed template after tile. A smaller framed mirror is sometimes smarter when outlets or medicine cabinets complicate a single large lite.",
      "If you are coordinating a primary bath in Boston or on the North Shore, pair shower scope with a mirror plan on the same visit when possible; it keeps reveal lines consistent at the vanity.",
    ],
    faqs: [
      {
        q: "Is low-iron worth it?",
        a: "It can be, especially with cool-toned stone and strong edge lighting. If you want to see the difference, ask to view samples against your tile in natural and LED light before you order.",
      },
    ],
    relatedLinks: [
      { href: "/custom-mirrors", label: "custom mirrors" },
      { href: "/boston-ma", label: "bathroom glass in the Boston area" },
    ],
  },
  {
    slug: "custom-mirrors-bathroom-renovations-guide",
    title: "Custom Mirrors for Bathroom Renovations: Sizing, Edges, and Install",
    excerpt:
      "When to template, how to handle outlets and sconces, and what edge details actually change the look of the room.",
    publishedAt: "2026-04-16",
    readMinutes: 5,
    tags: ["Mirrors", "Bath", "Renovation"],
    content: [
      "A custom mirror is often the last visible surface in a bath—after tile, paint, and lighting. That means the template has to read the real wall, not the CAD rectangle. In Reading, Beverly, and Hampton-area renovations, we often see older plaster that is slightly proud at the corners; a careful field template fixes that before we cut glass.",
      "Edge work matters: a flat polished edge is clean and modern; a bevel can dress a traditional room. Sizing should respect sconce centers and any floating shelf lines so the room feels built, not pieced in.",
      "Installation uses correct anchors and adhesives for your substrate. That is a safety and longevity issue, not a place to take shortcuts in humid showers.",
      "For designers specifying long runs, ask about seaming if a single lite is not practical; we can plan discreet joints where sight lines are forgiving.",
    ],
    relatedLinks: [
      { href: "/newburyport-ma", label: "mirrors and glass near Newburyport" },
      { href: "/custom-mirrors", label: "custom mirrors service page" },
    ],
  },
  {
    slug: "how-custom-glass-installation-works",
    title: "How the Custom Glass Installation Process Works, Step by Step",
    excerpt:
      "From first call to punch list: what we measure, when we order glass, and what has to be finished before we return with panels.",
    publishedAt: "2026-04-18",
    readMinutes: 6,
    tags: ["Process", "Installation"],
    content: [
      "Custom glass is a single-threaded process: measure wrong once, and everything downstream is expensive. That is why we separate an initial walkthrough (scope and constraints) from the field template (capture after the surfaces that matter are true). In contractor-led work around Lowell, Lawrence, and Seacoast NH, we will align the template with your lock schedule so tile crews are not waiting on guesses.",
      "After template sign-off, glass goes to fabrication and tempering. That period is the wrong time to change tile heights, move niches, or swap curb profiles—those changes often force a re-template.",
      "Install day is protection, lift, plumb, set, seal, and hardware torque to manufacturer spec. We want you to use the door or open the office partition the same day where practical, with realistic cure times for any sealant used in your environment.",
      "If you are planning multiple openings—say a shower, a deck rail, and a mirror in one home—tell us up front. We can sometimes combine trips and line up deliveries so you are not managing three different vendor calendars.",
    ],
    faqs: [
      {
        q: "How soon can you install after tile?",
        a: "Once tile and the curb are at finished dimensions, we can template; fabrication lead times vary by season and complexity, which we will quote in writing when we measure.",
      },
    ],
    relatedLinks: [
      { href: "/locations", label: "MA and NH service areas" },
      { href: "/contact", label: "request a quote" },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
