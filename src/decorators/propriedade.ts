// Propriedade Decorator.

function validaNome(tamanho: number) {
  // target = construtor da nossa classe
  // key = nossa propriedade
  return (target: any, key: string) => {
    let valor = target[key];

    const getter = () => {
      return valor;
    };

    const setter = (value: string) => {
      if (value === "") {
        console.log("O nome não pode estar vazio!");
      } else if (value.length < tamanho) {
        console.log(`Você não pode criar o nome com esse tamanho`);
      } else {
        console.log(`Nome do jogo criado com sucesso`);
        valor = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Jogo1 {
  @validaNome(5)
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const jogo1 = new Jogo1("Mine");

console.log(jogo1.nome);
