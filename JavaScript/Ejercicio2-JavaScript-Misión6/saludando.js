/*
-Crea un archivo llamado saludando.js
-Escribir un programa que imprima Buenos días si el número asignado a la variable time es menor que 12. Si el numero es mayor o igual a 12 y menor o igual a 18, el programa debe imprimir Buenas tardes, de lo contrario debe imprimir Buenas noches.
*/

// Se crea la variable time que representa la hora.
let time = 16;

//Se realizan condionales para mostrar el saludo correcto según la hora.
if (time < 12) {
    console.log("Buenos días.");
} else if (time >= 12 && time <= 18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}