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
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let suma = num1 + num2;
const regexNum = /([0-9])$/;
if (regexNum.test(num1) && regexNum.test(num2)) {
  if (suma > 100) {
    console.log(
      "La suma de los numeros ingresado es" + suma + " y es mayor que 100"
    );
  } else if (suma < 100) {
    console.log(
      "La suma de los numeros ingresado es" + suma + " y es menor que 100"
    );
  } else {
    console.log(
      "La suma de los numeros ingresado es" + suma + " y es igual que 100"
    );
  }
} else {
  console.log("No se ingresaron datos correctos");
}

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

//TAREA 1 Switch

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

//TAREA 2 Ciclos

// Imprimir los números pares del 2 al 20 en la consola.
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

//TAREA 3 Arrays

// Dado un array de números, escribir una función que retorne el número más grande del array.

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
