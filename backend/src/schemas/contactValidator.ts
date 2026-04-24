import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

export const createContactSchema = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string().transform((str) =>
    sanitizeHtml(str, {
      allowedTags: [],
      allowedAttributes: {},
    })
  ),
  honeypot: z.string().optional(),
});

export type ContactForm = z.infer<typeof createContactSchema>;
