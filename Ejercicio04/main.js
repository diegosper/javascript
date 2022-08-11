const obtenerNombreCompleto = (nombre, nombre2, apellido1, apellido2) => {

    return nombre + " " + nombre2 + " " + apellido1 + " " + apellido2;
}

console.log("Hola " + obtenerNombreCompleto("Diego", "Ezequiel", "Sperber", "Eizen"))

function mostrarValor(valor) {
    console.log(valor);
}

mostrarValor(true);

function mostarParametros(...params) {
    params.forEach(param => { 
        console.log(param) 
    })
}

mostarParametros(1,2,3,4,5)