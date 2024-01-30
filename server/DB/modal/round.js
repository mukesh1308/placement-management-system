const mongoose=require("mongoose");

const roundSchema=mongoose.Schema({
    round_name:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    round_date:{
        type:Date,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company",
        requied:true
    },
    round_participantes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student"
    }],
    round_selected:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student"
    }]
});

const round=mongoose.model("round",roundSchema,"round");

module.exports=round;