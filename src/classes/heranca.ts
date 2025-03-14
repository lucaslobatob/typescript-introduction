// Herança > quando nós temos uma classe que herda de outra classe.
// Classe PAI tem seus atributos e a  classe FILHA herda esses atributos do pai alem de seus proprios.

class Usuario {
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}

// Supor que essa classe ADMIN herda de Usuario
class Admin extends Usuario {
  cargo: string;
  nivel: number;

  constructor(nome: string, email: string, cargo: string, nivel: number) {
    // super() é usado para acessar os atributos da classe pai.
    // não pode ser chamado por ultimo.
    super(nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }
}

const usuario1 = new Admin("Lucas", "lucas@teste", "Programador", 1);

console.log(usuario1);
console.log(usuario1.nome);
