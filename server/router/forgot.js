const express=require("express");
const jwt=require("jsonwebtoken");
const nodeMail=require("nodemailer");
const otp=require("otp-generator");
const bcrypt=require("bcrypt");

const login=require("../DB/modal/login");
const student = require("../DB/modal/student");
const admin=require("../DB/modal/admin");

const forgot=express.Router();

const transporter=nodeMail.createTransport({
    service:"Gmail",
    auth:{
        user:process.env.APP_EMAIL,
        pass:process.env.APP_EMAIL_PASSWORD
    }
})

forgot.post("/",async(req,res)=>{
    try{
        let user=await login.findOne({userID:req.body.userID});
        if(!user){
            res.status(401);
            res.json({data:"invalid user Id"});
            return;
        }
        let user_email="";
        let code=otp.generate(6,{ upperCaseAlphabets: false, specialChars: false });
        if(user.role==="student"){
            user_email=(await student.findById(user.user)).email;
        }
        else{
            user_email=(await admin.findById(user.user)).email;
        }
        let info=await transporter.sendMail({
            from:"M Mukesh Kumar <mukeshkumar130803@gmail.com>",
            to:user_email,
            subject:"PMS password update OTP",
            text:`your OTP for PMS login is ${code}.\ndo not sheare!!!`
        });
        let time=(new Date()).getTime();
        let sign=jwt.sign({id:code,time:time},user.password);
        res.status(200);
        res.send({data:{key:sign,user:user._id}});
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({data:"server error"});
    }
});


forgot.post("/check",async(req,res)=>{
    try{
        let user=await login.findById(req.headers.user);
        let key=jwt.verify(req.headers.key,user.password);
        console.log(key);
        console.log(user);
        let diff=((new Date()).getTime() - key.time);
        if(key.id===req.body.otp && diff<=300000){
            res.status(200);
            res.json({data:jwt.sign({user:req.headers.user},process.env.OTP)});
            return;
        }
        res.status(401);
        res.json({data:"invalid OTP"});
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({data:"server error"});
    }
});

forgot.put("/change",async(req,res)=>{
    try{
        let key=jwt.verify(req.headers.key,process.env.OTP);
        let hash=await bcrypt.hash(req.body.password,10);
        await login.updateOne({_id:key.user},{$set:{password:hash}});
        res.status(200);
        res.json({data:"updated"});
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({data:"server error"});
    }
})



module.exports=forgot;