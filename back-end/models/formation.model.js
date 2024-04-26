
const mongoose=require('mongoose')


let schemaformation= mongoose.Schema({
    titre:String,
    description:String,
    date:String,
    lieu:String
    
})
var Formation=mongoose.model('Formation',schemaformation)
var url='mongodb://localhost:27017/systemDB'

exports.testconnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}

exports.postFormation=(titre,description,date,lieu)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           let formation= new Formation({
            titre:titre,
            description:description,
            date:date,
            lieu:lieu 
           })
           formation.save().then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
        }).catch((err)=>reject(err))
    })
}


exports.getFormation=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Formation.find()
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}


exports.updateFormation=(id,titre,description,date,lieu)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Formation.updateOne({_id:id},{titre:titre,
            description:description,
            date:date,
            lieu:lieu})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.deleteFormation=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Formation.deleteOne({_id:id})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}