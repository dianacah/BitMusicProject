"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cancionesSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    album: {
        type: String
    },
    duration: {
        type: String
    },

    genre: {
        type: String
    },

    artist: {
        type: String,
        required: true
    },

    file: {
        type: String
    }

});

const Canciones = mongoose.model("canciones", cancionesSchema);

module.exports = Canciones;