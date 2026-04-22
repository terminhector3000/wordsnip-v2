import express from 'express';
import { env } from './config/env';
import bodyParser from 'body-parser';

const app = express();

const PORT = env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.send('Hello Express');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
