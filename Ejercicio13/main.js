/*
El programa muestra por pantalla la variable "número" desde que vale 0 hasta que vale 5.
Al inciar la variable con un valor = 1, primero se le resta una unidad. Luego se imprime por pantalla y se va sumando una unidad hasta llegar a 5.
*/

// Hace 6 iteraciones en total. Cunado el número = 5 deja de entrar en el do_while.

// Al if entra únicamente al principio, cuando el contador i está en 0.
// Al else entra en cualquier otro caso, es decir, a partir de que el contador tiene valor <> 0.



let numero = 1;
let i = 0;
do {
    if (i === 0) {
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5);