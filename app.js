// Prueba de querySelector y querySelectorAll

// 1. Seleccionar por id. Se escribe con gato, igual que en CSS
const mensaje = document.querySelector("#mensaje");
const botonId = document.querySelector("#btn-id");

botonId.addEventListener("click", function () {
    // textContent cambia el texto que se ve en pantalla
    mensaje.textContent = "El texto cambio desde JavaScript.";
    mensaje.classList.add("resaltado");
});


// 2. Seleccionar por clase. Con punto, como en CSS.
// querySelector devuelve SOLO el primero que encuentra
const botonClase = document.querySelector("#btn-clase");

botonClase.addEventListener("click", function () {
    const primero = document.querySelector(".dato");
    primero.classList.add("resaltado");
});


// 3. querySelectorAll devuelve todos los que coincidan.
// Como son varios, hay que recorrerlos con forEach
const botonTodos = document.querySelector("#btn-todos");

botonTodos.addEventListener("click", function () {
    const todos = document.querySelectorAll(".dato");

    todos.forEach(function (parrafo) {
        parrafo.classList.add("resaltado");
    });

    console.log("Se encontraron " + todos.length + " parrafos con la clase dato.");
});


// 4. Contador. La variable va con let porque su valor cambia
let clics = 0;
const contador = document.querySelector("#contador");
const botonContar = document.querySelector("#btn-contar");

botonContar.addEventListener("click", function () {
    clics = clics + 1;
    contador.textContent = clics;
});


// 5. Dejar todo como al inicio
const botonReset = document.querySelector("#btn-reset");

botonReset.addEventListener("click", function () {
    mensaje.textContent = 'Este parrafo tiene el id "mensaje".';

    // Quito la clase de todos los que la tengan
    document.querySelectorAll(".resaltado").forEach(function (elemento) {
        elemento.classList.remove("resaltado");
    });

    clics = 0;
    contador.textContent = clics;
});
