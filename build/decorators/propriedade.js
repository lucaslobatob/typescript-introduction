"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validaNome(tamanho) {
    return (target, key) => {
        let valor = target[key];
        const getter = () => {
            return valor;
        };
        const setter = (value) => {
            if (value === "") {
                console.log("O nome não pode estar vazio!");
            }
            else if (value.length < tamanho) {
                console.log(`Você não pode criar o nome com esse tamanho`);
            }
            else {
                console.log(`Nome do jogo criado com sucesso`);
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Jogo1 {
    constructor(nome) {
        this.nome = nome;
    }
}
__decorate([
    validaNome(5)
], Jogo1.prototype, "nome", void 0);
const jogo1 = new Jogo1("Mine");
console.log(jogo1.nome);
