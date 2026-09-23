
import { login } from "../js/auth.js";

const formularioLogin = document.querySelector("#formulario-login");
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");
const mensagemLogin = document.querySelector("#mensagem-login");

formularioLogin.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const usuario = campoEmail.value;
  const senha = campoSenha.value;

  mensagemLogin.textContent = "";

  login(usuario, senha)
    .then((usuarioAutenticado) => {
      sessionStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarioAutenticado)
      );

      window.location.href = "../dashboard/dashboard.html";
    })
    .catch((erro) => {
      mensagemLogin.textContent = erro;
    });
});
