
import {randomUUID} from "node:crypto"
export class DatabaseMemory{

    #jogadores = new Map()

    list(){
       return this.#jogadores.values() //retorna todos os videos sem o Id
    }

    create(jogador) {
        const  jogadorId = randomUUID() //gera um Id
        this.#jogadores.set(jogadorId, jogador) // define um Id para cada jogador e armazena no array jogadores.
    }

    update (id, jogador){
        this.#jogadores.set(id, jogador)
    }

    delete(id){
        this.#jogadores.delete(id)
    }

}