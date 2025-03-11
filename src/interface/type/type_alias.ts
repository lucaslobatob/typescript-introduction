type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string) {
  console.log(`ID: ${uuid}, Bem-vindo ${nome}`);
}

function logUsuario(uuid: Uuid) {
  console.log(`Conta referente ao UUID: ${uuid}`);
}

// acessar(123, "Lucas");

// acessar("55", "Matheus");

// logUsuario("123");

type Moedas = "BRL" | "USD" | "EUR";

function comprarItem(moeda: Moedas) {
  console.log(`Compra realizada com sucesso em ${moeda}`);
}

comprarItem("BRL");
