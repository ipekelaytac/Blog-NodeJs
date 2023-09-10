const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:              {type:String, required:"Boş bırakılamaz."},
    subTitle:           {type:String, required:"Boş bırakılamaz."},
    image:              {type:String, required:"Boş bırakılamaz."},
    description:        {type:String, required:"Boş bırakılamaz."},
    date:               {type:Date, default:Date.now()},
});

module.exports = mongoose.model("Blog",BlogSchema);