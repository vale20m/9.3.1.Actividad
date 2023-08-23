let dato = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const botonLimpiar = document.getElementById('limpiar');
const lista = document.getElementById('contenedor');
let objetoLista = "";

document.addEventListener("DOMContentLoaded", function(){
    for (let i=1; i <= contador; i++){
        objetoLista = localStorage.getItem("Item " + contador-1);
        lista.innerHTML += objetoLista;
    }
    let contador = 1;
});

botonAgregar.addEventListener("click", function(){
    if (dato.value != ""){
        localStorage.setItem("Item " + contador, dato.value);
        objetoLista = `<li>${localStorage.getItem("Item " + contador)}</li>`;
        lista.innerHTML += objetoLista;
        dato.value = "";
        contador++;
    }
});

botonLimpiar.addEventListener("click", function(){
    localStorage.clear();
    lista.innerHTML = "";
    contador = 1;
});