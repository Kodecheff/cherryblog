var createError = require('http-errors');
const express = require('express');
const path = require('path');
require('./db/mongoose')

const app = express();

const port = process.env.PORT || 4000

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


/* ------------ Routers ----------------- */
const indexRouter = require('./routes/index');
const generalHealthRouter = require('./routes/general_health')
const lifestyleRouter = require('./routes/lifestyle')
const foodRouter = require('./routes/food');
const fitnessRouter = require('./routes/fitness');
const adminRouter = require('./routes/admin')


/* --------------- view engine setup ------------- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/generalhealth', generalHealthRouter)
app.use('/lifestyle', lifestyleRouter)
app.use('/food', foodRouter);
app.use('/fitness', fitnessRouter);
app.use(adminRouter)

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// module.exports = app;