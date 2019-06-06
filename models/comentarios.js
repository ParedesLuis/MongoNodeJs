const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comentarios = new Schema({
  comentario: String,
  autor: {
      type: String,
      default: 'unknow'
  }
})

module.exports= mongoose.model('comentarios',comentarios)