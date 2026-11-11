// Imprimir el titulo del documento
console.log("El titulo del documento es: ", document.title);

// Guardar el titulo en una variable usando su id
let titulo = document.querySelector("#titulo-principal");

console.log(titulo);

// Leer y editar el texto y los estilos
console.log(titulo.textContent);
titulo.textContent = "Editado desde JavaScript";
titulo.style.color = "white";
titulo.style.backgroundColor = "green";
titulo.style.fontSize = "1.5rem";

// Con += se agrega al final en lugar de reemplazar
titulo.textContent += " Texto nuevo";

// Con innerHTML si se pueden meter etiquetas
let parrafo = document.querySelector("#parrafo-principal");

parrafo.innerHTML += " Nuevo texto <i> Este texto esta en cursiva </i>";

let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p>Producto muestra: $1200</p>";

// Arreglo con los productos del almacen
const bodega = [
    {nombre: "Teclado", precio: 450, stock: 5},
    {nombre: "Mouse", precio: 220, stock: 12},
    {nombre: "Monitor", precio: 3200, stock: 0},
    {nombre: "Audifonos", precio: 680, stock: 3},
    {nombre: "Webcam", precio: 890, stock: 0}
];

let caja = document.querySelector(".caja-vacia");

bodega.forEach(item => {
    let claseColor = "";

    // Si hay piezas la caja sale verde, si no sale roja
    if(item.stock > 0){
        claseColor = "aprobado";
    }
    else{
        claseColor = "no-aprobado";
    }

    caja.innerHTML += `
    <div class = "caja-producto ${claseColor}">
    <h2> Producto: ${item.nombre}</h2>
    <p> Precio: $${item.precio}</p>
    <p> Stock: ${item.stock}</p>
    </div>
    `;

});
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
