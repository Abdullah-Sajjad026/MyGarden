import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { work as works } from "#content";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MDXContent } from "@/components/mdx/mdx-content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return works.map((w) => ({ slug: w.slug.replace(/^work\//, "") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === `work/${slug}`);
  if (!work) return {};
  return { title: work.title, description: work.summary };
}

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === `work/${slug}`);
  if (!work) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="spec-label">
        {work.company} · {work.role} · {work.year}
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
        {work.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{work.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {work.stack.map((tech) => (
          <Badge key={tech} variant="mono">
            {tech}
          </Badge>
        ))}
      </div>
      <Separator className="my-10" />
      <div className="prose-spec">
        <MDXContent code={work.body} />
      </div>
    </article>
  );
}
