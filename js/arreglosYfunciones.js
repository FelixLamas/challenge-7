/* 
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
Output:
*/
// const meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];
// document.write("<h1>Lista de meses</h1>");
// document.write("<ul>");
// meses.forEach((element) => {
//   document.write(`<li>${element} </li>`);
// });
// document.write("</ul>");

/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
// let arregloCiudades = [];
// while (confirm("¿Deseas inhresar una ciudad?")) {
//   let ciudad = prompt("Ingresa el nombre de la ciudad:");
//   arregloCiudades.push(ciudad);
// }

// document.write(
//   `</br> El arreglo de ciudades tiene ${arregloCiudades.length} elementos`
// );
// document.write("<ul>");
// document.write(
//   "<li>La ciudad de la primer posicion del arreglo es: " +
//     arregloCiudades[0] +
//     "</li>"
// );
// document.write(
//   "<li>La ciudad de la tercer posicion del arreglo es: " +
//     arregloCiudades[2] +
//     "</li>"
// );
// document.write(
//   "<li>La ciudad de la ultima posicion del arreglo es: " +
//     arregloCiudades[arregloCiudades.length - 1] +
//     "</li>"
// );
// arregloCiudades.push("Paris");
// document.write(
//   "<li>La ciudad de la ultima posicion del arreglo es: " +
//     arregloCiudades[arregloCiudades.length - 1] +
//     "</li>"
// );
// document.write(
//   "<li>La ciudad de la segunda posicion del arreglo es: " +
//     arregloCiudades[1] +
//     "</li>"
// );
// arregloCiudades[1] = "Barcelona";
// document.write("</ul>");

// document.write("<h1>Arreglo de ciudades</h1>");
// document.write("<ul>");
// arregloCiudades.forEach((element) => {
//   document.write(`<li>${element} </li>`);
// });
// document.write("</ul>");

/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/
// let arregloSuma = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let arregloApariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// for (let i = 0; i < 50; i++) {
//   let dado1 = Math.floor(Math.random() * (7 - 1) + 1);
//   let dado2 = Math.floor(Math.random() * (7 - 1) + 1);
//   let suma = dado1 + dado2;
//   let indice = arregloSuma.indexOf(suma);
//   arregloApariciones[indice]++;
// }
// document.write("<table>");
// document.write("<thead>");
// document.write("<tr>");
// document.write("<th>Suma</th>");
// document.write("<th>Apariciones</th>");
// document.write("</tr>");
// document.write("</thead>");
// document.write("<tbody>");
// for (let j = 0; j < arregloSuma.length; j++) {
//   document.write("<tr>");
//   document.write("<td>" + arregloSuma[j] + "</td>");
//   document.write("<td>" + arregloApariciones[j] + "</td>");
//   document.write("</tr>");
// }
// document.write("</tbody>");
// document.write("</table>");

/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
// function esPar(numero = undefined) {
//   if (numero === undefined) {
//     return console.error("No se ingreso un valor");
//   }
//   if (typeof numero !== "number") {
//     return console.error("No se ingreso un número ");
//   }
//   if (numero % 2 === 0) {
//     return "El número ingresado es un numero par.";
//   } else {
//     return "El número ingresado NO es un numero par.";
//   }
// }

// let mensaje = esPar(10.5);
// document.write(mensaje);

/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
// const regexMin = /([a-z])/g;
// const regexMay = /([A-Z])/g;

// function informacionCadena(cadena = undefined) {
//   if (cadena === undefined) {
//     return console.error("No se ingreso la cadena de texto");
//   }
//   if (cadena === " " || cadena === "") {
//     return console.error("Se ingreso una cadena vacia");
//   }
//   if (typeof cadena === "number") {
//     return console.warn("Se ingreso un número, se debe ingresar texto");
//   }

//   if (
//     cadena.match(regexMin) &&
//     cadena.split("").filter((e) => e !== " ").length ===
//       cadena.match(regexMin).length
//   ) {
//     document.write("La cadena ingresada esta en minúscula");
//   } else if (
//     cadena.match(regexMay) &&
//     cadena.split("").filter((e) => e !== " ").length ===
//       cadena.match(regexMay).length
//   ) {
//     document.write("La cadena ingresada esta en mayúscula");
//   } else {
//     document.write("La cadena ingresada tiene mayúsculas y minúsculas");
//   }
// }

//informacionCadena("la vaca lola");
//informacionCadena("LA BACA LOL");
//informacionCadena("LA BACA oo");
//informacionCadena("");

/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58
*/
// function perimetro(base, altura) {
//   if (base < 0) {
//     return console.warn("Se ingreso un nńumero negativo");
//   }
//   if (altura < 0) {
//     return console.warn("Se ingreso un nńumero negativo");
//   }
//   return 2 * (base + altura);
// }
// let base = parseInt(prompt("Ingresa la base del rectángulo:"));
// let altura = parseInt(prompt("Ingresa la altura del rectángulo:"));
// const regexNum = /([0-9])$/;
// if (regexNum.test(base) && regexNum.test(altura)) {
//   let peri = perimetro(base, altura);
//   document.write("El perímetro del rectángulo es: " + peri);
// } else {
//   console.error("No se ingresaron los datos validos");
// }

/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/
function tablaMultiplicar(numero) {
  let resultado = 0;
  document.write("<table>");
  document.write("<thead>");
  document.write("<tr>");
  document.write("<th>Factores</th>");
  document.write("<th>Resultado</th>");
  document.write("</tr>");
  document.write("</thead>");
  document.write("<tbody>");
  for (let i = 0; i < 10; ++i) {
    resultado = numero * i;
    if (resultado <= 10) {
      document.write("<tr>");
      document.write("<td> " + numero + " * " + i + "</td>");
      document.write("<td> " + resultado + "</td>");
      document.write("</tr>");
    }
  }
  document.write("</tbody>");
  document.write("</table>");
}
let numero = parseInt(prompt("Ingrese un número entero positivo:"));
const regexNum = /([0-9])$/;
if (!regexNum.test(numero)) {
  console.error("No se ingreso un número");
}
if (numero < 0) {
  console.warn("Se ingreso un número negativo, debe ser positivo");
}
tablaMultiplicar(numero);
