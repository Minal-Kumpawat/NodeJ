const cloudinary=require("cloudinary").v2
// import dotenv from("dotenv")
// dotenv.config()
require("dotenv").config()
cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
})

exports.uploadFile=async (data)=>{
    const fileArray=Object.values(data);
    const results=[];
    for(const file of fileArray){
        try{
            const result_data =await new Promise((resolve, reject)=>{
                cloudinary.uploader.upload_stream((error,result)=>{
                    if(result){
                        resolve(result);
                    }
                    reject(error);
                }).end(file.data)
            })
            results.push(result_data)
            console.log("<<<<<<<<< resulls<<<"  , result_data)
        } catch(error){
            console.error("error uploading file:",error);
        }
    }
    return results;
}
