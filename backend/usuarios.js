"use strict";

const express = require("express");
const usuariosRoute = express.Router();
const Usuarios = require("../models/usuarios");

//POST 
usuariosRoute.post("/usuarios", (req, res, next) => {
    Usuarios.create(req.body)
        .then(Usuarios => {
            res.send('Creado exitosamente ' + Usuarios);
        })
        .catch(next);
});

//GET

usuariosRoute.get("/usuarios/:title", (req, res, next) => {
    Usuarios.findOne({ title: req.params.title }, req.body)
        .then(() => {
            const usuarios = Usuarios.findOne({ title: req.params.title });
            return usuarios;
        }).then(usuarios => {
            res.status(200).send(`llamado exitoso ${usuarios}`);

        }).catch(next);
});

//PUT 

usuariosRoute.put("/usuarios/:title", (req, res, next) => {
    Usuarios.findOneAndUpdate({ title: req.params.title }, req.body)
        .then(() => {
            const usuarios = Usuarios.findOne({ title: req.params.title });
            return usuarios;
        }).then(usuarios => {
            res.send(`Actualización exitosa ${usuarios}`);
        }).catch(next);
});

//DELETE 

usuariosRoute.delete("/usuarios/:title", (req, res, next) => {
    Usuarios.findOneAndDelete({ title: req.params.title }).then(usuarios => {
        res.send('Borrado exitoso ' + usuarios);
    }).catch.next;
});

//LLAMANDO
module.exports = usuariosRoute;