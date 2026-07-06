import { ViewTransition } from "react";
import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Providers } from "@/app/providers";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.positioning,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.positioning,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

/** Person JSON-LD — E-E-A-T / knowledge-panel eligibility. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  sameAs: Object.values(site.socials),
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Amazon Bedrock"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-svh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <Nav />
          <main className="flex-1">
            <ViewTransition default="page-fade">{children}</ViewTransition>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
