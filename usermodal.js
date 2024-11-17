const mongoose= require("mongoose")

const authors=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,uniqe:true},
    password:{type:String,required:true,field:user_password},
    date:{type:date,required:false}
})

module.exports = mongoose.model('user',authers)