import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDatetime: z.date().or(z.string()).transform((val) => new Date(val)),
    description: z.string(),
    author: z.string().default("Derek Mayor"),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
