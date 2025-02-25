// let loja: object;

// loja = {
//     nome: "BK",
//     endereco: "Rua 1",
//     status: true,
// }

interface ILojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: ILojaProps = {
  nome: "BK",
  endereco: "Rua 1",
  status: true,
};

// console.log(BurguerK);

function novaLoja({ nome, endereco, status }: ILojaProps) {
  console.log(`Loja ${nome} criada com sucesso!`);
  console.log(`Endereço: ${endereco}`);
  console.log(`Status: ${status}`);
  console.log("-------------------------------------------------");
}

novaLoja({ nome: "Subway", endereco: "Rua 2", status: false });

novaLoja({ nome: "McDonalds", endereco: "Rua 3", status: true });
