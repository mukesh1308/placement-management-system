require("dotenv").config();
const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cors=require("cors");


require("./DB/connect");
const login=require("./DB/modal/login");
const student=require("./DB/modal/student");

const auth=require("./auth");


const port=process.env.PORT || 800;
const app=express();


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/login",async(req,res)=>{
    try{
        let user=await login.findOne({userID:req.body.userID});
        // console.log(req.body.password);
        // console.log(user);
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

app.get("/validate",auth,async(req,res)=>{
    try{
        res.status(200);
        res.json({data:{role:req.role}});
    }
    catch(err){
        res.status(500);
        res.json({data:"internal server error"});
    }
})

app.post("/sign",async(req,res)=>{
    try{
        // console.log("got it.");
        let stud=new student({registration_no:req.body.registration_no});
        let sav=await stud.save();
        let user_login=new login({userID:req.body.userID,password:req.body.password,role:"student",user:sav._id});
        await user_login.save();
        res.status(200);
        res.json({data:"done"});
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({data:"error"});
    }
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})