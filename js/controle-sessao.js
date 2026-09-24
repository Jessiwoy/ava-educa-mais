export function verificarUsuarioLogado() {
  const usuarioArmazenado = sessionStorage.getItem("usuarioLogado");

  if (!usuarioArmazenado) {
    window.location.href = "../login/login.html";
    return false;
  }

  return true;
}

export function inicializarSaida() {
  const botaoSair = document.querySelector('[data-acao="sair"]');

  if (!botaoSair) {
    return;
  }

  botaoSair.addEventListener("click", () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "../login/login.html";
  });
}
