// Seleccionar elementos del DOM
let title = document.getElementById("title");
console.log(title.innerText);

let mainDiv = document.querySelector(".main-div");
console.log(mainDiv)

let listItems = document.querySelectorAll("ul.list > li");
console.log(listItems);

// Modificar elementos del DOM
// - Cambiar contenido
title.innerText = "Manipulando el DOM";
title.innerHTML = "<em>Nuevo</em>";

// Modificar Atributos y clases
let image = document.querySelector("img");
image.setAttribute("src", "vite.svg");
image.classList.add("img-logo");
// - Estilos
mainDiv.style.backgroundColor = "#ffcc00";

// Crear y Eliminar del DOM
// - Eliminar elementos
let oldDiv = document.querySelector(".old-div");
document.body.removeChild(oldDiv);

// - Crear Elementos
let newDiv = document.createElement("div");
newDiv.innerText = "Holiii";
document.body.appendChild(newDiv);


// Eventos en el DOM
let button = document.querySelector("button");
//button.addEventListener("click", function () {
//  alert("Boton presionado!!!");
//});

// Eventos con parámetros
function showMessage(message) {
  alert(message);
}

button.addEventListener("click", function () {
  showMessage("Mensaje personalizado!!!");
});

// Crear una lista dinámica
let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("dynamicList");

addButton.addEventListener("click" , function () {
  if (input.value.trim() !== "") {
    let newItem = document.createElement("li");
    newItem.innerText = input.value;
    list.appendChild(newItem);
    input.value = "";
  }
});

// Filtrado de elementos del DOM
const filterInput = document.getElementById("filterInput");
const itemsList = document.getElementById("itemsList");

filterInput.addEventListener("keyup", function () {
	const term = filterInput.value.toLowerCase(); 
	const items = itemsList.getElementsByTagName("li");

	Array.from(items).forEach(function (item) {
		if (item.textContent.toLowerCase().indexOf(term) !== -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
});

// Drag and Drop
const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");

draggable.addEventListener("dragstart", function () {
  setTimeout(() => { this.style.display = "none"; }, 0);
});

dropzone.addEventListener("dragover", function(e) {
  e.preventDefault();
});

dropzone.addEventListener("drop", function (){
  draggable.style.display = "block";
  this.append(draggable);
});