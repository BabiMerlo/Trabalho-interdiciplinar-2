import {Pessoa} from "./Pessoa.js";

export class Organizador extends Pessoa{
    #senha;

    constructor(nome, dataNasc, cpf, email, senha){
        super(nome, dataNasc, cpf, email);
        this.#senha = senha;
    }

    set senha(novaSenha){
        if(novaSenha.length() > 4){
            this.#senha = novaSenha;
            return true;
        }
        return false;
    }
}