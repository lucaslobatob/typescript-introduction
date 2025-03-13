/*
    O que é uma classe?
    >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
     >> Ou seja conjunto de atributos e metodos.
*/

type Status = "ABERTO" | "FECHADO";
class Loja {
  // Atributos
  nome: string;
  categoria: string;

  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
  }

  criarLoja(): void {
    console.log(
      `Loja ${this.nome}, categoria: ${this.categoria} criado com sucesso!`
    );
  }

  emitirPedido(mesa: number, ...pedidos: string[]): string {
    pedidos.map((pedido) => {
      console.log(`Saindo novo pedido: ${pedido}`);
    });

    return `Pedido da mesa ${mesa} emitido com sucesso!`;
  }

  mudarStatus(status: Status) {
    if (status === "ABERTO") {
      console.log("Loja aberta");
    } else {
      console.log("Loja fechada");
    }
  }
}

const redBurguer = new Loja("Red Burguer", "Fast Food");

console.log(`Nome da loja: ${redBurguer.nome}`);
console.log(`Categoria da loja: ${redBurguer.categoria}`);

redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(
  48,
  "X-Burguer",
  "X-Salada",
  "Coca-Cola"
);

redBurguer.mudarStatus("ABERTO");

console.log(retornoLoja);
