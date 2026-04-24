/** Canonical path segments (no leading slash) for sitemap, nav, and internal links. */
export const SERVICE_PATHS = [
  "frameless-shower-doors",
  "custom-glass-shower-enclosures",
  "glass-railings",
  "glass-partitions",
  "custom-mirrors",
  "glass-repair",
] as const;

export const LOCATION_PATHS = [
  "haverhill-ma",
  "portsmouth-nh",
  "rye-nh",
  "dover-nh",
  "newburyport-ma",
  "boston-ma",
  "north-shore-ma",
  "southern-nh",
] as const;

export type ServicePath = (typeof SERVICE_PATHS)[number];
export type LocationPath = (typeof LOCATION_PATHS)[number];

export function serviceHref(slug: ServicePath): string {
  return `/${slug}`;
}

export function locationHref(slug: LocationPath): string {
  return `/${slug}`;
}
