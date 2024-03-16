const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;

app.get("/usuarios", (req, res) => {
  res.sendFile(`${__dirname}/views/usuarios.html`);
});

app.get("/", (req, res) => {
  res.redirect("/usuarios");
});

app.get("/usuarios/novo", (req, res) => {
  res.sendFile(`${__dirname}/views/cadastrar.html`);
});

app.post("/usuarios/novo", (req, res) => {});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
