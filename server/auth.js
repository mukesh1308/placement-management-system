const jwt=require("jsonwebtoken");
const login=require("./DB/modal/login");


const auth=async(req,res,next)=>{
    try{
        let verify=jwt.verify(req.header.key,process.env.SECURITY_KEY);
        if((await login.find({user:verify.user}))){
            req["user"]=verify.user;
            req["role"]=verify.role;
            next();
        }
        res.status(401);
        res.json({data:"user does not exist"});
    }
    catch(err){
        res.json({data:"invalid user"});
    }
}

module.exports=auth;