const express  = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

const Anuncio = require('./Models/Anuncio');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});

//Listar -> http://localhost:3000
app.get('/', async (req, res) => {
  await Anuncio.findAll({order:[['id', 'DESC']]}).then(function(anuncios){
      res.json({anuncios});
  });
});

//Listagem por id ->http://localhost:3000/visualizar/11
app.get('/visualizar/:id', async (req, res) =>{
    await Anuncio.findByPk(req.params.id)
     .then(anuncio => {
       return res.json({
         error:false,
         anuncio
       })
     }).catch(function(erro){
        return res.status(400).json({
          error:true,
          message:"Anúncio não encontrado"
        });
     });
 });

app.post('/cadastrar', async (req, res) => {
  const resultCad = await Anuncio.create(
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

//Editar -> http://localhost:3000/editar (edição via json)
app.put('/editar', async (req, res) => {

  await Anuncio.update(req.body, {
      where: { id: req.body.id }
  }).then(function () {
      return res.json({
          error: false,
          message: "Anúncio editado com sucesso!"
      });
  }).catch(function (erro) {
      return res.status(400).json({
          error: true,
          message: "Erro ao editar anúncio!"
      });
  });
});

app.delete('/apagar/:id', async (req, res) => {
  await Anuncio.destroy({
      where: { id: req.params.id }
  }).then(function () {
      return res.json({
          error: false,
          message: "Anúncio apagado com sucesso!"
      });
  }).catch(function (erro) {
      return res.status(400).json({
          error: true,
          message: "Erro ao deletar anúncio!"
      });
  });
});

const PORT = 3001;

app.listen(PORT, () => console.log("API rodando com sucesso!."));