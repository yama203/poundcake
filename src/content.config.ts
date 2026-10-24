import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/events" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      time: z.string(),
      dj: z.string(),
      place: z.string(),
      placelink: z.url(),
      partylink: z.url(),
      flyer: image(),
      // アニメーションのフライヤー（WebP）は再変換せずそのまま配信する
      animated: z.boolean().default(false),
      // SNS で共有されたときのサムネイル。アニメーションのフライヤーには静止画を指定する
      still: image().optional(),
    }),
});

export const collections = { events };
