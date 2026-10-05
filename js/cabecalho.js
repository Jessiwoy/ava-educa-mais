export function inicializarCabecalho() {
  const nomeUsuario = document.querySelector("#nome-usuario");
  const usuarioArmazenado = sessionStorage.getItem("usuarioLogado");

  if (!nomeUsuario) {
    return;
  }

  if (usuarioArmazenado) {
    const usuario = JSON.parse(usuarioArmazenado);
    nomeUsuario.textContent = usuario.nome;
    return;
  }

  nomeUsuario.textContent = "Usuário não identificado";
}
