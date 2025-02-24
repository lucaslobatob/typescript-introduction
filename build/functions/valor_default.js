"use strict";
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro("teste@teste.com", "123123", "João", 20);
function cadastroLoja(nome, email, status = false) {
    console.log("Status atual da loja ", status);
    return status;
}
cadastroLoja("Burguer K", "teste@teste.com", true);
