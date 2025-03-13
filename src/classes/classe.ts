/*
    O que é uma classe?
    >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
     >> Ou seja conjunto de atributos e metodos.
*/

class Loja {
  // Atributos
  nome: string;
  categoria: string;

  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
  }
}

const redBurguer = new Loja("Red Burguer", "Fast Food");

const suco = new Loja("Suco do Bairro", "Lanchonete");

console.log(`Nome da loja: ${redBurguer.nome}`);
console.log(`Categoria da loja: ${redBurguer.categoria}`);

console.log(`Nome da loja: ${suco.nome}`);
console.log(`Categoria da loja: ${suco.categoria}`);
