"use strict";

const express = require("express");
const cancionesRoute = express.Router();
const Canciones = require("../modelos/canciones");

//POST - ok
cancionesRoute.post("/canciones", (req, res, next) => {
  Canciones.create(req.body)
    .then(Canciones => {
      res.send(Canciones);
    })
    .catch(next);
});

//----------------------------------------------------

//GET por titulo ok un solo objeto

// cancionesRoute.get("/canciones/:title", (req, res, next) => {
//   Canciones.findOne({ title: req.params.title }, req.body)
//     .then(() => {
//       const canciones = Canciones.findOne({ title: req.params.title });
//       return canciones;
//     }).then(canciones => {
//       res.status(200).send(`llamado exitoso ${canciones}`);

//     }).catch(next);
// });

//GET varios elementos

// cancionesRoute.get("/canciones/:artist", (req, res, next) => {
//   Canciones.find({ artist: req.params.artist }, req.body)
//     .then(() => {
//       const canciones = Canciones.find({ artist: req.params.artist });
//       return canciones;
//     }).then(canciones => {
//       res.status(200).send(`llamado exitoso ${canciones}`);
//     }).catch(next);
// });

//GET llamando todo
cancionesRoute.get("/canciones", (req, res, next) => {
  Canciones.find({}, req.body)
    .then(() => {
      const canciones = Canciones.find({});
      return canciones;
    })
    .then(canciones => {
      res.status(200).send(canciones);
    })
    .catch(next);
});
//------------------------------------------------------------------
//PUT por ID - ok

// cancionesRoute.put("/canciones/:id", (req, res, next) => {
//   Canciones.findByIdAndUpdate({ _id: req.params.id }, req.body)
//     .then(() => {
//       const canciones = Canciones.findOne({ _id: req.params.id });
//       return canciones;
//     }).then(canciones => {
//       res.send('Actualización exitosa ' + canciones);
//     }).catch(next);
// });

//PUT por title - ok

cancionesRoute.put("/canciones/:id", (req, res, next) => {
  console.log("peticion", req, res);
  Canciones.findOneAndUpdate(req.params, req.body)
    .then(() => {
      const canciones = Canciones.findOneAndUpdate(req.params._id, req.body);
      return canciones;
    })
    .then(canciones => {
      res.send(canciones);
    })
    .catch(next);
});

//---------------------------------------------------------------------------

//DELETE por ID ok

cancionesRoute.delete("/canciones/:id", (req, res, next) => {
  Canciones.findOneAndDelete({ _id: req.params.id }).then(canciones => {
    res.send(canciones);
  }).catch.next;
});

//DELETE por title

cancionesRoute.delete("/canciones/:title", (req, res, next) => {
  Canciones.findOneAndDelete({ title: req.params.title }).then(canciones => {
    res.send("Borrado exitoso " + canciones);
  }).catch.next;
});

//LLAMANDO
module.exports = cancionesRoute;
