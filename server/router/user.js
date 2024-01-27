const express=require("express");

const auth=require("../auth");
const student=require("../DB/modal/student");
const admin=require("../DB/modal/admin");

const user=express.Router();

user.get("/",auth,async(req,res)=>{
    try{
        let data={};
        if(req.role==="student"){
            data=await student.findById(req.user);
        }
        else{
            data=await admin.findById(req.user);
        }
        res.status(200);
        res.json({data:data});
    }
    catch(err){
        res.status(500);
        res.json({data:"server error"});
    }
})


module.exports=user;