"use strict";

const express = require("express");
const cancionesRoute = express.Router();
const Canciones = require("../models/canciones");

//POST - ok
cancionesRoute.post("/canciones", (req, res, next) => {
    Canciones.create(req.body)
        .then(Canciones => {
            res.send('Creado exitosamente ' + Canciones);
        })
        .catch(next);
});

//GET por ID - ok

// cancionesRoute.get("/canciones/:id", (req, res, next) => {
//   Canciones.findById(req.params.id, (err, canciones) => {
//     res.status(200).send(`llamado exitoso ${ canciones }`);
//   });
// });

//GET por titulo ok

cancionesRoute.get("/canciones/:title", (req, res, next) => {
    Canciones.findOne({ title: req.params.title }, req.body)
        .then(() => {
            const canciones = Canciones.findOne({ title: req.params.title });
            return canciones;
        }).then(canciones => {
            res.status(200).send(`llamado exitoso ${canciones}`);

        }).catch(next);
});


//PUT por ID - ok

// cancionesRoute.put("/canciones/:id", (req, res, next) =>{
//     Canciones.findByIdAndUpdate({ _id: req.params.id }, req.body)
//     .then(()=> {
//         const canciones = Canciones.findOne({ _id: req.params.id });
//         return canciones;
//     }).then(canciones => {
//         res.send('Actualización exitosa ' + canciones);
//     }).catch(next);
// });

//PUT por title - ok

cancionesRoute.put("/canciones/:title", (req, res, next) => {
    Canciones.findOneAndUpdate({ title: req.params.title }, req.body)
        .then(() => {
            const canciones = Canciones.findOne({ title: req.params.title });
            return canciones;
        }).then(canciones => {
            res.send(`Actualización exitosa ${canciones}`);
        }).catch(next);
});

//DELETE por ID ok

// cancionesRoute.delete("/canciones/:id", (req, res, next) => {
//   Canciones.findOneAndDelete({ _id: req.params.id }).then(canciones => {
//     res.send('Borrado exitoso ' + canciones);
//   }).catch.next;
// });

//DELETE por title 

cancionesRoute.delete("/canciones/:title", (req, res, next) => {
    Canciones.findOneAndDelete({ title: req.params.title }).then(canciones => {
        res.send('Borrado exitoso ' + canciones);
    }).catch.next;
});

//LLAMANDO
module.exports = cancionesRoute;