const Reserva = require("../models/Reserva");

async function updateReserva(req, res) {
  try {
    const reservaId = req.params.id;
    const { nombre, apellido, codigoReserva, fechaReserva } = req.body;
    const reserva = await Reserva.findByPk(reservaId);
    if (!reserva) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }
    reserva.nombre = nombre;
    reserva.apellido = apellido;
    reserva.codigoReserva = codigoReserva;
    reserva.fechaReserva = fechaReserva;
    await reserva.save();
    res.json(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la reserva" });
  }
}

module.exports = updateReserva;
