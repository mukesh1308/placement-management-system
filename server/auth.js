const jwt=require("jsonwebtoken");
const login=require("./DB/modal/login");


const auth=async(req,res,next)=>{
    try{
        let verify=jwt.verify(req.headers.key,process.env.SECURITY_KEY);
        if((await login.find({user:verify.user}))){
            req["user"]=verify.user;
            req["role"]=verify.role;
            next();
            return;
        }
        res.status(401);
        res.json({data:"user does not exist"});
    }
    catch(err){
        res.status(401);
        res.json({data:"invalid user"});
    }
}

module.exports=auth;