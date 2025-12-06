export class Competicao{
    #nome;
    #tipo;
    #distancia;
    #mapa;
    #data;
    #horario;
    #local;
    #limiteVagas;
    #dificuldade;
    #lstCompetidores = [];

    constructor(nome, tipo, distancia, mapa, data, horario, local, limiteVagas, dificuldade){
        this.#nome = nome;
        this.#tipo = tipo;
        this.#distancia = distancia;
        this.#mapa = mapa;
        this.#data = data;
        this.#horario = horario;
        this.#local = local;
        this.#limiteVagas = limiteVagas;
        this.#dificuldade = dificuldade;
    }

    
}