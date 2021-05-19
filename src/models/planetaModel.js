// Tabela- Schema utilizado no banco

//const MongoClient = require ('MongoClient');
var mongoose = require('mongoose');


var planetaSchema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    clima: {
        type: String,
        required: true
    },
    terreno: {
        type: String,
        required: true
    },
    quantidade_de_aparicoes: {
        type: String,
        default: 0
    }
    
});

var Planeta = module.exports = mongoose.model('planeta', planetaSchema);

module.exports.save = (callback, limit) => {
    Planeta.find(callback).limit(limit);
}
