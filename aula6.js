import prompt from "prompt-sync";
let pergunta = prompt();

/*
console.log("Programa Tabuada com vetor")
console.log("Informe um número");
let numero = Number(pergunta());

let tabuada  = [];

for (let cont = 0; cont <= 10; cont++) {
    tabuada[cont] = cont * numero;
}
console.log("A tabuada do número " + numero + " é igual a:");
console.log(tabuada); 
*/

console.log("Programa Maior Nota");
console.log();
console.log("Informe quantas notas será informada");
let qtd = Number(pergunta());

let notas = [];

for (let cont = 0; cont < qtd; cont++) {
    console.log("Informe a nota");
    notas[cont] = Number(pergunta());
}

let maior = 0.

for (let item of notas) {
    if (item > maior) {
        maior = item;
    }
}

console.log("As notas informadas foram: ")
console.log(notas);
console.log();
console.log("A maior nota é : " + maior);