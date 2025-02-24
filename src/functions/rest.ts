// function totalVendas(
//   venda1: number,
//   venda2: number,
//   venda3: number,
//   venda4: number
// ): number {
//   const total = venda1 + venda2 + venda3 + venda4;

//   console.log(total);
//   return total;
// }

// totalVendas(100, 200, 300, 400);

function totalVendas(...vendas: number[]): void {
  const quantidadeVendas = vendas.length;

  console.log(`Você tem ${quantidadeVendas} vendas hoje!`);
}

// totalVendas(100, 200, 300, 400, 15, 90, 30);

function mostraNomes(...nomes: string[]): void {
  let totalNomes = nomes.length;
  console.log(`Você tem ${totalNomes} nomes na lista!`);

  nomes.map((nome) => {
    console.log(nome);
  });
}

mostraNomes("João", "Maria", "José", "Pedro", "Ana");
