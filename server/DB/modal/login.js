const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const loginSchema= new mongoose.Schema({
    userID:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        default:"1234"
    },
    role:{
        type:String,
        trim:true,
        enum:["student","admin","super admin"],
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

loginSchema.pre("save",async function(next){
    try{
        let hash=await bcrypt.hash(this.password,10);
        this.password=hash;
        next();
    }
    catch(err){
        throw new Error("passward connot be hashed");
    }
})

const login=mongoose.model("login",loginSchema,"login");

module.exports=login;