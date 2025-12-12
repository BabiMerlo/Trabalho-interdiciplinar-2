    export class Atleta {
        constructor(nome, email, cpf, tipo) {
            this.nome = nome;
            this.email = email;
            this.cpf = cpf;
            this.tipo = tipo;
        }

    }
    
    window.excluirAtleta = function(i) {
    controller.remover(i);
    atualizarTabela();
};


