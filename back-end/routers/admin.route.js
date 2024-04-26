//admin.route.js
const route=require('express').Router()
const adminModel=require('../models/admin.model')

route.post('/register',(req,res,next)=>{
    adminModel.registerAdmin( req.body.username,req.body.email,req.body.password)
    .then((user)=>res.status(200).json({user:user,msg:"added !!"}))
    .catch((err)=>res.status(400).json(err))
})

route.post('/login',(req,res,next)=>{
    adminModel.loginadmin(req.body.email,req.body.password)
    .then((token)=>res.status(200).json({token:token}))
    .catch((err)=>res.status(400).json(err))
})

module.exports=route