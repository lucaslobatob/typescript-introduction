// Herança > quando nós temos uma classe que herda de outra classe.
// Classe PAI tem seus atributos e a  classe FILHA herda esses atributos do pai alem de seus proprios.

// Encapsulamento > é a proteção dos atributos de uma classe, ou seja, não permitir que esses atributos sejam acessados diretamente.

// Modificador de acesso > public, private, protected, readonly.

class Usuario {
  public nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}

// Supor que essa classe ADMIN herda de Usuario
class Admin extends Usuario {
  public cargo: string;
  public nivel: number;

  constructor(nome: string, email: string, cargo: string, nivel: number) {
    // super() é usado para acessar os atributos da classe pai.
    // não pode ser chamado por ultimo.
    super(nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }

  public mudarCargo(): void {
    console.log("ALTERANDO CARGO");
  }
}

const usuario1 = new Admin("Lucas", "lucas@teste", "Programador", 1);

usuario1.cargo = "Desenvolvedor Full Stack";

console.log(usuario1);

usuario1.mudarCargo();
