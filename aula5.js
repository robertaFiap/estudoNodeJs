import prompt from "prompt-sync";
let pergunta = prompt();

/*
console.log("Programa da Tabuada");
console.log();
console.log("Informe um número");
let numero = Number(pergunta());
console.log("-----------------");
let contador = 1;
let valor = 0;

while (contador <= 10) {
    valor = numero * contador;
    console.log(numero + " * " + contador + " = " + valor);

    contador++;
}
console.log("Fim da tabuada!");
*/

/*
console.log("Programa de calculo Fatorial");
console.log("----------------------------");
console.log();
console.log("Informe o valor valor fatorial");
let fatorial = Number(pergunta());
let contador = fatorial;
let valor = 1;

while (contador > 1) {
    valor = valor * contador;

    contador--;
}
console.log("O valor do fatorial " + fatorial + " é: " + valor);
*/

/*
console.log("Programa de inverter palavras");
console.log("-----------------------------");
console.log("Informe uma palavra");
let palavra = pergunta();
let invertido = "";

for(let contador = 0; contador < palavra.length; contador++) {

    let letra = palavra.charAt(contador);
    invertido = letra + invertido;
}
console.log("A palavra invertida é: " + invertido);
*/

console.log("Programa de desenhar quadrado");
console.log("-----------------------------");
console.log("Informe o tamanho do quadrado");
let tamanho = Number(pergunta());

for (let linha = 1; linha <= tamanho; linha++) {
    for (let coluna = 1; coluna <= tamanho; coluna++) {
        process.stdout.write("* ");
    
    }
    console.log();
}
