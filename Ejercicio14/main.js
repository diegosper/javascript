let array1 = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘"];
let array2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
let array3 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
let array4 = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
let array5 = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];

console.log("Array 1: " + array1);
array1.fill("🍺", 4, undefined);
console.log("Nuevo array con cervezs: " + array1);

console.log("\n" + "----------------------------------------------------------" + "\n");

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