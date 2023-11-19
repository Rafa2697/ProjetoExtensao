
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require("handlebars");
const port = 3000;
const database = require('./database')
const jogadores = require('./jogadores');
const fetch = require('node-fetch-commonjs');
const Jogadores = require('./jogadores');
// const {nome} = require('./public/script')

app.use(express.static('public'));
// app.use('/static', express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//rotas
app.get("/", (req, res) => {
    
    res.sendFile('public/index.html', { root: __dirname });

});

app.post("/", (req, res) => {
    console.log(req.body.numero)
    console.log(req.body.string)

    jogadores.create({
        nome: req.body.string,
        score: req.body.numero
    }).then(jogador => {
        res.json(jogador)
    }).catch( erro => {
        res.send('houve um erro: ' + erro)
    })
});

app.get('/dados', (req, res) => {
    jogadores.findAll({
        order: [
            ['score', 'DESC']
        ],
        limit: 3
    }).then(jogadores => {
        res.json(jogadores);
    })
})


app.listen(port, () => {
    console.log(`Conectado na porta ${port}`);
});