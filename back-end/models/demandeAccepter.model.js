const { string } = require('joi');
const mongoose = require('mongoose');

let schemaDemandeAccepter = mongoose.Schema({
    username:String,
    email:String,
    departement:String,
    type:String,
    text:String
});

var demandeAccepter = mongoose.model('demandeAccepter', schemaDemandeAccepter);
var url = 'mongodb://localhost:27017/systemDB';

exports.testconnect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url).then(() => {
            mongoose.disconnect();
            resolve('connected !');
        }).catch((err) => reject(err));
    });
}

exports.postDemandeAccepter = (username, email, departement, type, text) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url).then(() => {
            let Demande = new demandeAccepter({
                username: username,
                email: email,
                departement: departement,
                type: type,
                
                text: text
            });
            Demande.save().then((doc) => {
                mongoose.disconnect();
                resolve(doc);
            }).catch((err) => {
                mongoose.disconnect();
                reject(err);
            });
        }).catch((err) => reject(err));
    });
}

exports.getDemandeAccepter = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url).then(() => {
            return demandeAccepter.find();
        }).then((doc) => {
            mongoose.disconnect();
            resolve(doc);
        }).catch((err) => {
            mongoose.disconnect();
            reject(err);
        });
    });
}

exports.getDemandeOneAccepter = (username) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url) // Assurez-vous que la variable 'url' est définie
            .then(() => {
                return demandeAccepter.find({ username: username }); // Utilisez un objet pour spécifier le critère de recherche
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

exports.getDemandeAccepterEmail = (email) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url) // Assurez-vous que la variable 'url' est définie
            .then(() => {
                return demandeAccepter.find({ email: email }); // Utilisez un objet pour spécifier le critère de recherche
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

exports.deleteDemandeAccepter=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return demandeAccepter.deleteOne({_id:id})
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
           return demandeAccepter.findById(id)
           }).then((doc)=>{
            mongoose.disconnect()
            resolve(doc)
           }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
           })
           
    })
}

exports.countdemandeAccepter = async () => {
    try {
        await mongoose.connect(url);
        const count = await demandeAccepter.countDocuments();
        mongoose.disconnect();
        return count;
    } catch (err) {
        mongoose.disconnect();
        throw err;
    }
};

