const express  = require('express');

const app = express();
const Anuncio = require('./Models/Anuncio');


// const db = require("./Models/db");

app.get('/', (req, res) => {
  res.send("olá mundo.")
});

app.get('/cadastrar', async (req, res) => {
  const resuktCad = await Anuncio.create({
    titulo:'Pedreiro de fundação',
    descricao:'Descrição do anúncio'
  })
});

const PORT = 3000;

app.listen(PORT, () => console.log("API rodando com sucesso!."));