function editarDatos(id, nuevosDatos) {
  fetch(`/api/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevosDatos),
  })
    .then((response) => response.json())
    .then((data) => {
      // Manipular los datos actualizados
      console.log(data);
    })
    .catch((error) => {
      console.error("Error al editar los datos:", error);
    });
}

const id = "123"; // ID de la reserva a editar
const nuevosDatos = {
  nombre: "Nuevo nombre",
  apellido: "Nuevo apellido",
  codigoReserva: "Nuevo código de reserva",
  fechaReserva: "2023-06-21",
};

editarDatos(id, nuevosDatos);
