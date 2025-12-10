import { Competicao } from "./competicao.js";

export class CorridaTrilha extends Competicao{
    #checkpoints;
    #dificuldade;
    constructor(nome, distancia, mapa, dataHorario, local, limiteVagas, checkpoints, dificuldade){
        super(nome, distancia, mapa, dataHorario, local, limiteVagas);
        this.checkpoints = checkpoints;
        this.#dificuldade = dificuldade;
    }

    get checkpoints(){
        return this.#checkpoints;
    }

    set checkpoints(novosCheckpoints){
        if(novosCheckpoints > 0){
            this.#checkpoints = novosCheckpoints;
            return true;
        }
        return false;
    }

    get dificuldade(){
        return this.#dificuldade;
    }

    set dificuldade(novaDificuldade){
        if(novaDificuldade != ""){
            if(novaDificuldade == "Fácil" || novaDificuldade == "Média" || novaDificuldade == "Difícil"){
                this.#dificuldade = novaDificuldade;
                return true;
            }
            return false;
        }
        return false;
    }

    toString(){
        return super.toString() +
               "\nCheckpoint a cada: " + this.#checkpoints + "Km" +
               "\nDificuldade: " + this.#dificuldade;
    }
}