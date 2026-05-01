import { Request, Response, NextFunction } from 'express';
import { createContactSchema, ContactForm } from '../schemas/contactValidator';
import { emailEngine } from '../services/emailService/handleEmail';

export const contactForm = (
  req: Request<{}, {}, ContactForm>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = createContactSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ error: 'Invalid Data' });
    }
    const { name, email, message, honeypot } = result.data;

    // //if there is a value for the "honeypot" hidden input field the data was probably created by a bot
    if (honeypot && honeypot.length > 0) {
      return res.status(400).json({ error: 'Spam detected' });
    }

    const processEmail = emailEngine();
    return res.status(200).json({ message: processEmail });
  } catch (err) {
    return next(err);
  }
};
