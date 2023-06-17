//Permite insertar elementos especificos en el arreglo y taambién eliminar elementos en el arreglo

let nombres = ["Liliana", "Alejandra", "Alex", "Elkin"];

console.log("Array inicial: ", nombres);

//Insetar en una posición especifica
nombres.splice(1, 0, "Elizabeth");

console.log("Array con 'Elizabeth: ", nombres);

//Eliminar elementos
nombres.splice(4,4);

console.log("Array Eliminando elemento: ", nombres);

// Eliminando todos los elmentos desde una posicioón
nombres.splice(0);

console.log("Array eliminando todo: ", nombres);
