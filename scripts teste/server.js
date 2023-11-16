//servidor nativo com node
// import {createServer} from 'node:http'
// const server = createServer((request, response) =>{
//     response.write('Ola mundo')

//     return response.end()
// })
// server.listen(3333)

//server com framework fastify

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
// import { request } from 'node:http'
//import {questionsCorrect} from './script.js'


const server = fastify()
const database = new DatabaseMemory()

//rotas

server.get("/", function(req, replay){
    // replay.sendFile(__dirname + "/index.html")
})

//cria
server.post('/jogadores', async (request, reply) => {
   
    const {name, score} = request.body

   database.create({
       name,
       score,
    })

    //console.log(database.list())

    return reply.status(201).send()
})

//busca
server.get('/jogadores', (request, reply) => {
    const search = request.query.search

    const jogadores = database.list(search)

    return jogadores
})

//atualiza
server.put('/jogadores/:id', (request, reply) => {
    const jogadorId = request.params.id
    const { name, score} = request.body

    database.update(jogadorId, {
        name,
        score,
    })
})

//deleta
server.delete('/jogadores/:id', (request,reply) => {
    const jogadorId = request.params.id
    database.delete(jogadorId)

    return reply.status(204).send()
})

server.listen({
    port: 3333
})

