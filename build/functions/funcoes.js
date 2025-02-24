"use strict";
let n1 = 10;
let n2 = "25";
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}
console.log(soma(n1, parseInt(n2)));
function somando(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 20) {
        return "Valor maior que 20";
    }
    else {
        return "Valor menor que 20";
    }
}
console.log(somando(n1, parseInt(n2)));
