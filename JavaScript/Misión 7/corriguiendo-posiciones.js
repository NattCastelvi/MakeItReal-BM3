/*
-Corrigiendo posiciones Objetivo: Escribe un programa que inserte cada uno de los elementos del arreglo nuevoArreglo, en el arreglo resultante del reto anterior arr, e imprima cada uno de los elementos en la consola.
-let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];

let newArray = ["Quinto", "Sexto"];
*/

let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
let newArray = ["Quinto", "Sexto"];

// Obtén el índice donde se debe insertar el nuevo elemento
let insertIndex = arr.length - 1;

// Inserta los elementos de newArray en arr uno por uno
for (let i = 0; i < newArray.length; i++) {
  arr.splice(insertIndex + i, 0, newArray[i]);
}

// Imprime cada elemento en la consola
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
