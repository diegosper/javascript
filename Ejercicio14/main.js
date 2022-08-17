let array1 = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘"];
let array2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
let array3 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
let array4 = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
let array5 = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];

console.log("\n" + "1----------------------------------------------------------" + "\n");

console.log("Array 1: " + array1);
array1.fill("🍺", 4, array1.length);
console.log("Nuevo array con cervezs: " + array1);

console.log("\n" + "2----------------------------------------------------------" + "\n");

console.log("¿Hay alguna piña en el siguiente array? " + array2);

function pineappleIndex(array2) {
    let i = 0;
    let encontrado = false;
    while (i < array2.length && encontrado == false) {
        if (array2[i] === "🍍") {
            encontrado = true;
        } else {
            i++;
        }
    }
    return i === array2.length ? -1 : i;
}

let posPineapple = pineappleIndex(array2); 
if (posPineapple >= 0) {
    console.log("Si, en la posición " + posPineapple);
} else {
    console.log("No se encontró ninguna piña");
}

console.log("\n" + "3----------------------------------------------------------" + "\n");

console.log("Se remueve la piña del siguiente array: " + array2);
array2.splice(2,1);
console.log("Quedando como resultado :" + array2);

console.log("\n" + "4----------------------------------------------------------" + "\n");

console.log("A partir del array " + array3 + ", se cambian todas las fresas por un 🍄");

function isStrawberry (element, i, array3){
    if (element == "🍓") {
        array3[i] = "🍄"; 
    }
}
array3.findIndex(isStrawberry);
console.log("Queda de la siguiente manera: " + array3);

console.log("\n" + "5----------------------------------------------------------" + "\n");

console.log("Se añade el emoji 🥵 luego de cada 🌶️ en el array: " + array4);

for (let i = 0; i < array4.length; i++) {
    if (array4[i] === "🌶️") {
        array4.splice(i+1,0,"🥵");
    }
}

/* otra opción, con while.
let i = 0;
let tamañoArray = array4.length;
while ((i) < tamañoArray) {
    if (array4[i] === "🌶️") {
        array4.splice(i+1,0,"🥵");
        tamañoArray++;
    }
    i++;
}
*/

console.log("Queda de la siguiente manera: " + array4);

console.log("\n" + "6----------------------------------------------------------" + "\n");

console.log("Se añade un joker 🃏 en medio de dos cartas 🎴, dentro del array: " + array5);

for (let i = 0; i < array5.length; i++) {
    if (array5[i] === "🎴" && array5[i+1] === "🎴") {
        array5.splice(i+1,0,"🃏");
    }
}

console.log("El resultado final es: " + array5);

