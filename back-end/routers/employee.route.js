const route=require('express').Router()
const employeeModel=require('../models/employee.model')
require('dotenv').config()
const jwt=require('jsonwebtoken')

route.get('/',(req,res,next)=>{
    res.send('welcome to api')
})
// verify token :
var privatekey=process.env.PRIVATE_KEY
verifyToken=(req,res,next)=>{
   let token= req.headers.authorization
  if(!token){
    res.status(400).json({msg:'access rejected!!!!!'})
  }
   try{
     jwt.verify(token,privatekey)
     console.log('Token verified successfully');
      next()
      }catch(e){
        res.status(400).json({msg:e})
      }
}

route.post('/addemployee',(req,res,next)=>{
    employeeModel.postNewemployee(req.body.firstname,req.body.lastname,req.body.email,req.body.phone,req.body.departement,req.body.post,req.body.ville,req.body.DateDeNaissance,req.body.password)
    .then((doc)=>res.status(200).json({doc:doc,msg:"added !!"}))
    .catch((err)=>res.status(400).json(err))
    console.log('addd')
})




route.get('/getAllemployee',(req,res,next)=>{
    employeeModel.getAllemployee()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    //console.log('all data');
    
})

route.get('/getemployee/:id',(req,res,next)=>{
    
    employeeModel.getemployee(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

route.delete('/delete/:id',(req,res,next)=>{
    
    employeeModel.deletemployee(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

route.patch('/updateEmp/:id', (req, res, next) => {
    employeeModel.update(req.params.id, req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.body.departement, req.body.post, req.body.ville, req.body.DateDeNaissance)
        .then((doc) => res.status(200).json(doc))
        .catch((err) => res.status(400).json(err));
});

route.post('/loginEmployee',(req,res,next)=>{
    employeeModel.loginEmployee(req.body.email,req.body.password)
    .then((token)=>res.status(200).json({token:token}))
    .catch((err)=>res.status(400).json(err))
})
route.get('/countEmployee',(req,res,next)=>{
    employeeModel.countEmployee()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
    
    
})

route.get('/getOnebydepartement/:departement',(req,res,next)=>{
    
    employeeModel.getoneEmployee(req.params.departement)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})
route.get('/getOnebyname/:name',(req,res,next)=>{
    
    employeeModel.getoneEmployeebyname(req.params.name)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))  
})

module.exports=route