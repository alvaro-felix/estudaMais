const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend do Estuda+ funcionando!");
});

// Cadastro de usuário
app.post("/usuarios", (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Nome, email e senha são obrigatórios." });
  }

  const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

  db.run(sql, [nome, email, senha], function (err) {
    if (err) {
      return res.status(400).json({ erro: "Erro ao cadastrar usuário.", detalhes: err.message });
    }

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso.",
      usuarioId: this.lastID
    });
  });
});

// Login simples
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "Email e senha são obrigatórios." });
  }

  const sql = "SELECT id, nome, email FROM usuarios WHERE email = ? AND senha = ?";

  db.get(sql, [email, senha], (err, usuario) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao realizar login." });
    }

    if (!usuario) {
      return res.status(401).json({ erro: "Email ou senha inválidos." });
    }

    res.json({
      mensagem: "Login realizado com sucesso.",
      usuario
    });
  });
});

// Cadastro de disciplina
app.post("/disciplinas", (req, res) => {
  const { nome, usuario_id } = req.body;

  if (!nome || !usuario_id) {
    return res.status(400).json({ erro: "Nome da disciplina e usuário são obrigatórios." });
  }

  const sql = "INSERT INTO disciplinas (nome, usuario_id) VALUES (?, ?)";

  db.run(sql, [nome, usuario_id], function (err) {
    if (err) {
      return res.status(400).json({ erro: "Erro ao cadastrar disciplina.", detalhes: err.message });
    }

    res.status(201).json({
      mensagem: "Disciplina cadastrada com sucesso.",
      disciplinaId: this.lastID
    });
  });
});

// Listar disciplinas de um usuário
app.get("/disciplinas/:usuario_id", (req, res) => {
  const { usuario_id } = req.params;

  const sql = "SELECT * FROM disciplinas WHERE usuario_id = ?";

  db.all(sql, [usuario_id], (err, disciplinas) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao listar disciplinas." });
    }

    res.json(disciplinas);
  });
});

// Registrar sessão de estudo
app.post("/sessoes", (req, res) => {
  const { disciplina_id, data, duracao, descricao } = req.body;

  if (!disciplina_id || !data || !duracao) {
    return res.status(400).json({ erro: "Disciplina, data e duração são obrigatórias." });
  }

  const sql = `
    INSERT INTO sessoes_estudo (disciplina_id, data, duracao, descricao)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [disciplina_id, data, duracao, descricao || ""], function (err) {
    if (err) {
      return res.status(400).json({ erro: "Erro ao registrar sessão.", detalhes: err.message });
    }

    res.status(201).json({
      mensagem: "Sessão de estudo registrada com sucesso.",
      sessaoId: this.lastID
    });
  });
});

// Listar sessões de estudo
app.get("/sessoes", (req, res) => {
  const sql = `
    SELECT 
      sessoes_estudo.id,
      sessoes_estudo.data,
      sessoes_estudo.duracao,
      sessoes_estudo.descricao,
      disciplinas.nome AS disciplina
    FROM sessoes_estudo
    INNER JOIN disciplinas ON sessoes_estudo.disciplina_id = disciplinas.id
    ORDER BY sessoes_estudo.data DESC
  `;

  db.all(sql, [], (err, sessoes) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao listar sessões." });
    }

    res.json(sessoes);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});