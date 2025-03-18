class Pessoa {
  readonly id: string = "123";
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mostraId() {
    // this.id = "456"; // Não é possivel alterar o id, pois ele é readonly (apenas posso visualizar).
    console.log(`ID do Usuário: ${this.id}`);
  }
}

const ana = new Pessoa("Ana", 29);

ana.mostraId();

console.log(ana);
