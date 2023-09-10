const express = require('express'),
    router = express.Router(),
    Blog = require('../models/blogModel');


router.get("/", (req, res) => {
    Blog.find({})
        .then((foundBlogs) => {
            console.log("========= ALL BLOGS =========");
            console.log(foundBlogs);
            res.render("client/index", { foundBlogs: foundBlogs });
        })
        .catch((err) => {
            console.log("========= ERROR =========");
            console.log(err);
        });
})



router.get("/hakkimizda", (req, res) => {
    res.render('client/about')
})

router.get("/iletisim", (req, res) => {
    res.render('client/contact')
})
module.exports = router;
