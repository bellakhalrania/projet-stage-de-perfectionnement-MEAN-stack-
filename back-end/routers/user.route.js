const route=require('express').Router()
const routeModel=require('../models/user.model')

route.post('/register',(req,res,next)=>{
    routeModel.register(req.body.username,req.body.email, req.body.phone,req.body.dateNaissance,req.body.type,req.body.departement,req.body.adress,req.body.password)
    .then((user)=>res.status(200).json({user:user,msg:"added !!"}))
    .catch((err)=>res.status(400).json(err))
})

route.post('/login',(req,res,next)=>{
    routeModel.login(req.body.email,req.body.password)
    .then((token)=>res.status(200).json({token:token}))
    .catch((err)=>res.status(400).json(err))
})

route.get('/getuser',(req,res,next)=>{
    routeModel.getuser()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    //console.log('all data');
    
})
route.get('/countuser',(req,res,next)=>{
    routeModel.countUsers()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    //console.log('all data');
    
})


route.get('/getuser/:id',(req,res,next)=>{
    
    routeModel.getUser(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

route.delete('/deleteUser/:id',(req,res,next)=>{
    
    routeModel.deleteUser(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

route.get('/getOneUserbydepartement/:departement',(req,res,next)=>{
    
    routeModel.getoneUserbydepartement(req.params.departement)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.get('/getOneUserbyname/:name',(req,res,next)=>{
    
    routeModel.getoneUserbyname(req.params.name)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.patch('/updateUser/:id',(req,res,next)=>{
    
    routeModel.updateUser(req.body.username,req.body.email, req.body.phone,req.body.dateNaissance,req.body.type,req.body.departement,req.body.adress,req.body.password)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

module.exports=route