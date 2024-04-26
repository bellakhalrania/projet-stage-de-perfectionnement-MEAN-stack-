// demandeConge.model.js

const mongoose = require('mongoose');

let schemaDemandeConge = mongoose.Schema({
    firstname: String,
    email: String,
    typeconge: String,
    datedebut: Date,
    dateFin: Date,
    text: String
});

var demandeConge = mongoose.model('demandeConge', schemaDemandeConge);
var url = 'mongodb://localhost:27017/systemDB';

exports.testconnect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url).then(() => {
            mongoose.disconnect();
            resolve('connected !');
        }).catch((err) => reject(err));
    });
}

exports.postDemandeconge = (firstname, email, typeconge, datedebut, dateFin, text) => {
    return new Promise((resolve, reject) => {
           
                mongoose.connect(url).then(()=>{
                    return demandeConge.findOne({email:email}) ;
                }).then((doc)=>{
                    if(doc){
                        mongoose.disconnect()
                        reject('Vous avez une demande ')
                    }else{
                        let Demande = new demandeConge({
                            firstname: firstname,
                            email: email,
                            typeconge: typeconge,
                            datedebut: datedebut,
                            dateFin: dateFin,
                            text: text
                   
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
    });
}

exports.getDemande = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url).then(() => {
            return demandeConge.find();
        }).then((doc) => {
            mongoose.disconnect();
            resolve(doc);
        }).catch((err) => {
            mongoose.disconnect();
            reject(err);
        });
    });
}

exports.getDemandeconge=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return demandeConge.findById(id)
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}



exports.deleteDemandeconge=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return demandeConge.deleteOne({_id:id})
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.countdemandeConge = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url).then(() => {
            return demandeConge.countDocuments();
        }).then((doc) => {
            mongoose.disconnect();
            resolve(doc);
        }).catch((err) => {
            mongoose.disconnect();
            reject(err);
        });
    });
};