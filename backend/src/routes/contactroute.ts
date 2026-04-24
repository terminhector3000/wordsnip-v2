import express, { Request, Response, NextFunction } from 'express';
import { contactForm } from '../controllers/contactPost';

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  return contactForm(req, res, next);
});

export default router;
