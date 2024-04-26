
const { date } = require('joi')
const mongoose=require('mongoose')


let schemaconversation= mongoose.Schema({
  username:String,
    text:String,
    date:String
    
})
var conversation=mongoose.model('conversation',schemaconversation)
var url='mongodb://localhost:27017/systemDB'

exports.testconnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}

exports.postconversation=(username,text,date)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           let message= new conversation({
            username:username,
            text:text,
            date:date
           
            
           })
           message.save().then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
        }).catch((err)=>reject(err))
    })
}


exports.getConversation=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return conversation.find()
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}
