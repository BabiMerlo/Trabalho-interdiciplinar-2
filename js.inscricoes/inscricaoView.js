let atletas = JSON.parse(localStorage.getItem("lstAtletas"));


import { InscricaoControl } from "./inscricaoControl.js";

// Quando a tela carregar
window.onload = function () {

    carregarCompeticoes();
    carregarAtletas();

    const bt = document.getElementById("btCadastra");
    bt.addEventListener("click", function (event) {
        event.preventDefault(); // Não recarrega a página

        let nomeCompeticao = document.getElementById("sltConpeticao").value;
        let acao = document.getElementById("sltAcao").value;
        let cpfAtleta = document.getElementById("sltAtleta").value;

        if (nomeCompeticao === "" || acao === "" || cpfAtleta === "") {
            alert("Selecione competição, ação e atleta!");
            return;
        }

        let ok = InscricaoControl.realizarAcao(acao, nomeCompeticao, cpfAtleta);

        if (ok) {
            alert("Ação realizada com sucesso!");
        } else {
            alert("Erro! Verifique se o atleta já está inscrito.");
        }
    });
};




function carregarCompeticoes() {

    let lista = JSON.parse(localStorage.getItem("lstCompeticoes")) || [];

    let slt = document.getElementById("sltConpeticao");
    slt.innerHTML = `<option value="" disabled selected>Selecione uma Competição</option>`;

    lista.forEach(comp => {
        slt.innerHTML += `<option value="${comp.nome}">${comp.nome}</option>`;
    });
}


function carregarAtletas() {

    let lista = JSON.parse(localStorage.getItem("lstAtletas")) || [];

    let slt = document.getElementById("sltAtleta");
    slt.innerHTML = `<option value="" disabled selected>Selecione um atleta</option>`;

    lista.forEach(atleta => {
        slt.innerHTML += `
            <option value="${atleta.cpf}">
                ${atleta.nome} - ${atleta.cpf}
            </option>`;
    });
}
