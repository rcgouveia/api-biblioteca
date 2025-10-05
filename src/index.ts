import type { Express } from 'express';

const express = require('express');

const app: Express = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
