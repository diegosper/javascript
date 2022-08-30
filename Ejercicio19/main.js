let imagen1 = document.getElementById("boton-off");
let botonOn = document.getElementsByClassName("box-boton-on");
let botonOff = document.getElementsByClassName("box-boton-off");

imagen1.onclick = function () {
    if (
        imagen1.src == "./img/boff.jpeg") {
        imagen1.src = "./img/bon.jpeg";    
    } else {
        imagen1.src == "./img/boff.jpeg"
    }
}