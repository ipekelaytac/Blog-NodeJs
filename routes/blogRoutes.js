const express = require('express'),
    router = express.Router(),
    Blog = require('../models/blogModel');


router.get("/blog-ekle",isLoggedIn, (req, res) => {
    res.render('dashboard/blog/newBlog')
})

router.post("/addNewBlog", isLoggedIn,(req, res) => {
    let title = req.body.data.title;
    let subTitle = req.body.data.subTitle;
    let image = req.body.data.image;
    let description = req.body.data.description;
    let newBlog = {title: title, subTitle: subTitle, image: image, description: description}
    Blog.create(newBlog).then((newBlog) => {
        console.log(newBlog);
        res.status(201).json(newBlog);
    }).catch((err) => {
        console.log("========= ERROR =========");
        console.log(err);
        res.send(err);
    });
})


router.get("/bloglar",isLoggedIn, (req, res) => {
    Blog.find().then((foundBlogs) => {
        res.render('dashboard/blog/showBlog', {foundBlogs: foundBlogs});
    }).catch((err) => {
        console.log("========= ERROR =========");
        console.log(err);
        res.send(err);
    })
})
router.get("/bloglar/:blogId", (req, res) => {
    Blog.findById(req.params.blogId).then((foundBlog) => {
        res.render('client/blog', {foundBlog: foundBlog});
    }).catch((err) => {
        console.log("========= ERROR =========");
        console.log(err);
        res.send(err);
    })
})

function isLoggedIn(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("giris");
}
module.exports = router;
