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

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        if(novoNome != ""){
            this.#nome = novoNome;
            return true;
        }
        return false;
    }

    get tipo(){
        return this.#tipo;
    }

    set tipo(novoTipo){
        if(novoTipo != ""){
            this.#tipo = novoTipo;
            return true;
        }
        return false;
    }

    get distancia(){
        return this.#distancia;
    }

    set distancia(novaDistancia){
        if(novaDistancia > 0){
            this.#distancia = novaDistancia;
            return true;
        }
        return false;
    }

    get mapa(){
        return this.#mapa;
    }

    set mapa(novoMapa){
        if(novoMapa != ""){
            this.#mapa = novoMapa;
        }
    }

    get data(){
        return this.#data;
    }

    set data(novaData){
        if(novaData != ""){
            this.#data = novaData;
            return true;
        }
        return false;
    }

    get horario(){
        return this.#horario;
    }

    set horario(novoHorario){
        if(novoHorario != ""){
            this.#horario = novoHorario;
            return true;
        }
        return false;
    }

    get local(){
        return this.#local;
    }

    set local(novoLocal){
        if(novoLocal != ""){
            this.#local = novoLocal;
            return true;
        }
        return false;
    }

    get limiteVagas(){
        return this.#limiteVagas;
    }

    set limiteVagas(novoLimite){
        if(novoLimite > 0){
            this.#limiteVagas = novoLimite;
        }
    }

    get dificuldade(){
        return this.#dificuldade;
    }

    set dificuldade(novaDificuldade){
        if(novaDificuldade != ""){
            if(novaDificuldade == "Fácil" || novaDificuldade == "Médio" || novaDificuldade == "Difícil"){
                this.#dificuldade = novaDificuldade;
                return true;
            }
            return false;
        }
        return false;
    }

}