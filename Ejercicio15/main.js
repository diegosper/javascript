const arrayPrueba = []; 

function getRandomEmoji() {
    const emojis = ["🍍", "🍔", "🍓", "🃏", "🎴", "❌", "🍄", "🌶️", "🍕", "🍺", "🍣", "❤️", "😊", "🔝", "👌", "💕", "🤡", "👽", "🐴", "🐲", "🐅", "🦎", "🐧", "🦂", "🎀", "🧬", "⏰", "🌺", "🚗", "🌈"];
    return emojis[Math.floor(Math.random()*emojis.length)];
}


function output(array) {
    const text = document.getElementById("array");
    text.innerHTML = array;
}

output(arrayPrueba);

function pushFunction(){
    arrayPrueba.push(getRandomEmoji());
    output(arrayPrueba);
}

function unshiftFunction(){
    arrayPrueba.unshift(getRandomEmoji());
    output(arrayPrueba);
}

function insertAtFunction(){
    let i = document.getElementById("input-1").value - 1;
    if (i >= 0 && i <= arrayPrueba.length) {
        arrayPrueba.splice(i,0,getRandomEmoji());
        output(arrayPrueba);
    } else {
        window.alert("Ingrese un número válido");
    }
}

function popFunction(){
    arrayPrueba.pop();
    output(arrayPrueba);
}

function shiftFunction(){
    arrayPrueba.shift();
    output(arrayPrueba);
}

function removeAtFunction(){
    let i = document.getElementById("input-2").value - 1;
    if (i >= 0 && i <= arrayPrueba.length) {
        arrayPrueba.splice(i,1);
        output(arrayPrueba);    
    } else {
        window.alert("Ingrese un número válido");
    }
}

var num = getelementsByClass("input-number").value;

if(num < 1 || num > 20) {
    window.alert("Ingrese un valor entre 1 y 20");
}
