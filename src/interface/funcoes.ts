interface CursoProps {
  id: string;
  nome: string;
  preco: number;

  // Definir apenas a função e o que ela deve esperar e retornar
  promocao: (preco: number) => void;
}

// function mostraPromocao(preco: number): void {
//   console.log(`Promoção do curso ${preco}`);
// }

// const novoCurso: CursoProps = {
//   id: "1",
//   nome: "Curso TypeScript",
//   preco: 750,
//   promocao: (preco: number): void => {
//     console.log(`Promoção do curso ${preco}`);
//   },
// };

// console.log(novoCurso);

// console.log(novoCurso.promocao(350));

interface SomaProps {
  (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  console.log("RESULTADO: ", valor1 + valor2);

  return valor1 + valor2;
};

const resultado = somaNumeros(10, 20);
console.log(resultado);
