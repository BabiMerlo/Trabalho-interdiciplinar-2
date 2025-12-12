export class AtletaController {
    constructor() {
        this.atletas = JSON.parse(localStorage.getItem("atletas")) || [];
    }

    adicionar(nome, email, cpf, tipo) {
        this.atletas.push({ nome, email, cpf, tipo });
        this.salvar();
    }

    listar() {
        return this.atletas;
    }

    remover(index) {
        this.atletas.splice(index, 1);
        this.salvar();
    }

    salvar() {
        localStorage.setItem("atletas", JSON.stringify(this.atletas));
    }
}
