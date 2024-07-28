import prompt from "prompt-sync";
let pergunta = prompt();

/*
console.log("Programa Par ou Impar");
console.log();
console.log("---------------");
console.log("Informe o número:");
let num = Number(pergunta());

if (num % 2 == 0) { 
    console.log("O número " + num + " é par!");
} else {
    console.log("O número " + num + " é impar!");
}
*/

/*
let num = 9;
let tab = 0;

for (let cont = 1; cont <=10; cont++){
     tab = num * cont;
    console.log("9 X " + cont + "=" + tab);

}
*/
/*
let num = 9

for (let cont = 1; cont <=10; cont++){

    console.log(`${num} X ${cont}  = ${num * cont}`);

}
*/
/*
let mat = [1,2,3,4,5];

for (let cont = 0; cont < mat.length; cont++ ) {
    console.log(mat[cont]);
}
*/


const frutas = ["abacate", "abacaxi", "maca", "banana", "pera"];

// Filtrar números pares

const evenStrings = String.filter(frutas == "a");

console.log(evenStrings);