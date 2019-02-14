var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //express 라우터로 접근하면 public/index.html을 전달하게 설정
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

module.exports = router;
