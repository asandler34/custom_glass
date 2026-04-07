import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Exquisite Custom Glass",
  description:
    "Insights on custom shower glass, frameless doors, pricing, and installation across Haverhill, North Shore MA, and Seacoast NH.",
};

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col bg-white-warm">
      <section className="border-b border-gray-light bg-white-pure">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            Blog
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-light tracking-wide text-charcoal md:text-5xl">
            Glass Insights for Better Projects
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            Practical guides from our team on shower doors, custom glass decisions, and what to
            expect during measurement and installation.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border border-gray-light bg-white-pure p-8">
              <div className="font-body text-xs uppercase tracking-widest text-gold">
                {post.publishedAt} · {post.readMinutes} min read
              </div>
              <h2 className="font-display mt-4 text-2xl text-charcoal">{post.title}</h2>
              <p className="font-body mt-4 leading-relaxed text-charcoal/80">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={`${post.slug}-${tag}`}
                    className="font-body border border-charcoal/15 px-3 py-1 text-xs text-charcoal/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-body text-sm font-medium uppercase tracking-widest text-gold underline-offset-4 hover:underline"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
