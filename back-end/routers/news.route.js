const route=require('express').Router()
const NewsModel=require('../models/news.model')

//News-Route
route.post('/AddNews',(req,res,next)=>{
    NewsModel.postNews(req.body.text)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
})

route.get('/getNews',(req,res,next)=>{
   // console.log('all News');
    NewsModel.getNews()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
    
})
route.get('/getNewsById/:id',(req,res,next)=>{
    
    NewsModel.getNewsById(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.patch('/updateNews/:id',(req,res,next)=>{
    
    NewsModel.updateNews(req.params.id,req.body.text)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.delete('/deleteNews/:id',(req,res,next)=>{
    
    NewsModel.deleteNews(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

// end-News-Route


module.exports=route