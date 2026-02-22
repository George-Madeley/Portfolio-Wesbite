import { z } from "zod";

const companySchema = z.object({
  name: z.string(),
  abbr: z.string().optional(),
  href: z.string(),
});

const repoSchema = z.object({
  name: z.string(),
  href: z.string(),
});

export const contentSchema = z.object({
  id: z.string(),
  startTime: z.number(),
  endTime: z.union([z.number(), z.literal("present")]),
  timePeriod: z.string(),
  type: z.enum(["work", "education", "hobby"]),
  position: z.string(),
  company: companySchema,
  repos: z.array(repoSchema).optional(),
  languages: z.array(z.string()).optional(),
  markdown: z.string(),
});

export type Content = z.infer<typeof contentSchema>;
