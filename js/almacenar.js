let dato = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const botonLimpiar = document.getElementById('limpiar');
const lista = document.getElementById('contenedor');
let contador = 1;
let objetoLista = "";


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