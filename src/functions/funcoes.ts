// function login(username: string): boolean | string {
//   let message = "Bem-vindo, " + username;
//   console.log(message);

//   return username;
// }

// const usernameLogin = login("Lucas");

// console.log(usernameLogin);

let n1: number = 10;
let n2: string = "25";

function soma(valor1: number, valor2: number): number {
  let soma = valor1 + valor2;

  return soma;
}

console.log(soma(n1, parseInt(n2)));

function somando(valor1: number, valor2: number): string {
  let soma = valor1 + valor2;

  if (soma > 20) {
    return "Valor maior que 20";
  } else {
    return "Valor menor que 20";
  }
}

console.log(somando(n1, parseInt(n2)));
