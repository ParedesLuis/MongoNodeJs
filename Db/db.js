const MongoClient = require('mongodb').MongoClient;
const  NameDatabase = "PlatziOne";
const  uri = "mongodb+srv://luisparedes:imErn38N09RhmAI3@platzione-7crod.mongodb.net/platzi-db?retryWrites=true&w=majority";
const local = "mongodb://localhost/platzi-db"
const mongoose = require('mongoose');
const comentModel = require('../models/comentarios')

class MongoDb{
    
    constructor (){
   
        mongoose.connect(uri, {useNewUrlParser: true})
        .then(db=>console.log('Conectado'))
        .catch(err=>console.log(err))
       
    }

}


module.exports = MongoDb
