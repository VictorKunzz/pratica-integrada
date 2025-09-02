require("./tracing"); // Deve ser a primeira linha
const express = require("express");
const logger = require("./logger");

const app = express();

app.get("/", (req, res) => {
  logger.info("Rota / foi acessada");
  res.send("Hello, Datadog!");
});

app.get("/erro", (req, res) => {
  logger.error("Erro simulado no sistema!");
  res.status(500).send("Ocorreu um erro");
});

app.listen(3000, () => {
  logger.info("Servidor rodando na porta 3000");
});


