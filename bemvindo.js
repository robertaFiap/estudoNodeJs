import prompt from 'prompt-sync';
let pergunta = prompt();

console.log("Inicio do primeiro programa");
console.log("Qual seu nome?");
let nome = pergunta();

console.log();
console.log("Seja Bem-vindo(a)," + nome + "!");
console.log();
console.log("Fim do primeiro programa");
