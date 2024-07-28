export function somar(num1, num2) {
    let resp = num1 + num2;
    return resp;

}

export function calcularDobro(num) {
    let resp = num * 2;
    return resp;
}

export function verificarFebre(num){
    let situacao = " ";

    if (num >= 37) {
        situacao = "está com febre";
    } 
    else {
        situacao = "não está com febre";
    }
    return situacao;
}

export function fatorial(num){
    let fat = 1;

    for (let cont = 1; cont <= num; cont++) {
        fat = fat * cont;
    }
    return fat;
}

export function media(notas) {
    let soma = 0;

    for (let item of notas) {
        soma = soma = item;
    }
    let media = soma / notas.length;
    return media;
}