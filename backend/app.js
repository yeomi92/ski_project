require('dotenv').config();
var createError = require('http-errors');
var express = require('express');

//db추가
var mongoose = require('mongoose')
var bodyParser= require('body-parser')

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var io = require('socket.io')

//vue에 데이터를 전달할 테스트 라우터
var boardRouter = require('./routes/board');
var authRouter = require('./routes/auth');
var snsRouter = require('./routes/sns');

var app = express();

//db추가
var port=process.env.PORT || 4500
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
.then(()=>console.log('Successfully connected to mongodb'))
.catch(e=>console.log(e));
//app.listen(port, ()=>console.log(`Server listening on port ${port}`))

//vue router와 express연동을 위한 모듈 등록
app.use(require('connect-history-api-fallback')());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/board', boardRouter)
app.use('/api/sns', snsRouter)
app.use('/api/auth', authRouter)

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
