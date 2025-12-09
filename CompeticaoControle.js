import {Maratona} from "./Maratona.js";
import {CorridaTrilha} from "./CorridaTrilha.js";

export class CompeticaoControle{
    static #lstCompeticoes = [];

    static criarMaratona(nome, distancia, dataHorario, local, limiteVagas){
        let mapa = "mapa-corrida.jpg";
        let novaMaratona = new Maratona(nome, distancia, mapa, dataHorario, local, limiteVagas);
        this.#lstCompeticoes.push(novaMaratona);
        localStorage.setItem("lstCompeticoes", JSON.stringify(this.#lstCompeticoes));
    }

    static criarCorridaTrilha(nome, distancia, dataHorario, local, limiteVagas, checkpoints, dificuldade){
        let mapa = "mapa-corrida.jpg";
        let novaCorridaTrilha = new CorridaTrilha(nome, distancia, mapa, dataHorario, local, limiteVagas, checkpoints, dificuldade);
        this.#lstCompeticoes.push(novaCorridaTrilha);
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
            }

            if(dataHorario != ""){
                this.#lstCompeticoes[indCompeticaoParaAtt].dataHorario = dataHorario;
            }

            if(local != ""){
                this.#lstCompeticoes[indCompeticaoParaAtt].local = local;
            }

            if(limiteVagas != 0){
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