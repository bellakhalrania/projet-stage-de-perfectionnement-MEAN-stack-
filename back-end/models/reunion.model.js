const mongoose=require('mongoose')
const Joi = require('joi')


let schemaReunion= mongoose.Schema({
    text:String,
    DateReunion:String,
    heure:String
    
})
var Reunion=mongoose.model('Reunion',schemaReunion)
var url='mongodb://localhost:27017/systemDB'

exports.testconnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}

exports.postReunion=(text,DateReunion,heure)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           let reunion= new Reunion({
            text:text,
            DateReunion:DateReunion,
            heure:heure

           })
           reunion.save().then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
        }).catch((err)=>reject(err))
    })
}


exports.getReunion=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Reunion.find()
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}
exports.getReunionById=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Reunion.findById(id)
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.updateReunion=(id,text,DateReunion,heure)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Reunion.updateOne({_id:id},{text:text},{DateReunion:DateReunion},{heure:heure})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.deleteReunion=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Reunion.deleteOne({_id:id})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}