import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am and how I work.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="spec-label">about</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">About</h1>
      <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:gap-10">
        <figure className="shrink-0 sm:w-50">
          <Image
            src="/abdullah.jpg"
            alt={site.name}
            width={200}
            height={200}
            priority
            className="w-40 rounded-md border border-border object-cover sm:w-50"
          />
          <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
            {site.name} · {site.location.split(" (")[0]}
          </figcaption>
        </figure>
        <div className="prose-spec">
          <p>
          I&apos;m {site.name}, a frontend-heavy, AI-powered full-stack engineer based in{" "}
          {site.location.split(" (")[0]}. I&apos;m the founding engineer at Lyssin — building
          Blyndspot, MyVoyce, and Ansir with the CEO and CTO — and lead frontend engineer at Archer
          Affiliates.
        </p>
        <p>
          The work I like most is the kind where the foundation decides everything: shared systems
          that keep a product from fragmenting as it grows — typed contracts, one source of truth,
          conventions the whole codebase follows.
        </p>
          {/* TODO(Abdullah): 1–2 human lines — what you're reading, playing, exploring. */}
        </div>
      </div>

      {gallery.length > 0 && (
        <section className="mt-16">
          <p className="spec-label">off screen</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.src}>
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={480}
                  height={480}
                  className="aspect-square rounded-md border object-cover"
                />
                <figcaption className="mt-1.5 font-mono text-[11px] text-muted-foreground">
                  {item.caption} · {item.date}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
