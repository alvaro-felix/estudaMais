const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./estudamais.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
  } else {
    console.log("Banco de dados conectado com sucesso.");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS disciplinas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      usuario_id INTEGER NOT NULL,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS sessoes_estudo (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      disciplina_id INTEGER NOT NULL,
      data TEXT NOT NULL,
      duracao INTEGER NOT NULL,
      descricao TEXT,
      FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
    )
  `);
});

module.exports = db;