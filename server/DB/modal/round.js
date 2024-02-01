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
    round_description:{
        type:String,
        lowercase:true,
        default:"-"
    },
    deive:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"drive",
        default:null
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