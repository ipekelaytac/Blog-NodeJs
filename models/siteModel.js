const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
    homeImage:      {type:String, required:"Boş bırakılamaz."},
    aboutImage:     {type:String, required:"Boş bırakılamaz."},
    aboutText:      {type:String, required:"Boş bırakılamaz."},
    contactImage:   {type:String, required:"Boş bırakılamaz."},
    contactText:    {type:String, required:"Boş bırakılamaz."},
});

module.exports = mongoose.model("Site",SiteSchema);