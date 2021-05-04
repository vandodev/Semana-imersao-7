const express  = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("olá mundo.")
});

const PORT = 3000;

app.listen(PORT, () => console.log("API rodando com sucesso!."));