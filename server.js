//servidor nativo com node
// import {createServer} from 'node:http'
// const server = createServer((request, response) =>{
//     response.write('Ola mundo')

//     return response.end()
// })
// server.listen(3333)

//server com framework fastify

import {fastify} from 'fastify'

import {questionsCorrect} from './script.js'

const server = fastify()

//rotas
server.get('/', () =>{
    console.log(questionsCorrect)
})

server.listen({
    port:3333
})

