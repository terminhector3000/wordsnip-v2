import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { source, target } = req.body;
    console.log(source, target);
    res.send(`Success`);
  } catch (err) {
    next(err);
  }
});

export default router;
