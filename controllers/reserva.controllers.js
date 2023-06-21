const ctrlReservas = {};

const express = require("express");
const router = express.Router();

const {
  obtenerReserva,
  getReservaById,
  crearReserva,
  actualizarReserva,
  borrarReserva,
} = require("../controllers/reservas");

// Obtener todas las reservas
router.get("/", obtenerReserva);

// Obtener una reserva por su ID
router.get("/:id", getReservaById);

// Crear una reserva
router.post("/", crearReserva);

// Actualizar una reserva por su ID
router.put("/:id", actualizarReserva);

// Eliminar una reserva
router.delete("/:id", borrarReserva);

module.exports = ctrlReservas;
