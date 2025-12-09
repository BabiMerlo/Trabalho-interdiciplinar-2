import {Competicao} from "./Competicao.js";

export class CompeticaoControle{
    static #lstCompeticoes = [];

    static criarCompeticao(nome, distancia, dataHorario, local, limiteVagas){
        let mapa = "mapa-corrida.jpg";
        let novaCompeticao = new Competicao(nome, distancia, mapa, dataHorario, local, limiteVagas);
        this.#lstCompeticoes.push(novaCompeticao);
        localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
    }

    static removerCompeticao(nomeCompeticao){
        let indCompeticaoParaRemover = -1;
        for(let i = 0; i < this.#lstCompeticoes.length; i++){
            if(this.#lstCompeticoes[i].nome = nomeCompeticao){
                indCompeticaoParaRemover = i;
            }
        }

        if(indCompeticaoParaRemover != -1){
            this.#lstCompeticoes.splice(indCompeticaoParaRemover, 1);
            return true;
        }
        return false;
    }

    static atualizarCompeticao(nome, distancia, dataHorario, local, limiteVagas){
        let indCompeticaoParaAtt = -1;
        for(let i = 0; i < this.#lstCompeticoes.length; i++){
            if(this.#lstCompeticoes[i].nome = nome){
                indCompeticaoParaAtt = i;
            }
        }

        if(indCompeticaoParaAtt != -1){
            if(distancia != ""){
                this.#lstCompeticoes[i].distancia = distancia;

            } else if(dataHorario != ""){
                this.#lstCompeticoes[i].dataHorario = dataHorario;

            } else if(local != ""){
                this.#lstCompeticoes[i].local = local;

            } else if(limiteVagas != 0){
                this.#lstCompeticoes[i].limiteVagas = limiteVagas;

            }
            return true;
        }
        return false;
    }
}