const express = require('express'),
    router = express.Router();


let data = [
    {
        blogTitle:"Blog Test 1",
        blogSubTitle:"Blog Test Başlık 1",
        image:"https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg"
    },
    {
        blogTitle:"Blog Test 2",
        blogSubTitle:"Blog Test Başlık 2",
        image:"https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg"
    },
    {
        blogTitle:"Blog Test 3",
        blogSubTitle:"Blog Test Başlık 3",
        image:"https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg"
    }
]
router.get("/", (req,res)=>{
    res.render('client/index',{data:data})
})
router.get("/blog", (req,res)=>{
    res.render('client/blog',{data:data})
})
router.get("/hakkimizda", (req,res)=>{
    res.render('client/about')
})

router.get("/ozgecmis", (req,res)=>{
    res.render('client/resume')
})
module.exports = router;
