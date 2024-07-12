let mascotas = [
  "gatos",
  "perros",
  "hamster",
  "conejos",
  "serpientes",
  "Pollitos",
];

console.table(mascotas);

console.log("Numero de elementos. ", mascotas.length);

console.log(mascotas[1]);

// -----------------------Métodos del Arrays---------//

// --push añadir al final
mascotas.push("Loro");
console.table(mascotas);

// --pop eliminar el último elemento del array
mascotas.pop();
console.table(mascotas);

// --unshift añadir al inicio
mascotas.unshift("Canario", "Tarantulas");
console.table(mascotas);

// --shift Elimina el primer elemento del arreglo
mascotas.shift();
console.table(mascotas);

// --IndexOf devuelve la posición del elemento a buscar
let posicionElemento = mascotas.indexOf("hamster");
console.log(posicionElemento);

// includes, para buscar un elemento especifico
const incluir = mascotas.includes("caballos");
console.log(incluir);

const incluir2 = mascotas.includes("gatos");
console.log(incluir2);

// slice hace una copia del array y devuelve desde el inicio hasta el final que le indiquemos
const copy_mascotas = mascotas.slice(2, 6);
console.log(copy_mascotas);
console.log(mascotas);

//splice cambia el contenido eliminando el elemento y remplazando por uno nuevo
const resultSplice = mascotas.splice(1, 1, "Pollitos");
console.table("Resultado Splice", resultSplice);
console.table("Original", mascotas);

// Recorrido de los Arrays

// -----actualmento usamos un for para recorrer un arreglo
for (let i = 0; i < mascotas.length; i++) {
  if (mascotas[i] === "conejos") {
    console.log("Lo encontre", mascotas[i], "en el index: ", i);
  }
  console.log(mascotas[i]);
}

mascotas.forEach((element, index) => {
  console.log(element, "Index", index);
});

// .map

mascotas.map((element) => {
  console.log(element);
});

// Métodos de busquedas

console.log(mascotas);

// Filter - devuelve array todos los que correpondan con la condicion
// hace el recorrido completo del array
const resultFilter = mascotas.filter((fil) => fil === "Pollitos");
console.log("Respuesta del Filter", resultFilter);

//find devuelde el primero que encuentre y lo que devuelve es un objeto
const resultFind = mascotas.find((fil) => fil === "Pollitos");
console.log("Respuesta del Filter", resultFind);

// ---- Guardar en la Storage
localStorage.setItem("Mas", JSON.stringify(mascotas));

// --- Traer la información de la storage

const result = JSON.parse(localStorage.getItem("Mas"));
const result2 = localStorage.getItem("Mas");
console.table(result);
console.table(result2);
console.table(result[2]);
console.table(result2[2]);
