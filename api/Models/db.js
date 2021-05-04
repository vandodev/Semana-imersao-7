  
const Sequelize = require('sequelize');

const sequelize = new Sequelize('semana7', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// sequelize.authenticate()
// .then(function(){
//   console.log("conectado");
// }).catch(function(err){
//   console.log("falha "+ err);
// })

module.exports = sequelize;
