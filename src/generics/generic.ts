// Generics

/* 
    >>> Permite criar estruturas que serão adaptaveis a varios tipos de dados.
     (Ajudando a reaproveitar melhor o nosso código e deixa-lo mais flexivel).

     Podemos usar os generics:
     Funções | interfaces / type | classes
*/

/* 
    Alguns padrões que você vai encontrar:
    S => State;
    T => Type;
    K => Key;
    V => Value;
    E => Element;
    U => Update;

*/

function repositorio<T extends string | number>() {
  let dados: T;

  function getDados() {
    return dados;
  }

  function setDados(novoDado: T) {
    dados = novoDado;
  }

  return { getDados, setDados };
}

const repo1 = repositorio<string | number>();

repo1.setDados(15);

repo1.setDados("15");

console.log(repo1.getDados());

const repo2 = repositorio<string>();

repo2.setDados("25");

console.log(repo2.getDados());
