// Decorator Método, ele só é chamado quando nosso metódo é chamado

function verificaPessoa(idade: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // console.log(`Target ${target}, Key ${key}, Descriptor ${descriptor}`);

    const metodoOriginal = descriptor.value; // Salvar nosso metodo original

    descriptor.value = function () {
      if (idade < 18) {
        console.log("Pessoa menor de idade");
        // retornando metodo original para ser executado
        return metodoOriginal.apply(this);
      } else {
        console.log("Adulto cadastrado no sistema");
        // retornando metodo original para ser executado
        return metodoOriginal.apply(this);
      }
    };
  };
}
class Pessoa1 {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  @verificaPessoa(23)
  cadastrarPessoa() {
    console.log(`Cadastrando a pessoa ${this.nome} ao sistema`);
  }
}

const pessoa1 = new Pessoa1("Lucas Lobato");
pessoa1.cadastrarPessoa();
