const API_URL = "http://localhost:3000";

function mostrarMensagem(texto) {
  const mensagem = document.getElementById("mensagem");
  if (mensagem) {
    mensagem.textContent = texto;
  }
}

function campoVazio(valor) {
  return !valor || valor.trim() === "";
}

async function cadastrarUsuario() {
  const nome = document.getElementById("cadastroNome").value;
  const email = document.getElementById("cadastroEmail").value;
  const senha = document.getElementById("cadastroSenha").value;

  if (campoVazio(nome) || campoVazio(email) || campoVazio(senha)) {
    mostrarMensagem("Preencha nome, e-mail e senha para realizar o cadastro.");
    return;
  }

  try {
    const resposta = await fetch(`${API_URL}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: nome.trim(),
        email: email.trim(),
        senha: senha.trim()
      })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      mostrarMensagem(dados.erro || "Erro ao cadastrar usuário.");
      return;
    }

    mostrarMensagem("Usuário cadastrado com sucesso. Faça login para continuar.");

    document.getElementById("cadastroNome").value = "";
    document.getElementById("cadastroEmail").value = "";
    document.getElementById("cadastroSenha").value = "";
  } catch (erro) {
    mostrarMensagem("Erro ao conectar com o servidor.");
  }
}

async function login() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  if (campoVazio(email) || campoVazio(senha)) {
    mostrarMensagem("Preencha e-mail e senha para realizar o login.");
    return;
  }

  try {
    const resposta = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.trim(),
        senha: senha.trim()
      })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      mostrarMensagem(dados.erro || "Erro ao fazer login.");
      return;
    }

    localStorage.setItem("usuario", JSON.stringify(dados.usuario));
    window.location.href = "dashboard.html";
  } catch (erro) {
    mostrarMensagem("Erro ao conectar com o servidor.");
  }
}

function carregarDashboard() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("usuarioLogado").textContent = `Usuário logado: ${usuario.nome}`;

  carregarDisciplinas();
  carregarSessoes();
}

async function cadastrarDisciplina() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const nome = document.getElementById("nomeDisciplina").value;

  if (campoVazio(nome)) {
    mostrarMensagem("Informe o nome da disciplina.");
    return;
  }

  try {
    const resposta = await fetch(`${API_URL}/disciplinas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: nome.trim(),
        usuario_id: usuario.id
      })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      mostrarMensagem(dados.erro || "Erro ao cadastrar disciplina.");
      return;
    }

    mostrarMensagem("Disciplina cadastrada com sucesso.");
    document.getElementById("nomeDisciplina").value = "";
    carregarDisciplinas();
  } catch (erro) {
    mostrarMensagem("Erro ao conectar com o servidor.");
  }
}

async function carregarDisciplinas() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const select = document.getElementById("disciplinaSelect");

  if (!select) return;

  try {
    const resposta = await fetch(`${API_URL}/disciplinas/${usuario.id}`);
    const disciplinas = await resposta.json();

    select.innerHTML = "";

    if (disciplinas.length === 0) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "Nenhuma disciplina cadastrada";
      select.appendChild(option);
      return;
    }

    disciplinas.forEach((disciplina) => {
      const option = document.createElement("option");
      option.value = disciplina.id;
      option.textContent = disciplina.nome;
      select.appendChild(option);
    });
  } catch (erro) {
    mostrarMensagem("Erro ao carregar disciplinas.");
  }
}

async function registrarSessao() {
  const disciplina_id = document.getElementById("disciplinaSelect").value;
  const data = document.getElementById("dataSessao").value;
  const duracao = document.getElementById("duracaoSessao").value;
  const descricao = document.getElementById("descricaoSessao").value;

  if (campoVazio(disciplina_id)) {
    mostrarMensagem("Cadastre ou selecione uma disciplina antes de registrar a sessão.");
    return;
  }

  if (campoVazio(data) || campoVazio(duracao)) {
    mostrarMensagem("Informe a data e a duração da sessão de estudo.");
    return;
  }

  if (Number(duracao) <= 0) {
    mostrarMensagem("A duração da sessão deve ser maior que zero.");
    return;
  }

  try {
    const resposta = await fetch(`${API_URL}/sessoes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        disciplina_id,
        data,
        duracao,
        descricao: descricao.trim()
      })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      mostrarMensagem(dados.erro || "Erro ao registrar sessão.");
      return;
    }

    mostrarMensagem("Sessão registrada com sucesso.");
    document.getElementById("dataSessao").value = "";
    document.getElementById("duracaoSessao").value = "";
    document.getElementById("descricaoSessao").value = "";
    carregarSessoes();
  } catch (erro) {
    mostrarMensagem("Erro ao conectar com o servidor.");
  }
}

async function carregarSessoes() {
  const lista = document.getElementById("listaSessoes");

  if (!lista) return;

  try {
    const resposta = await fetch(`${API_URL}/sessoes`);
    const sessoes = await resposta.json();

    lista.innerHTML = "";

    if (sessoes.length === 0) {
      const item = document.createElement("li");
      item.textContent = "Nenhuma sessão de estudo cadastrada.";
      lista.appendChild(item);
      return;
    }

    sessoes.forEach((sessao) => {
      const item = document.createElement("li");
      item.textContent = `${sessao.disciplina} | ${sessao.data} | ${sessao.duracao} minutos | ${sessao.descricao}`;
      lista.appendChild(item);
    });
  } catch (erro) {
    mostrarMensagem("Erro ao carregar sessões.");
  }
}

function sair() {
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
}