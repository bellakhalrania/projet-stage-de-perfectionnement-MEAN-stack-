const route=require('express').Router()
const demandeAccepter=require('../models/demandeAccepter.model')

//News-Route
route.post('/AjouterAccepter', (req, res, next) => {
    demandeAccepter.postDemandeAccepter(req.body.username, req.body.email, req.body.departement, req.body.type, req.body.text)
        .then((doc) => res.status(200).json(doc))
        .catch((err) => res.status(400).json(err));
});

route.get('/getAccepter', (req, res, next) => {
    demandeAccepter.getDemandeAccepter()
        .then((doc) => res.status(200).json(doc))
        .catch((err) => res.status(400).json(err));
});



route.get('/getOneAccepter/:username',(req,res,next)=>{
    
    demandeAccepter.getDemandeOneAccepter(req.params.username)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

route.get('/getOneAccepterEmail/:email',(req,res,next)=>{
    
    demandeAccepter.getDemandeAccepterEmail(req.params.email)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.get('/getOneAccepterbyid/:id',(req,res,next)=>{
    
    demandeAccepter.getDemandeById(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.delete('/deleteDemandeAccepter/:id',(req,res,next)=>{
    
    demandeAccepter.deleteDemandeAccepter(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})


route.get('/Acceptercountdemande',(req,res,next)=>{
    demandeAccepter.countdemandeAccepter()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
    
})

module.exports = route;