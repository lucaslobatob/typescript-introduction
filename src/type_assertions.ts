// Afirmando algum tipo

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

mudaStatus = statusAtual as number;

console.log(mudaStatus);

// Outra maneira de afirmar o tipo

mudaStatus = <number>statusAtual;

console.log(mudaStatus);

let query: unknown = "pizza";

let searchTerm: string = query as string;

console.log(searchTerm);
