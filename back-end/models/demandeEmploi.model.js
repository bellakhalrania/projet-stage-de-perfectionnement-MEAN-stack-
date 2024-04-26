const mongoose=require('mongoose')



let schemaNews= mongoose.Schema({
    username:String,
    email:String,
    departement:String,
    text:String
})

var demandeEmploi=mongoose.model('demandeEmploi',schemaNews)
var url='mongodb://localhost:27017/systemDB'

exports.testconnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}

exports.postDemande=(username,email,departement,text)=>{
    return new Promise((resolve,reject)=>{
            mongoose.connect(url).then(()=>{
                return demandeEmploi.findOne({email:email}) ;
            }).then((doc)=>{
                if(doc){
                    mongoose.disconnect()
                    reject('Vous avez une demande ')
                }else{
                    let Demande= new demandeEmploi({
                        username :username,
                        email :email,
                        departement:departement,
                        text:text
               
                })
                Demande.save().then((doc)=>{
                    mongoose.disconnect()
                    resolve(doc)
                }).catch((err)=>{
                    mongoose.disconnect()
                    reject(err)
                })
        }
      })
    })
}


exports.getDemande=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return demandeEmploi.find()
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}
exports.getDemandeById=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return demandeEmploi.findById(id)
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.updateDemande=(id,username,email,departement)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return demandeEmploi.updateOne({_id:id},{username:username},{email:email},{departement:departement})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.deleteDemande=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return demandeEmploi.deleteOne({_id:id})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.getDemandeEmploiEmail = (email) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url) // Assurez-vous que la variable 'url' est définie
            .then(() => {
                return demandeEmploi.find({ email: email }); // Utilisez un objet pour spécifier le critère de recherche
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

exports.countdemandeEmploi = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url).then(() => {
            return demandeEmploi.countDocuments();
        }).then((doc) => {
            mongoose.disconnect();
            resolve(doc);
        }).catch((err) => {
            mongoose.disconnect();
            reject(err);
        });
    });
};