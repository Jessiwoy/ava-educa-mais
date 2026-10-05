export function inicializarMenuLateral() {
  const botoesNavegacao = document.querySelectorAll("[data-pagina]");

  botoesNavegacao.forEach((botao) => {
    botao.addEventListener("click", () => {
      window.location.href = botao.dataset.pagina;
    });
  });
}
