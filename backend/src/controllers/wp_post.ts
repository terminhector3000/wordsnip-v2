import { NextFunction, Request, Response } from 'express';
import { createPostSchema } from '../schemas/postvalidator';
import { wordSnipEngine } from '../services/wordsnipEngine';

export const processWordSnip = (req: Request, res: Response, next: NextFunction) => {
  try {
    //use zod validation schema to check the input data fields
    const result = createPostSchema.safeParse(req.body);

    //if the schema fails return a json object with an error message
    if (!result.success) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    //if the data passes the schema validation deconstruct the values from the validation result
    const { source, target, honeypot } = result.data;

    //if there is a value for the "honeypot" hidden input field the data was probably created by a bot
    if (honeypot && honeypot.length > 0) {
      return res.status(400).json({ error: 'Spam detected' });
    }

    //if the validation succeeeds and the honeypot input field is empty, to call the wordsnip engin
    const processedWordSnip = wordSnipEngine();
    return res.status(201).json(processedWordSnip);
  } catch (err) {
    return next(err);
  }
};
