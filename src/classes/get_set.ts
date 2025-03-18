// Caso de uso de um jogo

class Jogo {
  private servidor: string;
  private id: string = "1234";

  constructor(servidor: string) {
    this.servidor = servidor;
  }

  // Metodo GET = para pegar o valor ao inves de acessar diretamente a propriedade
  get getServidorIP() {
    return this.servidor;
  }

  // Metodo SET = para alterar o valor ao inves de acessar diretamente a propriedade
  set setServidorIP(novoIP: string) {
    if (this.servidor === novoIP) {
      throw new Error("O novo IP não pode ser igual ao atual");
    }
    this.servidor = novoIP;
  }
}

const GTA5 = new Jogo("192.168.5.10");

try {
  GTA5.setServidorIP = "192.168.5.10";
} catch (error) {
  console.log(error);
}

console.log(GTA5.getServidorIP);
