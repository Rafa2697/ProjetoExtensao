
import { randomUUID } from "node:crypto"

export class DatabaseMemory {

    #jogadores = new Map()

    list(search) {
        return Array.from(this.#jogadores.entries())
        .map((jogadorArray) => {
            const id = jogadorArray [0]
            const data = jogadorArray [1]

            return {
                id,

                ...data,
            }
        }) 
        .filter(jogador => {
            if(search){
                return jogador.name.includes(search)
            }
            return true
        })
    }

    create(jogador) {
        const jogadorId = randomUUID() //gera um Id
        this.#jogadores.set(jogadorId, jogador) // define um Id para cada jogador e armazena no array jogadores.
    }

    update(id, jogador) {
        this.#jogadores.set(id, jogador)
    }

    delete(id) {
        this.#jogadores.delete(id)
    }

}