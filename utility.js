const cloudinary=require("cloudinary")
import dotenv from("dotenv")
dotenv.config()

cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
})

exports.uploadFile=async (data)=>{
    const fileArray=Object.values(data)
}