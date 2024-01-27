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
        type:mongoose.Schema.ObjectId,
        requied:true
    },
    round_participantes:[mongoose.Schema.ObjectId],
    round_selected:[mongoose.Schema.ObjectId]
});

const round=mongoose.model("round",roundSchema,"round");

module.exports=round;