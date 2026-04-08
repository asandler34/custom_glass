/**
 * Canonical site origin for metadata, sitemap, and JSON-LD.
 * Production: set `NEXT_PUBLIC_SITE_URL` to the live URL (Vercel → Environment Variables).
 * Contact API: `RESEND_API_KEY`, optional `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` (see `src/app/api/contact/route.ts`).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://www.exquisitecustomglass.com";
}
