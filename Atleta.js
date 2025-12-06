import { Pessoa } from './Pessoa.js';

export class Atleta extends Pessoa {
    #modalidade;
    #patrocinador;

    constructor(nome, dataNasc, CPF, email, modalidade, patrocinador) {
        super(nome, dataNasc, CPF, email);
        this.modalidade = modalidade;
        this.patrocinador = patrocinador;
    }

    get modalidade() {
        return this.#modalidade;
    }

    set modalidade(novaModalidade) {
        if (novaModalidade != "") {
            this.#modalidade = novaModalidade;
            return true;
        }
        return false;
    }

    get patrocinador() {
        return this.#patrocinador;
    }

    set patrocinador(novoPatrocinador) {
        if (novoPatrocinador != "") {
            this.#patrocinador = novoPatrocinador;
            return true;
        }
        return false;
    }

    participarCompeticao(nomeCompeticao) {
        return `${this.nome} participará da competição "${nomeCompeticao}" na modalidade de ${this.modalidade}.`;
    }

    toString() {
        return super.toString() +
               `\nModalidade: ${this.modalidade}` +
               `\nPatrocinador: ${this.patrocinador}`;
    }
}