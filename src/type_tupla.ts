// Tupla não possui no JS e sim apenas com TS

let aluno: [string, number]; // precisa seguir a mesma ordem passada.

aluno = ["João", 10];

aluno.push("Lucas", 9);
aluno.push(8, "Maria");

console.log(aluno);

let statusPedido: [string, string, string];

statusPedido = ["Pedido", "Em Separação", "Aguardando Pagamento"];
console.log(statusPedido);
