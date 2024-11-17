const express =require("express")
const router= express.Router();

const userController =require('../controller/controller')

router.get("/getAll" ,userController.getAllUser);


router.post('/save',userController.createrUser)

router.patch('/update',userController.upDate)

module.exports =router