import {Pessoa} from "./Pessoa.js";

export class Atleta extends Pessoa{
    #modalidade;

    constructor(nome, dataNasc, cpf, email, modalidade){
        super(nome, dataNasc, cpf, email);
        this.modalidade = modalidade;
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

    toString(){
        return super.toString() +
               "\nModalidade: " + this.#modalidade;
    }
}