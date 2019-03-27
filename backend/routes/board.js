const express = require('express');
const router = express.Router();
const board = require('../board.json');
const Board = require('../models/board')
const User = require('../models/user')

router.get('/:page', function (req, res, next) {
  console.log("========게시판리스트===========");
    // let start = (parseInt(req.params.page, 10)-1)*10;
    // let end = start+10
    // console.log(start +'/'+ end)
    // let arr = board.list;
    // let result = { "list": arr.slice(start, end)}
    // result.total = board.list.length 
    // res.send(result);
    Board.find({})
    .populate('author')
    .exec(function(err, board) {
      if(err) return res.status(500).json({err: err});
      res.json({list: board})
    })
});

router.get('/detail/:id', function (req, res, next) {
  let id = req.params.id;
  console.log("========게시글=========== id:"+ id);
  Board.find({_id: id})
  .populate('author')
  .exec(function(err, board) {
    if(err) return res.status(500).json({err: err})
    res.json({item: board})
  })

});

router.post('/write', function (req, res, next) {
  console.log('========게시글 작성===========');
  console.log(req.body);
  let authorId = req.body.author;
  let userId = '';
  const board = new Board()
  User.findOne({
    id: authorId,
  }, function(err, user){
    if(err) return res.status(500).json({err: err});
    if(!user) return res.json({success: false});
    userId = user._id;
    board.title = req.body.title;
    board.author = userId;
    board.content = req.body.content;
    board.save(function(err){
      if(err){
        console.err(err);
        res.json({result: 0});
        return;
      }
      res.json({result: 1})
    });
  })
  
})

router.put('/update/:id', function (req, res, next) {
  console.log('========게시글 업데이트===========');
  console.log(req.params.id)
  console.log(req.body)
  console.log(typeof req.body.views)
  Board.updateMany(
    {_id: req.params.id},
    {$set: req.body}
    , function(err, board){
    if(err) return res.status(500).json({err: err});
    if(!board) {
        return res.json({result: false});
    }
    res.json({board, result: true});
  })
})

module.exports = router;