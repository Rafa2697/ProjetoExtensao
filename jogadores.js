
const database = require('./database')

const Jogadores = database.sequelize.define('jogadores',{
    nome:{
        type: database.Sequelize.STRING
    },
    score:{
        type: database.Sequelize.INTEGER
    }
})

//Jogadores.sync({force: true})

module.exports = {Jogadores};