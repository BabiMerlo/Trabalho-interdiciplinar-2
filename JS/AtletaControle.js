import {Atleta} from "./Atleta.js";

export class AtletaControle{
    static #lstAtletas = [];

    static criarAtleta(nome, dataNasc, cpf, email, modalidade){
        let novoAtleta = new Atleta(nome, dataNasc, cpf, email, modalidade);
        this.#lstAtletas.push(novoAtleta);
        localStorage.setItem("lstAtletas", JSON.stringify(this.#lstAtletas));
    }

    static removerAtleta(cpf){
        this.#lstAtletas = localStorage.getItem("lstAtletas");
        let indAtletaParaRemover = -1;
        for(let i = 0; i < this.#lstAtletas.length; i++){
            if(this.#lstAtletas[i].cpf = cpf){
                indAtletaParaRemover = i;
            }
        }

        if(indAtletaParaRemover != -1){
            this.#lstAtletas.splice(indAtletaParaRemover, 1);
            localStorage.setItem("lstAtletas", JSON.stringify(this.#lstAtletas));
            return true;
        }
        localStorage.setItem("lstAtletas", JSON.stringify(this.#lstAtletas));
        return false;
    }

    static atualizarAtleta(nome, dataNasc, cpf, email, modalidade){
        this.#lstAtletas = localStorage.getItem("lstAtletas");
        let indAtletaParaAtt = -1;
        for(let i = 0; i < this.#lstAtletas.length; i++){
            if(this.#lstAtletas[i].cpf = cpf){
                indAtletaParaAtt = i;
            }
        }

        if(indAtletaParaAtt != -1){
            if(nome != ""){
                this.#lstAtletas[indAtletaParaAtt].nome = nome;
            }

            if(dataNasc != ""){
                this.#lstAtletas[indAtletaParaAtt].dataNasc = dataNasc;
            }

            if(email != ""){
                this.#lstAtletas[indAtletaParaAtt].email = email;
            }

            if(modalidade != ""){
                this.#lstAtletas[indAtletaParaAtt].modalidade = modalidade;
            }

            localStorage.setItem("lstAtletas", JSON.stringify(this.#lstAtletas));
            return true;
        }
        localStorage.setItem("lstAtletas", JSON.stringify(this.#lstAtletas));
        return false;
    }
}