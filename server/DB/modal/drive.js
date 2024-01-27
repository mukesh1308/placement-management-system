const mongoose=require("mongoose");

const driveSchema=mongoose.Schema({
    package:{
        type:Number,
        default:NaN
    },
    company:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    rounds:[mongoose.Schema.ObjectId]
});

const drive=mongoose.model("drive",driveSchema,"drive");

module.exports=drive;