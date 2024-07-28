import prompt from 'prompt-sync';
let pergunta = prompt();

console.log("Informe um número:");
let numero1 = Number(pergunta());

console.log("Informe outro número:");
let numero2 = Number(pergunta());

console.log("A soma dos números é: " + (numero1 + numero2));
console.log();
