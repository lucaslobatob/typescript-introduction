// Buscar o meu arquivo que conecta com o banco de dados

import { connection, statusConnection } from "./database/connection";
import status, { resetandoBanco } from "./database/aplicativo";

function acessarSistema() {
  connection({
    ip: "127.0.0.1",
    name: "MySQL",
  });
}

acessarSistema();

statusConnection();

status();

resetandoBanco();
