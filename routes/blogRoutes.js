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
        res.render('dashboard/blog/showBlogs', {foundBlogs: foundBlogs});
    }).catch((err) => {
        console.log("========= ERROR =========");
        console.log(err);
        res.send(err);
    })
})
router.get("/duzenle/:blogId",isLoggedIn, (req, res) => {
    Blog.findById(req.params.blogId).then((foundBlog) => {
        res.render('dashboard/blog/editBlog', {foundBlog: foundBlog});
    }).catch((err) => {
        console.log("========= ERROR =========");
        console.log(err);
        res.send(err);
    })
})

router.put("/editBlog/:blogId", isLoggedIn, (req, res) => {
    const blogId = req.params.blogId;
    const updatedData = req.body.data;
    Blog.findByIdAndUpdate(blogId, updatedData, { new: true })
        .then((updatedBlog) => {
            if (!updatedBlog) {
                return res.status(404).json({ error: "Blog not found" });
            }

            console.log("========= UPDATED BLOG =========");
            console.log(updatedBlog);
            res.status(200).json(updatedBlog);
        })
        .catch((err) => {
            console.log("========= ERROR =========");
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        });
});

router.delete("/silBlog/:blogId", isLoggedIn, (req, res) => {
    const blogId = req.params.blogId;

    Blog.findByIdAndRemove(blogId)
        .then((deletedBlog) => {
            if (!deletedBlog) {
                return res.status(404).json({ error: "Blog not found" });
            }
            console.log("========= DELETED BLOG =========");
            console.log(deletedBlog);
            res.status(200).json(deletedBlog);
        })
        .catch((err) => {
            console.log("========= ERROR =========");
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        });
});


function isLoggedIn(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("giris");
}
router.get("/bloglar/:blogId", (req, res) => {
    Blog.findById(req.params.blogId).then((foundBlog) => {
        res.render('client/blog', {foundBlog: foundBlog});
    }).catch((err) => {
        console.log("========= ERROR =========");
        console.log(err);
        res.send(err);
    })
})
module.exports = router;
