import { site } from "@/data/site";
import { CopyEmail } from "@/components/site/copy-email";
import { Monogram } from "@/components/site/brand";

/** Footer — contact CTA, socials, signature line. */
export function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="spec-label">contact</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Building something? Let&apos;s talk.
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CopyEmail />
          <div className="flex gap-5">
            {Object.entries(site.socials).map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground hover:text-accent-text"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-14 flex items-center gap-3">
          <Monogram className="h-6 w-6 shrink-0 text-foreground" />
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} {site.name} · Built with Next.js, shadcn/ui, and Velite ·
            Set in Bricolage Grotesque &amp; Instrument Sans
          </p>
        </div>
      </div>
    </footer>
  );
}
