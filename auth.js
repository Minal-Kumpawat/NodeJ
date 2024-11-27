const jwt=require('jsonwebtoken')
const secretKey='hfdjsfhskdjfhdsjkf'
const user_modal=require("../modal/modal")

module.exports =async (req,res, next)=>{
    try{
        const token= req.headers?.authorization;
        console.log('<<<<<<<<<<',token);
        if (!token)
        {
            res.status(401).json({message:"Mila nhi"})
        }
        const splitToken=token.split(" ")[1]
        const decode= jwt.verify(splitToken,secretKey)
        console.log("decode",decode)
        if(!decode)
        {
            return res.status(401).json({message:"Invalid token"});
        }
        const user=await user_modal.findById(decode.id)
        if (!user)
        {
            return res.status(401).json({message:"Invalid user"});
        }
        next();
    }catch(ex){
        res.status(500).json({message:"internal server error"})
    }
}