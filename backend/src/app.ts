import express, { Request, Response, NextFunction } from 'express';
import { env } from './config/env';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { fileLogger } from './logger';
import { rateLimit } from 'express-rate-limit';
import wproutes from './routes/wproute';
import contactroute from './routes/contactroute';

const app = express();

app.use(helmet());

//uncomment in production
// app.use(
//   cors({
//     origin:
//       env.NODE_ENV === 'production'
//         ? env.CORS_ORIGIN.split(',')[0].trim()
//         : env.CORS_ORIGIN.split(',')[1].trim(),
//     credentials: true,
//   })
// );

//log date, method, url, status, content-length, response time
app.use(
  morgan(':date[web] :method :url :status :res[content-length] - :response-time ms', {
    stream: fileLogger('./src/logs/', 'access.log'),
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '200kb' }));

app.use('/postws', limiter, wproutes);
app.use('/contact', limiter, contactroute);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found', path: req.originalUrl });
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    error: 'Internal Server Error',
  });
});
export default app;
