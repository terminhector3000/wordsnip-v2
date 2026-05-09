import { z } from "zod";

export const wordsnipSchema = z.object({
  source: z
    .string()
    .min(10, "Input must be at least 10 characters long")
    .max(15000, "You have reached the maximum text size"),
  target: z
    .string()
    .min(10, "Input must be at least 10 characters long")
    .max(15000, "You have reached the maximum text size"),
  honeypot: z.string(),
});

export type wordsnipFormData = z.infer<typeof wordsnipSchema>;
