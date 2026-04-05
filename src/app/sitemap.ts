import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const paths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
