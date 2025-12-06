import {Pessoa} from "./Pessoa.js";

export class Atleta extends Pessoa{
    #modalidade;
    #lstCompeticoes = [];

    constructor(nome, dataNasc, cpf, email, modalidade){
        super(nome, dataNasc, cpf, email);
        this.#modalidade = modalidade;
    }

    get modalidade(){
        return this.#modalidade;
    }

    set modalidade(novaModalidade){
        if(novaModalidade != this.#modalidade){
            this.#modalidade = novaModalidade;
            return true;
        }
        return false;
    }

    get lstCompeticoes(){
        return this.#lstCompeticoes.slice(); 
    }

    set lstCompeticoes(novaCompeticao){
        if(novaCompeticao instanceof Competicao){
            this.#lstCompeticoes.push(novaCompeticao);
            return true;
        }
        return false;
    }

    toString(){
        return super.toString() +
               "\nModalidade: " + this.#modalidade +
               "\nCompetições que Participou:\n" + this.#lstCompeticoes.join("<br>");
    }
}