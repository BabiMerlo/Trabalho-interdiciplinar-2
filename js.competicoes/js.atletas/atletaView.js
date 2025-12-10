import { AtletaControl } from "./atletaControl.js";

window.onload = function () {

    const btCadastra = document.getElementById("btCadastra");

    btCadastra.addEventListener("click", function (event) {
        event.preventDefault();

        let nome = document.getElementById("inNome").value.trim();
        let email = document.getElementById("inEmail").value.trim();
        let cpf = document.getElementById("inCpf").value.trim();
        let tipo = document.getElementById("sltTipo").value;

        // Verificações básicas
        if (nome === "" || email === "" || cpf === "" || tipo === "Informe o tipo") {
            alert("Preencha todos os campos!");
            return;
        }

        // Controller
        let ok = AtletaControl.cadastrarAtleta(nome, email, cpf, tipo);

        if (ok) {
            alert("Atleta cadastrado com sucesso!");

            // limpa os campos
            document.getElementById("inNome").value = "";
            document.getElementById("inEmail").value = "";
            document.getElementById("inCpf").value = "";
            document.getElementById("sltTipo").selectedIndex = 0;

        } else {
            alert("Já existe um atleta com esse CPF!");
        }
    });
};
