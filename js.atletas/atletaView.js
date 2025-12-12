import { AtletaController } from "./AtletaController.js";

const controller = new AtletaController();

document.addEventListener("DOMContentLoaded", () => {

    const inNome = document.getElementById("inNome");
    const inEmail = document.getElementById("inEmail");
    const inCpf = document.getElementById("inCpf");
    const sltTipo = document.getElementById("sltTipo");
    const outMsg = document.getElementById("outMsg");
    const btn = document.getElementById("btCadastra");

    atualizarTabela();

    btn.addEventListener("click", () => {
        const nome = inNome.value.trim();
        const email = inEmail.value.trim();
        const cpf = inCpf.value.trim();
        const tipo = sltTipo.value;

        if (!nome || !email || !cpf || tipo === "Informe o tipo") {
            outMsg.style.color = "red";
            outMsg.textContent = "Preencha todos os campos corretamente.";
        } else {
            controller.adicionar(nome, email, cpf, tipo);
            atualizarTabela();
            outMsg.textContent = "";

            inNome.value = "";
            inEmail.value = "";
            inCpf.value = "";
            sltTipo.selectedIndex = 0;
        }
    });
});

function atualizarTabela() {
    const tbody = document.getElementById("tbodyAtletas");
    tbody.innerHTML = "";

    controller.listar().forEach((a, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${a.nome}</td>
                <td>${a.email}</td>
                <td>${a.cpf}</td>
                <td>${a.tipo}</td>
                <td><button class="btn-excluir" onclick="window.excluirAtleta(${i})">Excluir</button></td>
            </tr>
        `;
    });
}

window.excluirAtleta = function(i) {
    controller.remover(i);
    atualizarTabela();
};
