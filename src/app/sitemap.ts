import { getSiteUrl } from "@/lib/site";
import { blogPosts } from "@/lib/blog";
import { LOCATION_PATHS, SERVICE_PATHS } from "@/lib/seo/urls";
import type { MetadataRoute } from "next";

const marketingPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.75, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.95, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/locations", priority: 0.88, changeFrequency: "monthly" },
  ...SERVICE_PATHS.map((p) => ({ path: `/${p}`, priority: 0.9, changeFrequency: "monthly" as const })),
  ...LOCATION_PATHS.map((p) => ({ path: `/${p}`, priority: 0.85, changeFrequency: "monthly" as const })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const home = {
    url: `${base}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const coreUrls = marketingPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [home, ...coreUrls, ...blogUrls];
}
