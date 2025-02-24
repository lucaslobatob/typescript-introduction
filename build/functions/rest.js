"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você tem ${quantidadeVendas} vendas hoje!`);
}
function mostraNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log(`Você tem ${totalNomes} nomes na lista!`);
    nomes.map((nome) => {
        console.log(nome);
    });
}
mostraNomes("João", "Maria", "José", "Pedro", "Ana");
