// Exemplo com Arrow Functions

// function retornoAPI(url: string) : string {
//   return url;
// }

const retornoAPI = (url: string): void => {
  console.log("URL DA API ", url);
};

retornoAPI("https://api.com.br");
