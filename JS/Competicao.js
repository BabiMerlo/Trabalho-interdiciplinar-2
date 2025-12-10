export class Competicao {
    #nome;
    #local;
    #distancia;
    #tipo;
    #data;
    #horario;
    #limiteVagas;

    constructor(nome, tipo, local, distancia, data, horario, limiteVagas) {
        this.#nome = nome;
        this.#tipo = tipo;
        this.#local = local;
        this.#distancia = distancia;
        this.#data = data; 
        this.#horario = horario; 
        this.#limiteVagas = limiteVagas;
    }

    get nome() {
        return this.#nome; 
    }

    get tipo() {
        return this.#tipo;
    }

    get local() { 
        return this.#local; 
    }

    get distancia() { 
        return this.#distancia; 
    }
    
    get data() { 
        return this.#data; 
    }

    get horario() { 
        return this.#horario; 
    }

    get limiteVagas() { 
        return this.#limiteVagas; 
    }

    toString() {
        return "Competição: " + this.nome +
               "\nTipo: " + this.tipo +
               "\nLocal: " + this.local +
               "\nDistância: " + this.distancia +
               "\nData/Hora: " + this.data + " às " + this.horario +
               "\nVagas: " + this.limiteVagas;
    }
}