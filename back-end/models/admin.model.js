//admin.model.js
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

let schemaUser= mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

var Admin=mongoose.model('admin',schemaUser)
let url='mongodb://localhost:27017/systemDB'

exports.testconnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}

exports.registerAdmin=(username,email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url ).then(()=>{
            return Admin.findOne({email:email})
        }).then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject('this email is exist')
            }else{
                bcrypt.hash(password,10).then((hashedPassword)=>{
                    let user=new Admin({
                        username:username,
                        email:email,
                        password:hashedPassword
                    })
                    user.save().then((doc)=>{
                        mongoose.disconnect()
                        resolve(user)
                    }).catch((err)=>{
                        mongoose.disconnect()
                        reject(err)
                    })
                }).catch((err)=>{
                    mongoose.disconnect
                    reject(err)

                })
            }
        })
       
    })
}
var privatekey="this my secret key vvvfff"
exports.loginadmin=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url ).then(()=>{
            return Admin.findOne({email:email})
        }).then((Admin)=>{
            if(!Admin){
                mongoose.disconnect()
                reject('Mot de passe ou e-mail invalide ')
            }else{
                bcrypt.compare(password,Admin.password).then((same)=>{
                    if(same){
                        let token = jwt.sign({id:Admin._id,username:Admin.username},privatekey,{
                            expiresIn:'1h'
                        })
                        mongoose.disconnect()
                        resolve({token:token,role:"admin",username:Admin.username})

                    }else{
                        mongoose.disconnect()
                        reject('Mot de passe ou e-mail invalide')
                    }
                }).catch((err)=>{
                    mongoose.disconnect()
                    reject(err)
                })
            }
           
            
        })
       
    })
}