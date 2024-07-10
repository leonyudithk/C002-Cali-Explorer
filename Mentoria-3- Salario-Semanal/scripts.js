function CalcularSalario() {
  //Ojo: lo verde es comentarios:  Leer los datos desde HTML a través del input
  const dias = document.getElementById("dias").value;
  const horas = document.getElementById("horas").value;
  const respuesta = document.getElementById("respuesta");

  console.log(dias, horas);

  // constantes que nos da el ejercicio
  const valor_hora_normal = 16000;
  const valor_hora_extra = 20000;
  let salario = 0;
  //Proceso

  // Calcular las horas que laboró durante toda la semana

  const total_horas = dias * horas;

  console.log(total_horas);

  // validar cuanto es el salario

  if (total_horas <= 40) {
    salario = total_horas * valor_hora_normal;
  } else {
    salario = (total_horas - 40) * valor_hora_extra + 40 * valor_hora_normal;
  }

  console.log(salario);

  //Salida

  respuesta.innerHTML = `
  <h1>El salario es de: </h1>
  <h3>${salario}</h3>
  `;
}

// document.addEventListener("DOMContentLoaded", function () {
//   //Ojo: lo verde es comentarios:  Leer los datos desde HTML a través del input
//   const dias = document.getElementById("dias").value;
//   const horas = document.getElementById("horas").value;
//   const respuesta = document.getElementById("respuesta");
//   const form = document.getElementById("FormCaptura");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("dias", event, event.target[0].value);
//         console.log("horas", event, event.target[1].value);
//   });
// });
