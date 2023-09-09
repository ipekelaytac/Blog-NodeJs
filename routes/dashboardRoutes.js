const express = require('express'),
    router = express.Router();



router.get("/giris", (req,res)=>{
    res.render('dashboard/singin')
})
router.get("/kayit", (req,res)=>{
    res.render('dashboard/signup')
})
module.exports = router;
