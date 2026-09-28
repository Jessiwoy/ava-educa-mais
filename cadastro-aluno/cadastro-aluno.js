
import { inicializarCabecalho } from "../js/cabecalho.js";
import { inicializarMenuLateral } from "../js/menu-lateral.js";
import { Aluno } from "../js/Aluno.js";
import { cadastrarAluno } from "../js/alunos.js";
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
  const dataInicial = window.moment("01/01/1900", "DD/MM/YYYY", true);
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
    erros.push("A data deve ser posterior a 01/01/1900 e anterior à data atual.");
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

function exibirMensagem(elemento, mensagem, estado = "erro") {
  elemento.textContent = mensagem;
  elemento.classList.toggle("sucesso", estado === "sucesso");
  elemento.classList.toggle("erro", estado === "erro");
}

function inicializarValidacao() {
  const formularioAluno = document.querySelector("#formulario-aluno");
  const mensagemCadastro = document.querySelector("#mensagem-cadastro");
  const mensagemCep = document.querySelector("#mensagem-cep");

  formularioAluno.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const dados = Object.fromEntries(new FormData(formularioAluno));
    const erros = validarDadosAluno(dados);

    if (erros.length > 0) {
      exibirMensagem(mensagemCadastro, erros.join(" "), "erro");
      return;
    }

    const aluno = new Aluno(
      dados.nome,
      dados.genero,
      dados.dataNascimento,
      dados.cpf,
      dados.telefone,
      dados.email,
      dados.cep,
      dados.cidade,
      dados.estado,
      dados.logradouro,
      dados.numero,
      dados.complemento,
      dados.bairro
    );

    cadastrarAluno(aluno)
      .then((mensagem) => {
        formularioAluno.reset();
        exibirMensagem(mensagemCep, "", "neutro");
        exibirMensagem(mensagemCadastro, mensagem, "sucesso");
      })
      .catch((erro) => {
        exibirMensagem(mensagemCadastro, erro, "erro");
      });
  });
}

function preencherEndereco(endereco) {
  document.querySelector("#logradouro").value = endereco.logradouro;
  document.querySelector("#bairro").value = endereco.bairro;
  document.querySelector("#cidade").value = endereco.localidade;
  document.querySelector("#estado").value = endereco.uf;
}

function limparEndereco() {
  document.querySelector("#logradouro").value = "";
  document.querySelector("#bairro").value = "";
  document.querySelector("#cidade").value = "";
  document.querySelector("#estado").value = "";
}

export async function buscarEnderecoPorCep(cep) {
  const cepSemFormatacao = cep.replace(/\D/g, "");

  if (cepSemFormatacao.length !== 8) {
    throw new Error("Informe um CEP válido com 8 números.");
  }

  try {
    const resposta = await fetch(
      `https://viacep.com.br/ws/${cepSemFormatacao}/json/`
    );

    if (!resposta.ok) {
      throw new Error("Não foi possível consultar o CEP.");
    }

    const endereco = await resposta.json();

    if (endereco.erro) {
      throw new Error("CEP não encontrado.");
    }

    return endereco;
  } catch (erro) {
    if (erro.message === "CEP não encontrado.") {
      throw erro;
    }

    throw new Error("Não foi possível consultar o CEP. Tente novamente.");
  }
}

function inicializarConsultaCep() {
  const campoCep = document.querySelector("#cep");
  const mensagemCep = document.querySelector("#mensagem-cep");

  campoCep.addEventListener("blur", async () => {
    if (!campoCep.value.trim()) {
      return;
    }

    exibirMensagem(mensagemCep, "Consultando CEP...", "neutro");

    try {
      const endereco = await buscarEnderecoPorCep(campoCep.value);
      preencherEndereco(endereco);
      exibirMensagem(
        mensagemCep,
        "Endereço preenchido pelo CEP.",
        "sucesso"
      );
    } catch (erro) {
      limparEndereco();
      exibirMensagem(mensagemCep, erro.message, "erro");
    }
  });
}

if (verificarUsuarioLogado()) {
  inicializarCabecalho();
  inicializarMenuLateral();
  inicializarSaida();
  inicializarValidacao();
  inicializarConsultaCep();
}
