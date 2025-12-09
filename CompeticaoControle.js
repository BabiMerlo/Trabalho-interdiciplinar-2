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
        this.#lstCompeticoes = localStorage.getItem("lstCompeticoes");
        let indCompeticaoParaRemover = -1;
        for(let i = 0; i < this.#lstCompeticoes.length; i++){
            if(this.#lstCompeticoes[i].nome = nomeCompeticao){
                indCompeticaoParaRemover = i;
            }
        }

        if(indCompeticaoParaRemover != -1){
            this.#lstCompeticoes.splice(indCompeticaoParaRemover, 1);
            localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
            return true;
        }
        localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
        return false;
    }

    static atualizarCompeticao(nome, distancia, dataHorario, local, limiteVagas){
        this.#lstCompeticoes = localStorage.getItem("lstCompeticoes");
        let indCompeticaoParaAtt = -1;
        for(let i = 0; i < this.#lstCompeticoes.length; i++){
            if(this.#lstCompeticoes[i].nome = nome){
                indCompeticaoParaAtt = i;
            }
        }

        if(indCompeticaoParaAtt != -1){
            if(distancia != ""){
                this.#lstCompeticoes[indCompeticaoParaAtt].distancia = distancia;

            } else if(dataHorario != ""){
                this.#lstCompeticoes[indCompeticaoParaAtt].dataHorario = dataHorario;

            } else if(local != ""){
                this.#lstCompeticoes[indCompeticaoParaAtt].local = local;

            } else if(limiteVagas != 0){
                this.#lstCompeticoes[indCompeticaoParaAtt].limiteVagas = limiteVagas;

            }
            localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
            return true;
        }
        localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
        return false;
    }

    static inscreverAtleta(nomeAtleta, classificacao, nomeCompeticao){
        this.#lstCompeticoes = localStorage.getItem("lstCompeticoes");
        let indCompeticao = -1;
        for(let i = 0; i < this.#lstCompeticoes.length; i++){
            if(this.#lstCompeticoes[i].nome = nomeCompeticao){
                indCompeticao = i;
            }
        }

        if(indCompeticao != -1){
            if(this.#lstCompeticoes[indCompeticao].inscreverAtleta(nomeAtleta, classificacao)){
                localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
                return true;
            }
            localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
            return false;
        }
        localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
        return false;
    }
}