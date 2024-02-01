const mongoose=require("mongoose");

const driveSchema=mongoose.Schema({
    academic_year:{
        type:Number,
        min:2000,
        max:2050,
        require:true
    },
    package:{
        type:Number,
        default:0
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company",
        default:null
    },
    rounds:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"round"
    }]
});

const drive=mongoose.model("drive",driveSchema,"drive");

module.exports=drive;