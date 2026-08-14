import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const issues = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/issues" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    issueNumber: z.number(),
    pubDate: z.date(),
    author: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { issues };
