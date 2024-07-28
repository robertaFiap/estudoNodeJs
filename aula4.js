import prompt from "prompt-sync";
let pergunta = prompt();

/*
console.log("Programa calculadora");
console.log("--------------------");
console.log();
console.log("Informe um número");
let numero1 = Number(pergunta());
console.log();
console.log("Informe outro número");
let numero2 = Number(pergunta());
console.log();
console.log("Informe uma operação entre +, -, * e /");
let operacao = pergunta();
let resultado = 0;
let oper = " ";

switch (operacao){
    case "+":
        resultado = numero1 + numero2;
        oper = "soma";
        break;
    case "-":
        resultado = numero1 - numero2;
        oper = "subtração";
        break;
    case "*":
        resultado = numero1 * numero2;
        oper = "multiplicação";
        break;
    case "/":
        resultado = numero1 / numero2;
        oper = "divisão";
        break;    
    default:
        console.log("Operação invalida");
        break;    
}
console.log();
console.log("--------------------");
console.log("O resultado da " + oper + " é: " + resultado);
console.log("--------------------");
console.log("Fim");
*/

console.log("Programa verificar semestre");
console.log();
console.log("Informe o mês: ");
console.log();
let mes = pergunta();

switch (mes.toLowerCase()){
    case "janeiro":
    case "fevereiro":
    case "março":
    case "abril":
    case "maio":
    case "junho":
        console.log("Primeiro semestre");
        break;
    case "julho":
    case "agosto":
    case "setembro":
    case "outubro":
    case "novembro":
    case "dezembro":
     console.log("Segundo semestre");
     break;
    default:
    console.log("Mês incorreto");
    break;    
}