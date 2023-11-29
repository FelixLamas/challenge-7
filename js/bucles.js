/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/
// let edad = parseInt(prompt("Ingresa tu edad:"));
// const regexNum = /([0-9])$/;
// if (regexNum.test(edad) && edad > 0) {
//   if (edad > 18) {
//     document.write("Eres mayor de edad, ya puedes conducir");
//   } else {
//     document.write("NO eres mayor de edad, NO puedes conducir");
//   }
// } else {
//   document.write("NO se ingreso un número. O se ingreso un número negativo");
// }

/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido

*/
// let nota = parseInt(prompt("Ingresa la nota, debe ser un número entre 0 y 10"));
// const regexNum = /([0-9])$/;
// if (regexNum.test(nota)) {
//   if (0 <= nota && nota <= 10) {
//     switch (nota) {
//       case 0:
//       case 1:
//       case 2:
//         document.write("Muy deficiente");
//         break;
//       case 3:
//       case 4:
//         document.write("Insuficiente");
//         break;
//       case 5:
//       case 6:
//         document.write("Suficiente");
//         break;
//       case 7:
//         document.write("Bien");
//         break;
//       case 8:
//       case 9:
//         document.write("Notable");
//         break;
//       case 10:
//         document.write("Sobresaliente");
//         break;
//     }
//   } else {
//     document.write("Número erroneo.");
//   }
// } else {
//   document.write("Introduce un número válido.");
// }

/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/
// let cadenas = [];
// do {
//   cadenas = cadenas + " - " + prompt("Ingresa la cadena de texto.");
// } while (confirm("¿Deseas seguir ingresando cadenas?"));
// console.log(cadenas);

/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
// const regexNum = /([0-9])$/;
// let suma = 0;
// do {
//   let num = parseInt(prompt("Ingresa el número:"));
//   if (regexNum.test(num)) {
//     suma = suma + num;
//   } else {
//     alert("No se ingreso un número, intenta de nuevo");
//   }
// } while (confirm("¿Deseas seguir ingresando números?"));
// document.write("La suma de los números ingresados es: " + suma);

/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo: 
Input:  40773821 
Output: ‘L’
*/
// const regexNum = /([0-9])$/;
// const arregloLetras = [
//   "T",
//   "R",
//   "W",
//   "A",
//   "G",
//   "M",
//   "Y",
//   "F",
//   "P",
//   "D",
//   "X",
//   "B",
//   "N",
//   "J",
//   "Z",
//   "S",
//   "Q",
//   "V",
//   "H",
//   "L",
//   "C",
//   "K",
//   "E",
// ];
// while (confirm("¿Deseas ingresar un DNI?")) {
//   let dni = parseInt(prompt("Ingresa el dni, el rango es de 0 a 99999999"));
//   if (regexNum.test(dni) && 0 <= dni && dni <= 99999999) {
//     let resto = dni % 23;
//     document.write(
//       "La letra correspondiente al dni " +
//         dni +
//         " es " +
//         arregloLetras[resto] +
//         "</br>"
//     );
//   } else {
//     alert("No se ingreso un número válido, intenta de nuevo.");
//   }
// }

/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
*/
// for (let i = 1; i <= 30; i++) {
//   document.write("</br>");
//   for (let j = 1; j <= 30; j++) {
//     if (i >= j) {
//       document.write(i);
//     }
//   }
// }

/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
// let num = parseInt(
//   prompt("Ingresa el numero para la piramide:(no debe ser mayor que 50)")
// );
// const regexNum = /([0-9])$/;
// if (regexNum.test(num) && 0 <= num && num <= 50) {
//   for (let i = num; i >= 1; i--) {
//     document.write("</br>");
//     for (let j = num; j >= 1; j--) {
//       if (i >= j) {
//         document.write(i);
//       }
//     }
//   }
// } else {
//   document.write("No se ingreso un numero. O es mayor que 50");
// }

/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
……
*/
// let num = parseInt(
//   prompt("Ingresa el numero para la piramide:(no debe ser mayor que 50)")
// );
// const regexNum = /([0-9])$/;
// if (regexNum.test(num) && 0 <= num && num <= 50) {
//   for (let i = 1; i <= num; i++) {
//     document.write("</br>");
//     for (let j = 1; j <= num; j++) {
//       if (i >= j) {
//         document.write(j);
//       }
//     }
//   }
// } else {
//   document.write("No se ingreso un numero. O es mayor que 50");
// }

/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/
// for (let i = 1; i <= 500; i++) {
//   document.write("</br>");
//   document.write(i);
//   if (i % 4 === 0) {
//     document.write(" (Múltiplo de 4)");
//   } else if (i % 9 === 0) {
//     document.write(" (Múltiplo de 9)");
//   } else if (i % 5 === 0) {
//     document.write("</br>------------------------");
//   }
// }

/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
// let filas = parseInt(prompt("Ingresa el número de filas para la tabla:"));
// let columnas = parseInt(prompt("Ingresa el número de columnas para la tabla:"));
// const regexNum = /([0-9])$/;

// if (regexNum.test(filas) && regexNum.test(columnas)) {
//   let celda = filas * columnas;
//   document.write("<table>");
//   for (let i = 1; i <= filas; i++) {
//     document.write("<tr>");
//     for (let j = 1; j <= columnas; j++) {
//       document.write("<td>" + celda + "</td>");
//       celda--;
//     }
//     document.write("</tr>");
//   }
//   document.write("</table>");
// } else {
//   document.write("No se ingresaron números.");
// }

/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
// let edad = [];
// let nombre = [];
// for (let i = 0; i < 3; i++) {
//   edad[i] = parseInt(prompt("Ingresa la edad:"));
//   nombre[i] = prompt("Ingresa el nombre:");
// }
// let mayorEdad = Math.max(...edad);
// console.log(mayorEdad);
// let indice = edad.indexOf(mayorEdad);
// document.write("El mayor es: " + nombre[indice]);

/*
12- Realiza un script que genere un número aleatorio entre 1 y 99
*/
// let numAleatorio = Math.floor(Math.random() * (99 - 1) + 1);
// document.write("El número aleatorio es: " + numAleatorio);

/*
13- Realiza un script que pida un texto y lo muestre en mayúsculas.
*/
// let texto = prompt("Ingresa un texto:");
// document.write("El texto ingresado es: " + texto + "</br>");
// document.write("Y el texto en mayúscula es: " + texto.toUpperCase());

/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
// let cadena = prompt("Ingresa la cadena de texto:");
// console.log(cadena.split("").join("-"));

/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
// let texto = prompt("Ingresa el texto:");
// const regexVocal = /([aeiouAEIOU])/g;
// let cantidadVocales = texto.match(regexVocal);
// console.log(cantidadVocales);
// document.write(
//   "La cantidad de vocales que hay en el texto es: " + cantidadVocales.length
// );

/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
// let cadena = prompt("Ingresa la cadena de texto:");
// let cadenaInvertida = cadena.split("").reverse().join("");
// document.write("La cadena invertida es: " + cadenaInvertida);

/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
*/
// let texto = prompt("Ingresa la cadena de texto:");
// const regexVocal = /([aeiouAEIOU])/;
// let arregloVocal = regexVocal.exec(texto);
// document.write(
//   "La primer vocal es " +
//     arregloVocal[0] +
//     "y esta en la posicion: " +
//     texto.indexOf(arregloVocal[0])
// );
