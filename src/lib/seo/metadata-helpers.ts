import type { Metadata } from "next";

export function withCanonical(path: string, m: Metadata): Metadata {
  const p = path.startsWith("/") ? path : `/${path}`;
  return { ...m, alternates: { ...m.alternates, canonical: p } };
}
