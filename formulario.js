const formulario = document.querySelector("#form")
let n = document.getElementById("name") ;
let ed = document.getElementById("age");
let na = document.getElementById("nationality");
console.log(n, ed, na);

formulario.onsubmit = function(e) {
  e.preventDefault();


  let nombre = n.value;
  let edad = ed.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombre.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error");
  }

  if (nombre.length > 0 && edad > 18 && edad < 120) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
};

let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }
  
  let lista = document.getElementById("lista-de-invitados");
  
  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);
  let spanNombre = document.createElement("span");
  let inputNombre = document.createElement("input");
  let espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  //inputNombre.value = nombre;
  //elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span");
    let inputNombre = document.createElement("input");
    let espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  let corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  };
}
