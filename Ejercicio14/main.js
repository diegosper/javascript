let array1 = ["π", "π―", "π£", "π", "π", "π±", "π", "π"];
let array2 = ["π", "π", "π", "π", "π"];
let array3 = ["π", "π", "π", "π", "π"];
let array4 = ["πΆοΈ", "π₯", "πΆοΈ", "π₯", "πΆοΈ", "π₯"];
let array5 = ["π΄", "π΄", "π΄", "π", "π΄", "π΄", "π΄"];

console.log("\n" + "1----------------------------------------------------------" + "\n");

console.log("Array 1: " + array1);
array1.fill("πΊ", 4, array1.length);
console.log("Nuevo array con cervezs: " + array1);

console.log("\n" + "2----------------------------------------------------------" + "\n");

console.log("ΒΏHay alguna piΓ±a en el siguiente array? " + array2);

function pineappleIndex(array2) {
    let i = 0;
    let encontrado = false;
    while (i < array2.length && encontrado == false) {
        if (array2[i] === "π") {
            encontrado = true;
        } else {
            i++;
        }
    }
    return i === array2.length ? -1 : i;
}

let posPineapple = pineappleIndex(array2); 
if (posPineapple >= 0) {
    console.log("Si, en la posiciΓ³n " + posPineapple);
} else {
    console.log("No se encontrΓ³ ninguna piΓ±a");
}

console.log("\n" + "3----------------------------------------------------------" + "\n");

console.log("Se remueve la piΓ±a del siguiente array: " + array2);
array2.splice(2,1);
console.log("Quedando como resultado :" + array2);

console.log("\n" + "4----------------------------------------------------------" + "\n");

console.log("A partir del array " + array3 + ", se cambian todas las fresas por un π");

function isStrawberry (element, i, array3){
    if (element == "π") {
        array3[i] = "π"; 
    }
}
array3.findIndex(isStrawberry);
console.log("Queda de la siguiente manera: " + array3);

console.log("\n" + "5----------------------------------------------------------" + "\n");

console.log("Se aΓ±ade el emoji π₯΅ luego de cada πΆοΈ en el array: " + array4);

for (let i = 0; i < array4.length; i++) {
    if (array4[i] === "πΆοΈ") {
        array4.splice(i+1,0,"π₯΅");
    }
}

/* otra opciΓ³n, con while.
let i = 0;
let tamaΓ±oArray = array4.length;
while ((i) < tamaΓ±oArray) {
    if (array4[i] === "πΆοΈ") {
        array4.splice(i+1,0,"π₯΅");
        tamaΓ±oArray++;
    }
    i++;
}
*/

console.log("Queda de la siguiente manera: " + array4);

console.log("\n" + "6----------------------------------------------------------" + "\n");

console.log("Se aΓ±ade un joker π en medio de dos cartas π΄, dentro del array: " + array5);

for (let i = 0; i < array5.length; i++) {
    if (array5[i] === "π΄" && array5[i+1] === "π΄") {
        array5.splice(i+1,0,"π");
    }
}

console.log("El resultado final es: " + array5);

