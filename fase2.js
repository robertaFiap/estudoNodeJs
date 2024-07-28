import prompt from "prompt-sync";
let pergunta = prompt();

console.log("Programa de calcular IMC");
console.log("--------------------");
console.log();
console.log("Informe a altura:");
let altura = Number(pergunta());
console.log();
console.log("Informe o peso:");
let peso = Number(pergunta());

let imc  = (peso / (altura * altura));
console.log('O imc é:'+ imc);