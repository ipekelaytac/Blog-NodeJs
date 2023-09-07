const express = require('express'),
    router = express.Router();
router.get("/", (req,res)=>{
    res.render('index')
})
router.get("/blog", (req,res)=>{
    res.render('blog')
})
router.get("/hakkimizda", (req,res)=>{
    res.render('about')
})

router.get("/iletisim", (req,res)=>{
    res.render('contact')
})
module.exports = router;
