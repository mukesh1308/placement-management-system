const mongoose=require("mongoose");

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log("connect connect to the DB please restart the server");
})