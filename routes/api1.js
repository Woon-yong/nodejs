var express = require('express')
var router = express.Router()

// router.get('/main',(req,res)=>{
//     res.render('index')
// })

router.get('/daejeon',(req,res)=>{
    res.render('main',{data:"Hello"})
})

module.exports = router;