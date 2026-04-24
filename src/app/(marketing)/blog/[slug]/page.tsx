import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { withCanonical } from "@/lib/seo/metadata-helpers";
import { JsonLdFAQPage, JsonLdBreadcrumb } from "@/components/seo/JsonLdBlocks";
import { QuoteStrip } from "@/components/conversion/QuoteStrip";

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Article Not Found | Exquisite Custom Glass" };
  }
  return withCanonical(`/blog/${post.slug}`, {
    title: `${post.title} | Exquisite Custom Glass`,
    description: post.excerpt,
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="flex flex-1 flex-col bg-white-warm">
      {post.faqs && post.faqs.length > 0 ? <JsonLdFAQPage faqs={post.faqs} /> : null}
      <JsonLdBreadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="mx-auto w-full max-w-3xl px-6 py-14 md:py-16">
        <Link
          href="/blog"
          className="font-body text-xs uppercase tracking-widest text-gold underline-offset-4 hover:underline"
        >
          ← Back to blog
        </Link>

        <p className="font-body mt-8 text-xs uppercase tracking-widest text-gold">
          {post.publishedAt} · {post.readMinutes} min read
        </p>
        <h1 className="font-display mt-4 text-4xl font-light tracking-wide text-charcoal md:text-5xl">
          {post.title}
        </h1>
        <p className="font-body mt-6 text-lg leading-relaxed text-charcoal/80">{post.excerpt}</p>

        <div className="mt-10 space-y-5">
          {post.content.map((paragraph, idx) => (
            <p key={`${post.slug}-p-${idx}`} className="font-body leading-relaxed text-charcoal/85">
              {paragraph}
            </p>
          ))}
        </div>

        {post.relatedLinks && post.relatedLinks.length > 0 ? (
          <div className="mt-10 border-t border-gray-light pt-8">
            <h2 className="font-body text-xs font-medium uppercase tracking-widest text-gold">Related on this site</h2>
            <ul className="mt-3 list-disc pl-5">
              {post.relatedLinks.map((l) => (
                <li key={l.href} className="font-body text-charcoal/90">
                  <Link href={l.href} className="text-gold underline-offset-2 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {post.faqs && post.faqs.length > 0 ? (
          <section className="mt-10 border-t border-gray-light pt-8" id="faqs" aria-label="FAQs">
            <h2 className="font-display text-2xl font-light text-charcoal">FAQ</h2>
            <dl className="mt-4 space-y-4">
              {post.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-body font-semibold text-charcoal">{f.q}</dt>
                  <dd className="font-body mt-1 text-charcoal/85">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <div className="mt-12">
          <QuoteStrip
            kicker="Estimate"
            title="Ready for a field-measured quote? Add your zip and a short project note."
            compact
          />
        </div>
      </article>
    </main>
  );
}
