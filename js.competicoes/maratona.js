import { Competicao } from "./competicao.js";

export class Maratona extends Competicao{
    constructor(nome, distancia, mapa, dataHorario, local, limiteVagas){
        super(nome, distancia, mapa, dataHorario, local, limiteVagas);
    }
}