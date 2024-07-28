require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
  app.emit('Ready');
}).catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middlewares');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const sessionOptions = session({
  secret: 'LOUCOESONHADORLOUCOESONHADOR',
  store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  }
});

app.use(sessionOptions);
app.use(flash());
//app.use(middlewareGlobal)

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware);

app.use(routes);
app.on('Ready', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});

