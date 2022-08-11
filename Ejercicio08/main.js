let mes = Math.round(Math.random() * 11 + 1);
const numeroString = "3";
let resultado;
let resultado2;


switch (mes) {
    case 1:
        resultado = "Enero";
        break;
    case 2:
        resultado = "Febrero";
        break;
    case 3:
        resultado = "Marzo";
        break;
    case 4:
        resultado = "Abril";
        break;
    case 5:
        resultado = "Mayo";
        break;
    case 6:
        resultado = "Junio";
        break;
    case 7:
        resultado = "Julio";
        break;
    case 8:
        resultado = "Agosto";
        break;
    case 9:
        resultado = "Septiembre";
        break;
    case 10:
        resultado = "Octubre";
        break;
    case 11:
        resultado = "Noviembre";
        break;
    case 12:
        resultado = "Diciembre";
        break;

    default:
        resultado = "Datos incorrectos";
        break;
}

console.log(resultado);

switch (numeroString) {
    case "1":
        resultado2 = 1;
        break;
    case "2":
        resultado2 = 2;
        break;
    case "3":
        resultado2 = 3;
        break;
    case "4":
        resultado2 = 4;
        break;
    case "5":
        resultado2 = 5;
        break;

    default:
        resultado2 = -1;
        break;
}

console.log(resultado2);