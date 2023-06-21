const Reserva = require("../models/Reserva");

async function deleteReserva(req, res) {
  try {
    const reservaId = req.params.id;
    const reserva = await Reserva.findByPk(reservaId);
    if (!reserva) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }
    await reserva.destroy();
    res.json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la reserva" });
  }
}

module.exports = deleteReserva;
