const route=require('express').Router()
const FormationModel=require('../models/formation.model')

//News-Route
route.post('/AjouterFormation',(req,res,next)=>{
    FormationModel.postFormation(req.body.titre,req.body.description,req.body.date,req.body.lieu)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
})

route.get('/getFormation',(req,res,next)=>{
    FormationModel.getFormation()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
    
})

route.patch('/updateFormation/:id',(req,res,next)=>{
    
    FormationModel.updateFormation(req.params.id,req.body.titre,req.body.description,req.body.date,req.body.lieu)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.delete('/deleteFormation/:id',(req,res,next)=>{
    
    FormationModel.deleteFormation(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})




module.exports=route