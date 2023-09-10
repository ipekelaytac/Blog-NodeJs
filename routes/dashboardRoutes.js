const express = require('express'),
        User = require('../models/userModel'),
    passport        = require("passport"),
    router = express.Router();
const Console = require("console");

let dashboardActions = [
    {
        actionId:1,
        actionName:"addNewBlog",
        displayName:"Add New Blog"
    },
    {
        actionId:2,
        actionName:"listAllBlog",
        displayName:"List All Blog"
    },
]

router.get("/yonetim",isLoggedIn, (req,res)=>{
    res.render('dashboard/dashboard',{dashboardActions:dashboardActions})
})
router.get("/giris", (req,res)=>{
    res.render('dashboard/singin')
})
router.post("/giris", passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/giris",
    }),(req, res)=>{

    }
)

router.get("/kayit", isLoggedIn,(req,res)=>{
    res.render('dashboard/signup')
})
router.post("/kayit",isLoggedIn,(req,res)=>{
 let newUser = new User({username:req.body.username});
 User.register(newUser, req.body.password, (err, user)=>{
     if(err){
         console.log(err);
         res.redirect("/kayit")
     }
     passport.authenticate("local")(req, res,()=>{
res.redirect("/");
     })
    })
})
router.get("/cikis", (req,res)=>{
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect("/giris");
    });
})
function isLoggedIn(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("giris");
}
module.exports = router;
