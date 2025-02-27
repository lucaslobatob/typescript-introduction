// Só pode ler e não pode alterar

interface ProdutoProps {
  readonly id: string; // passa antes da prop para não ser alterado
  nome: string;
  descricao: string;
}

let produto1: ProdutoProps = {
  id: "1",
  nome: "Tenis Nike",
  descricao: "Super tenis da nike",
};

// produto1.id = "123"; // erro
produto1.nome = "Tenis Nike 2.0";

console.log(produto1);
