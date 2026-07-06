import Link from "next/link";
import { nav } from "@/data/site";
import { Wordmark } from "@/components/site/brand";
import { ThemeToggle } from "@/components/site/theme-toggle";

/** Top navigation — wordmark left, mono links right. */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="text-foreground transition-opacity hover:opacity-70">
          <Wordmark className="h-4.5 w-auto" />
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent-text"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
