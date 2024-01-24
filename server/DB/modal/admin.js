const mongoose=require("mongoose");

const adminShema=mongoose.Schema({
    email:{
        type:String,
        trim:true
    }
});

const admin=mongoose.model("admin",adminShema,"admin");

module.exports=admin;