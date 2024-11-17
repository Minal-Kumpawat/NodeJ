const user_modal= require("../modal/modal")

exports.getAllUser = async (req, res) => {
  
    const getUserData = await user_modal.find();
    res.status(200).send(getUserData);
  };

exports.createrUser=async (req,res)=>{
    console.log(`>>>>>>>`);
    console.log("------req----body",req.body)
    const user = req.body;
    const newUser = new user_modal(user)
    await newUser.save()
    res.status(200).send(newUser);
}

exports.upDate=async(req,res)=>{
  console.log(`>>>>>>>`);
  const {id}=req.body
  const data = req.body
  const user =await user_modal.findByIdAndUpdate(id,data)
  res.status(200).send(user);
}
