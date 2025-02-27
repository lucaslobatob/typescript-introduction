// interface TecnologiaProps {
//   id: string;
//   name: string;
//   slug: string[];
// }

// let tecnologia1: TecnologiaProps = {
//   id: "1",
//   name: "React",
//   slug: ["react", "reactjs", "reactnative"],
// };

interface TecnologiaProps {
  id: string;
  name: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnologiaProps[];
}

let frontend: NomesProps = {
  tecnologia: [
    { id: "12", name: "React", descricao: "Biblioteca para criar interfaces" },
    { id: "13", name: "Vue", descricao: "Framework para criar interfaces" },
    { id: "14", name: "Angular", descricao: "Framework para criar aplicações" },
  ],
};

console.log(frontend.tecnologia[2]);
