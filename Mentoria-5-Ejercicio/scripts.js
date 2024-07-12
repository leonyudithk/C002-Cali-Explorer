document.addEventListener("DOMContentLoaded", function () {
  // capturar la información
  const petForm = document.getElementById("petForm");
  const cardsContainer = document.getElementById("cardsContainer");

  let mascotasTotal = JSON.parse(localStorage.getItem("MASCOTAS")) || [];


  // Cuando haga click en guardar / activa el evento submit
  petForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("nombre").value;
    const edadInput = document.getElementById("edad").value;
    const tipoInput = document.getElementById("tipo").value;

    // construir el objeto
    const ObjMascotas = {
      nombre: nameInput,
      edad: edadInput,
      tipo: tipoInput,
    };
    console.log(ObjMascotas);

    mascotasTotal.push(ObjMascotas);
    // Pasar o guardar la información al localStorage
    localStorage.setItem("MASCOTAS", JSON.stringify(mascotasTotal));
    mostrarMascota();
    // para limpiar el formulario tengo 2 formas
    // nameInput.value = "";
    // edadInput.value = "";
    // tipoInput.value = "";

    //opcion 2
    petForm.reset();   
  });

  const mostrarMascota = () => {
    // cardsContainer.innerHTML = "";
    // mostrar Mascotas
    console.log("entre a mostrar", mascotasTotal);
    mascotasTotal.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent =
        element.nombre +
        "  edad: " +
        element.edad +
        "   es un :  " +
        element.tipo;
      cardsContainer.appendChild(card);
    });
  };
   mostrarMascota();
   
});
