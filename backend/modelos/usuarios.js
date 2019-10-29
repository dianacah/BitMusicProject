"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
  name: {
    type: String,
    required: true
    
  },
  age: {
    type: Number,
    required: false
  },
  
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: false
  },

  role: {
    type: String
  }
  
});

const Usuarios = mongoose.model("usuarios", usuariosSchema);

module.exports = Usuarios;


