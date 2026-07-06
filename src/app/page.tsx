import Link from "next/link";
import { work as works } from "#content";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/site/section";
import { WorkCard } from "@/components/site/work-card";
import { CopyEmail } from "@/components/site/copy-email";
import { experience } from "@/data/experience";
import { stack } from "@/data/stack";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = works
    .filter((w) => w.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 4);

  return (
    <>
      {/* Hero — positioning line, no greeting. */}
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:pb-24 sm:pt-28">
        <p className="spec-label">
          {site.name} · {site.location}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl">
          {site.positioning}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CopyEmail />
          <Button variant="outline" asChild>
            <Link href="/work">See the work</Link>
          </Button>
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl" />

      {/* Selected work — outcome-titled case studies. */}
      <Section label="selected work" title="Case studies">
        <div className="grid gap-5">
          {featured.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </Section>

      <Separator className="mx-auto max-w-5xl" />

      {/* Experience — ownership-framed timeline. */}
      <Section label="experience" title="Where I've built">
        <div className="grid gap-10">
          {experience.map((job) => (
            <div key={job.company} className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="font-mono text-[12px] leading-6 text-muted-foreground">{job.period}</p>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {job.role} · {job.company}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {job.summary}
                </p>
                <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span aria-hidden className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ultramarine" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Separator className="mx-auto max-w-5xl" />

      {/* Stack — grouped tools, no proficiency signals. */}
      <Section label="stack" title="Technologies">
        <div className="grid gap-8">
          {stack.map((group) => (
            <div key={group.label}>
              <p className="spec-label">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="mono">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
