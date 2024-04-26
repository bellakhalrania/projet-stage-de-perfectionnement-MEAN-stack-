const route=require('express').Router()
const demandeModel=require('../models/demandeStage.model')

//News-Route
route.post('/addDemandeStage',(req,res,next)=>{
    demandeModel.postDemande(req.body.username,req.body.email,req.body.typeStage,req.body.departement,req.body.datedebut,req.body.dateFin,req.body.text)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
   // console.log('addd news')
})

route.get('/getDemandeStage',(req,res,next)=>{
    demandeModel.getDemande()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
})
route.get('/getDemandeStageById/:id',(req,res,next)=>{
    
    demandeModel.getDemandeById(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.patch('/updateStageDemande/:id',(req,res,next)=>{
    
   demandeModel.updateDemande(req.params.id,req.body.username,req.body.email,req.body.typeStage,req.body.departement,req.body.text)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.delete('/deleteStageDemande/:id',(req,res,next)=>{
    
    demandeModel.deleteDemande(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.get('/getDemandeStageByemail/:email',(req,res,next)=>{
    
    demandeModel.getDemandeStageEmail(req.params.email)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.get('/Stagecountdemande', (req, res, next) => {
    demandeModel.countdemandeStage()
    .then((doc)=>{
        const count = parseInt(doc); // ou parseFloat(doc) selon le cas
        res.status(200).json(count);
    })
    .catch((err)=>res.status(400).json(err))
});


module.exports=route