"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria} criado com sucesso!`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido da mesa ${mesa} emitido com sucesso!`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("Loja aberta");
        }
        else {
            console.log("Loja fechada");
        }
    }
}
const redBurguer = new Loja("Red Burguer", "Fast Food");
console.log(`Nome da loja: ${redBurguer.nome}`);
console.log(`Categoria da loja: ${redBurguer.categoria}`);
redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(48, "X-Burguer", "X-Salada", "Coca-Cola");
redBurguer.mudarStatus("ABERTO");
console.log(retornoLoja);
