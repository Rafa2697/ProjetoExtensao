
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require("handlebars");
const port = 3000;
const teste = "teste"

const jogadores = require('./jogadores');
const fetch = require('node-fetch-commonjs');
// const {nome} = require('./public/script')

 app.use(express.static('public'));
// app.use('/static', express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//rotas
app.get("/", (req, res) => {
    res.sendFile('public/index.html', {root: __dirname});
    
});

app.get("/teste", (req, res) => {

    console.log(req.body.nome); // Imprime "valor da minha variável"
    res.json({ message: 'Dados recebidos!' });
});


app.listen(port, () =>{
    console.log(`Conectado na porta ${port}`);
});