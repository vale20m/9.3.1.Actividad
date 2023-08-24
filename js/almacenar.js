    // Accedemos a las etiquetas de HTML mediante variables.
    
    let dato = document.getElementById('item');
    const botonAgregar = document.getElementById('agregar');
    const botonLimpiar = document.getElementById('limpiar');
    const listaHTML = document.getElementById('contenedor');

    // Establecemos la lista que guardaremos en el localStorage.

    let lista = [];

    // Variable para guardar el formato de "item" de la listaHTML.

    let objetoLista = "";

document.addEventListener("DOMContentLoaded", function(){
    
    // Si la lista esta definida, la cargamos.

    if (localStorage.getItem("lista") != undefined){
        lista = JSON.parse(localStorage.getItem("lista"));
    }

    // Colocamos en el HTML los elementos guardados de la lista.

    for (let i=0; i < lista.length; i++){
        listaHTML.innerHTML += lista[i];
    }
});

botonAgregar.addEventListener("click", function(){
    if (dato.value != ""){

        // Al presionar el boton "agregar" y tener contenido en la casilla de texto, se agrega dicho contenido a la listaHTML y se pushea
        // al arreglo en el localStorage, ademas de eliminarse el contenido de la casilla.

        objetoLista = `<li>${dato.value}</li>`;
        listaHTML.innerHTML += objetoLista;
        lista.push(objetoLista);
        localStorage.setItem("lista", JSON.stringify(lista));
        dato.value = "";
    }
});

botonLimpiar.addEventListener("click", function(){

    // Se eliminan todas las variables establecidas en el localStorage y se vacia la listaHTML.

    localStorage.removeItem("lista");
    lista = [];
    listaHTML.innerHTML = "";
});