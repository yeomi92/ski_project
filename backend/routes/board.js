const express = require('express');
const router = express.Router();
const board = require('../board.json');

router.get('/:page', function (req, res, next) {
  console.log("========게시판리스트===========");
    let start = (parseInt(req.params.page, 10)-1)*10;
    let end = start+10
    console.log(start +'/'+ end)
    let arr = board.list;
    let result = { "list": arr.slice(start, end)}
    result.total = board.list.length 
    res.send(result);
});

router.get('/detail/:id', function (req, res, next) {
  let id = parseInt(req.params.id, 10);
  console.log("========게시글=========== id:"+ id);
  let content = board.list.filter(x=>x.id === id);
  console.dir(content);
  res.send(content)
});

module.exports = router;