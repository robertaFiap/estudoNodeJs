import prompt from "prompt-sync";
let pergunta = prompt();

/*
console.log("Operadores Relacionais");
console.log();
console.log("---------------");
let a = 10, b = 5;
let c = a > b;
console.log("O valor é maior: " + c);
let d = a < b;
console.log("O valor é menor: " + d);
let e = a >= b;
console.log("O valor é maior ou igual: " + e);
let f = a <= b;
console.log("O valor é menor ou igual: " + f);
let g = a == b;
console.log("O valor é igual: " + g);
let h = a != b;
console.log("O valor é diferente: " + h);
console.log();
console.log("---------------");
*/

/*
console.log("Programa da Febre");
console.log();
console.log("Informe sua temperatura corporal: ");
let temp = Number(pergunta());
let febre = temp >= 37;
console.log("Está com febre? " + febre);
*/

/*
console.log("Programa Média");
console.log("--------------");
console.log();
console.log("Informe a nota 01: ");
let nota1 = Number(pergunta());
console.log("Informe a nota 02: ");
let nota2 = Number(pergunta());
console.log("Informe a nota 03: ");
let nota3 = Number(pergunta());
let media = (nota1 + nota2 + nota3) / 3;
let passou = media >= 6;
console.log("Aluno(a) aprovado(a): " + passou);
*/

/*
console.log("Operadores Lógicos");
console.log("------------------")
console.log();
let a = 10 > 5 && 5 > 0;
console.log(" Valor de a é:" + a);
let b = 10 < 5 || 5 > 6;
console.log(" Valor de b é: " + b);
let c = !true;
console.log(" Valor de c é: " + c);
*/

/*
console.log("Programa verificador de Nota");
console.log("----------------------------");
console.log();
console.log("Informe sua nota:");
console.log();
let nota = Number(pergunta());
let validar = nota >= 0 && nota <= 10;
console.log("A nota é valida? " + validar);
*/

console.log("Programa verificador de cor primária");
console.log("------------------------------------");
console.log();
console.log("Informe a cor desejada:");
console.log();
let cor = pergunta();
let validaCor = cor == "azul" || cor == "vermelho" || cor == 'amarelo';
console.log("Esta cor é uma cor primária? " + validaCor);
