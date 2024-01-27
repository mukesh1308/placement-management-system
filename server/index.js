require("dotenv").config();
const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cors=require("cors");


require("./DB/connect");
const login=require("./DB/modal/login");
const student=require("./DB/modal/student");


const auth=require("./auth");
const forgot=require("./router/forgot");
const validate=require("./router/validate");
const edit=require("./router/edit");
const user=require("./router/user");


const port=process.env.PORT || 800;
const app=express();


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",validate);
app.use("/forgot",forgot);
app.use("/edit",edit);
app.use("/user",user);

app.post("/sign",async(req,res)=>{
    try{
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