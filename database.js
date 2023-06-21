const express = require("express");
const Sequelize = require("sequelize");
const database = express();

const sequelize = new Sequelize("reserva.db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const reservaModel = sequelize.define("reservas", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  apellido: Sequelize.STRING,
  codigoReserva: Sequelize.STRING,
  fechaReserva: Sequelize.DATE,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.log("Error de conexión " + error);
  });

usuarioModel
  .findAll({
    attributes: ["nombre", "apellido", "codigoReserva", "fechaReserva"],
  })
  .then((reservas) => {
    const resultados = JSON.stringify(reservas);
    console.log(resultados);
  })
  .catch((error) => {
    console.log(error);
  });
