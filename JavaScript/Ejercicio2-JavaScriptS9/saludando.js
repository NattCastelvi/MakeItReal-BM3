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