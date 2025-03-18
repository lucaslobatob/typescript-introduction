class Conta {
  // Private > Atributos e metodos privados, só podem ser acessados dentro da classe.
  private limite: number = 450;

  private aumentarLimite(quantidade: number): void {
    if (quantidade < 1000) {
      this.limite = quantidade;
      console.log(`Limite alterado para: ${this.limite}`);
    } else {
      console.log("Solicitação negada");
    }
  }

  protected solicitarLimite(quantidade: number) {
    return this.aumentarLimite(quantidade);
  }

  solicitarLimiteApp(
    estaAutenticado: boolean,
    quantidade: number
  ): void | boolean {
    if (estaAutenticado) {
      this.aumentarLimite(quantidade);
    } else {
      return false;
    }
  }
}

class BancoAfiliado extends Conta {
  limiteContaAfiliado() {
    return this.solicitarLimite(999);
  }
}

const fulano = new Conta();
// fulano.limite; // Não é possivel acessar o limite, pois ele é private.

fulano.solicitarLimiteApp(true, 700);

console.log(fulano);

console.log("====================================");

const joao = new BancoAfiliado();

joao.limiteContaAfiliado();

console.log(joao);
