// Type ANY | Ou seja qualquer coisa, não é recomendado usar any, pois perde a tipagem do typescript

let precoProduto;

precoProduto = 20;
precoProduto = "20";
precoProduto = true;

let nota1: any;
let nota2: any;

nota1 = 10;
nota1 = "10";

nota2 = 5;

console.log(precoProduto);
console.log(nota1 + nota2); // Saída: 105
