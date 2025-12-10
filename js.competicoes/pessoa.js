    export class Pessoa{
        #nome;
        #dataNasc;
        #CPF;
        #email;

        constructor(nome, dataNasc, CPF, email){
            this.nome = nome;
            this.dataNasc = dataNasc;
            this.#CPF = CPF;
            this.email = email;
        }

        get nome(){
            return this.#nome;
        }

        set nome(novoNome){
            if(novoNome != ""){
                this.#nome = novoNome;
                return true;
            }
            return false;
        }

        get dataNasc(){
            return this.#dataNasc;
        }

        set dataNasc(novaData){
            if(novaData != ""){
                this.#dataNasc = Date(novaData);
                return true;
            }
            return false;
        }

        get CPF(){
            return this.#CPF;
        }

        get email(){
            return this.#email;
        }

        set email(novoEmail){
            if(novoEmail != ""){
                this.#email = novoEmail;
                return true;
            }
            return false;
        }

        toString(){
            return "Nome: " + this.nome +
                "\nData de Nascimento: " + this.dataNasc +
                "\nCPF: " + this.CPF +
                "\nE-mail: " + this.email;
        }
    }