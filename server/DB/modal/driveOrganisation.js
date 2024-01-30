const mongoose=require("mongoose");

const driveOrganisationSchema=mongoose.Schema({
    academic_year:{
        type:Number,
        min:2000,
        max:2050,
        default:(new Date()).getFullYear(),
        require:true
    },
    companys:[{
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"company",
            required:true
        },
        admin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"admin",
            required:true
        },
        status:{
            type:String,
            trim:true,
            default:"working",
            enum:["working","accepted","rejected"],
            required:true
        }
    }]
});

const driveOrganisation=mongoose.model("driveOrganisation",driveOrganisationSchema,"driveOrganisation");

module.exports=driveOrganisation;