import type { Metadata } from "next";
import { work as works } from "#content";
import { WorkCard } from "@/components/site/work-card";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies — problem, approach, decisions, outcome.",
};

export default function WorkIndexPage() {
  const sorted = [...works].sort((a, b) => a.order - b.order);
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <p className="spec-label">work</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Case studies
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Written the way the work happened: the problem, the decisions and trade-offs, and how it
        turned out.
      </p>
      <div className="mt-10 grid gap-5">
        {sorted.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </div>
  );
}
