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
        type:mongoose.Schema.ObjectId
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
        subject_id:{
            type:mongoose.Schema.ObjectId
        },
        mark:{
            type:Number,
            required:true
        }
    }],
    arrears:[{
        subject_code:{
            type:String,
            required:true,
            trim:true
        },
        status:{
            type:String,
            required:true,
            enum:["clear","pending"]
        }
    }],
    cgpa:{
        type:Number,
        min:0,
        max:10,
        default:0
    },
    mobile_no:{
        type:String,
        default:"000000000",
        minlength:10,
        maxlength:10,
        trim:trie,
        validate(value){
            if("[^0-9]".test(value)){
                throw new Error("not valid phone number");
            }
        }
    },
    ten_mark:{
        type:Number,
        min:0,
        max:100,
        default:0
    },
    twelve_mark:{
        type:Number,
        min:0,
        max:100,
        default:0
    },
    board_of_school:{
        type:String,
        lowercase:true,
        default:"-",
        trim:true
    },
    batch:{
        type:mongoose.Schema.ObjectId,
        default:null
    },
    skill_set:[{
        type:String,
        trim:true,
        lowercase:true
    }],
    attendance:{
        type:String,
        min:0,
        max:100,
        default:0
    }
});

const student=mongoose.model("student",studentSchema,"student");
module.exports=student;