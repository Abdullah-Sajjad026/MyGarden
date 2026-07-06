import { defineConfig, defineCollection, s } from "velite";

/**
 * Content layer. Frontmatter is validated with Zod-style schemas —
 * a case study with a missing field fails the build with a typed error.
 */
const work = defineCollection({
  name: "Work",
  pattern: "work/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120), // outcome-focused headline
      summary: s.string().max(300), // one-liner for cards
      company: s.string(),
      role: s.string(),
      year: s.string(),
      stack: s.array(s.string()),
      featured: s.boolean().default(false),
      order: s.number().default(99),
      slug: s.path(), // derived from file path, e.g. "work/blyndspot-dashboard"
      body: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
});

const writing = defineCollection({
  name: "Post",
  pattern: "writing/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      summary: s.string().max(300),
      date: s.isodate(),
      draft: s.boolean().default(false),
      slug: s.path(),
      body: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { work, writing },
  mdx: { rehypePlugins: [], remarkPlugins: [] },
});
