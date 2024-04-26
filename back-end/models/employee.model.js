const Joi = require('joi')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()


const schemaValidation=Joi.object({
    firstname:Joi.string().alphanum().min(3).max(20).required(),
    lastname:Joi.string().alphanum().min(3).max(20).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    phone:Joi.number().required()
    

})

let schemaEmployee= mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone: Number,
    departement: String,
    post: String,
    ville:String,
    DateDeNaissance: Date,
    password:String,
    
})

var employee=mongoose.model('employee',schemaEmployee)
var url='mongodb://localhost:27017/systemDB'

exports.testconnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}




exports.postNewemployee=(firstname,lastname,email,phone,departement, post,ville,DateDeNaissance,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{

         //let validation=schemaValidation.validate({firstname:firstname,lastname:lastname,email:email,phone:phone})
         //if(validation.error){
            //mongoose.disconnect()
            // reject(validation.error.details[0].message)
        // }
        return employee.findOne({email:email})
    }).then((doc)=>{
        if(doc){
            mongoose.disconnect()
            reject('this email is exist')
        }else{
            bcrypt.hash(password,10).then((hashedPassword)=>{
                let user=new employee({
                    firstname:firstname,
                     lastname:lastname,
                      email:email,
                     phone: phone,
                     departement: departement,
                        post:  post,
                        ville:ville,
                     DateDeNaissance:DateDeNaissance,
                    password:hashedPassword
                })
                user.save().then((doc)=>{
                    mongoose.disconnect()
                    resolve(doc)
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

exports.getAllemployee=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return employee.find()
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}


exports.getemployee=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return employee.findById(id)
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.getoneEmployee = (departement) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url) // Assurez-vous que la variable 'url' est définie
            .then(() => {
                return employee.find({ departement: departement }); // Utilisez un objet pour spécifier le critère de recherche
            })
            .then((doc) => {
                mongoose.disconnect();
                resolve(doc);
            })
            .catch((err) => {
                mongoose.disconnect();
                reject(err);
            });
    });
};
exports.getoneEmployeebyname = (firstname) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url) // Assurez-vous que la variable 'url' est définie
            .then(() => {
                return employee.find({ firstname: firstname }); // Utilisez un objet pour spécifier le critère de recherche
            })
            .then((doc) => {
                mongoose.disconnect();
                resolve(doc);
            })
            .catch((err) => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.deletemployee=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return employee.deleteOne({_id:id})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}



exports.update=(id,firstname,lastname,email,phone,departement,post,ville,DateDeNaissance)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            //let validation= schemaValidation.validate({firstname:firstname,lastname:lastname,email:email,phone:phone})
            //if(validation.error){
            //   mongoose.disconnect()
            //    reject(validation.error.details[0].message)
            //}


            return employee.updateOne({ _id: id }, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                departement: departement,
                post: post,
                ville: ville,
                DateDeNaissance: DateDeNaissance,
                
            });
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}


var privatekey=process.env.PRIVATE_KEY
exports.loginEmployee=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url ).then(()=>{
            return employee.findOne({email:email})
        }).then((employee)=>{
            if(!employee){
                mongoose.disconnect()
                reject('Mot de passe ou e-mail invalide')
            }else{
                bcrypt.compare(password,employee.password).then((same)=>{
                    if(same){
                        let token = jwt.sign({id:employee._id,firstname:employee.firstname},privatekey,{
                            expiresIn:'1h'
                        })
                        mongoose.disconnect()
                        
                        resolve({token:token,role:"personel",firstname:employee.firstname,lastname:employee.lastname,email:employee.email,phone:employee.phone,departement:employee.departement,post:employee.post,DateDeNaissance:employee.DateDeNaissance,ville:employee.ville})

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

exports.countEmployee = async () => {
    try {
        await mongoose.connect(url);
        const count = await employee.countDocuments();
        mongoose.disconnect();
        return count;
    } catch (err) {
        mongoose.disconnect();
        throw err;
    }
};