"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
}
const redBurguer = new Loja("Red Burguer", "Fast Food");
const suco = new Loja("Suco do Bairro", "Lanchonete");
console.log(`Nome da loja: ${redBurguer.nome}`);
console.log(`Categoria da loja: ${redBurguer.categoria}`);
console.log(`Nome da loja: ${suco.nome}`);
console.log(`Categoria da loja: ${suco.categoria}`);
