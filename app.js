const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const newsPageRouter = require('./routes/news_page');
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');

const config = require('./config');

const app = express();

const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['sdfmg#4#@kefinmjwa424']
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// if (process.env.NODE_ENV != "development") {
//   app.use( (request, response) => {
//     if(!request.secure)
//       response.redirect("https://" + request.headers.host + request.url);
//   });
// }

app.use('/', indexRouter);
app.use('/news-page', newsPageRouter);
app.use('/admin', adminRouter);
app.use("/auth", authRouter);
app.get('/favicon.ico', (req, res) => res.status(204));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
