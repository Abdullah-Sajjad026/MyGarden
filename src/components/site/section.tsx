import { cn } from "@/lib/utils";

/** Home-page section wrapper with the mono spec-label eyebrow. */
export function Section({
  label,
  title,
  children,
  className,
}: {
  label: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-5xl px-5 py-16 sm:py-20", className)}>
      <p className="spec-label">{label}</p>
      {title && (
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}
