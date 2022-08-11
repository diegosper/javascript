const N1 = 5;
const N2 = 9;

num1 = Math.round(Math.random()*10);
num2 = Math.round(Math.random());
num3 = 6;

console.log(sumar(num1, num2, num3));

console.log(concatenarNombre("Diego","Sperber","Eizen"));

let numeroMayor = obtenerMayor(N1, N2)

if (numeroMayor >= 0) {
    console.log("El número mayor es: " + numeroMayor);
} else {
    console.log("Ingrese los valores correctamente");
}

function sumar (num1, num2, num3){
    return num1 + num2 + num3;
}

function concatenarNombre (nombre, apellido1, apellido2){
    return nombre + " " + apellido1 + " " + apellido2;
}

function obtenerMayor (valor1, valor2){
    let resultado;
    if (typeof valor1 == "number" && typeof valor2 == "number") {
        resultado = Math.max(valor1,valor2);
    } else {
        resultado = -1;
    }
    
    return resultado;
}
