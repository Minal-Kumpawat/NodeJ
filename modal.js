const mongoose= require("mongoose")

const authorSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,uniqe:true},
    password:{type:String,required:true},
    address:{type:String,required:false}

},{versionKey:false,timestamps:true}
)

module.exports = mongoose.model('user',authorSchema)