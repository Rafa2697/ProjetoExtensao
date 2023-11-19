
const database = require('./database')
const Sequelize = require('sequelize');
const Jogadores = database.sequelize.define('jogadores',{
    nome:{
        type: Sequelize.STRING
    },
    score:{
        type: Sequelize.INTEGER
    }
})

//  Jogadores.sync()

module.exports = Jogadores;