type DadosConta = {
  nome: string;
  numero: string;
  endereco: string;
};

abstract class ContaBanco {
  abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    console.log("===========");
    console.log(`Nova conta PF criada com sucesso ${dados.nome}`);
    console.log("===========");

    return true;
  }
}

class PessoaJuridica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    console.log("===========");
    console.log(`Nova conta PJ criada com sucesso ${dados.nome}`);
    console.log("===========");

    return true;
  }
}

const joana = new PessoaFisica();

joana.abrirConta({
  nome: "Joana Silva",
  numero: "1020-X",
  endereco: "Rua das Flores, 123",
});

const empresa = new PessoaJuridica();

empresa.abrirConta({
  nome: "Empresa X",
  numero: "901045-X",
  endereco: "Rua das Pedras, 567",
});
