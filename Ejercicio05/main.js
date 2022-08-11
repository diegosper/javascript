console.log(caraOCruz(Math.round(Math.random())));

function caraOCruz (valor){
    let resultado;

    if (valor == 1) {
        resultado = "😀";
    } else {
        resultado = "❌";
    }

    return resultado;
}