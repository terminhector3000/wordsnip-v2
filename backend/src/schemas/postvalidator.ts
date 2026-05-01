import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

export const createPostSchema = z.object({
  source: z
    .string()
    .min(10, 'Input must be at least 10 characters long')
    .transform((str) =>
      sanitizeHtml(str, {
        allowedTags: [],
        allowedAttributes: {},
      })
    ),
  target: z
    .string()
    .min(10, 'Input must be at least 10 characters long')
    .transform((str) =>
      sanitizeHtml(str, {
        allowedTags: [],
        allowedAttributes: {},
      })
    ),
  honeypot: z.string().optional(),
});

export type PostSchema = z.infer<typeof createPostSchema>;
