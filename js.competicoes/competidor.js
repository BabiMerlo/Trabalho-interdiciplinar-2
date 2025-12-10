import {Atleta} from "./atleta.js";

export class Competidor{
    #atleta;
    #classificacao;
    constructor(atleta, classificacao){
        this.atleta = atleta;
        this.classificacao = classificacao;
    }

    get atleta(){
        return this.#atleta;
    }

    set atleta(novoAtleta){
        if(novoAtleta instanceof Atleta){
            this.#atleta = novoAtleta;
            return true;
        }
        return false;
    }

    get classificacao(){
        return this.#classificacao;
    }

    set classificacao(novaClassificacao){
        if(novaClassificacao > 0){
            this.#classificacao = novaClassificacao;
            return true;
        }
        return false;
    }
}