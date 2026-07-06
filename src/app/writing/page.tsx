import type { Metadata } from "next";
import Link from "next/link";
import { writing as posts } from "#content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on building production web products.",
};

export default function WritingIndexPage() {
  const published = posts
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="spec-label">writing</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Writing</h1>
      {published.length === 0 ? (
        <p className="mt-6 text-muted-foreground">First post coming soon.</p>
      ) : (
        <ul className="mt-10 divide-y">
          {published.map((post) => (
            <li key={post.slug}>
              <Link href={post.permalink} className="group flex flex-col gap-1 py-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </span>
                <span className="font-display text-xl font-semibold tracking-tight group-hover:text-accent-text">
                  {post.title}
                </span>
                <span className="text-[15px] text-muted-foreground">{post.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
