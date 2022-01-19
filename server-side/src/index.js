import express from 'express';
import apis from './routes/apis';

require('../db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', apis);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.listen(process.env.APP_PORT, () => console.log(`Server running at ${process.env.APP_PORT}`));
