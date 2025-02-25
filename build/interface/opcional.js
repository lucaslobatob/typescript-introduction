"use strict";
const novoUser = {
    email: "lucas@teste",
    status: true,
};
function novoCadastro({ nome, email, status }) {
    console.log(`Nome: ${nome}`);
}
novoCadastro({ email: "lucas@teste", status: true });
