const route=require('express').Router()
const ReunionModel=require('../models/reunion.model')

//News-Route
route.post('/Add',(req,res,next)=>{
    ReunionModel.postReunion(req.body.text,req.body.DateReunion,req.body.heure)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
})

route.get('/getReunion',(req,res,next)=>{
    
    ReunionModel.getReunion()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
})
route.get('/getReunionById/:id',(req,res,next)=>{
    
    ReunionModel.getReunionById(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.patch('/updateReunion/:id',(req,res,next)=>{
    
    ReunionModel.updateReunion(req.params.id,req.body.text,req.body.DateReunion,req.body.heure)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.delete('/deleteReunion/:id',(req,res,next)=>{
    
    ReunionModel.deleteReunion(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

// end-Route


module.exports=route