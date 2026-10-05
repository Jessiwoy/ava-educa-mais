# AVA-EDUCA+

Protótipo de uma plataforma web para apoiar a equipe pedagógica no acompanhamento de cursos e alunos.

O projeto foi desenvolvido com HTML, CSS e JavaScript puro, utilizando uma aplicação estática executada diretamente no navegador.

## Sobre o projeto

O AVA-EDUCA+ foi desenvolvido como um projeto avaliativo com o objetivo de aplicar, de forma prática, os principais conceitos de desenvolvimento web estudados durante o curso.

A aplicação centraliza informações acadêmicas em um único ambiente, permitindo autenticar usuários, consultar cursos, cadastrar alunos, buscar endereços pelo CEP e visualizar os registros em uma tabela.

O desenvolvimento priorizou uma estrutura simples, modular, responsiva e compatível com o escopo definido para a atividade. As funcionalidades foram implementadas de forma incremental e organizadas por etapas no Git e no quadro Kanban.

## Funcionalidades

O sistema possui as seguintes funcionalidades:

- redirecionamento inicial para a tela de Login;
- autenticação com dados de demonstração;
- armazenamento da sessão com `sessionStorage`;
- exibição do nome do usuário autenticado;
- listagem de cursos filtrados por usuário;
- tratamento de usuários sem cursos cadastrados;
- menu de navegação entre as páginas internas;
- proteção das páginas internas sem sessão ativa;
- logout;
- formulário de cadastro de alunos;
- validação de dados pessoais e endereço;
- validação de data de nascimento com Moment.js;
- consulta de endereço pela API ViaCEP;
- criação de alunos com a classe `Aluno`;
- atualização da tabela após cadastro;
- formatação visual de CPF e telefone na tabela;
- layout responsivo para desktop e mobile;
- feedbacks visuais para erros e operações concluídas.

## Requisitos funcionais

| Requisito | Descrição |
|---|---|
| RF01 | Redirecionamento inicial e tela de Login com e-mail, senha e recuperação de senha |
| RF02 | Cabeçalho com a marca AVA-EDUCA+ e o nome do usuário autenticado |
| RF03 | Menu lateral com Dashboard, Cursos desabilitado, Cadastro de Alunos e Sair |
| RF04 | Dashboard com os cursos associados ao usuário autenticado |
| RF05 | Formulário completo para cadastro de alunos e endereço |
| RF06 | Cadastro de aluno em memória com identificador único |
| RF07 | Listagem de cursos filtrada pelo usuário |
| RF08 | Autenticação com validação de credenciais |
| RF09 | Responsividade para desktop e telas de até 768px |
| RF10 | Organização do desenvolvimento por quadro Kanban |
| RF11 | Classe `Aluno` com constructor e propriedades do cadastro |
| RF12 | Uso de módulos JavaScript com `import` e `export` |

## Validações e integrações

Além dos requisitos principais, foram implementadas validações e tratamentos para melhorar a consistência da aplicação:

- validação de campos obrigatórios pelo HTML e pelo JavaScript;
- validação do nome entre 4 e 80 caracteres;
- validação de gênero com opções predefinidas;
- validação estrita da data no formato `DD/MM/YYYY`;
- validação de data posterior a `01/01/1900` e anterior à data atual;
- validação de CPF com 11 números;
- validação de telefone com 10 ou 11 números;
- validação de e-mail;
- validação dos campos obrigatórios de endereço;
- tratamento de CEP inválido ou não encontrado;
- tratamento de falha na consulta à API ViaCEP;
- tratamento de usuário sem cursos cadastrados;
- proteção de acesso às páginas internas sem sessão;
- formatação visual de CPF e telefone sem alterar os valores armazenados;
- atualização da tabela após um cadastro bem-sucedido.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript puro;
- Moment.js via CDN;
- API ViaCEP;
- Git;
- GitHub.

## Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos fundamentais de HTML, CSS e JavaScript, incluindo:

- HTML semântico;
- formulários e validações;
- labels e atributos de acessibilidade;
- DOM e eventos;
- variáveis, constantes e tipos de dados;
- condicionais e operadores lógicos;
- funções tradicionais e arrow functions;
- arrays e objetos;
- métodos de arrays, como `find`, `filter`, `forEach` e `reduce`;
- classe e constructor;
- modularização com `import` e `export`;
- Promises;
- `async/await`;
- Fetch;
- `sessionStorage`;
- Flexbox;
- CSS Grid;
- Media Queries;
- tabela semântica com `table`, `thead` e `tbody`.

## Uso da inteligência artificial

Durante o desenvolvimento, também utilizei inteligência artificial como ferramenta de apoio, sempre revisando e validando as sugestões antes de aplicar qualquer alteração.

No início, analisei o documento e defini que desenvolveria a aplicação de forma incremental, separando o trabalho por funcionalidades. A partir dessa decisão, usei a IA para me ajudar a estruturar o backlog. Depois revisei as tarefas e incluí os ajustes necessários.

Também usei a IA como apoio na criação do favicon, na melhoria do CSS da tela de Login e nos elementos decorativos, como os círculos do painel azul. Algumas sugestões precisaram de ajustes durante os testes para se adequarem ao layout.

Também pedi sugestões de acessibilidade, responsividade e organização do README. Em todos os casos, conferi o código, testei o comportamento e mantive somente o que estava dentro do escopo e que eu conseguia compreender e explicar. As decisões finais e a validação ficaram sob minha responsabilidade.

## Estrutura do projeto

```text
ava-educa-plus/
├── assets/
│   ├── favicon.svg
│   ├── icons/
│   └── images/
├── cadastro-aluno/
│   ├── cadastro-aluno.css
│   ├── cadastro-aluno.html
│   └── cadastro-aluno.js
├── css/
│   └── style.css
├── dados/
│   ├── listagem-alunos.js
│   ├── listagem-cursos.js
│   └── listagem-usuarios.js
├── dashboard/
│   ├── dashboard.css
│   ├── dashboard.html
│   └── dashboard.js
├── js/
│   ├── Aluno.js
│   ├── alunos.js
│   ├── app.js
│   ├── auth.js
│   ├── cabecalho.js
│   ├── controle-sessao.js
│   ├── cursos.js
│   └── menu-lateral.js
├── login/
│   ├── login.css
│   ├── login.html
│   └── login.js
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Responsabilidade dos arquivos

| Arquivo ou pasta | Responsabilidade |
|---|---|
| `index.html` | Página inicial e ponto de entrada da aplicação |
| `js/app.js` | Redirecionamento inicial para o Login |
| `login/login.html` | Estrutura da tela de autenticação |
| `login/login.css` | Estilos específicos do Login |
| `login/login.js` | Eventos, autenticação e recuperação de senha |
| `dashboard/dashboard.html` | Estrutura da página de cursos |
| `dashboard/dashboard.css` | Estilos dos cards e do Dashboard |
| `dashboard/dashboard.js` | Carregamento e renderização dos cursos |
| `cadastro-aluno/cadastro-aluno.html` | Formulário e tabela de alunos |
| `cadastro-aluno/cadastro-aluno.css` | Estilos do cadastro e da tabela |
| `cadastro-aluno/cadastro-aluno.js` | Validações, ViaCEP, cadastro e renderização |
| `js/Aluno.js` | Definição da classe `Aluno` |
| `js/alunos.js` | Cadastro de alunos em memória |
| `js/auth.js` | Autenticação dos usuários |
| `js/cursos.js` | Listagem de cursos por usuário |
| `js/cabecalho.js` | Inicialização do nome no cabeçalho |
| `js/menu-lateral.js` | Navegação do menu lateral |
| `js/controle-sessao.js` | Verificação de sessão e logout |
| `dados/` | Dados iniciais de usuários, cursos e alunos |
| `css/style.css` | Estilos compartilhados da aplicação |
| `assets/favicon.svg` | Favicon do projeto |

## Pré-requisitos

Para executar o projeto, é necessário ter:

- um navegador atualizado;
- um servidor HTTP local, como o Live Server do VS Code;
- Git, caso deseje clonar o repositório.

Não é necessário instalar dependências ou configurar backend para executar a aplicação.

## Como executar

Clone o repositório:

```bash
git clone https://github.com/Jessiwoy/ava-educa-mais.git
```

Acesse o diretório do projeto:

```bash
cd ava-educa-plus
```

Abra a pasta no VS Code e inicie um servidor HTTP local, como o Live Server. Depois, acesse o `index.html` pelo endereço local fornecido pelo servidor.

O Live Server é uma extensão do VS Code que inicia um servidor HTTP local e permite visualizar o projeto no navegador. Esse formato é necessário porque a aplicação utiliza módulos JavaScript com `import` e `export`; abrir o arquivo diretamente pelo protocolo `file://` pode impedir o carregamento desses módulos.

## Credenciais para demonstração

| E-mail | Senha | Resultado esperado |
|---|---|---|
| `ana.silva@edutech.com` | `123456` | Exibe seis cursos |
| `carlos.santos@edutech.com` | `654321` | Exibe dois cursos |
| `mariana.costa@edutech.com` | `edu2026` | Exibe mensagem de nenhum curso |

As credenciais são dados de demonstração e não representam uma autenticação real.

## Armazenamento dos dados

Os dados iniciais ficam nos módulos da pasta `dados`.

O usuário autenticado é armazenado temporariamente na `sessionStorage`. Os novos alunos são adicionados ao array em memória durante a execução da página.

Isso significa que os cadastros permanecem disponíveis enquanto a página estiver aberta, mas não são persistidos após o recarregamento. O projeto não utiliza banco de dados nem gravação em servidor.

## Versionamento

O desenvolvimento utiliza Git para controle de versão e uma organização baseada em Git Flow.

As principais branches utilizadas são:

- `main`: versão final e estável do projeto;
- `develop`: integração das funcionalidades durante o desenvolvimento;
- `feature/*`: implementação de funcionalidades;
- `refactor/*`: melhorias e ajustes de código;
- `test/*`: validação e testes;
- `docs/*`: alterações de documentação.

As mensagens de commit seguem o padrão Conventional Commits, utilizando prefixos como:

- `feat:` para novas funcionalidades;
- `fix:` para correções;
- `refactor:` para melhorias internas;
- `test:` para validações;
- `docs:` para documentação;
- `chore:` para manutenção e configuração.

Essa organização mantém o histórico incremental e facilita identificar as mudanças realizadas em cada etapa.

## Limitações e melhorias futuras

As principais limitações atuais são a ausência de persistência dos cadastros, de autenticação real e de recuperação de senha funcional.

Como melhorias futuras, podem ser adicionados:

- backend e banco de dados;
- autenticação real com controle de permissões;
- recuperação de senha funcional;
- edição e exclusão de alunos;
- filtros e paginação na tabela;
- novos perfis de usuários;
- persistência dos dados cadastrados.

Essas funcionalidades não foram implementadas porque estão fora do escopo definido para esta entrega.

## Repositório

Código-fonte: [repositório no GitHub](https://github.com/Jessiwoy/ava-educa-mais)

Quadro Kanban: [acessar o quadro no Trello](https://trello.com/invite/b/6a6cf7131476b84204f96e97/ATTIdd88c6a24a8e8c1ce1f43777704ea1d1E509C913/projeto-avaliativo-modulo-1-sctec-jessica-woytuski)

Vídeo de apresentação: [assistir ao vídeo no Google Drive](https://drive.google.com/file/d/16SDsWlOIe4oNAQNJx-adNLb3W9L-1LW7/view?usp=drive_link)

## Autor

Jessica Woytuski

Projeto desenvolvido como parte das atividades avaliativas do curso Desenvolvedor Front-End Angular - SCTEC.
