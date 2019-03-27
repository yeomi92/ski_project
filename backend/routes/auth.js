const express = require('express');
const router = express.Router();
const User = require('../models/user');
const crypto = require('crypto')

router.post('/login', function (req, res, next) {
    console.log("========로그인===========");
    console.log(req.body.params)
    const data = req.body.params;
    let cipher = crypto.createCipher('aes192','key');
    cipher.update(data.password, 'utf8', 'base64');
    let cipherPw = cipher.final('base64');
    console.log(cipherPw)
    User.findOne({
        id: data.id,
        password: cipherPw
    }, function(err, user){
        if(err) return res.status(500).json({err: err});
        if(!user) return res.json({success: false});
        res.json({user, success: true});
    })
});

router.post('/check/id',function (req, res, next) {
    console.log('=======아이디 중복확인=====')
    console.log(req.body.params.id)
    User.findOne({
        id: req.body.params.id
    }, function(err, user){
        if(err) return res.status(500).json({err: err});
        if(!user) return res.json({result: false});
        res.json({user, result: true});
    })
})

router.post('/signup', function (req, res, next) {
    console.log("========회원가입===========");
    const data = req.body.params
    console.log(data)
    const user = new User();
    user.id = data.id;
    user.password = data.password;
    user.name = data.name;
    user.nickname = data.nickname;
    user.email = data.email;

    let cipher = crypto.createCipher('aes192', 'key');
    cipher.update(user.password, 'utf8', 'base64');
    let cipheredOutput = cipher.final('base64')

    user.password = cipheredOutput
    user.save(function(err){
        if(err){
            console.err(err);
            res.json({result: 0});
            return;
        }
        res.json({result: 1})
    });
});

router.put('/update/:id', function (req, res, next) {
    console.log('========정보 업데이트===========');
    console.log(req.body);
    console.log(req.params.id);
    User.updateOne(
        {id: req.params.id}, 
        {$set: req.body}
        , function(err, user){
        if(err) return res.status(500).json({err: err});
        if(!user) {
            return res.json({result: false});
        }
        res.json({user, result: true});
    })
})

module.exports = router;