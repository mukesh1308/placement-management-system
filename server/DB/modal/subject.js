const mongoose=require("mongoose");

const subjectSchema=mongoose.Schema({
    subject_code:{
        type:String,
        trim:true,
        required:true
    },
    subject_name:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    },
    credit:{
        type:Number,
        min:1,
        max:10,
        required:true
    }
});

const subject=mongoose.model("subject",subjectSchema,"subject");

module.exports=subject;