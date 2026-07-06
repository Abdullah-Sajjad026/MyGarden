# CLAUDE.md — abdullahsajjad.me (portfolio v2)

Personal portfolio for Abdullah Sajjad, targeting senior/founding remote engineering roles with US teams. The site's job: convince a recruiter in ~11 seconds that Abdullah ships production systems end to end, then back it with deep case studies.

## Stack

- **Next.js 16, App Router**, TypeScript strict, `src/` dir, `@/*` alias
- **Tailwind v4** (CSS-first config — tokens live in `src/app/globals.css` under `@theme`, there is **no** `tailwind.config.ts`)
- **shadcn/ui** — configured via `components.json`. Add primitives with `npx shadcn@latest add <component>`; they land in `src/components/ui/` and pick up theme tokens automatically. Do not install component libraries from npm.
- **Velite** — typed MDX content layer. Runs automatically alongside `next dev`/`next build` via the hook in `next.config.ts`.
- **Motion** (`motion` package) installed for micro-interactions; barely used so far — keep it that way.
- **Fonts self-hosted via Fontsource**, imported in `src/app/layout.tsx`. Do NOT switch to `next/font/google`.

## Commands

```bash
npm run dev      # Velite watches content/ alongside next dev
npm run build    # frontmatter validation failures fail the build — this is intended
npm run lint
```

Definition of done for any task: `npm run build` and `npm run lint` pass, pages work at 375px width, `prefers-reduced-motion` is respected.

## Architecture map

```
content/
  work/*.mdx          # case studies (typed frontmatter, validated by Velite)
  writing/*.mdx       # blog posts (draft: true hides a post)
src/
  app/                # routes: / , /work , /work/[slug] , /writing , /writing/[slug] , /uses , /about
    globals.css       # THE design system — all tokens, prose styles, spec-label class
  components/
    ui/               # shadcn primitives (Button, Badge, Card, Separator)
    site/             # Nav, Footer, CopyEmail, Section, WorkCard
    mdx/              # MDXContent renderer for Velite-compiled bodies
  data/
    site.ts           # identity single source of truth: name, positioning, email, socials, nav
    experience.ts     # timeline entries
    gallery.ts        # photo manifest for /about (grid hides while empty)
velite.config.ts      # content schemas — the contract for all frontmatter
```

## Gotchas (read before touching content or imports)

- Velite exports are named **`work`** and **`writing`** (singular), imported via the `#content` tsconfig alias and aliased at import sites: `import { work as works } from "#content"`.
- `slug` in Velite is the file path (`work/blyndspot-dashboard`); route params strip the prefix. Follow the existing pattern in `src/app/work/[slug]/page.tsx`.
- `.velite/` is generated and gitignored — never edit it.
- `next.config.ts` contains the Velite build hook at module top level. Don't "clean it up."

## Design system — non-negotiable rules

Identity: **"Spec sheet"** — paper `#F7F7F4`, ink `#17181C`, one accent **ultramarine `#2727E6`**, metadata gray. Dark mode is supported via a `.dark` class on `<html>` (next-themes, `defaultTheme="system"`). Dark is a **variable-only** override: the `.dark` block in `globals.css` reassigns the CSS variables and nothing else — components must not gain `dark:` variants. `--ultramarine` stays the **fill** accent in both themes (WorkCard invert, primary buttons, bullet dots), but text-level accent utilities use `--accent-text` (`#2727E6` in light, `#7B7BFF` in dark, since `#2727E6` fails contrast as text on dark).

- **Never hardcode colors.** Use semantic Tailwind classes (`bg-background`, `text-muted-foreground`, `text-ultramarine`) backed by the CSS variables in `globals.css`.
- Type roles: Bricolage Grotesque = display headings (`font-display`), Instrument Sans = body (default), IBM Plex Mono = metadata/labels only (`font-mono`, usually via the `.spec-label` class).
- **Signature element:** WorkCard's invert-to-ultramarine hover. It is the ONE bold moment — do not add competing hover spectacles, gradients, glows, or decorative animation elsewhere.
- Motion rules: < 300ms, `ease-out`, animate `transform`/`opacity` only, never animate keyboard-initiated actions, always respect `prefers-reduced-motion` (a global media query already exists in `globals.css`).
- Long-form MDX renders through the `.prose-spec` class — extend it there, not with per-page overrides.

## Copy & voice rules

- Plain, understated, first person. Banned words: "passionate", "innovative", "synergy", "hard-working".
- Case-study titles are outcomes, not project names ("Typed, schema-validated AI outputs across ~20 Bedrock flows").
- American spelling.
- Framing: "frontend-heavy, AI-powered full-stack engineer". Copy for case studies comes from Abdullah's source documents — do not invent metrics, numbers, or claims that aren't in them.

## Working style

- Bullet a short plan before multi-file changes: what, why, expected diff surface.
- Match existing patterns exactly (route pages, data files, component structure) before inventing new ones.
- New reusable primitives → `npx shadcn add`, then theme via tokens. New site-specific components → `src/components/site/`.
- Server Components by default; add `"use client"` only for interactivity (see `copy-email.tsx`).
- No new dependencies without stating why in the plan.
- Do not create placeholder/empty sections — an empty section reads worse than none (gallery grid pattern: hide until data exists).