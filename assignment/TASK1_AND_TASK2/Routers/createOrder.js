const express=require('express')
const Router=express.Router()
const createOrderController=require('../Controllers/createOrderController')

Router.post('/createOrder',createOrderController.createOrder)

module.exports=Router