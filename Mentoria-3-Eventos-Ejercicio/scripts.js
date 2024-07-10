document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resgistroForm");
  const tableBody = document.querySelector("#usuariosTable tbody");

  form.addEventListener("submit", (e) => {
    //evitar el envío del formulario previniendo el evento
    e.preventDefault();

    // Obtener los valores de los input
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;

    console.log(nombre, edad, email);

    // crear elementos, nuevas filas y celda con los valores de los usuarios
    const newRow = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    const celdaEdad = document.createElement("td");
    const celdaEmail = document.createElement("td");

    // asignar el valor a esas celdas
    celdaNombre.textContent = nombre;
    celdaEdad.textContent = edad;
    celdaEmail.textContent = email;

    // agregar el valor dentro de la fila

    newRow.appendChild(celdaNombre);
    newRow.appendChild(celdaEdad);
    newRow.appendChild(celdaEmail);

    tableBody.appendChild(newRow);

    // limpia el formulario
    form.reset();
  });

// cambiar estilos con el boton a traves de eventos

const button = document.querySelector("button")
const input = document.querySelector("input");

button.addEventListener("mouseover", ()=>{
    button.style.background ="red"
})

button.addEventListener("mouseout", () => {
      button.style.background = "blue";
});

input.addEventListener("focus", () => {
  input.style.background = "red";
});

input.addEventListener("blur", () => {
  input.style.background = "blue";
});

});
