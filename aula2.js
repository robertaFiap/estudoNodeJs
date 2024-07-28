import prompt from 'prompt-sync';
let pergunta = prompt();

/*
console.log("Função por Incrementação");
let x = 10;
x += 5;
console.log("Valor de X - Incrementa adição: " + x);
console.log("--------------");
x -= 3;
console.log("Valor de X - Decrementa subtração: " + x);
console.log("--------------");
x *= 2;
console.log("Valor de X - Incrementa multiplicação: " + x);
console.log("--------------");
x /= 6;
console.log("Valor de X - Decrementa divisão: " + x);
console.log("--------------");
++ x;
console.log("Valor de X - Incrementa pré-fixado: " + x);
console.log("--------------");
-- x;
console.log("Valor de X - Decrementa pré-fixado: " + x);
console.log("--------------");
x ++;
console.log("Valor de X - Incrementa pós-fixado: " + x);
console.log("--------------");
x --;
console.log("Valor de X - Drecrementa pós-fixado: " + x);
console.log("--------------");
*/

/*
console.log("Programa do dobro");
console.log("Informe um número");
let numero = Number(pergunta());
let dobro = numero * 2;
console.log("O dobro é: " + dobro);
console.log("--------------");
console.log();
*/
/*
console.log("Programa da média");
console.log("Informe a nota 1:");
let nota1 = Number(pergunta());
console.log("Informe a nota 2:");
let nota2 = Number(pergunta());
console.log("Informe a nota 3:");
let nota3 = Number(pergunta());
let media = (nota1 + nota2 + nota3) / 3;
console.log("A média é: " + media);
console.log("--------------");
console.log();
*/
/*
console.log("Programa da compra/cupom");
console.log("Informe o valor da compra:");
let valor = Number(pergunta());
console.log();
console.log("Informe o valor do cupom:");
let cupom = Number(pergunta());
let desconto = valor * cupom /100;
let total = valor - desconto;
console.log("O valor total da compra é de: " + total);
console.log("--------------");
*/
/*
console.log("Programa da Hipotenusa");
console.log("Informe o valor do cateto adjacente:");
let catetoAdj = Number(pergunta());
console.log();
console.log("Informe o valor do cateto oposto:");
let catetoOpos = Number(pergunta());
let catAdj = Math.pow(catetoAdj, 2);
let catOps = Math.pow(catetoOpos, 2);
let soma = (catAdj + catOps);
let hip = Math.sqrt(soma);
console.log("O valor da hipotenusa é: " + hip);
console.log("--------------");
let hipot = Math.sqrt(Math.pow(catetoAdj,2) + Math.pow(catetoOpos,2));
console.log("o valor da hipotenusa em uma unica expressão é: " + hipot);
*/
/*
console.log("Função por Números");
console.log("-------------");
let a = Math.abs(-10);
console.log("valor absoluto é: " + a);
console.log("-------------");
let b = Math.ceil(9.2);
console.log("valor arredondado para cima é: " + b);
console.log("-------------");
let c = Math.floor(9.2);
console.log("valor arredondado para baixo é: " + c);
console.log("-------------");
let d = Math.pow(2,4);
console.log("valor da potência é: " + d);
console.log("-------------");
let e = Math.sqrt(25);
console.log("valor da raiz quadrada é: " + e);
console.log("-------------");
*/
/*
console.log("Função por Texto");
console.log("-------------");
let s = "Developer  ";
let dado1 = s.charAt(3);
console.log("String que contém na posição 3: " + dado1);
let dado2 = s.includes("v");
console.log("verifica se existe uma palavra/frase (v): " + dado2);
let dado3 = s.indexOf("v");
console.log("Posição da letra V é: " + dado3);
let dado4 = s.length;
console.log("Tamanho da string: " + dado4);
let dado5 = s.replaceAll("e", "i");
console.log("String após substituir palavra/texto é: " + dado5);
let dado6 = s.substring(2,5);
console.log("String após recortado: " + dado6);
let dado7 = s.toLowerCase();
console.log("String após colocar tudo minusculo:" + dado7);
let dado8 = s.toUpperCase();
console.log("String após colocar tudo maisculo:" + dado8);
let dado9 = s.trim();
console.log("String após retirar espaços:" + dado9);
*/

console.log("Programa Regra ABNT");
console.log();
console.log("Informe o nome do autor:");
console.log();

let nome = pergunta();
let primeiraLetra = nome.charAt(0);
let tamanho = nome.length;
let espaco = nome.indexOf(" ");
let sobrenome = nome.substring(espaco+1,tamanho);

console.log("Nome do autor após regra ABNT é: " + sobrenome.toUpperCase() + ", " + primeiraLetra.toUpperCase());



