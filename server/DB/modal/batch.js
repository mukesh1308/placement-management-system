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
        type:mongoose.Schema.Types.ObjectId,
        ref:"admin",
        default:null
    },
    subject:[{
        subject_name:{
            type:String,
            trim:true,
            lowercase:true
        },
        subject_teacher:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"admin"
        }
    }]
})


const batch=mongoose.model("batch",batchSchema,"batch");

module.exports=batch;