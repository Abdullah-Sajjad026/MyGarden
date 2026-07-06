import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "#content";
import { Badge } from "@/components/ui/badge";

/**
 * Case-study card — the signature element.
 * Inverts to solid ultramarine on hover: paper type on blue, poster-style.
 */
export function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={work.permalink}
      className="group block rounded-lg border bg-card p-6 transition-colors duration-200 hover:border-ultramarine hover:bg-ultramarine sm:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary-foreground/70">
          {work.company} · {work.role} · {work.year}
        </p>
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-foreground" />
      </div>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight group-hover:text-primary-foreground sm:text-3xl">
        {work.title}
      </h3>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">
        {work.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {work.stack.map((tech) => (
          <Badge
            key={tech}
            variant="mono"
            className="group-hover:border-primary-foreground/30 group-hover:text-primary-foreground/80"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
