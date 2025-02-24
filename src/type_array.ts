// Type Array

let numbers: number[];

numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(55);
console.log("Meus numeros: ", numbers);

let movies: Array<string>; // string[] é a mesma coisa que Array<string>

movies = ["Batman", "Superman", "Homem de Ferro"];
console.log(movies);

movies.push("Homem Aranha");
console.log("Meus filmes: ", movies);
