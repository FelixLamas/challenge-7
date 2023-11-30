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
