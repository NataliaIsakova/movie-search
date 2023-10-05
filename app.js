require('dotenv').config();
require('@babel/register');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const { sequelize } = require('./db/models');
const { DBConnectionCheck } = require('./src/middleware/common');
const FileStore = require('session-file-store')(session);
const indexRouter = require('./routes/indexRouter');
const regRouter = require('./routes/regRouter');
const logRouter = require('./routes/logRouter');
const logoutRouter = require('./routes/logoutRouter');
const profileRouter = require('./routes/userRouter');


const { PORT } = process.env;

const sessionConfig = {
  name: 'Movie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(DBConnectionCheck);
app.use(session(sessionConfig));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/regist', regRouter);
app.use('/login', logRouter);
app.use('/logout', logoutRouter);
app.use('/profile', profileRouter);


app.listen(PORT, () => {
  console.log('Server started!', PORT);
});
