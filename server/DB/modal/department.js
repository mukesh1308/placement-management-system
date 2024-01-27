const mongoose=require("mongoose");

const departmentSchema=mongoose.Schema({
    dept_name:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    dept_code:{
        type:String,
        trim:true,
        uppercase:true,
        required:true
    },
    hod:{
        type:mongoose.Schema.ObjectId
    }
});

const department=mongoose.model("department",departmentSchema,"department");
module.exports=department;