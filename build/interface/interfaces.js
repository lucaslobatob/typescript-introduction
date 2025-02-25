"use strict";
const BurguerK = {
    nome: "BK",
    endereco: "Rua 1",
    status: true,
};
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Status: ${status}`);
    console.log("-------------------------------------------------");
}
novaLoja({ nome: "Subway", endereco: "Rua 2", status: false });
novaLoja({ nome: "McDonalds", endereco: "Rua 3", status: true });
