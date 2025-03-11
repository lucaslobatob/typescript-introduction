/* 
    Vamos supor que temos um jogo e esse jogo pode ter uma dlc.
*/

interface JogoProps {
  readonly id: string;
  name: string;
  descricao: string;
  plataforma: string[];
}

const left4dead: JogoProps = {
  id: "123",
  name: "Left 4 Dead 2",
  descricao: "Jogo de ação e tiro",
  plataforma: ["PS5", "PC", "Xbox"],
};

// console.log(left4dead);

// interface DLC extends JogoProps {
//   novoConteudo: string[];
// }

// const left4dead2DLC: DLC = {
//   id: "90",
//   name: "Left 4 Dead 2 DLC - Novos mapas",
//   descricao: "Novos mapas para jogar online",
//   plataforma: ["PS5", "PC", "Xbox"],
//   novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "medalahas"],
// };

// console.log(left4dead2DLC);

interface DLC extends JogoProps {
  jogoOriginal: JogoProps;
  novoConteudo: string[];
}

const left4dead2DLC: DLC = {
  id: "90",
  name: "Left 4 Dead 2 DLC - Novos mapas",
  descricao: "Novos mapas para jogar online",
  plataforma: ["PS5", "PC", "Xbox"],
  novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "medalahas"],
  jogoOriginal: left4dead,
};

console.log(left4dead2DLC);
