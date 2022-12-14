let contPartidas = 0;
let contVictoriasUsuario = 0;
let contVictoriasComputadora = 0;
let resultadoPartida = "π Que comience el juego π"

function mostrarResultado() {
    document.getElementById('resultado').innerText = "π΅οΈ Usuario [ " + contVictoriasUsuario + "] - [" + contVictoriasComputadora + "] Computadora π»";
}
mostrarMensaje();

function mostrarMensaje() {
    contPartidas++;

    texto = "Partida NΒΊ" + contPartidas;
    document.getElementById("cant-partidas").innerHTML = texto;
    //document.getElementById("prueba").innerHTML = obtenerJugadaComputadora();
}

function jugar(jugadaUsuario) {
    let texto = "ES UN EMPATE βοΈ";

    const jugadaComputadora = obtenerJugadaComputadora();
    let textoUsuario = "π΅οΈ Usuario: " + obtenerEmoji(jugadaUsuario);  
    let textoComputadora = "π» Computadora: " + obtenerEmoji(jugadaComputadora)
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
    let emoji = "πͺ¨";
    if (numero == 2) {
        emoji = "π§»";
    } else if (numero == 3) {
        emoji = "βοΈ";
    }
    return emoji;
}

function comenzarDeNuevo() {
    location.reload();
}

