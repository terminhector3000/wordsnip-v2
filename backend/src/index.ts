import express, { Request, Response } from 'express';
import { env } from './config/env';
import bodyParser from 'body-parser';
import wproutes from './routes/wproute';
import contactroute from './routes/contactroute';

const app = express();

const PORT = env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/postws', wproutes);
app.use('/contact', contactroute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
