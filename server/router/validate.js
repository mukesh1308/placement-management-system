const express=require("express");
const jwt=require("jsonwebtoken");

const login=require("../DB/modal/login");
const auth=require("../auth");
const bcrypt=require("bcrypt");

const validate=express.Router();

validate.post("/login",async(req,res)=>{
    try{
        let user=await login.findOne({userID:req.body.userID});
        if(!user){
            res.status(401);
            res.json({data:"not a user"});
            return;
        }
        if(await bcrypt.compare(req.body.password,user.password)){
            res.json({
                data:{
                    cookie :jwt.sign({user:user.user,role:user.role},process.env.SECURITY_KEY),
                    role : user.role
                }
            });
        }
        else{
            res.status(403);
            res.json({data:"invalid password"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({data:"internal server error"});
    }
});

validate.get("/validate",auth,async(req,res)=>{
    try{
        res.status(200);
        res.json({data:{role:req.role}});
    }
    catch(err){
        res.status(500);
        res.json({data:"internal server error"});
    }
});

module.exports=validate;