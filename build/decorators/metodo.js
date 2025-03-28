"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        const metodoOriginal = descriptor.value;
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Pessoa menor de idade");
                return metodoOriginal.apply(this);
            }
            else {
                console.log("Adulto cadastrado no sistema");
                return metodoOriginal.apply(this);
            }
        };
    };
}
class Pessoa1 {
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarPessoa() {
        console.log(`Cadastrando a pessoa ${this.nome} ao sistema`);
    }
}
__decorate([
    verificaPessoa(23)
], Pessoa1.prototype, "cadastrarPessoa", null);
const pessoa1 = new Pessoa1("Lucas Lobato");
pessoa1.cadastrarPessoa();
