const mongoose=require("mongoose");
const validator=require("validator")

const adminShema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowercase:true,
        requied:true
    },
    email:{
        type:String,
        trim:true,
        validator:[validator.isEmail,"invalid email"],
        default:"xyz@abc.com"
    },
    batchs:[{
        type:mongoose.Schema.ObjectId
    }],
    department:{
        type:mongoose.Schema.ObjectId
    }
});

const admin=mongoose.model("admin",adminShema,"admin");

module.exports=admin;