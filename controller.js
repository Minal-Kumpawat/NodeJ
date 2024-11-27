const user_modal= require("../modal/modal")
const bcrypt= require("bcrypt")
const jwt=require("jsonwebtoken")
const secretKey='hfdjsfhskdjfhdsjkf'
exports.getAllUser = async (req, res) => {
  
    const getUserData = await user_modal.find();
    res.status(200).send(getUserData);
};


exports.createrUser=async (req,res)=>{
  console.log("<<<<<<<<<<<<<<",req.body);
  console.log(">>>>>file>>",req.files)
  const fileUplaod=uploadFile(req.file)
  console.log("<<<<<<",fileUplaod)
  return 
  const {name,email,password,dob,address}=req.body
  if (!(name && email && password )){
    return res.status(404).json({message:"all field are required"});
  }

  const useremail= await user_modal.findOne({email})
  if (useremail)
  {
    return res.status(404).json({message:"email already "});
  }
  const salt=bcrypt.genSaltSync(10);
  console.log('<<<<<<<<salt<<<<<',salt);
  
  const hash= bcrypt.hashSync(password,salt);
  console.log('<<<<<<<<hash<<<<',hash);
  const data={
    name,
    email,
    password:hash,
    dob,
    address
  }
  const newUser = new user_modal(data)
  await newUser.save() 
  res.status(200).send(newUser);
}

exports.userLogin=async (req,res)=>{
  const {email,password}=req.body
  const useremail= await user_modal.findOne({email})
  if (!useremail)
  {
    return res.status(404).json({message:"user not exists!! "});
  }
  const dataBasePassword=useremail.password
  const match= await bcrypt.compare(password, dataBasePassword);
  if (!match){
    return res.status(404).json({message:"invalid password"});
  }
  
  // const token =jwt.sign({id:useremail._id},secretKey,
  //   // {expiresIn:1m}
  // )
  const token = jwt.sign({id:useremail._id},secretKey,
    {expiresIn:"1h"}
)    
  res.status(200).json({token,message:'Success'})
}


exports.upDate=async(req,res)=>{
  console.log(`>>>>>>>`);
  const {id}=req.body
  const data = req.body
  const user =await user_modal.findByIdAndUpdate(id,data)
  res.status(200).send(user);
}
