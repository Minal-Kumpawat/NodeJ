const express =require ('express')
const mongoose =require('mongoose')
const app=express()
const port= 7080;
const MONGOURL='mongodb://localhost:27017/practice'
mongoose.connect(MONGOURL)
.then(()=>{
    console.log('connected to mongo',MONGOURL)
}).catch((err)=>{
    console.log(`Error in connecting`,err);
    
})
app.listen(port,()=>{
    console.log(`server id running on port ${port}`)
    
})

const authors=new mongoose.Schema({

})
const authorData= mongoose.model('authors',authors)

app.get("/findAll",async(req,res)=>{
    console.log(req);
    const myauthorData= await authorData.find()
    res.status(200).json(myauthorData)
})

app.get("/getOne/:id",async(req,res)=>{
    console.log(req.params);
    const {id}=req.params
    const myauthorData= await authorData.findById(id)
    if (!myauthorData){
        return res.status(404).json({error:'record not found'});
    }
    res.status(200).json(myauthorData)
})

app.get("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const myauthorData = await authorData.findByIdAndDelete(id)
    res.status(200).json(myauthorData)
})

app.get("/getOneName/:nameid",async(req,res)=>{
    console.log(req.params);
    const {nameid}=req.params
    const myauthorData= await authorData.findOne({name:nameid})
    res.status(200).json(myauthorData)
})


// app.delete("/deleteByName:name",async(req,res)=>{
//     const {name}=req.params
//     const myauthorData=await authorData.findOneAndDelete({name:name})
//     res.status(200).json(myauthorData)
// })