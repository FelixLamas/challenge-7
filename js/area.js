/* Obtener la base y la altura de un triangulo, y el radio de un circulo. Mostrar por consola el area del triangulo y del circulo con un mensaje detallando cual es cual.

Recordar:
--Area de triangulo: (base x altura)/2
--Area del circulo: π(pi) x radio^2

*Para aumentar la dificultad lograr que el usuario brinde los datos necesarios para calcular (interactuando) y mostrarle en pantalla el resultado. */

//variables del triangulo
let base, altura, areaTriangulo;

//variables del circulo;
let radio, areaCirculo;

// se utiliza el prompt para obtener los datos del triangulo
base = parseFloat(prompt("Ingrese la base del triangdulo: "));
altura = parseFloat(prompt("Ingrese la altura del triangdulo: "));

//calculo del area del triangulo
areaTriangulo = (base * altura) / 2;
console.log("El area del triangulo es: " + areaTriangulo);
document.write("El area del triangulo es: " + areaTriangulo);

// se utiliza el prompt para obtener los datos del circulo
radio = parseFloat(prompt("Ingrese el radio del circulo: "));

//calculo del area del circulo
areaCirculo = Math.PI * Math.pow(radio, 2);
console.log("El area del circulo es:" + areaCirculo);
document.write("<br/>El area del circulo es:" + areaCirculo);
