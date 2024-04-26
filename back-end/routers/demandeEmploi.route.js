const route=require('express').Router()
const EmploiModel=require('../models/demandeEmploi.model')



//News-Route
route.post('/addDemandeEmploi',(req,res,next)=>{
    EmploiModel.postDemande(req.body.username,req.body.email,req.body.departement,req.body.text)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
   // console.log('addd news')
})

route.get('/getDemandeEmploi',(req,res,next)=>{
    EmploiModel.getDemande()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
})
route.get('/getDemandeEmploiById/:id',(req,res,next)=>{
    
   EmploiModel.getDemandeById(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.patch('/updateEmploiDemande/:id',(req,res,next)=>{
    
   EmploiModel.getDemandeById(req.params.id,req.body.username,req.body.email,req.body.departement,req.body.text)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.delete('/deleteEmploiDemande/:id',(req,res,next)=>{
    
    EmploiModel.deleteDemande(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

route.get('/countdemandeEmploi',(req,res,next)=>{
    EmploiModel.countdemandeEmploi()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
    
})



module.exports=route