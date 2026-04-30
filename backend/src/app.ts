import express from 'express';

import bodyParser from 'body-parser';
import wproutes from './routes/wproute';
import contactroute from './routes/contactroute';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/postws', wproutes);
app.use('/contact', contactroute);
export default app;
