let array =[12,"Iván", 21, true, "Natt", false, 89];

// Posición
let pos = array[2];

console.log("Está es la posición 2: " + pos);

// Recorres un arreglo
for (let i = 0; i < array.length; i++) {
    console.log("este es mi dato en la posición " + i + ": "+ array[i]);
}

//Cambiar el valor de un arreglo
array[3] = "Hallo";

console.log(array[3]);
console.log("Array con cambio: " + array);
