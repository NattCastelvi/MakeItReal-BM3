//Cambiando el título
console.log("TITULO--", document.title);
document.title = "Nuevo TITULO";
console.log("NUEVO TITULO---", document.title)

//Obtener el elemento Form (VER LAS PROPIEDADES DE CADA ELEMENTO)
let form = document.querySelector("form#my-form");
console.log("TAGNAME", form.tagName);
console.log("ID", form.id);
console.log("ESTILOS", form.style);
console.log("ATRIBUTOS", form.attributes);

//Obtener varios elementos
let divs = document.querySelectorAll("div");

for (let div of divs.entries()) {
    console.log("DIV--", div)
}

//Obtener x clase (Punto"2")
let div1 =document.querySelector(".div-1");

//Insertando elementos
let p = document.createElement("p");
let myDiv = document.querySelector("div#my-div");

myDiv.appendChild(p);

//Opción 1 para agregar texto
let text = document.createTextNode("Este es un párrafo");
p.appendChild(text);

//Opción 2 para agregar texto
p.innerHTML = "Texto añadido con atributo innerHTML";

//Opción 3 para agregar texto
p.textContent = "Texto añadido con atributo textContent";

//Remover elemento
let element = document.querySelector("div#my-div-2");

element.parentNode.removeChild(element);

//Afrefar y eliminar clases
let div3 = document.querySelector("div#my-div-3");
console.log("CLASES DIV 3: ", div3.classList);

div3.classList.add("four");
div3.classList.remove("one");

console.log("CLASES DIV 3 NUEVAS: ", div3.classList);

div3.classList.toggle("five");
div3.classList.toggle("two");

console.log("CLASE DIV 3 TOGGLE: ", div3.classList);