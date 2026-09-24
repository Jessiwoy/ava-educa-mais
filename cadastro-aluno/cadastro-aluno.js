
import { inicializarCabecalho } from "../js/cabecalho.js";
import { inicializarMenuLateral } from "../js/menu-lateral.js";
import {
  inicializarSaida,
  verificarUsuarioLogado,
} from "../js/controle-sessao.js";

if (verificarUsuarioLogado()) {
  inicializarCabecalho();
  inicializarMenuLateral();
  inicializarSaida();
}
