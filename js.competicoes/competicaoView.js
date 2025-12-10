import { CompeticaoControl } from "./competicaoControl.js";

// Quando a página carregar
window.onload = function () {
    carregarTabela();
    configurarCadastro();
    configurarEdicao();
    configurarExclusao();
};


// --------------------------------------------------
// CARREGAR TABELA DA HOME (ou da página de competições)
// --------------------------------------------------
function carregarTabela() {
    const tabela = document.getElementById("tbCompeticoes");

    let lista = JSON.parse(localStorage.getItem("lstCompeticoes")) || [];

    tabela.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Distância</th>
            <th>Data/Horário</th>
            <th>Local</th>
            <th>Vagas</th>
        </tr>
    `;

    lista.forEach(c => {
        tabela.innerHTML += `
            <tr>
                <td>${c.nome}</td>
                <td>${c.distancia} km</td>
                <td>${c.dataHorario}</td>
                <td>${c.local}</td>
                <td>${c.limiteVagas}</td>
            </tr>
        `;
    });
}


// --------------------------------------------------
// CADASTRAR COMPETIÇÃO
// --------------------------------------------------
function configurarCadastro() {

    const btCad = document.getElementById("btCriar");

    if (!btCad) return;

    btCad.addEventListener("click", function (event) {
        event.preventDefault();

        let nome = document.getElementById("inNome").value;
        let distancia = document.getElementById("inDistancia").value;
        let dataHorario = document.getElementById("inData").value;
        let local = document.getElementById("inLocal").value;
        let limite = document.getElementById("inVagas").value;

        if (!nome || !distancia || !dataHorario || !local || !limite) {
            alert("Preencha todos os campos!");
            return;
        }

        CompeticaoControl.criarMaratona(
            nome,
            parseFloat(distancia),
            dataHorario,
            local,
            parseInt(limite)
        );

        alert("Competição cadastrada!");
        carregarTabela();
    });
}

function configurarEdicao() {

    const btEdit = document.getElementById("btEditar");

    if (!btEdit) return;

    btEdit.addEventListener("click", function (event) {
        event.preventDefault();

        let nome = document.getElementById("inNomeEdit").value;
        let dataHorario = document.getElementById("inDataEdit").value;
        let limite = document.getElementById("inVagasEdit").value;

        if (!nome || (!dataHorario && !limite)) {
            alert("Informe o nome da competição e o campo a editar!");
            return;
        }

        let ok = CompeticaoControl.atualizarCompeticao(
            nome,
            "",       // distância não muda
            dataHorario,
            "",       // local não muda
            parseInt(limite)
        );

        if (ok) {
            alert("Competição atualizada!");
            carregarTabela();
        } else {
            alert("Competição não encontrada!");
        }
    });
}


// --------------------------------------------------
// EXCLUIR COMPETIÇÃO
// --------------------------------------------------
function configurarExclusao() {

    const btDel = document.getElementById("btExcluir");

    if (!btDel) return;

    btDel.addEventListener("click", function (event) {
        event.preventDefault();

        let nome = document.getElementById("inNomeExcluir").value;

        if (!nome) {
            alert("Informe o nome da competição a excluir!");
            return;
        }

        let ok = CompeticaoControl.removerCompeticao(nome);

        if (ok) {
            alert("Competição removida!");
            carregarTabela();
        } else {
            alert("Competição não encontrada!");
        }
    });
}
