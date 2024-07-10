console.log("....");

const name = document.querySelector("#nombre");

const edad = document.querySelector(".edad");

const body = document.querySelector("body");

const button = document.querySelector("button");

console.log(name, edad);

body.style.backgroundColor = "blue";

button.classList.add("guardar");

// button.remove("guardar");

//-------------------------------//

const resul = document.getElementById("resultados");

let titulo = document.createElement("h1");

resul.appendChild(titulo);

resul.innerHTML = `
 <h1>Hola desde el innerHTML</h1>
 <butron>Aceptar</butron>
`


//-----------Funciones--------------------//

function CalcularSuma() {
    console.log("Estoy en la funcion 1")
    const  a = 5
    const b = 3
    const suma = a +b
      const resta = b - a;
      return resta; 

}

const CalcularSuma2 = () =>{
        console.log("Estoy en la funcion anonima 2");
        const a = 7;
        const b = 3;
        const suma = a + b;
        return suma;
  
}


CalcularSuma2();
