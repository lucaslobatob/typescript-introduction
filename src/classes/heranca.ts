// Herança > quando nós temos uma classe que herda de outra classe.
// Classe PAI tem seus atributos e a  classe FILHA herda esses atributos do pai alem de seus proprios.

// Encapsulamento > é a proteção dos atributos de uma classe, ou seja, não permitir que esses atributos sejam acessados diretamente.

// Modificador de acesso > public, private, protected, readonly.

/* 
    Protected > Atributos e metodos protegidos, só podem ser acessados dentro da classe ou de classes filhas.
    Private > Atributos e metodos privados, só podem ser acessados dentro da classe.
    Public > Atributos e metodos publicos, podem ser acessados de qualquer lugar.
    Readonly > Atributos somente leitura, não podem ser alterados.
*/

class Usuario {
  protected id: number; // Podemos chamar na classe usuario ou classes que extendem de usuario.
  nome: string;
  email: string;

  constructor(id: number, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

// Supor que essa classe ADMIN herda de Usuario
class Admin extends Usuario {
  cargo: string;
  nivel: number;

  constructor(
    id: number,
    nome: string,
    email: string,
    cargo: string,
    nivel: number
  ) {
    // super() é usado para acessar os atributos da classe pai.
    // não pode ser chamado por ultimo.
    super(id, nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }

  protected mudarCargo(cargo: string): void {
    console.log(`ALTERANDO CARGO PARA: ${cargo}`);
    console.log(`Id do usuario: ${this.id}`);
  }

  acessarAdmin() {
    this.mudarCargo("Designer");
  }
}

const usuario1 = new Admin(123, "Lucas", "lucas@teste", "Programador", 2);

// usuario1.id; // Não é possivel acessar o id, pois ele é protected.

usuario1.acessarAdmin();
