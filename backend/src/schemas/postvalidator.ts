import { z } from 'zod';

export const createPostSchema = z.object({
  source: z.string(),
  target: z.string(),
  honeypot: z.string().optional(),
});
