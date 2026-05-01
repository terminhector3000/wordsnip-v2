import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { createPostSchema, PostSchema } from '../schemas/postvalidator';
import { wordSnipEngine } from '../services/engine/wordsnipEngine';

export const processWordSnip = (
  req: Request<{}, {}, PostSchema>,
  res: Response,
  next: NextFunction
) => {
  try {
    //use zod validation schema to check the input data fields
    const result = createPostSchema.safeParse(req.body);

    //if the schema fails return a json object with an error message
    if (!result.success) {
      const tree = z.treeifyError(result.error);
      if (tree.properties?.source) {
        return res.status(400).json({ error: { source: tree.properties?.source?.errors } });
      }
      if (tree.properties?.target) {
        return res.status(400).json({ error: { target: tree.properties?.target?.errors } });
      }
      return res.status(400).json({ error: 'Invalid Data' });
    }

    //if the data passes the schema validation deconstruct the values from the validation result
    const { honeypot, source, target } = result.data;

    //if there is a value for the "honeypot" hidden input field the data was probably created by a bot
    if (honeypot && honeypot.length > 0) {
      return res.status(400).json({ error: 'Invalid Submission' });
    }

    if (source === '' || target === '') {
      return res.status(400).json({ error: 'Invalid Data' });
    }

    //if the validation succeeeds and the honeypot input field is empty, to call the wordsnip engin
    const processedWordSnip = wordSnipEngine(result.data);
    return res.status(200).json(processedWordSnip);
  } catch (err) {
    return next(err);
  }
};
