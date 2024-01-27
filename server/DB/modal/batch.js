const mongoose=require("mongoose");

const batchSchema=mongoose.Schema({
    batch_no:{
        type:Number,
        required:true
    },
    academic_year:{
        type:Number,
        min:2000,
        max:2050,
        default:new Date().getFullYear()
    },
    batch_mentor:{
        type:mongoose.Schema.ObjectId
    },
    subject:[{
        subject_name:{
            type:String,
            trim:true,
            lowercase:true
        },
        subject_teacher:{
            type:mongoose.Schema.ObjectId
        }
    }]
})


const batch=mongoose.model("batch",batchSchema,"batch");

module.exports=batch;