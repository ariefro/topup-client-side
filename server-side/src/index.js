import express from 'express';
import path from 'path';
import apis from './routes/apis';
import views from './routes/views';

require('./db');
require('dotenv').config();

const app = express();
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', views);
app.use('/api', apis);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  '/adminlte',
  express.static(path.join(__dirname, '../node_modules/admin-lte/')),
);

app.listen(process.env.APP_PORT, () => console.log(`Server running at ${process.env.APP_PORT}`));
