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

usuariosRoute.get("/usuarios/:name", (req, res, next) => {
    Usuarios.findOne({ name: req.params.name }, req.body)
        .then(() => {
            const usuarios = Usuarios.findOne({ name: req.params.name });
            return usuarios;
        }).then(usuarios => {
            res.status(200).send(`llamado exitoso ${usuarios}`);

        }).catch(next);
});

//PUT 

usuariosRoute.put("/usuarios/:name", (req, res, next) => {
    Usuarios.findOneAndUpdate({ name: req.params.name }, req.body)
        .then(() => {
            const usuarios = Usuarios.findOne({ name: req.params.name });
            return usuarios;
        }).then(usuarios => {
            res.send(`Actualización exitosa ${usuarios}`);
        }).catch(next);
});

//DELETE 

usuariosRoute.delete("/usuarios/:name", (req, res, next) => {
    Usuarios.findOneAndDelete({ name: req.params.name }).then(usuarios => {
        res.send('Borrado exitoso ' + usuarios);
    }).catch.next;
});

//LLAMANDO
module.exports = usuariosRoute;
