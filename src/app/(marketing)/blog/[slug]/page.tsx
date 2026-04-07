import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";

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

  return {
    title: `${post.title} | Exquisite Custom Glass`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="flex flex-1 flex-col bg-white-warm">
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
      </article>
    </main>
  );
}
