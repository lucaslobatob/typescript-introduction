type Info = {
  id: number;
  nome: string;
  descricao?: string;
};

const produtoInfo: Info = {
  id: 1,
  nome: "Placa de video",
  descricao: "Super placa de video",
};

type Categoria = {
  slug: string;
  quantidadeProduto: number;
};

const categoria1: Categoria = {
  slug: "hardware",
  quantidadeProduto: 10,
};

type ProdutoInfo = Info & Categoria; // ProdutoInfo é a interseção de Info e Categoria

const novoProduto: ProdutoInfo = {
  id: 54321,
  nome: "Teclado",
  descricao: "Teclado mecânico",
  slug: "perifericos",
  quantidadeProduto: 20,
};

console.log(novoProduto);
