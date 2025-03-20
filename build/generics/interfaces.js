"use strict";
const arroz = {
    nome: "Arroz Branco",
    preco: 10,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return valorFormatado;
    },
};
console.log(arroz.formatar(arroz.preco));
