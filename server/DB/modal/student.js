const mongoose=require("mongoose");
const validator=require("validator")

const studentSchema=new mongoose.Schema({
    registration_no:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    name:{
        type:String,
        default:"-",
        lowercase: true,
        trim:true
    },
    department:{
        type:String,
        default:"-",
        uppercase:true,
        trim:true,
    },
    email:{
        type:String,
        default:"xyz@abc.com",
        validate:[validator.isEmail,"invalid email"],
        trim:true
    },
    year:{
        type:Number,
        min:2000,
        max:2050,
        default:new Date().getFullYear()
    },
    subject_marks:[{
        subject_code:{
            type:String,
            trim:true,
            required:true
        },
        mark:{
            type:Number,
            required:true
        }
    }] 
});

const student=mongoose.model("student",studentSchema,"student");
module.exports=student;