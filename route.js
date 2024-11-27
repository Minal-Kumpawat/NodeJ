const express =require("express")
const router= express.Router();
const userController =require('../controller/controller')
const userauth=require('../middleware/auth')
router.get("/getAll" ,userauth,userController.getAllUser);


router.post('/',userController.createrUser)

router.patch('/update',userController.upDate)

router.post('/login',userController.userLogin)
// router.get("/getbyquary", userController.getquaryuser);

module.exports =router