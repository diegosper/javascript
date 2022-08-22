let contPartidas = 0;

function mostrarMensaje() {
    const div = document.getElementById("mensaje");
    let texto = "Comenzar partida";
    contPartidas++;

    if (contPartidas > 1) {
        texto = "Partida nº: " + contPartidas;
    }
    div.innerHTML = texto;
}

mostrarMensaje();

function jugar (opcion){
    const div = document.getElementById("ganador");
    let texto = "Ud. ha seleccionado la opción piedra 🪨";
    if (opcion == 2){
        texto = "Ud. ha seleccionado la opción papel 🧻";
    } else if (opcion == 3) {
        texto = "Ud. ha seleccionado la opción tijera ✂️";        
    }
    div.innerHTML = texto;
    mostrarMensaje();
}


