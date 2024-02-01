const express=require("express");

const comp=express.Router();

const auth=require("../auth");
const company=require("../DB/modal/company");


comp.get("/",auth,async(req,res)=>{
    try{
        let data=(await company.find({company_name:{$regex:req.query.name}})).map((ele)=>{
            return {search:ele.company_name,id:ele._id}
        });
        res.json({data:data});
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({data:"server error"});
    }
})

comp.get("/info",auth,async(req,res)=>{
    try{
        let data=await company.findById(req.query.id).populate([
            {path:"drives",populate:[{path:"rounds",populate:[{path:"round_participantes",select:["name","registration_no"]}]}]}
        ]);
        res.json({data:data});
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({data:"server error"});
    }
})


module.exports=comp;