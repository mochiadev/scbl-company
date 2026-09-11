import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    eyebrow: z.string(),
    sub_services: z.array(z.string()),
    hero_image: z.string(),
    tech_specs: z.array(z.string()).optional(),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    location: z.string(),
    year: z.number(),
    pillars: z.array(z.string()),
    specs: z
      .object({
        concrete_grade: z.string().optional(),
        breeam: z.string().optional(),
        gfa: z.string().optional(),
        mep_scope: z.string().optional(),
      })
      .default({}),
    hero_image: z.string(),
    gallery: z.array(z.string()).default([]),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    pillar: z.string(),
    published: z.coerce.date(),
    reading_time: z.number(),
    excerpt: z.string(),
  }),
});

export const collections = { services, portfolio, insights };
