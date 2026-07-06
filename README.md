# abdullahsajjad.me — v2

Next.js (App Router) · Tailwind v4 · shadcn/ui · Velite (typed MDX) · self-hosted fonts (Fontsource).

## Run

```bash
npm install
npm run dev      # Velite watches content/ alongside next dev
npm run build    # content is validated at build time — bad frontmatter fails the build
```

## Updating content (the 2-minute jobs)

| What | Where | How |
|---|---|---|
| Add a case study | `content/work/*.mdx` | Drop a file; frontmatter is validated (title, summary, company, role, year, stack, featured, order) |
| Add a blog post | `content/writing/*.mdx` | Same — `draft: true` hides it |
| New job / promotion | `src/data/experience.ts` | Edit one array entry |
| Name, email, socials, positioning line | `src/data/site.ts` | Single source of truth — every page reads it |
| Gallery photo | `/public/gallery` + `src/data/gallery.ts` | Drop image, add one manifest line (grid on /about hides while empty) |
| Uses page | `src/app/uses/page.tsx` | Edit the `sections` array — items marked ⚑ need your real details |

## Adding UI components

shadcn/ui is configured (`components.json`). Pull anything you need:

```bash
npx shadcn@latest add dialog tooltip dropdown-menu
```

Components land in `src/components/ui/` themed by the tokens in `src/app/globals.css`.

## Design tokens

Everything derives from `src/app/globals.css`:
Paper `#F7F7F4` · Ink `#17181C` · Ultramarine `#2727E6` accent · Bricolage Grotesque (display) · Instrument Sans (body) · IBM Plex Mono (spec labels).

## Deploy

Push to GitHub → import on Vercel. No env vars required.

