const express = require('express'),
    router = express.Router();

let dashboardActions = [
    {
      actionId:1,
      actionName:"changeHomeImage",
      displayName:"Change Home Image"
    },
    {
        actionId:2,
        actionName:"changeAboutImage",
        displayName:"Change About Image"
    },
    {
        actionId:3,
        actionName:"changeAboutText",
        displayName:"Change About Text"
    },
    {
        actionId:4,
        actionName:"addNewBlog",
        displayName:"Add New Blog"
    },
    {
        actionId:5,
        actionName:"listAllBlog",
        displayName:"List All Blog"
    },
]

router.get("/yonetim", (req,res)=>{
    res.render('dashboard/dashboard',{dashboardActions:dashboardActions})
})
router.get("/giris", (req,res)=>{
    res.render('dashboard/singin')
})
router.get("/kayit", (req,res)=>{
    res.render('dashboard/signup')
})
module.exports = router;
