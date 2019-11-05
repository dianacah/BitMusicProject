"use strict";

const express = require("express");
const usuariosRoute = express.Router();
const Usuarios = require("../modelos/usuarios");

//POST
usuariosRoute.post("/usuarios", (req, res, next) => {
  Usuarios.create(req.body)
    .then(Usuarios => {
      res.send(Usuarios);
    })
    .catch(next);
});

//GET

usuariosRoute.get("/usuarios/:email", (req, res, next) => {
  Usuarios.findOne({ email: req.params.email }, (err, usuarioExistente) => {
    if (usuarioExistente !== null) {
      Usuarios.findOne({ email: req.params.email }, req.body)
        .then(() => {
          const usuarios = Usuarios.findOne({ email: req.params.email });
          return usuarios;
        })
        .then(usuarios => {
          res.status(200).send(usuarios);
        })
        .catch(next);
    } else {
      res.json(null);
    }
  });
});

//PUT

//usuariosRoute.put("/usuarios/:name", (req, res, next) => {
//Usuarios.findOneAndUpdate({ name: req.params.name }, req.body)
// .then(() => {
//const usuarios = Usuarios.findOne({ name: req.params.name });
//return usuarios;
//})
//.then(usuarios => {
// res.send(`Actualización exitosa ${usuarios}`);
//})
//.catch(next);
//});

usuariosRoute.put("/usuarios/:email", (req, res, next) => {
  Usuarios.findOneAndUpdate({ email: req.params.email }, req.body)
    .then(() => {
      const usuarios = Usuarios.findOne({ email: req.params.email });
      return usuarios;
    })
    .then(usuarios => {
      res.send(usuarios);
    })
    .catch(next);
});

//POST Canciones favoritas
usuariosRoute.put("/usuarios/add/:email", (req, res, next) => {
  let peticion = req.body;
  console.log(peticion);
  Usuarios.findOneAndUpdate(req.params, { $push: peticion })
    .then(() => {
      const usuarios = Usuarios.findOne(req.params);
      return usuarios;
    })
    .then(usuarios => {
      res.send(usuarios);
    })
    .catch(next);
});

//DELETE

usuariosRoute.delete("/usuarios/:name", (req, res, next) => {
  Usuarios.findOneAndDelete({ name: req.params.name }).then(usuarios => {
    res.send("Borrado exitoso " + usuarios);
  }).catch.next;
});

//LLAMANDO
module.exports = usuariosRoute;
