const express = require('express');
const router = express.Router();
const member = require('../member.json');

router.post('/login', function (req, res, next) {
    console.log("========로그인===========");
    console.log(req.body.params)
    let id = req.body.params.id
    let pw = req.body.params.pw
    let user = member.filter(m=>m.id===id)
    let result = new Object()
    result.success = (!!user[0])?user[0].pw===pw:false
    result.user = (!!user[0])?user[0]:null
    console.log('result==='+result)
    res.send(result);
});

router.post('/check/id',function (req, res, next) {
    console.log('=======아이디 중복확인=====')
    let id = req.body.params.id
    let user = member.filter(m=>m.id===id)
    let result = !!user[0]
    res.send(result)
})

router.post('/signup', function (req, res, next) {
    console.log("========회원가입===========");
    console.log(req)
    let result=''
    res.send(result);
});

module.exports = router;