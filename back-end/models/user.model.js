const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()

let schemaUser= mongoose.Schema({
    username:String,
    email:String,
    phone:Number,
    dateNaissance:Date,
    type:String,
    departement:String,
    adress:String,
    password:String,
})

var User=mongoose.model('user',schemaUser)
let url='mongodb://localhost:27017/systemDB'

exports.register=(username,email,phone,dateNaissance,type,departement,adress,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url ).then(()=>{
            return User.findOne({email:email})
        }).then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject('this email is exist')
            }else{
                bcrypt.hash(password,10).then((hashedPassword)=>{
                    let user=new User({
                        username:username,
                        email:email,
                        phone:phone,
                        dateNaissance:dateNaissance,
                        type:type,
                        departement:departement,
                        adress:adress,
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

exports.getuser=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return User.find()
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}
exports.getUser=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return User.findById(id)
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}
exports.getoneUserbydepartement = (departement) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url) // Assurez-vous que la variable 'url' est définie
            .then(() => {
                return User.find({ departement: departement }); // Utilisez un objet pour spécifier le critère de recherche
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
exports.getoneUserbyname = (username) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url) // Assurez-vous que la variable 'url' est définie
            .then(() => {
                return User.find({ username: username }); // Utilisez un objet pour spécifier le critère de recherche
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

var privatekey=process.env.PRIVATE_KEY
exports.login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url ).then(()=>{
            return User.findOne({email:email})
        }).then((User)=>{
            if(!User){
                mongoose.disconnect()
                reject('Mot de passe ou e-mail invalide ')
            }else{
                bcrypt.compare(password,User.password).then((same)=>{
                    if(same){
                        let token = jwt.sign({id:User._id,username:User.username},privatekey,{
                            expiresIn:'1h'
                        })
                        mongoose.disconnect()
                        resolve({token:token,id:User._id,role:"utilisateur",username:User.username,email:User.email,phone:User.phone,dateNaissance:User.dateNaissance,type:User.type,
                        departement:User.departement,adress:User.adress})

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


exports.deleteUser=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return User.deleteOne({_id:id})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}



exports.countUsers = async () => {
    try {
        await mongoose.connect(url);
        const count = await User.countDocuments();
        mongoose.disconnect();
        return count;
    } catch (err) {
        mongoose.disconnect();
        throw err;
    }
};



exports.updateUser=(id,username,email,phone,dateNaissance,type,departement,adress,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            //let validation= schemaValidation.validate({firstname:firstname,lastname:lastname,email:email,phone:phone})
            //if(validation.error){
            //   mongoose.disconnect()
            //    reject(validation.error.details[0].message)
            //}


            return User.updateOne({ _id:id }, {
            username:username,
            email:email,
            phone:phone,
            dateNaissance:dateNaissance,
            type:type,
            departement:departement,
            adress:adress,
            password:password
                
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