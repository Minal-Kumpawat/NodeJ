const express =require ('express')
const mongoose =require('mongoose')
const app=express()
const fileUplaod=require("express-fileupload")
const core =require('cors')
app.use(core())
app.use(fileUplaod());

const route=require ("./route/route")
// const router = require('./route/route')
require("dotenv").config()          //.evn kok import

const port= process.env.PORT || 8000      
// const MONGOURL='mongodb://localhost:27017/practice'

app.use(express.json())         
app.use(express.urlencoded({extended:true}))    

app.use('/abc',route)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected to mongo',process.env.MONGO_URL)
}).catch((err)=>{
    console.log(`Error in connecting`,err);
    
})
app.listen(port,()=>{
    console.log(`server id running on port ${port}`)
    
})



