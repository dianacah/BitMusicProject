"use strict";
//instalar npm install cors --save* (modulo para configurar base de datos)
//establecer la configuracion de las politicas de cors

/* app.use(cors({ origin: "http://localhost:4200" })) */

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
/* INGRESAR NUEVAS CONEXIONES Y HACER LOS LLAMADOS*/
const CancionesRoute = require("./routes/canciones");
const UsuariosRoute = require("./routes/usuarios");

const app = express();
const PORT = 3000;
const DB = "bit-music";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );

  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");

  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");

  next();
});

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: DB,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Ingreso a la base de datos exitoso");
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser.json());
//llamando cada conexión
app.use("/api", CancionesRoute);
app.use("/api", UsuariosRoute);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.listen(PORT, () => {
  console.log("Conectado al servidor");
});
