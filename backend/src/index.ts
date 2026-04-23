import express, { Request, Response } from 'express';
import { env } from './config/env';
import bodyParser from 'body-parser';
import wproutes from './routes/wproute';

const app = express();

const PORT = env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/postwp', wproutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
