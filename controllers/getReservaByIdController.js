const Reserva = require("../models/Reserva");

async function getReservaById(req, res) {
  try {
    const reservaId = req.params.id;
    const reserva = await Reserva.findByPk(reservaId);
    if (!reserva) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }
    res.json(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la reserva" });
  }
}

module.exports = getReservaById;
