import { Competicao } from "./Competicao.js";

export class CorridaTrilha extends Competicao {
    #checkpoints;
    #dificuldade;
    
    constructor(nome, tipo, local, distancia, data, horario, limiteVagas, checkpoints, dificuldade) {
        super(nome, tipo, local, distancia, data, horario, limiteVagas); 
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
            if(novaDificuldade == "Fácil" || novaDificuldade == "Médio" || novaDificuldade == "Difícil"){
                this.#dificuldade = novaDificuldade;
                return true;
            }
            return false;
        }
        return false;
    }

    toString(){
        return super.toString() +
               "\nDificuldade: " + this.#dificuldade +
               "\nCheckpoint a cada: " + this.#checkpoints + " Km";
    }
}