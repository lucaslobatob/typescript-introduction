interface CadastroProps {
  nome?: string; // o nome é opcional
  email: string;
  status: boolean;
}

const novoUser: CadastroProps = {
  //   nome: "Lucas",
  email: "lucas@teste",
  status: true,
};

// console.log(novoUser);

function novoCadastro({ nome, email, status }: CadastroProps) {
  console.log(`Nome: ${nome}`); // se o nome não for passado, será undefined
}

novoCadastro({ email: "lucas@teste", status: true }); // undefined
