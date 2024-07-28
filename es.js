import prompt from "prompt-sync";
let pergunta = prompt();


export function escrever(msg) {
    console.log(msg);
}

export function lerNumero (msg) {
    escrever(msg);
    let num = Number(pergunta());
    return num;
}