const express  = require('express');

const app = express();

app.use(express.json());

const Anuncio = require('./Models/Anuncio');


// const db = require("./Models/db");

app.get('/', (req, res) => {
  res.send("olá mundo.")
});

app.post('/cadastrar', async (req, res) => {
  const resuktCad = await Anuncio.create(
    req.body
  ).then(function (){
    return res.json({
      error:false,
      message:"Cadastro realizado com sucesso"
    });
  }).catch(function (err){
    return res.status(400).json({
      error:true,
      message:"Erro ao cadastrar"
    });
  })
});

const PORT = 3000;

app.listen(PORT, () => console.log("API rodando com sucesso!."));