
import { inicializarCabecalho } from "../js/cabecalho.js";
import { inicializarMenuLateral } from "../js/menu-lateral.js";
import { listarCursos } from "../js/cursos.js";
import {
  inicializarSaida,
  verificarUsuarioLogado,
} from "../js/controle-sessao.js";

function formatarData(data) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function renderizarCursos(cursosDoUsuario) {
  const listaCursos = document.querySelector("#lista-cursos");

  cursosDoUsuario.forEach((curso) => {
    const cardCurso = document.createElement("article");
    cardCurso.className = "card-curso";
    cardCurso.innerHTML = `
      <h3>${curso.nomeCurso}</h3>
      <div class="periodo-curso" aria-label="Período do curso">
        <div class="data-curso">
          <span>Data de início</span>
          <strong>${formatarData(curso.dataInicio)}</strong>
        </div>
        <div class="data-curso">
          <span>Data de fim</span>
          <strong>${formatarData(curso.dataFim)}</strong>
        </div>
      </div>
    `;

    listaCursos.appendChild(cardCurso);
  });
}

function carregarCursos() {
  const usuarioArmazenado = sessionStorage.getItem("usuarioLogado");
  const usuario = JSON.parse(usuarioArmazenado);
  const mensagemCursos = document.querySelector("#mensagem-cursos");

  listarCursos(usuario)
    .then((cursosDoUsuario) => {
      renderizarCursos(cursosDoUsuario);
    })
    .catch((erro) => {
      mensagemCursos.textContent = erro;
    });
}

if (verificarUsuarioLogado()) {
  inicializarCabecalho();
  inicializarMenuLateral();
  inicializarSaida();
  carregarCursos();
}
