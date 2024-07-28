import { somar, calcularDobro, verificarFebre, fatorial, media} from "./funcoes.js";
import { escrever, lerNumero } from "./es.js";

/*
escrever("Programa de function");
let n1 = lerNumero("Informe um número:");
let n2 = lerNumero("Informe outro número:");

let x = somar(n1,n2);
escrever ("A soma é: " + x);
*/

/*
escrever("Programa do Dobro");
let num = lerNumero("Informe um número");
let dobro = calcularDobro(num);
escrever("O dobro do numero " + num + " é: " + dobro);

*/

/*
escrever("Programa da Febre");
let num = lerNumero("Informe sua temperatura corporal:");
let febre = verificarFebre(num);
escrever("A temperatura informada foi: " + num + ", portanto você " + febre + "!");
*/

/*
escrever("Programa do Fatorial");
let num = lerNumero("Informe um número para calcular o fatorial:");
let fatori = fatorial(num);
escrever("O fatorial do número " + num + " é: " + fatori);
*/

escrever("Programa da Media de Notas");
let qtd = lerNumero("Informe quantas notas será informada:");
let notas = [ ];
for (let cont = 0; cont < qtd; cont++){
    let x = lerNumero("Informe a nota");
    notas[cont] = x;
}
let calcule = media(notas);
escrever("A média das notas "+ notas + " é: "+ calcule);
