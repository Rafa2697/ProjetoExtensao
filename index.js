
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require("handlebars");
const port = 3000;

const jogadores = require('./jogadores');
const fetch = require('node-fetch-commonjs');

 app.use(express.static('public'));
// app.use('/static', express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//rotas
app.get("/", (req, res) => {
    res.sendFile('public/index.html', {root: __dirname});
    
});

app.get("/teste", (req, res) => {
    fetch('http://localhost:3000/perguntas.html')
    .then(resposta => resposta.json())
    .then(resposta => console.log(resposta))
    .catch((error) => {
        console.error('errro: ', error)
    })
    res.end()
});


app.listen(port, () =>{
    console.log(`Conectado na porta ${port}`);
});