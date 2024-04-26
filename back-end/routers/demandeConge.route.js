const route=require('express').Router()
const demandeConge=require('../models/demandeConge.model')

//News-Route
route.post('/addDemandeconge', (req, res, next) => {
    demandeConge.postDemandeconge(req.body.firstname, req.body.email, req.body.typeconge, req.body.datedebut, req.body.dateFin, req.body.text)
        .then((doc) => res.status(200).json(doc))
        .catch((err) => res.status(400).json(err));
});

route.get('/getDemandeconge', (req, res, next) => {
    demandeConge.getDemande()
        .then((doc) => res.status(200).json(doc))
        .catch((err) => res.status(400).json(err));
});


route.get('/getconge/:id',(req,res,next)=>{
    
    demandeConge.getDemandeconge(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

route.delete('/deleteconge/:id',(req,res,next)=>{
    
    demandeConge.deleteDemandeconge(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

route.get('/countdemandeConge',(req,res,next)=>{
    demandeConge.countdemandeConge()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err)) 
})
module.exports = route;


