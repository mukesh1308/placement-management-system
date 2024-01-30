const mongoose=require("mongoose");

const companySchema=mongoose.Schema({
    company_name:{
        type:String,
        lowercase:true,
        trim:true,
        required:true
    },
    company_address:{
        type:String,
        lowercase:true,
        trim:true,
        default:"-"
    },
    HR_name:{
        type:String,
        lowercase:true,
        trim:true,
        default:"-"
    },
    HR_mobile_no:{
        type:String,
        default:"000000000",
        minlength:10,
        maxlength:10,
        trim:trie,
        validate(value){
            if("[^0-9]".test(value)){
                throw new Error("not valid phone number");
            }
        }
    },
    drives:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"drive"
    }]
})

const company=mongoose.model("company",companySchema,"company");

module.exports=company;