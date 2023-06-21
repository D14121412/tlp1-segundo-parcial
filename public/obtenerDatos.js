function obtenerDatos() {
  fetch("/api/")
    .then((response) => response.json())
    .then((data) => {
      // Manipular los datos obtenidos
      console.log(data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}

obtenerDatos();
