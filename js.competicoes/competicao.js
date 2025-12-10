import {Atleta} from "./atleta.js";
import {Competidor} from "./competidor.js";

export class Competicao{
    #nome;
    #distancia;
    #mapa;
    #dataHorario;
    #local;
    #limiteVagas;
    #lstCompetidores = [];

    constructor(nome, distancia, mapa, dataHorario, local, limiteVagas){
        this.nome = nome;
        this.distancia = distancia;
        this.mapa = mapa;
        this.dataHorario = dataHorario;
        this.local = local;
        this.limiteVagas = limiteVagas;
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

    get dataHorario(){
        return this.#dataHorario;
    }

    set dataHorario(novaDataHorario){
        if(novaDataHorario != ""){
            this.#dataHorario = Date(novaDataHorario);
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

    toString(){
        return "Competição: " + this.#nome +
               "\nDistância: " + this.#distancia + "Km" +
               "\nData/Horário: " + this.#dataHorario +
               "\nLocal: " + this.#local + 
               "\nVagas: " + this.#lstCompetidores.length + "/" + this.#limiteVagas;
    }

    inscreverAtleta(atleta, classificacao){
        if(atleta instanceof Atleta){
            let atletaInscrito = false;
            for(let i = 0; i < this.#lstCompetidores.length; i++){
                if(this.#lstCompetidores[i].atleta == atleta){
                    atletaInscrito = true;
                }
            }

            if(atletaInscrito = false){
                let novoCompetidor = new Competidor(atleta, classificacao);
                this.#lstCompetidores.push(novoCompetidor);
                return true;
            }
            return false;
        }
        return false;
    }
}