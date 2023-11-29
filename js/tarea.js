// Tarea

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
/*let numero = parseInt(
  prompt("Ingrese un numero para verificar si es par o no.")
);
if (numero % 2 === 0) {
  console.log("El numero ingresado " + numero + " es un numero par");
} else {
  console.log("El numero ingresado " + numero + " NO es un numero par");
}*/

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
// let numero = parseInt(
//   prompt("Ingrese un numero para comprobar si es positivo , negativo o cero")
// );
// if (numero > 0) {
//   console.log("El numero ingresado es positivo");
// } else if (numero < 0) {
//   console.log("El numero ingresado es negativo");
// } else {
//   console.log("Eel numero ingresado es cero");
// }

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
// let numero1 = parseFloat(prompt("Ingresa el primer numero: "));
// let numero2 = parseFloat(prompt("Ingresa el segundo numero: "));
// let mayor = Math.max(numero1, numero2);
// console.log("El mayor de los numeros ingresados es: " + mayor);

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
// let contrasenia = prompt(
//   "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
// );
// const regexContrasenia =
//   /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
// if (8 <= contrasenia.length && contrasenia.length <= 16) {
//   if (regexContrasenia.test(contrasenia)) {
//     console.log("La contraseña ingresada cumple con los requisitos.");
//   } else {
//     console.log("La contraseña ingresada NO cumple con los requisitos.");
//   }
// } else {
//   console.log(
//     "La contraseña No cumple con la cantidad de caracteres, recuerda entre 8 y 16"
//   );
// }

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
// let nota = parseInt(prompt("Ingrese la nota a cargar:"));
// if (nota >= 70) {
//   console.log("La calificacion: " + nota + " es APROBATORIA");
// } else {
//   console.log("La calificacion: " + nota + " NO es APROBATORIA");
// }

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
// let letra = prompt("Ingresa una letra");
// const regexLetra = /([a-z A-Z])$/;
// const regexVocal = /([a e i o u A E I O U])$/;
// if (regexLetra.test(letra)) {
//   //valido que lo que se ingresa sea una letra
//   if (regexVocal.test(letra)) {
//     //valido si es una vocal o consonante
//     console.log("La letra ingresada es una vocal");
//   } else {
//     console.log("La letra ingresada es una consonante");
//   }
// } else {
//   console.log("No se ingreso una letra");
// }

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
// let dia = parseInt(prompt("Ingresa un numero del 1 al 7"));
// if (typeof dia === "number" && 1 <= dia && dia <= 7) {
//   switch (dia) {
//     case 1:
//       console.log("Dia Lunes");
//       break;
//     case 2:
//       console.log("Dia Martes");
//       break;
//     case 3:
//       console.log("Dia Miercoles");
//       break;
//     case 4:
//       console.log("Dia JUeves");
//       break;
//     case 5:
//       console.log("Dia Viernes");
//       break;
//     case 6:
//       console.log("Dia Sabado");
//       break;
//     case 7:
//       console.log("Dia Domingo");
//       break;
//   }
// } else {
//   console.log("NO se ingreso un numero o no esta en el rango indicado");
// }

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
// let numero = parseInt(prompt("Ingrese un numero para verificar si es primo"));
// let contador = 0;
// for (let i = 1; i <= numero; i++) {
//   if (numero % i === 0) {
//     contador++;
//   }
// }
// if (contador === 2) {
//   console.log("El numero ingresado es un numero PRIMO");
// } else {
//   console.log("El numero ingresado NO es un numero PRIMO");
// }

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
// let edad = parseInt(prompt("Ingrese su edad:"));
// if (edad >= 0) {
//   if (edad >= 18) {
//     console.log("Eres mayor de edad");
//   } else {
//     console.log("Eres menor de edad");
//   }
// } else {
//   console.log("No ingresaste una edad valida");
// }

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
// let num1 = parseInt(prompt("Ingrese el primer numero"));
// let num2 = parseInt(prompt("Ingrese el segundo numero"));
// let suma = num1 + num2;
// const regexNum = /([0-9])$/;
// if (regexNum.test(num1) && regexNum.test(num2)) {
//   if (suma > 100) {
//     console.log(
//       "La suma de los numeros ingresado es" + suma + " y es mayor que 100"
//     );
//   } else if (suma < 100) {
//     console.log(
//       "La suma de los numeros ingresado es" + suma + " y es menor que 100"
//     );
//   } else {
//     console.log(
//       "La suma de los numeros ingresado es" + suma + " y es igual que 100"
//     );
//   }
// } else {
//   console.log("No se ingresaron datos correctos");
// }

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
// let num1 = parseInt(prompt("Ingrese el primer numero entero: "));
// let num2 = parseInt(prompt("Ingrese el segundo numero entero: "));
// let num3 = parseInt(prompt("Ingrese el tercer numero entero: "));

// let max = Math.max(num1, num2, num3);
// console.log("El mayor de los trs numero es ingresado es: " + max);

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
// let letra = prompt("ingresa una letra");
// const regexLetraMayus = /([A-Z])$/;
// const regexLetraMinus = /([a-z])$/;
// if (regexLetraMayus.test(letra) || regexLetraMinus.test(letra)) {
//   if (regexLetraMayus.test(letra)) {
//     console.log("La letra es una letra mayúscula");
//   } else {
//     console.log("La letra es una letra minúscula");
//   }
// } else {
//   console.log("No se ingreso una letra.");
// }

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
// const regexNum = /([0-9])$/;
// let num = parseInt(prompt("Ingrese un numero Natural"));
// if (regexNum.test(num)) {
//   let acumulador = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       acumulador = acumulador + i;
//     }
//   }
//   if (acumulador === num) {
//     console.log("El número ingresado es un número perfecto");
//   } else {
//     console.log("El número ingresado NO es un número perfecto");
//   }
// } else {
//   console.log("No se ingreso un numero Natural");
// }

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

//TAREA 1 Switch

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// const regexNum = /([0-9])$/;
// let num = parseInt(prompt("Ingrese un numero del 1 al 12"));
// if (regexNum.test(num)) {
//   if (1 <= num && num <= 12) {
//     switch (num) {
//       case 1:
//         console.log("Enero");
//         break;
//       case 2:
//         console.log("Febrero");
//         break;
//       case 3:
//         console.log("Marzo");
//         break;
//       case 4:
//         console.log("Abril");
//         break;
//       case 5:
//         console.log("Mayo");
//         break;
//       case 6:
//         console.log("Junio");
//         break;
//       case 7:
//         console.log("Julio");
//         break;
//       case 8:
//         console.log("Agosto");
//         break;
//       case 9:
//         console.log("Septiembre");
//         break;
//       case 10:
//         console.log("Octubre");
//         break;
//       case 11:
//         console.log("Noviembre");
//         break;
//       case 12:
//         console.log("Diciembre");
//         break;
//     }
//   } else {
//     console.log("No se ingreso nu número del 1 al 12");
//   }
// } else {
//   console.log("No se ingreso un número.");
// }

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// const regexNum = /([1-7])$/;
// let num = parseInt(prompt("Ingrese un numero del 1 al 7"));
// if (regexNum.test(num)) {
//   switch (num) {
//     case 1:
//       console.log("Lunes");
//       break;
//     case 2:
//       console.log("Martes");
//       break;
//     case 3:
//       console.log("Miercoles");
//       break;
//     case 4:
//       console.log("Jueves");
//       break;
//     case 5:
//       console.log("Viernes");
//       break;
//     case 6:
//       console.log("Sabado");
//       break;
//     case 7:
//       console.log("Domingo");
//       break;
//   }
// } else {
//   console.log("No se ingreso un número. O no esta en en rango de 1 a 7");
// }

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// let letra = prompt("Ingresa una letra");
// const regexLetra = /([a-z A-Z])$/;
// if (regexLetra.test(letra)) {
//   //valido que lo que se ingresa sea una letra
//   let minuscula = letra.toLocaleLowerCase();
//   switch (minuscula) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       console.log("La letra ingresada es una vocal");
//       break;
//     case "b":
//     case "c":
//     case "d":
//     case "f":
//     case "g":
//     case "h":
//     case "j":
//     case "k":
//     case "l":
//     case "m":
//     case "n":
//     case "ñ":
//     case "p":
//     case "q":
//     case "r":
//     case "s":
//     case "t":
//     case "v":
//     case "w":
//     case "x":
//     case "y":
//     case "z":
//       console.log("La letra ingresada es una consonante");
//       break;
//   }
// } else {
//   console.log("No se ingreso una letra");
// }

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// const regexNum = /([1-5])$/;
// let num = parseInt(prompt("Ingrese un numero del 1 al 5"));
// let semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

// if (regexNum.test(num)) {
//   switch (num) {
//     case 1:
//       console.log(semana[0]);
//       break;
//     case 2:
//       console.log(semana[1]);
//       break;
//     case 3:
//       console.log(semana[2]);
//       break;
//     case 4:
//       console.log(semana[3]);
//       break;
//     case 5:
//       console.log(semana[4]);
//       break;
//   }
// } else {
//   console.log("No se ingreso un número. O no esta en en rango de 1 a 5");
// }

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// let letra = prompt("Ingresa una letra");
// const regexLetra = /([a-z A-Z])$/;
// if (regexLetra.test(letra)) {
//   switch (letra) {
//     case letra.toLocaleLowerCase():
//       console.log("La letra es una letra minúscula");
//       break;
//     default:
//       console.log("La letra es una letra mayúscula");
//       break;
//   }
// } else {
//   console.log("No se ingreso una letra.");
// }

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// const regexNum = /([0-9])$/;
// let num = parseInt(prompt("Ingrese un numero del 0 al 10"));
// if (regexNum.test(num)) {
//   switch (num) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//       console.log("Suspenso");
//       break;
//     case 6:
//     case 7:
//       console.log("Aprobado");
//       break;
//     case 8:
//     case 9:
//       console.log("Notable");
//       break;
//     case 10:
//       console.log("Sobresaliente");
//       break;
//   }
// } else {
//   console.log("No se ingreso un numero. O no esta en el rango del 0 al 10");
// }

//TAREA 2 Ciclos
// Imprimir los números pares del 2 al 20 en la consola.
// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// let cadena = prompt("Ingrese una cadena:");
// const regexLetra = /([a-z A-Z])$/;
// if (regexLetra.test(cadena)) {
//   for (let i = 0; i < cadena.length; i++) {
//     if (cadena[i] === cadena[i].toUpperCase() && cadena[i] !== " ") {
//       console.log(cadena[i]);
//     }
//   }
// } else {
//   console.log("No se ingreso una cadena valida.");
// }

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// const regexNum = /([0-9])$/;
// let num = parseInt(prompt("Ingrese un número:"));
// if (regexNum.test(num) && num >= 1) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("No se ingreso un número");
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// let cadena = prompt("Ingrese una cadena de números separados por coma:");
// let arregloNum = cadena.split(",");
// let mayor = parseInt(arregloNum[0]);
// console.log(arregloNum);
// for (let i = 1; i < arregloNum.length; i++) {
//   if (parseInt(arregloNum[i]) > mayor) {
//     mayor = parseInt(arregloNum[i]);
//   }
// }
// console.log("El número mas grande de la serie es: " + mayor);

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// let cadena = prompt("Ingrese una cadena:");
// const regexLetra = /([a-z A-Z])$/;
// if (regexLetra.test(cadena)) {
//   let medio = Math.trunc(cadena.length / 2);
//   let bandera = true;
//   let indiceInverso = cadena.length - 1;
//   for (let i = 0; i < medio; i++) {
//     if (cadena[i] !== cadena[indiceInverso]) {
//       bandera = false;
//     }
//     indiceInverso--;
//   }
//   if (bandera === true) {
//     console.log("La cadena ingresada es un palíndromo");
//   } else {
//     console.log("La cadena ingresada NO es un palíndromo");
//   }
// } else {
//   console.log("No se ingreso una cadena valida");
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// let cadena = prompt("Ingrese una cadena de números separados por coma:");
// let arregloNum = cadena.split(",");
// let suma = 0;
// for (let i = 0; i < arregloNum.length; i++) {
//   if (parseInt(arregloNum[i]) % 2 === 0) {
//     suma = suma + parseInt(arregloNum[i]);
//   }
// }
// if (suma === 0) {
//   console.log(
//     "No se ingreso una cadena valida o no hay numeros pares en la cadena"
//   );
// } else {
//   console.log("La suma de los números pares de la cadena es: " + suma);
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// let cadena = prompt("Ingrese una cadena de números separados por coma:");
// let arregloNum = cadena.split(",");
// let cantidad = 0;
// for (let i = 0; i < arregloNum.length; i++) {
//   if (parseInt(arregloNum[i]) <= 0) {
//     cantidad++;
//   }
// }
// if (cantidad === 0) {
//   console.log(
//     "No se ingreso una cadena valida o no hay numeros negativos en la cadena"
//   );
// } else {
//   console.log("La cantidad de números negativos de la cadena es: " + cantidad);
// }

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// const regexNum = /([0-9])$/;
// let num = parseInt(prompt("Ingrese un número:"));
// if (regexNum.test(num)) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log("No se ingreso un numero");
// }

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// let cadena = prompt("Ingrese una cadena de números separados por coma:");
// let arregloNum = cadena.split(",");
// let min = parseInt(arregloNum[0]);
// for (let i = 1; i < arregloNum.length; i++) {
//   if (min > arregloNum[i]) {
//     min = parseInt(arregloNum[i]);
//   }
// }
// if (arregloNum.length !== 0) {
//   console.log("El número mas pequeño de la serie ingresada es: " + min);
// } else {
//   console.log("No se ingreso una cadena valida");
// }

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

//TAREA 3 Arrays
// Dado un array de números, escribir una función que retorne el número más grande del array.
// let arregloNum = [2, 3, 500, 6, 80, 90];
// console.log("El número mas grande del arreglo es: " + Math.max(...arregloNum));

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// let arregloNum = [2, 3, 1, 5, 1, 7, 8, 9];

// function pares(...arregloNum) {
//   let arregloPares = [];
//   for (let i = 0; i < arregloNum.length; i++) {
//     if (arregloNum[i] % 2 === 0) {
//       arregloPares.push(arregloNum[i]);
//     }
//   }
//   return arregloPares;
// }

// console.log("El arreglo con numeros pares es:" + pares(...arregloNum));

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// let arregloNum = [2, 3, 4, 5];
// function suma(...arregloNum) {
//   let suma = 0;
//   for (let i = 0; i < arregloNum.length; i++) {
//     suma = suma + arregloNum[i];
//   }
//   return suma;
// }
// console.log(
//   "La suma de todos los números del arreglo es:" + suma(...arregloNum)
// );

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// let cadena = "hola mundo desde rollingcode";
// function cambioMayuscula(...cadena) {
//   return cadena.join("").toUpperCase();
// }
// console.log("La cadena modificada es: " + cambioMayuscula(...cadena));

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// let arregloNum = [2, 3, 4, 5, 6, 7, 8, 9];
// let numX = 7;
// function mayoresX(arregloNum, numX) {
//   let nuevoArreglo = [];
//   for (let i = 0; i < arregloNum.length; i++) {
//     if (arregloNum[i] > numX) {
//       nuevoArreglo.push(parseInt(arregloNum[i]));
//     }
//   }
//   return nuevoArreglo;
// }
// console.log(
//   "El arreglo con los números mayores que " +
//     numX +
//     " es " +
//     mayoresX(arregloNum, numX)
// );

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// let arregloNum = [2, 30, 2, 6, 40, 8, 5, 9];
// let arregloMayorDiez = [];
// function sumar(arregloNum, arregloMayorDiez) {
//   let suma = 0;
//   for (let i = 0; i < arregloNum.length; i++) {
//     suma = suma + parseInt(arregloNum[i]);
//     if (parseInt(arregloNum[i]) > 10) {
//       arregloMayorDiez.push(arregloNum[i]);
//     }
//   }
//   return suma;
// }
// console.log(
//   "La suma de todos los números del arreglo es: " +
//     sumar(arregloNum, arregloMayorDiez) +
//     " Y el arreglo con número mayores es: " +
//     arregloMayorDiez
// );

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// let arregloCadenas = ["hola", "felix", "lucia", "sofy", "juliana"];
// function arregloCaracteres(arregloCadenas) {
//   let nuevoArreglo = [];
//   for (let i = 0; i < arregloCadenas.length; i++) {
//     if (arregloCadenas[i].length > 5) {
//       nuevoArreglo.push(arregloCadenas[i]);
//     }
//   }

//   return nuevoArreglo;
// }
// console.log(arregloCaracteres(arregloCadenas));

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// let arregloCadenas = ["hola", "felix", "asturias", "sofy", "juliana"];
// function arregloCaracteres(arregloCadenas) {
//   let nuevoArreglo = [];
//   for (let i = 0; i < arregloCadenas.length; i++) {
//     console.log(arregloCadenas[i][0]);
//     if (arregloCadenas[i].length > 5 && arregloCadenas[i][0] === "a") {
//       nuevoArreglo.push(arregloCadenas[i]);
//     }
//   }

//   return nuevoArreglo;
// }
// console.log(arregloCaracteres(arregloCadenas));

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
let arregloNum = [2, 3, 40, 5, 6, 7, 8, 9];
let numX = 5;
function mayoresX(arregloNum, numX) {
  let nuevoArreglo = [];
  for (let i = 0; i < arregloNum.length; i++) {
    if (arregloNum[i] > numX) {
      nuevoArreglo.push(parseInt(arregloNum[i]));
    }
  }
  if (nuevoArreglo.length > 3) {
    nuevoArreglo.splice(3);
  }
  return nuevoArreglo;
}
console.log(
  "El arreglo con los números mayores que " +
    numX +
    " es " +
    mayoresX(arregloNum, numX)
);
