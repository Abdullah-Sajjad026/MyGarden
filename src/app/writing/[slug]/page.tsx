import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { writing as posts } from "#content";
import { Separator } from "@/components/ui/separator";
import { MDXContent } from "@/components/mdx/mdx-content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.filter((p) => !p.draft).map((p) => ({ slug: p.slug.replace(/^writing\//, "") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === `writing/${slug}`);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === `writing/${slug}`);
  if (!post || post.draft) notFound();

  /** Article JSON-LD for the post. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: "Abdullah Sajjad" },
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="spec-label">
        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      <Separator className="my-10" />
      <div className="prose-spec">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
