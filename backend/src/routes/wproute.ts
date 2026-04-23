import express, { Request, Response, NextFunction } from 'express';
import { processWordSnip } from '../controllers/wp_post';

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  return processWordSnip(req, res, next);
});

export default router;
