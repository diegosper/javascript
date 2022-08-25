let imagen1 = document.getElementById("img-1");
let imagen2 = document.getElementById("img-2");


imagen1.onmouseover = function () {
    imagen1.src = "./img/card-front.png";
}
imagen1.onmouseout = function () {
    imagen1.src = "./img/card-back.png";
}

imagen2.onmouseover = function () {
    imagen2.src = "./img/card-front.png";
}
imagen2.onmouseout = function () {
    imagen2.src = "./img/card-back.png";
}

