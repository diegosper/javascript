let palabra = "supercalifragil...";

function modificarLetras(palabra, letraVieja, letraNueva) {
    return palabra.replaceAll(letraVieja, letraNueva);
}

console.log(palabra);
console.log(modificarLetras(palabra, 'a', 'o'));