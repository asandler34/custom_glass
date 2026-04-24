import type { Metadata } from "next";
import type { ServicePath } from "./urls";

export type SeoFaq = { q: string; a: string };

export type ServicePageData = {
  path: ServicePath;
  /** SEO + shared */
  metadata: Metadata;
  h1: string;
  intro: string;
  benefits: { title: string; body: string }[];
  useCases: string[];
  processSteps: { title: string; body: string }[];
  project: { title: string; body: string; imageSrc?: string; imageAlt?: string };
  faqs: SeoFaq[];
  serviceSchema: { name: string; description: string };
  /** Descriptive internal links (href + label) */
  relatedLinks: { href: string; label: string }[];
};

const coreAreas = "Haverhill, North Shore MA, Boston, and Seacoast NH (including Portsmouth, Rye, Dover)";

const relatedMix = (extra: { href: string; label: string }[]) => [
  { href: "/custom-glass-shower-enclosures", label: "custom glass shower enclosures" },
  { href: "/portsmouth-nh", label: "frameless shower doors in Portsmouth NH" },
  { href: "/boston-ma", label: "custom glass for Boston area remodels" },
  ...extra,
];

export const servicePages: Record<ServicePath, ServicePageData> = {
  "frameless-shower-doors": {
    path: "frameless-shower-doors",
    metadata: {
      title: "Frameless Shower Doors in MA & NH | Haverhill Installers",
      description:
        "Custom frameless shower doors measured and installed in Haverhill, North Shore MA, and southern NH. Free estimate. Clear, low-iron, and hardware matched to your bath.",
    },
    h1: "Frameless Shower Doors, Built to Your Opening",
    intro:
      "Frameless shower doors are a fit-and-finish product: the glass, hinges, and wall anchoring have to work together on day one and stay quiet and watertight for years. We template after your waterproofing and tile are where they need to be, confirm plumb, and only then order tempering—so you are not living with a door that “almost” closes. Homeowners, remodelers, and designers across Haverhill, the North Shore, and Seacoast New Hampshire work with us when the shower wall is a focal point, not an afterthought.",
    benefits: [
      {
        title: "Field-first measurements",
        body: "Angles, out-of-level curbs, and stud conditions drive hardware placement. We verify on site before any glass is ordered so hinge pockets and gaskets line up the first time.",
      },
      {
        title: "Hardware that matches your bath",
        body: "From matte black to brushed nickel, polished chrome, and brass tones, we coordinate with plumbing and lighting finishes so the enclosure does not look like a separate kit from your faucet suite.",
      },
      {
        title: "Clarity and thickness options",
        body: "Standard clear and low-iron options are available in typical 3/8″ and 1/2″ packages where the opening and deflection allow—balanced with code, span, and hardware requirements.",
      },
    ],
    useCases: [
      "Primary bathroom remodels where a single large panel and swing door replace an old sliding unit.",
      "Tight New England second-floor baths with careful carry paths and protection for finished floors and stairs.",
      "Homes in Portsmouth, Rye, and Dover on the Seacoast where finish durability matters in humid seasons.",
    ],
    processSteps: [
      {
        title: "On-site review",
        body: "We look at the curb, stud backing for hinges, and tile layout, then give you a clear scope: panels, door swing, and hardware families that fit the opening.",
      },
      {
        title: "Template and sign-off",
        body: "Digital or physical templating to capture slope and plumb, then a written check with you (or your GC) before the order is released for fabrication.",
      },
      {
        title: "Installation and water check",
        body: "Install day includes sealant detail at metal-to-glass and glass-to-tile, hardware torque to manufacturer spec, and a walkthrough on simple maintenance.",
      },
    ],
    project: {
      title: "Recent project style",
      body: "Many North Shore and Seacoast jobs pair a clear frameless door with a fixed return panel, minimal channel where possible, and a low-profile pull sized to the user—especially in family baths with kids and guests.",
      imageSrc: "/gallery/IMG_9236.JPEG",
      imageAlt: "Frameless glass shower with brushed gold hardware, Portsmouth NH project style",
    },
    faqs: [
      {
        q: "Do you install frameless shower doors in Haverhill and the North Shore?",
        a: "Yes. We are based in Haverhill and work throughout the North Shore, Merrimack Valley, Boston, and a defined radius in southern New Hampshire, including Portsmouth, Rye, and Dover for many projects.",
      },
      {
        q: "How long does a frameless install usually take on site?",
        a: "A straightforward single door and return often completes in a half day. Multi-panel, steam, or very large lites can take longer; we will spell out duration when we book your visit.",
      },
    ],
    serviceSchema: {
      name: "Frameless shower door supply and installation",
      description: `Custom frameless shower door measuring, fabrication, and installation for ${coreAreas}.`,
    },
    relatedLinks: relatedMix([{ href: "/glass-repair", label: "shower door repair and re-hang" }]),
  },

  "custom-glass-shower-enclosures": {
    path: "custom-glass-shower-enclosures",
    metadata: {
      title: "Custom Glass Shower Enclosures | MA & Seacoast NH",
      description:
        "Custom shower enclosures: neo-angle, walk-in, steam-ready, and multi-panel glass—measured in Haverhill and installed from Boston to Portsmouth NH. Request a quote.",
    },
    h1: "Custom Glass Shower Enclosures for Real Layouts",
    intro:
      "An enclosure is more than a door: it is the complete glass package—fixed returns, transoms, steam gaskets, and sometimes multiple doors—that keeps water inside while the room still feels open. We work with your tile heights, soffits, and knee walls so each panel is cut once and fits without improvising in your finished bath. Ideal for new builds, gut renovations, and contractor-led projects in Boston, the North Shore, and Newburyport, as well as coastal New Hampshire properties where we coordinate timing with other trades.",
    benefits: [
      {
        title: "Layouts that match the architecture",
        body: "Inline, L-shaped, and neo-angle plans each change where hardware loads go. We document that and choose hinges, u-channels, or clips that match the design intent, not a generic box kit.",
      },
      {
        title: "Steam and ventilation coordination",
        body: "When you want a steam-capable space, gasketing and transom or venting strategy need to line up. We map that during templating so you are not making compromises after the tile is in.",
      },
      {
        title: "Sequencing for GCs",
        body: "We align install windows with your painter, plumber, and electrician so protection and access stay predictable—useful in busy Boston and North Shore project schedules.",
      },
    ],
    useCases: [
      "Open walk-in showers with a single long fixed panel to separate splash without a heavy door line.",
      "Baths with a bench, pony wall, or window cutouts where every edge must be polished and seamed to detail.",
      "Multi-unit and designer-driven homes in Rye and Dover with tight punch-list expectations.",
    ],
    processSteps: [
      {
        title: "Scope and rough opening",
        body: "We review curb height, drain placement, and wall backing with your plans in hand, then mark anything that has to be adjusted before the finish coat.",
      },
      {
        title: "Field template",
        body: "We template with your tile in place, capture verticality, and note any guardrails for notching and hole placement in tempered glass.",
      },
      {
        title: "Install and handoff",
        body: "Panels are set plumb, sealed per manufacturer, and you receive simple care notes for the glass and hardware you selected.",
      },
    ],
    project: {
      title: "On-site look and feel",
      body: "Clear glass with a careful knee-wall transition is a common ask on the North Shore: the stone or tile still reads, and the water stays where you expect. For coastal NH homes, we often see matte black or brushed nickel to balance salt-air finishes elsewhere in the home.",
      imageSrc: "/gallery/IMG_9238.jpg",
      imageAlt: "Custom frameless shower with matte black hardware, Haverhill area installation style",
    },
    faqs: [
      {
        q: "Is a custom enclosure worth it over a prefabricated unit?",
        a: "If your walls are not perfectly square, your curb is not standard, or you want a true walk-in or steam layout, custom glass usually pays for itself in fit, sealing, and appearance. We will tell you honestly if a simpler option is appropriate.",
      },
    ],
    serviceSchema: {
      name: "Custom glass shower enclosure design and installation",
      description: `Full custom glass shower enclosure fabrication and install for ${coreAreas}.`,
    },
    relatedLinks: relatedMix([{ href: "/frameless-shower-doors", label: "frameless shower doors" }]),
  },

  "glass-railings": {
    path: "glass-railings",
    metadata: {
      title: "Glass Railings for Decks & Stairs | MA & NH",
      description:
        "Interior and exterior glass railings: decks, landings, and stairs. Code-minded layouts from Haverhill, serving Newburyport, Boston, and Seacoast NH. Consultation and estimate.",
    },
    h1: "Glass Railings for Decks, Stairs, and Landings",
    intro:
      "A glass railing is part structure, part line-of-sight. We care about post spacing, top-rail or structural glass options, and how the assembly meets local guard requirements for height and load—then we fabricate and install so the details read clean from both inside and on approach. We work with homeowners, builders, and property managers in Boston, the North Shore, and southern NH who want a contemporary guard without a heavy picket or cable field.",
    benefits: [
      {
        title: "Engineer-friendly drawings",
        body: "We produce shop-friendly layouts that your architect or local inspector can follow, with attachment notes tied to the substrate you actually have, not a generic detail.",
      },
      {
        title: "Exterior hardware choices",
        body: "Coastal and winter environments near Portsmouth and Rye get stainless or powder-coated post systems matched to the exposure, so maintenance stays realistic.",
      },
      {
        title: "Integration with door and window lines",
        body: "When a railing steps down from sliding door tracks or steps along a long deck run, we keep reveals even so the glass reads as one composition with your glazing package.",
      },
    ],
    useCases: [
      "Second-story walkouts in Andover, Methuen, and Lawrence with views over a yard or water.",
      "Commercial-adjacent multi-family or mixed-use in Lowell and Haverhill where the guard is both safety and a visual brand cue.",
    ],
    processSteps: [
      {
        title: "Field dimensions and code check",
        body: "We review height, opening limits, and post attachment points, then note deflection and handrail options before ordering.",
      },
      {
        title: "Glass specification",
        body: "Thicker monolithic, laminated, or combination packages are selected for span and local requirements based on the approved system.",
      },
      {
        title: "Install and sign-off",
        body: "We set posts or shoes plumb, torque clips, and leave you with a walkthrough on inspection-friendly tightening schedules where applicable.",
      },
    ],
    project: {
      title: "Railing in context",
      body: "Residential decks in southern NH and the North Shore often pair slim posts with a continuous top rail; interior stairs in Boston-area remodels may favor standoffs or a shoe system for a minimal floor line. We help you understand tradeoffs on cleaning and wobble, not just the first look.",
      imageSrc: "/gallery/ecg-railing-boston-balcony.jpg",
      imageAlt: "Exterior glass balcony railing with open views, regional project",
    },
    faqs: [
      {
        q: "Do you work with my architect’s railing detail?",
        a: "Yes. Bring your drawings early; we can align our shop drawings and hardware choices with the engineer of record and local amendments typical in MA and NH.",
      },
    ],
    serviceSchema: {
      name: "Glass railing supply and installation",
      description: `Interior and exterior glass guardrail and railing systems for ${coreAreas}.`,
    },
    relatedLinks: [
      { href: "/glass-partitions", label: "interior glass partitions for offices" },
      { href: "/rye-nh", label: "custom glass railings for coastal New Hampshire homes" },
      { href: "/boston-ma", label: "glass railings in the Boston area" },
    ],
  },

  "glass-partitions": {
    path: "glass-partitions",
    metadata: {
      title: "Glass Partitions & Office Walls | MA & NH",
      description:
        "Frameless and minimal-frame glass partitions for offices, lobbies, and residential spaces. Installed from Haverhill—Boston, Newburyport, and southern NH. Request a quote.",
    },
    h1: "Glass Partitions for Light and Privacy",
    intro:
      "Partitions divide a space without taking daylight with them. We install channel-mounted, patch-fitting, and sliding-glass options for home offices, professional suites, and retail in Boston, Haverhill, and across the river in NH where lease schedules and working hours are tight. Designers and small-business owners work with us when a frosted or clear wall needs to respect sight lines, ADA circulation, and existing ceiling conditions.",
    benefits: [
      {
        title: "Acoustics and privacy in balance",
        body: "We can coordinate laminated, frosted, and film options so you are not choosing between a fishbowl and a cave.",
      },
      {
        title: "Hardware that survives daily use",
        body: "Door sets and pulls are selected for real traffic, not a rendering—important in Woburn, Burlington, and Cambridge-area shared offices.",
      },
      {
        title: "Tie-in to your GC schedule",
        body: "We sequence after rough electrical and before final paint in many build-outs, with protection plans that protect finished floors in urban buildings.",
      },
    ],
    useCases: [
      "Law and accounting firms in Lowell and the Merrimack Valley with glass-fronted conference rooms.",
      "Home offices in Rye and Dover that need a hard boundary from a hallway without building a stud wall to the deck.",
    ],
    processSteps: [
      {
        title: "Field verification",
        body: "We record slab, ceiling, and mullion conditions, then mark door swings and any sidelite geometry.",
      },
      {
        title: "Detailing and order",
        body: "Head and jamb details are chosen for your building’s expansion expectations and the door hardware you prefer.",
      },
      {
        title: "Install and closeout",
        body: "We adjust sweeps, align leaves, and walk through latching with your team before you move furniture in.",
      },
    ],
    project: {
      title: "Practical example",
      body: "A small professional office in Haverhill might use a full-height clear wall with a soft-close sliding door, while a Boston lobby might use a low-iron wall with a minimal channel at the floor to keep sight lines across stone.",
      imageSrc: "/gallery/ecg-commercial-glass-installation.jpg",
      imageAlt: "Commercial glass installation and partition work, Haverhill region",
    },
    faqs: [
      {
        q: "Do you do residential glass room dividers?",
        a: "Yes. We template residential openings the same way as commercial—often coordinating with your trim carpenter for baseboard returns and ceiling soffits.",
      },
    ],
    serviceSchema: {
      name: "Interior glass wall and partition installation",
      description: `Frameless and minimal-frame glass partition walls and doors for ${coreAreas}.`,
    },
    relatedLinks: [
      { href: "/custom-mirrors", label: "custom mirrors for bath and living spaces" },
      { href: "/boston-ma", label: "glass installation for Boston properties" },
    ],
  },

  "custom-mirrors": {
    path: "custom-mirrors",
    metadata: {
      title: "Custom Mirrors for Bathrooms & Living Spaces | MA & NH",
      description:
        "Custom cut mirrors, vanity walls, and polished edges. Measured in Haverhill, installed in North Shore, Boston, Newburyport, and Seacoast NH. Free estimate.",
    },
    h1: "Custom Mirrors, Cut to the Room",
    intro:
      "A mirror is only as good as the wall behind it. We template wavy plaster, gapped outlets, and long vanity runs in Reading, Andover, and Marblehead-area baths, then install with the right mix of cleats and adhesive for your humidity level and stud spacing. That is what keeps a long mirror from flexing, fogging the edges prematurely, or pulling away. Interior designers and homeowners call us for precise rectangles, gentle radius corners, and long runs that have to line up with sconce centers.",
    benefits: [
      {
        title: "Accurate scribing to tile and stone",
        body: "We account for lippage and caulk lines so the mirror does not “float” visually away from the backsplash you invested in.",
      },
      {
        title: "Edge shop details",
        body: "Flat polish and bevel options are available so the mirror looks intentional next to your plumbing package.",
      },
      {
        title: "Safe handling on stairs",
        body: "Large lites in tight North Shore and Boston brownstone and triple-decker access paths are part of the plan, not a surprise on delivery day.",
      },
    ],
    useCases: [
      "Full-width vanity walls behind dual sinks in North Shore and Seacoast NH primary baths.",
      "Entry and dressing areas in Rye and Dover new builds with tall ceilings.",
    ],
    processSteps: [
      {
        title: "Field template or laser measure",
        body: "We record cutouts, outlets, and any medicine cabinet openings so fabrication matches reality.",
      },
      {
        title: "Fabrication and delivery",
        body: "Lead times vary with size and bevel; we will align with your tile and electrical trim-out.",
      },
      {
        title: "Mounting",
        body: "We use mechanical and adhesive systems appropriate to your wall type and the mirror weight.",
      },
    ],
    project: {
      title: "Bathroom focus",
      body: "A common Andover and Reading-area project is a single long low-iron mirror with gentle corners over quartz and under LED bars—measured after tile so every reflection line is straight.",
      imageSrc: "/gallery/portfolio-mirror.jpg",
      imageAlt: "Large custom bathroom mirror installation",
    },
    faqs: [
      {
        q: "Do you install after tile is finished?",
        a: "Usually yes, for the best fit. If your project requires a rare early order, we coordinate rough blocking and clearances with your contractor.",
      },
    ],
    serviceSchema: {
      name: "Custom mirror fabrication and wall installation",
      description: `Custom cut residential and commercial mirror installation in ${coreAreas}.`,
    },
    relatedLinks: [
      { href: "/blog/custom-mirrors-bathroom-renovations-guide", label: "custom mirrors for bathroom renovations" },
      { href: "/newburyport-ma", label: "mirror installation near Newburyport" },
    ],
  },

  "glass-repair": {
    path: "glass-repair",
    metadata: {
      title: "Shower Glass Repair & Rework | Haverhill MA & Southern NH",
      description:
        "Shower door adjustments, re-hang, hardware swaps, and targeted glass work—Haverhill-based team serving the North Shore, Boston, and NH Seacoast. Call or request a quote.",
    },
    h1: "Shower Glass Repair, Adjustment, and Targeted Rework",
    intro:
      "Not every call is a full replacement. Hinges can drift, sweeps harden, and a panel can be saved if the problem is hardware or a minor seal. We are honest about when a re-template is smarter than a band-aid—especially in older North Shore and Boston homes where the structure has moved slightly since the original install. Property managers, landlords, and homeowners in Portsmouth, Hampton, and Haverhill use this service to extend the life of a quality enclosure and stop slow drips at the curb.",
    benefits: [
      {
        title: "Diagnostics first",
        body: "We look for hinge set, sweep contact, and wall plate movement before we quote glass—so you are not buying a product you do not need.",
      },
      {
        title: "Hardware and seal refresh",
        body: "Swapping a hinge leg, pull, or sweep can solve binding doors that have opened thousands of times in busy family baths.",
      },
      {
        title: "When replacement is the answer",
        body: "If a lite is outside safe alteration or the opening no longer matches the glass, we will give you a clear path to a measured replacement instead of a temporary fix.",
      },
    ],
    useCases: [
      "Post-inspection home sales in Lowell and southern NH with minor seal issues noted.",
      "Rental and flip projects in the Merrimack Valley with tight budgets and firm timelines.",
    ],
    processSteps: [
      {
        title: "Short site visit",
        body: "We open and close the door, check sweep compression, and note any metal wear.",
      },
      {
        title: "Parts and schedule",
        body: "If we have to order, we will align delivery with a single return visit to avoid multiple trips in urban parking.",
      },
      {
        title: "Re-test and care notes",
        body: "We re-check sweep drag and hand you simple care tips for the hardware you have.",
      },
    ],
    project: {
      title: "What we often find",
      body: "A sagging frameless door near beaches and in humid Seacoast NH is sometimes as simple as hinge wear or a house that has taken a small seasonal shift. When the glass is sound, a hardware refresh restores daily use while you plan a full bath upgrade.",
    },
    faqs: [
      {
        q: "Do you replace broken tempered glass in shower doors?",
        a: "Tempered panels cannot be cut after manufacture; a damaged door usually requires a new lite measured to the opening. We can quote that replacement and remove the old panel safely.",
      },
    ],
    serviceSchema: {
      name: "Glass door repair, adjustment, and hardware service",
      description: `Shower glass service, adjustment, and minor repair in ${coreAreas}.`,
    },
    relatedLinks: [
      { href: "/frameless-shower-doors", label: "new frameless shower doors" },
      { href: "/haverhill-ma", label: "glass service in Haverhill" },
    ],
  },
};
