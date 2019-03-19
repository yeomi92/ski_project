const express = require('express');
const router = express.Router();
const posts = require('../post.json');
const comments = require('../comment.json');

router.get('/list', function (req, res, next) {
  console.log("========post리스트===========");
    // let start = (parseInt(req.params.page, 10)-1)*10;
    // let end = start+10
    // console.log(start +'/'+ end)
    // let arr = board.list;
    // let result = { "list": arr.slice(start, end)}
    // result.total = board.list.length 
    // res.send(result);
    res.send(posts)
});

router.get('/detail/:id', function (req, res, next) {
  //let id = parseInt(req.params.id, 10);
  let id = req.params.id
  console.log("========게시글=========== id:"+ id);
  let content = posts.filter(x=>x.id === id);
  let comment = comments.filter(x=>x.post_id === id)
  let result = new Object()
  result.post = content;
  result.comment = comment;
  res.send(result)
});

module.exports = router;