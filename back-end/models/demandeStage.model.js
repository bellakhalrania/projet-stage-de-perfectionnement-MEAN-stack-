const mongoose=require('mongoose')


let schemaNews= mongoose.Schema({
    username:String,
    email:String,
    typeStage:String,
    departement:String,
    datedebut: Date,
    dateFin: Date,
    text:String
    
})
var demandeStage=mongoose.model('demandeStage',schemaNews)
var url='mongodb://localhost:27017/systemDB'

exports.testconnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}

exports.postDemande=(username,email,typeStage,departement,datedebut, dateFin,text)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            return demandeStage.findOne({email:email}) ;
        }).then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject('Vous avez une demande ')
            }else{
           let Demande= new demandeStage({
            username :username,
            email :email,
            typeStage:typeStage,
            departement:departement,
            datedebut: datedebut,
            dateFin: dateFin,
            text:text,
           
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
           return demandeStage.find()
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
           return demandeStage.findById(id)
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.updateDemande=(id,username,email,typeStage,departement,text)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return demandeStage.updateOne({_id:id},{username:username},{email:email},{typeStage:typeStage},{departement:departement},{text:text})
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
           return demandeStage.deleteOne({_id:id})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.getDemandeStageEmail = async (email) => {
    try {
        await mongoose.connect(url); // Connexion à la base de données
        const doc = await demandeStage.find({ email: email }); // Recherche du document
        await mongoose.disconnect(); // Déconnexion de la base de données
        return doc; // Retour du document trouvé
    } catch (err) {
        await mongoose.disconnect(); // Assurez-vous de vous déconnecter même en cas d'erreur
        throw err; // Propagation de l'erreur pour la gestion ultérieure
    }
};


exports.countdemandeStage = async () => {
    try {
        await mongoose.connect(url);
        const count = await demandeStage.countDocuments();
        mongoose.disconnect();
        return count;
    } catch (err) {
        mongoose.disconnect();
        throw err;
    }
};