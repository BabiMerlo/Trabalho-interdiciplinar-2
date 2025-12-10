import { Pessoa } from './Pessoa.js';

export class Organizador extends Pessoa {
    #setor;

    constructor(nome, dataNasc, CPF, email, setor) {
        super(nome, dataNasc, CPF, email);
        this.setor = setor;
    }

    get setor() {
        return this.#setor;
    }

    set setor(novoSetor) {
        if (novoSetor != "") {
            this.#setor = novoSetor;
            return true;
        }
        return false;
    }

    atribuirTarefa(tarefa) {
        return `${this.nome} (Organizador do Setor ${this.setor}) atribuiu a tarefa: "${tarefa}".`;
    }

    toString() {
        return super.toString() +
               `\nSetor de Trabalho: ${this.setor}`;
    }
}