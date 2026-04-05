/** Canonical site origin for metadata, sitemap, and JSON-LD. Set in `.env.local`: NEXT_PUBLIC_SITE_URL=https://yoursite.com */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://www.exquisitecustomglass.com";
}
