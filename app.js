var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var index = require('./routes/index');
var users = require('./routes/users');
var vote = require('./routes/vote');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(sessions({
    secret: '&*^23456%%^$#$765%&^^$&^VHYkjlNNVtd',
    resave: false,
    saveUninitialized: false
}))

app.get('/login', function (req, res) {
  session = req.session;
  if (session.uniqueId) {
    res.redirect('/confirm')
  }
  res.redirect('/confirm')
})

app.post('/login', function (req, res) {
  session = req.session;
  if (session.uniqueId) {
    res.redirect('/confirm')
  }
  if(req.body.username == 'admin' && req.body.password == 'admin'){
      session.uniqueId = req.body.username;
  }
  res.redirect('/confirm');
})

app.get('/logout', function (req, res) {
  req.session.destroy((err) => {
    res.redirect('/')
  })
})

app.get('/confirm', function (req, res) {
  session = req.session;
  if(session.uniqueId){
    res.redirect('/admin')
  } else {
    res.send(`who are you??<a href='/'>Go AwaY!!</a>`)
  }
})

app.use('/', index);
app.use('/votes', vote);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
