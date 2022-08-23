let contPartidas = 0;
let contVictoriasUsuario = 0;
let contVictoriasComputadora = 0;
let resultadoPartida = "🏁 Que comience el juego 🏁"

function mostrarResultado() {
    document.getElementById('resultado').innerText = "🕵️ Usuario [ " + contVictoriasUsuario + "] - [" + contVictoriasComputadora + "] Computadora 💻";
}
mostrarMensaje();

function mostrarMensaje() {
    contPartidas++;

    texto = "Partida Nº" + contPartidas;
    document.getElementById("cant-partidas").innerHTML = texto;
    //document.getElementById("prueba").innerHTML = obtenerJugadaComputadora();
}

function jugar(jugadaUsuario) {
    let texto = "ES UN EMPATE ⚔️";

    const jugadaComputadora = obtenerJugadaComputadora();
    let textoUsuario = "🕵️ Usuario: " + obtenerEmoji(jugadaUsuario);  
    let textoComputadora = "💻 Computadora: " + obtenerEmoji(jugadaComputadora)
    if (jugadaUsuario != jugadaComputadora) {
        //const result = (jugadaUsuario == 1 && jugadaComputadora == 3) || (jugadaUsuario == 2 && jugadaComputadora == 1) || (jugadaUsuario == 3 && jugadaComputadora == 2);
        //console.log(result);
        //(result) ? texto = "GANA EL USUARIO" : texto = "GANA LA COMPUTADORA";;
        if ((jugadaUsuario == 1 && jugadaComputadora == 3)
            || (jugadaUsuario == 2 && jugadaComputadora == 1)
            || (jugadaUsuario == 3 && jugadaComputadora == 2)) {

            texto = "GANA EL USUARIO";
            contVictoriasUsuario++;
        } else {
            texto = "GANA LA COMPUTADORA";
            contVictoriasComputadora++;
        }
    }

    document.getElementById("jugadaUsuario").innerHTML = textoUsuario;
    document.getElementById("jugadaComputadora").innerHTML = textoComputadora;
    document.getElementById("partida").innerHTML = texto;
//document.getElementById("prueba").innerHTML = obtenerEmoji(obtenerJugadaComputadora());
    mostrarMensaje();
    mostrarResultado();
}

function obtenerJugadaComputadora() {
    //console.log(Math.ceil(Math.random() * 3));
    return Math.ceil(Math.random() * 3);
}

function obtenerEmoji(numero) {
    let emoji = "🪨";
    if (numero == 2) {
        emoji = "🧻";
    } else if (numero == 3) {
        emoji = "✂️";
    }
    return emoji;
}

function comenzarDeNuevo() {
    location.reload();
}

