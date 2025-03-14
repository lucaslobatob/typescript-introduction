"use strict";
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(nome, email, cargo, nivel) {
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log("ALTERANDO CARGO");
    }
}
const usuario1 = new Admin("Lucas", "lucas@teste", "Programador", 1);
usuario1.cargo = "Desenvolvedor Full Stack";
console.log(usuario1);
usuario1.mudarCargo();
