require('./tracing'); // inicializa OpenTelemetry antes de tudo
const express = require('express');
const logger = require('./logger');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  logger.info("Requisição recebida na rota raiz");
  res.send("Hello, Datadog + OpenTelemetry!");
});

app.get('/error', (req, res) => {
  try {
    throw new Error("Erro proposital para teste");
  } catch (err) {
    logger.error("Erro ocorreu na rota /error", { error: err.message });
    res.status(500).send("Erro registrado!");
  }
});

app.listen(PORT, () => {
  logger.info(`Servidor rodando na porta ${PORT}`);
});
