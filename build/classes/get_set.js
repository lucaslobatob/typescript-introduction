"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    get getServidorIP() {
        return this.servidor;
    }
    set setServidorIP(novoIP) {
        if (this.servidor === novoIP) {
            throw new Error("O novo IP não pode ser igual ao atual");
        }
        this.servidor = novoIP;
    }
}
const GTA5 = new Jogo("192.168.5.10");
try {
    GTA5.setServidorIP = "192.168.5.10";
}
catch (error) {
    console.log(error);
}
console.log(GTA5.getServidorIP);
