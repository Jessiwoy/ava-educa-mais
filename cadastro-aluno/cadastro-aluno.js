
import { inicializarCabecalho } from "../js/cabecalho.js";
import { inicializarMenuLateral } from "../js/menu-lateral.js";
import {
  inicializarSaida,
  verificarUsuarioLogado,
} from "../js/controle-sessao.js";

export function validarDadosAluno(dados) {
  const erros = [];
  const nome = dados.nome.trim();
  const dataNascimento = window.moment(
    dados.dataNascimento,
    "DD/MM/YYYY",
    true
  );
  const dataInicial = window.moment("01/01/1990", "DD/MM/YYYY", true);
  const dataAtual = window.moment();
  const cpf = dados.cpf.replace(/\D/g, "");
  const telefone = dados.telefone.replace(/\D/g, "");

  if (nome.length < 4 || nome.length > 80) {
    erros.push("O nome deve ter entre 4 e 80 caracteres.");
  }

  if (!dados.genero) {
    erros.push("O gênero é obrigatório.");
  }

  if (!dataNascimento.isValid()) {
    erros.push("Informe uma data de nascimento válida no formato DD/MM/YYYY.");
  } else if (
    !dataNascimento.isAfter(dataInicial, "day") ||
    !dataNascimento.isBefore(dataAtual, "day")
  ) {
    erros.push("A data deve ser posterior a 01/01/1990 e anterior à data atual.");
  }

  if (cpf.length !== 11) {
    erros.push("Informe um CPF válido.");
  }

  if (telefone.length < 10 || telefone.length > 11) {
    erros.push("Informe um telefone válido.");
  }

  if (!/^\S+@\S+\.\S+$/.test(dados.email)) {
    erros.push("Informe um e-mail válido.");
  }

  const camposEndereco = [
    ["cep", "CEP"],
    ["cidade", "cidade"],
    ["estado", "estado"],
    ["logradouro", "logradouro"],
    ["numero", "número"],
    ["bairro", "bairro"],
  ];

  camposEndereco.forEach(([campo, nomeCampo]) => {
    if (!dados[campo].trim()) {
      erros.push(`O campo ${nomeCampo} é obrigatório.`);
    }
  });

  return erros;
}

function inicializarValidacao() {
  const formularioAluno = document.querySelector("#formulario-aluno");
  const mensagemCadastro = document.querySelector("#mensagem-cadastro");

  formularioAluno.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const dados = Object.fromEntries(new FormData(formularioAluno));
    const erros = validarDadosAluno(dados);

    mensagemCadastro.textContent = erros.join(" ");

    if (erros.length === 0) {
      mensagemCadastro.textContent = "Dados válidos.";
    }
  });
}

if (verificarUsuarioLogado()) {
  inicializarCabecalho();
  inicializarMenuLateral();
  inicializarSaida();
  inicializarValidacao();
}
