// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
//alert("Primer ejercicio del tp1");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
//document.write("Hola mundo practicando con js</br>");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// let suma = 3 + 5;
// document.write("La suma de 3 + 5 = " + suma);

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder*/
// let usuario = prompt("Ingresa el nombre de usuario");
// document.write("</br> Hola " + usuario);

/* 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseIn */
// let num1 = parseInt(prompt("Ingrese el primer numero: "));
// let num2 = parseInt(prompt("Ingrese el segundo numero: "));
// document.write("</br> La suma de los dos numeros ingresados es: ", num1 + num2);
/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3

Output: El 15 es el número más grande */

// let num3 = parseInt(prompt("Ingrese el primer numero: "));
// let num4 = parseInt(prompt("Ingrese el segundo numero: "));
// document.write(
//   "</br> El mayor de los numeros ingresados es: " + Math.max(num3, num4)
// );

/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9

Output: El 15 es el número más grande */

// let num5 = parseInt(prompt("Ingrese el primer numero: "));
// let num6 = parseInt(prompt("Ingrese el segundo numero: "));
// let num7 = parseInt(prompt("Ingrese el tercer numero: "));
// document.write(
//   "</br> El mayor de los numeros ingresados es: " + Math.max(num5, num6, num7)
// );

/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.*/

// let divisible = parseInt(prompt("Ingrese el numero: "));
// if (divisible % 2 === 0) {
//   document.write("El numero ingresado " + divisible + "SI es divisible por 2.");
// } else {
//   document.write("El numero ingresado " + divisible + "No es divisible por 2.");
// }

/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo*/
// let frase = prompt("Ingrese la frase:");
// let vocales = [];
// for (let i = 0; i < frase.length; i++) {
//   if (
//     frase[i] === "a" ||
//     frase[i] === "e" ||
//     frase[i] === "i" ||
//     frase[i] === "o" ||
//     frase[i] === "u"
//   ) {
//     vocales.push(frase[i]);
//   }
// }
// document.write("</br>" + vocales);

/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20
Output: El 20 es divisible por 2.*/
// let divisible4 = parseFloat(
//   prompt("Ingresa el numero para verificar si es divisible por 2, 3, 5 o 7:")
// );
// if (divisible4 % 2 === 0) {
//   document.write("El numero ingresado es divisible por 2");
// } else if (divisible4 % 3 === 0) {
//   document.write("El numero ingresado es divisible por 3");
// } else if (divisible4 % 5 === 0) {
//   document.write("El numero ingresado es divisible por 5");
// } else if (divisible4 % 7 === 0) {
//   document.write("El numero ingresado es divisible por 7");
// } else {
//   document.write("El numero ingresado NO es divisible por 2, 3, 5, 7");
// }

/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.*/
