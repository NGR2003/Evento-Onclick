// hacer que un texto cambien al hacerle click
const x = document.getElementById("btn-inicio")
x.addEventListener("click", function () {
    this.innerText = "Cerrar sesion"
})

// Eliminar boton definicion
const e = document.getElementById("definicion")
e.addEventListener("click", function () {
    this.remove();
});

// boton para gato
const botonGato = document.getElementById("gato")
botonGato.addEventListener("click", function(){
    alert("Me gusta Gato Atigrado");
})

// boton para perro
const botonPerro = document.getElementById("perro");
botonPerro.addEventListener("click", function() {
    alert("Me gusta Golden Retriever");
});

// Función para aumentar los likes
function aumentarMeGusta(idConteo) {
    let numeroMegusta = document.querySelector(`#${idConteo}`);
    let contadorMegusta = Number(numeroMegusta.innerText);
    contadorMegusta++;
    numeroMegusta.innerText = contadorMegusta;
}

// Evento para el botón del gato
document.getElementById("gato").addEventListener("click", function() {
    aumentarMeGusta("conteo_gato");
});

// Evento para el botón del perro
document.getElementById("perro").addEventListener("click", function() {
    aumentarMeGusta("conteo_perro");
});