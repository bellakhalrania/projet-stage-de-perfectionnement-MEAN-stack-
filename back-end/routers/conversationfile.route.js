const route=require('express').Router()
const conversationModel=require('../models/convsersationfile.model')


route.post('/AjouterMessage',(req,res,next)=>{
    conversationModel.postconversation(req.body.username,req.body.text,req.body.date)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
})

route.get('/getMessage',(req,res,next)=>{
   conversationModel.getConversation()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
    
})
 



module.exports=route