// Type unknown = desconhecido > quando vc não sabe o tipo da variável

let total: unknown;

total = 100;

total = "200";

total = {
  total: 150,
};

console.log(total);

let idPedido: any = 123;
let totalPedido: unknown = 200;

let entregador: number = idPedido;

// valor do tipo unknown só podem ser atribuidos ao tupo unknown ou any
let totalEntrega: number = totalPedido as number;

console.log(entregador);
