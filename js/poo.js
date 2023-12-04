/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender(); auto encendido
objeto.apadar(); El auto se apagó
*/
// const auto = {
//   color: "blanco",
//   marca: "ford",
//   modelo: "fiesta",
//   encender() {
//     console.log("El auto está encendido");
//   },
//   apagar() {
//     console.log("El auto está apagado");
//   },
// };
// console.log(
//   "El objeto auto es de color " +
//     auto.color +
//     ", es de la marca " +
//     auto.marca +
//     " y del modelo " +
//     auto.modelo
// );
// auto.encender();
// auto.apagar();

/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
// class cuenta {
//   constructor(titular = "Alex", saldo = 0) {
//     this.titular = titular;
//     this.saldo = saldo;
//   }
//   ingresar(cantidad = 0) {
//     this.saldo += cantidad;
//   }
//   extraer(cantidad = 0) {
//     this.saldo -= cantidad;
//   }
//   informar() {
//     return `El titular de la cuenta es: ${this.titular} y el saldo de la cuenta es: ${this.saldo}`;
//   }
// }

// const usuario = new cuenta();
// console.log(usuario.informar());
// usuario.ingresar(50000);
// console.log(usuario.informar());
// usuario.extraer();
// console.log(usuario.informar());

/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/
// class rectangulo {
//   constructor(base = 0, altura = 0) {
//     this.base = base;
//     this.altura = altura;
//   }
//   getBase() {
//     return this.base;
//   }
//   getAltura() {
//     return this.altura;
//   }
//   setBase() {
//     this.base = prompt("Ingrese la nueva base del rectángulo:");
//   }
//   setAltura() {
//     this.altura = prompt("Ingrese la nueva altura del rectángulo:");
//   }
//   perimetro() {
//     console.log(
//       "El perimetro del rectangulo es: " +
//         (parseInt(2 * this.base) + parseInt(2 * this.altura))
//     );
//   }
//   area() {
//     console.log("El area del rectangulo es: " + this.base * this.altura);
//   }
// }
// const rect = new rectangulo(5, 3);
// console.log(
//   `La base del rectangulo es: ${rect.getBase()} y la altura es: ${rect.getAltura()}`
// );
// rect.area();
// rect.perimetro();
// rect.setAltura();
// rect.area();

/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/
// class producto {
//   constructor(codigo = 0, nombre = "", precio = 0.0) {
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
//   imprimirDatos() {
//     console.log(
//       `El codigo del producto es: ${this.codigo}, el nombre del producto es: ${this.nombre} y el precio es: ${this.precio}`
//     );
//   }
// }
// const arregloProductos = [];
// const producto1 = new producto(10, "gaseosa", 750);
// arregloProductos.push(producto1);
// const producto2 = new producto(20, "pan", 50);
// arregloProductos.push(producto2);
// const producto3 = new producto(30, "golosina", 550);
// arregloProductos.push(producto3);

// arregloProductos.forEach((elemento) => {
//   elemento.imprimirDatos();
// });

/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/
// class persona {
//   constructor(
//     nombre = "",
//     edad = 0,
//     sexo = undefined,
//     peso = 0,
//     altura = 0,
//     anioNacimiento = 1930
//   ) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.dni = 0;
//     this.sexo = sexo;
//     this.peso = peso;
//     this.altura = altura;
//     this.anioNacimiento = anioNacimiento;
//   }
//   esMayorDeEdad() {
//     if (this.edad >= 18) {
//       return console.log("Eres mayor de edad;");
//     }
//   }
//   mostrarDatos() {
//     return `Nombre ${this.nombre}, edad ${this.edad}, dni ${this.dni}, sexo ${this.sexo}, peso ${this.peso}, altura ${this.altura} y año de nacimiento ${this.anioNacimiento}`;
//   }
//   generaDNI() {
//     this.dni = Math.floor(Math.random() * (100000000 - 10000000) + 10000000);
//   }
//   mostrarGeneracion() {
//     if (1994 <= this.anioNacimiento && this.anioNacimiento <= 2010) {
//       return console.log(
//         "Pertenece a la generación Z y el rasgo caracteristico de al generacion es la Irreverencia"
//       );
//     }
//     if (1981 <= this.anioNacimiento && this.anioNacimiento <= 1993) {
//       return console.log(
//         "Pertenece a la generación Y y el rasgo caracteristico de al generacion es la Frustración"
//       );
//     }
//     if (1969 <= this.anioNacimiento && this.anioNacimiento <= 1980) {
//       return console.log(
//         "Pertenece a la generación X y el rasgo caracteristico de al generacion es la Obsesión por el Éxito"
//       );
//     }
//     if (1949 <= this.anioNacimiento && this.anioNacimiento <= 1968) {
//       return console.log(
//         "Pertenece a la generación Baby Boom y el rasgo caracteristico de al generacion es la Ambición"
//       );
//     }
//     if (1930 <= this.anioNacimiento && this.anioNacimiento <= 1948) {
//       return console.log(
//         "Pertenece a la generación Silent Generation y el rasgo caracteristico de al generacion es la Austeridad"
//       );
//     }
//   }
// }

// const sujeto = new persona("felix", 36, "masculino", 85, 1.7, 1955);
// console.log(sujeto.mostrarDatos());
// sujeto.generaDNI();
// console.log(sujeto.mostrarDatos());
// sujeto.mostrarGeneracion();

/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/
// class libro {
//   constructor(isbn = "", titulo = "", autor = "", numPaginas = 0) {
//     this.isbn = isbn;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.numPaginas = numPaginas;
//   }
//   getIsbn() {
//     return this.isbn;
//   }
//   setIsbn(nuevoIsbn) {
//     this.isbn = nuevoIsbn;
//   }
//   getTitulo() {
//     return this.titulo;
//   }
//   setTitulo(nuevoTitulo) {
//     this.titulo = nuevoTitulo;
//   }
//   getAutor() {
//     return this.autor;
//   }
//   setAutor(nuevoAutor) {
//     this.autor = nuevoAutor;
//   }
//   getNumPaginas() {
//     return this.numPaginas;
//   }
//   setNumPaginas(nuevoNumPaginas) {
//     this.numPaginas = nuevoNumPaginas;
//   }
//   mostrarLibro() {
//     console.log(
//       `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numPaginas}`
//     );
//   }
// }

// const libro1 = new libro("dasdasd", "felix", "susana", 36);
// libro1.mostrarLibro();
// const libro2 = new libro("fghfghfgh", "july", "ines", 38);
// libro2.mostrarLibro();
// if (libro1.getNumPaginas() >= libro2.getNumPaginas()) {
//   console.log("El libro " + libro1.getTitulo() + " Tiene mas paginas");
// } else {
//   console.log("El libro " + libro2.getTitulo() + " Tiene mas paginas");
// }

/*
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
class Contacto {
  constructor(nombre = "", telefono = "") {
    this.nombre = nombre;
    this.telefono = telefono;
  }
  mostrarContacto() {
    document.write(
      "Datos del contacto:</br>Nombre " +
        this.nombre +
        " telefono " +
        this.telefono
    );
  }
}
class Agenda {
  constructor(cantidadContactos = 10) {
    this.cantidadContactos = cantidadContactos;
    this.arregloContactos = [];
  }
  aniadirContacto(nombre, telefono) {
    if (this.huecosLibres() > 0) {
      const nuevoContacto = new Contacto(nombre, telefono);
      this.arregloContactos.push(nuevoContacto);
      document.write("Se agrego correctamente el contacto </br>");
    } else {
      this.agendaLlena();
    }
  }
  huecosLibres() {
    if (this.cantidadContactos > this.arregloContactos.length) {
      return this.cantidadContactos - this.arregloContactos.length;
    } else {
      return 0;
    }
  }
  agendaLlena() {
    if (this.huecosLibres === 0) {
      return console.log("Agenda llena");
    }
  }
  existeContacto(contacto) {
    if (
      this.arregloContactos.filter((e) => e.nombre === contacto).length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  listarContactos() {
    this.arregloContactos.forEach((elemento) => {
      elemento.mostrarContacto();
      document.write("</br>");
    });
  }
  buscarContacto(nombre) {
    if (this.existeContacto(nombre)) {
      this.arregloContactos.forEach((e) => {
        if (e.nombre === nombre) {
          document.write("El telefono del contacto es:" + e.telefono);
        }
      });
    } else {
      document.write("El contacto no existe en la agenda");
    }
  }
}

const agend = new Agenda(3);
agend.aniadirContacto("felix", 2131321321);
agend.aniadirContacto("lucy", 53347711);
agend.aniadirContacto("sofy", 3213212321);
agend.listarContactos();
agend.buscarContacto("lucy");
