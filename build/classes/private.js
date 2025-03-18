"use strict";
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Limite alterado para: ${this.limite}`);
        }
        else {
            console.log("Solicitação negada");
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteContaAfiliado() {
        return this.solicitarLimite(999);
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
console.log(fulano);
console.log("====================================");
const joao = new BancoAfiliado();
joao.limiteContaAfiliado();
console.log(joao);
