const express=require("express");
const multer=require("multer");

const edit=express.Router();

edit.post("/img",async(req,res)=>{
    try{
        
        res.send("done");
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({data:"server error"})
    }
});


module.exports=edit;