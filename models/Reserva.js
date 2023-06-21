const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Reserva = sequelize.define(
  "Reserva",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigoReserva: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fechaReserva: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "reservas",
    timestamps: true,
  }
);

module.exports = Reserva;
