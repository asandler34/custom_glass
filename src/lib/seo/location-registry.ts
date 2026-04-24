import type { Metadata } from "next";
import type { LocationPath } from "./urls";
import type { SeoFaq } from "./service-registry";

export type LocationPageData = {
  path: LocationPath;
  metadata: Metadata;
  placeName: string;
  h1: string;
  intro: string;
  servicesCopy: string;
  neighborhoodCopy: string;
  localNotes: string[];
  faqs: SeoFaq[];
  relatedServices: { href: string; label: string }[];
};

export const locationPages: Record<LocationPath, LocationPageData> = {
  "haverhill-ma": {
    path: "haverhill-ma",
    placeName: "Haverhill, MA",
    metadata: {
      title: "Custom Glass Company in Haverhill MA | Exquisite Custom Glass",
      description:
        "Custom frameless showers, railings, mirrors, and glass repair from our Haverhill shop. Local measurement, fabrication, and install. Call (978) 815-8354 or request a quote.",
    },
    h1: "Custom Glass Company in Haverhill, MA",
    intro:
      "Haverhill is home base: our team measures, fabricates, and installs from 690 S. Main St., serving homeowners, contractors, and designers who want a single accountable glass partner. From downtown rehab lofts to Merrimack Valley family homes, we have worked in most conditions New England throws at a bath or deck. If you are planning a full gut or a single shower refresh, you get the same field discipline we bring to the rest of the region.",
    servicesCopy:
      "In Haverhill we routinely deliver frameless shower doors and full enclosures, interior glass for home offices, vanity mirrors, and exterior railing packages coordinated with your GC. Repair visits are available when hardware drifts or a door needs a professional re-hang before listing or inspection.",
    neighborhoodCopy:
      "Short drives to Bradford, Plaistow, and the Route 97 corridor make same-week looks realistic for many projects. We know how parking, stairs, and winter weather affect a carry path, and we plan protection accordingly.",
    localNotes: [
      "Merrimack River-area remodels and older capes with walls that have moved over decades.",
      "Contractor-led new construction and spec homes in surrounding towns where sequencing matters.",
    ],
    faqs: [
      {
        q: "Do you only serve Haverhill or a wider area?",
        a: "We are headquartered in Haverhill and work in a 36-mile radius that includes the North Shore, Boston, and southern New Hampshire, including Portsmouth, Rye, and Dover. Share your project address to confirm coverage.",
      },
    ],
    relatedServices: [
      { href: "/frameless-shower-doors", label: "frameless shower doors" },
      { href: "/southern-nh", label: "southern NH service area" },
    ],
  },
  "portsmouth-nh": {
    path: "portsmouth-nh",
    placeName: "Portsmouth, NH",
    metadata: {
      title: "Custom Glass in Portsmouth NH | Showers, Railings & Mirrors",
      description:
        "Portsmouth Seacoast: frameless shower doors, railings, and mirrors. Haverhill-based team; local estimates and project photos. (978) 815-8354.",
    },
    h1: "Custom Glass Company in Portsmouth, NH",
    intro:
      "Portsmouth’s mix of historic homes, new coastal builds, and rental stock means every glass project has a different access story. We work with you or your builder to choose hardware that survives salt air and to schedule around occupancy. Whether you are updating a South End bath or a North End deck, the goal is a quiet door swing and railings that do not block your best views.",
    servicesCopy:
      "We install custom shower enclosures, door-only upgrades, and exterior railings for decks and stairs. Vanity mirrors in remodels are measured after tile for straight sight lines. Office partitions are available for central downtown and Route 1 commercial tenants.",
    neighborhoodCopy:
      "We coordinate with clients in Newington, Kittery-adjacent work, and the broader Seacoast; if your project sits near a state line, we align with the applicable code for that structure.",
    localNotes: [
      "Humidity and salt exposure drive hardware and stainless choices.",
      "Tighter parking and entry stairs common in older multifamily—planned carries and floor protection.",
    ],
    faqs: [
      {
        q: "Do you service Portsmouth from Haverhill regularly?",
        a: "Yes, within our published radius. Travel is normal for us: scope and fabrication time drive the schedule more than a moderate distance on I-95 or Route 4.",
      },
    ],
    relatedServices: [
      { href: "/frameless-shower-doors", label: "frameless shower doors in Portsmouth NH" },
      { href: "/glass-railings", label: "glass railings for coastal homes" },
      { href: "/rye-nh", label: "glass in Rye NH" },
    ],
  },
  "rye-nh": {
    path: "rye-nh",
    placeName: "Rye, NH",
    metadata: {
      title: "Custom Glass in Rye NH | Exquisite Custom Glass",
      description:
        "Rye, NH: custom frameless showers, deck railings, and mirrors. Coastal remodels and new builds. Haverhill-based team. Free estimate—call or request online.",
    },
    h1: "Custom Glass Company in Rye, NH",
    intro:
      "Rye is where a deck view and a long vanity run often sell the home. We treat glass as part of that asset: edges, hardware, and deflection that stay quiet in wind and humidity. Homeowners and builders from Route 1A to inland neighborhoods use us when the shower wall or railing should read as intentional architecture, not an add-on from a big-box aisle.",
    servicesCopy:
      "Frameless shower glass with clear or low-iron options, exterior guards with post or base-shoe details, and large-format mirrors in primary baths. We can stage mirror work after a shower if your renovation is phased.",
    neighborhoodCopy:
      "We often coordinate the same week with trades working north–south along 1A and with Portsmouth-area crews when your project has multiple Seacoast touchpoints.",
    localNotes: [
      "Setbacks and views where railing loads and handrail options need early decisions.",
    ],
    faqs: [
      {
        q: "Do you work with interior designers on Rye second homes?",
        a: "Yes. Share finish schedules; we will align hardware and glass tone with the wider bath or exterior package and give lead times in writing.",
      },
    ],
    relatedServices: [
      { href: "/glass-railings", label: "custom glass railings" },
      { href: "/portsmouth-nh", label: "glass in Portsmouth NH" },
    ],
  },
  "dover-nh": {
    path: "dover-nh",
    placeName: "Dover, NH",
    metadata: {
      title: "Custom Glass in Dover NH | Exquisite Custom Glass",
      description:
        "Dover, NH: frameless showers, mirrors, partitions, and repair. Haverhill-based. Serving the Garrison City and nearby Rochester and Somersworth. Get a quote.",
    },
    h1: "Custom Glass Company in Dover, NH",
    intro:
      "Dover’s housing stock spans capes, splits, and new subdivisions—so shower openings and stair guards rarely match a catalog. We template on site, then fabricate to what is real, not what the drawing assumed. That matters for Garrison City remodels, downtown commercial refreshes, and family homes with busy calendars who need a firm install day.",
    servicesCopy:
      "Our Dover customers order frameless shower doors and full enclosures, long vanity mirrors, interior glass for home offices, and occasional exterior railings on walkout additions. We also handle re-hangs and hardware correction when a door has simply worn in place.",
    neighborhoodCopy:
      "Easy access to the Spaulding and regional GC routes makes it simple to line up with contractors working Dover plus neighboring towns. We are straightforward about what can be seamed, what should be a single lite, and when a wall needs repair first.",
    localNotes: [
      "Rental and flip timelines where completion dates drive permit and listing schedules.",
    ],
    faqs: [
      {
        q: "How far in advance should I call for a spring remodel?",
        a: "Call as soon as you have tile selections. Spring backs up region-wide; early templating locks your place in the fabrication queue.",
      },
    ],
    relatedServices: [
      { href: "/custom-glass-shower-enclosures", label: "custom glass shower enclosures" },
      { href: "/southern-nh", label: "southern New Hampshire service overview" },
    ],
  },
  "newburyport-ma": {
    path: "newburyport-ma",
    placeName: "Newburyport, MA",
    metadata: {
      title: "Custom Glass in Newburyport MA | Exquisite Custom Glass",
      description:
        "Newburyport and Plum Island area: custom shower glass, railings, and mirrors. North Shore service from a Haverhill team. (978) 815-8354.",
    },
    h1: "Custom Glass Company in Newburyport, MA",
    intro:
      "Newburyport’s high expectations for fit and finish match how we work: field checks before ordering, and installs that respect older floors and millwork. From downtown Federal-era constraints to newer builds on the edge of town, we bring the same process—especially when a shower opens to a tile investment you do not want to see compromised by a warped or leaking door line.",
    servicesCopy:
      "We install frameless and semi-frameless shower packages, deck and stair railings with clear sight lines, and custom mirrors in coastal-light-filled baths. Small commercial storefront or office updates are welcome when the scope is glass-forward.",
    neighborhoodCopy:
      "Short drives from Salisbury, Amesbury, and the Route 1 corridor make us a practical option when your designer or builder is already on a local rotation. We understand seasonal traffic on island and water-adjacent jobs.",
    localNotes: [
      "Historic jamb and trim that require careful hinge placement.",
      "Homes with tight parking that need advance staging notes.",
    ],
    faqs: [
      {
        q: "Do you work on Plum Island and water-adjacent properties?",
        a: "Yes, within our radius. We will note access and environment in the scope so hardware and glass choices match real exposure, not a generic spec.",
      },
    ],
    relatedServices: [
      { href: "/custom-mirrors", label: "custom mirrors for bathroom remodels" },
      { href: "/north-shore-ma", label: "North Shore MA service overview" },
    ],
  },
  "boston-ma": {
    path: "boston-ma",
    placeName: "Boston, MA",
    metadata: {
      title: "Custom Glass in Boston MA | Exquisite Custom Glass",
      description:
        "Boston metro custom glass: showers, mirrors, partitions, and railings. Haverhill-based team serving homeowners and trade partners within our service area. Request a quote.",
    },
    h1: "Custom Glass Company in Boston, MA",
    intro:
      "Boston work often means parking, elevator bookings, and residents at home. We are used to tight logistics: show up in the window you were given, protect hallways, and close out without drama. Condominium and brownstone bath remodels, infill new construction, and small professional offices in the urban ring are all in scope when your site sits within our travel radius from Haverhill—confirm your address and we will be candid about fit.",
    servicesCopy:
      "Urban projects lean on custom shower glass, back-painted or standard mirrors, glass office fronts, and occasional balcony guards where a GC has structural sign-off. We prefer early coordination on shaft walls and ceiling conditions so the glass order is not the last surprise before certificate of occupancy.",
    neighborhoodCopy:
      "We serve Boston and inner suburbs within the published radius, alongside dedicated North Shore and Seacoast work. If you are on the border of coverage, a quick call with the address ends the question.",
    localNotes: [
      "Condo board or management notifications when common-area protection is part of the job.",
    ],
    faqs: [
      {
        q: "Is downtown Boston always in range?",
        a: "Many Boston neighborhoods fall within a 36-mile radius of Haverhill. Send your full address; we will confirm and suggest schedule options that match building access rules.",
      },
    ],
    relatedServices: [
      { href: "/glass-partitions", label: "glass partitions for Boston offices" },
      { href: "/frameless-shower-doors", label: "frameless shower doors" },
    ],
  },
  "north-shore-ma": {
    path: "north-shore-ma",
    placeName: "North Shore, MA",
    metadata: {
      title: "Custom Glass on Boston’s North Shore | Exquisite Custom Glass",
      description:
        "North Shore MA: custom shower doors, railings, mirrors, and glass repair. Local team based in Haverhill. Andover, Beverly, Newburyport, and surrounding towns.",
    },
    h1: "Custom Glass on the North Shore, Massachusetts",
    intro:
      "The North Shore is our everyday territory: we drive it for template appointments, installs, and service calls. From marble-heavy primary baths in Andover to tighter coastal capes, the theme is the same—glass that respects the room’s proportions and the way your family actually uses the space. Builders who already run crews here return because scheduling and follow-through stay predictable.",
    servicesCopy:
      "We support whole-home and single-room work: new frameless showers, door swaps on an existing pan, long vanity mirrors, deck railings, and targeted repair. Interior designers in the 019xx and 018xx codes use us when they need a shop that can read field notes, not a catalog SKU.",
    neighborhoodCopy:
      "If your town is between Haverhill and the coast, you are almost certainly in the radius. We frequently connect adjacent projects in neighboring towns the same week to keep routes efficient and timelines honest.",
    localNotes: [
      "Older homes with non-square openings—template-first workflow.",
    ],
    faqs: [
      {
        q: "Which North Shore towns do you mean?",
        a: "Common examples in our work include Andover, North Andover, Newburyport, Beverly, and surrounding communities within the radius. Share your address for a definitive answer.",
      },
    ],
    relatedServices: [
      { href: "/newburyport-ma", label: "glass in Newburyport" },
      { href: "/haverhill-ma", label: "Haverhill home base" },
    ],
  },
  "southern-nh": {
    path: "southern-nh",
    placeName: "Southern New Hampshire",
    metadata: {
      title: "Custom Glass in Southern NH | Exquisite Custom Glass",
      description:
        "Southern NH: frameless showers, railings, mirrors, and repair. Haverhill-based. Portsmouth, Rye, Dover, Nashua, Salem, and more within our 36-mile radius.",
    },
    h1: "Custom Glass in Southern New Hampshire",
    intro:
      "Southern New Hampshire is a second home for our calendar: we cross the state line for shower packages, deck railings, and mirrors the same way we do in Massachusetts, with the same lead-time expectations and the same on-site care. If you are in Salem, Nashua, Hudson, the Seacoast, or a town along the 93 corridor, we are likely a fit; border towns always come down to measured miles from Haverhill, which we can confirm in one call.",
    servicesCopy:
      "NH homeowners and contractors bring us full bathroom glass packages, exterior guards for new second-story walkouts, and service calls for loose shower doors. We speak both sides of a remodel schedule—rough-in through punch list—so the glass is not the trade that slips.",
    neighborhoodCopy:
      "Many projects connect Seacoast weekend homes with workweek schedules; we are explicit about the install window and what has to be finished before we template (especially waterproofing and tile).",
    localNotes: [
      "Towns with a mix of salt exposure and winter freeze that inform hardware and seal choices.",
    ],
    faqs: [
      {
        q: "Do you have different pricing in NH than MA?",
        a: "Pricing follows scope and lead time, not a state line. The estimate reflects glass, hardware, and labor for your address and opening.",
      },
    ],
    relatedServices: [
      { href: "/portsmouth-nh", label: "glass in Portsmouth NH" },
      { href: "/dover-nh", label: "glass in Dover NH" },
      { href: "/frameless-shower-doors", label: "frameless shower doors" },
    ],
  },
};
