function calcular() {
  console.log("hola");
  let compra = document.getElementById("totalCompra").value;
  console.log(compra);

  const desc = compra * 0.15;
  const pagar = compra - desc;

  console.log(
    `La compra fue de: ${compra}, el descuento fue de: ${desc}, y lo que debe pagar es: ${pagar}`
  );

  document.getElementById(
    "resultado"
  ).innerText = `La compra fue de: ${compra}, el descuento fue de: ${desc}, y lo que debe pagar es: ${pagar}`;
}
