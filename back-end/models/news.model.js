
const mongoose=require('mongoose')


let schemaNews= mongoose.Schema({
    text:String,
    
})
var News=mongoose.model('News',schemaNews)
var url='mongodb://localhost:27017/systemDB'

exports.testconnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}

exports.postNews=(text)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           let news= new News({
            text:text,
           
            
           })
           news.save().then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
        }).catch((err)=>reject(err))
    })
}


exports.getNews=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return News.find()
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}
exports.getNewsById=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return News.findById(id)
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.updateNews=(id,text)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return News.updateOne({_id:id},{text:text})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.deleteNews=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return News.deleteOne({_id:id})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}