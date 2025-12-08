export class Competicao {
    #nome;
    #local;
    #distancia;

    constructor(nome, local, distancia) {
        this.#nome = nome;
        this.#local = local;
        this.#distancia = distancia;
    }

    get nome() {
        return this.#nome;
    }

    get local() {
        return this.#local;
    }

    get distancia() {
        return this.#distancia;
    }

    toString() {
        return "Competição: " + this.nome +
               "\nLocal: " + this.local +
               "\nDistância: " + this.distancia;
    }
}