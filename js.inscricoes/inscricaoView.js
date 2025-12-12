document.addEventListener("DOMContentLoaded", () => {

    const sltCompeticao = document.getElementById("sltConpeticao");
    const sltAtleta = document.getElementById("sltAtleta");
    const sltAcao = document.getElementById("sltAcao");
    const btCadastra = document.getElementById("btCadastra");

    criarTabelas();

    function carregarCompeticoes() {
        const lista = JSON.parse(localStorage.getItem("ifesRacesCompeticoes")) || [];

        sltCompeticao.innerHTML = `
            <option value="" disabled selected>Selecione uma Competição</option>
        `;

        lista.forEach(c => {
            sltCompeticao.innerHTML += `
                <option value="${c.id}">${c.nome} (${c.tipo})</option>
            `;
        });
    }

    function carregarAtletas() {
        const lista = JSON.parse(localStorage.getItem("atletas")) || [];

        sltAtleta.innerHTML = `
            <option value="" disabled selected>Selecione um atleta</option>
        `;

        lista.forEach(a => {
            sltAtleta.innerHTML += `
                <option value="${a.cpf}">${a.nome} (${a.tipo})</option>
            `;
        });
    }

    function salvarInscricao() {
        const atletaCPF = sltAtleta.value;
        const competicaoID = sltCompeticao.value;
        const modalidade = sltAcao.value;

        if (!atletaCPF || !competicaoID || !modalidade) {
            alert("Selecione atleta, competição e modalidade.");
            return;
        }

        const atletas = JSON.parse(localStorage.getItem("atletas")) || [];
        const competicoes = JSON.parse(localStorage.getItem("ifesRacesCompeticoes")) || [];

        const atleta = atletas.find(a => a.cpf == atletaCPF);
        const competicao = competicoes.find(c => c.id == competicaoID);

        const inscricao = {
            id: Date.now(),
            atletaCPF,
            atletaNome: atleta.nome,
            competicaoID,
            competicaoNome: competicao.nome,
            modalidade // <<----- SALVA A MODALIDADE
        };

        const lista = JSON.parse(localStorage.getItem("inscricoes")) || [];
        lista.push(inscricao);
        localStorage.setItem("inscricoes", JSON.stringify(lista));

        carregarTabelasSeparadas();
    }

    function criarTabelas() {
        const areaTabela = document.getElementById("areaTabela");

        const tabelasHTML = `
            <div class="container-tabela">
                <h2>Inscrições - Maratona</h2>
                <table id="tabelaMaratona">
                    <thead>
                        <tr>
                            <th>Atleta</th>
                            <th>Competição</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>

                <br><br>

                <h2>Inscrições - Trail Run</h2>
                <table id="tabelaTrail">
                    <thead>
                        <tr>
                            <th>Atleta</th>
                            <th>Competição</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        `;

        areaTabela.innerHTML = tabelasHTML;
    }

    function carregarTabelasSeparadas() {
        const lista = JSON.parse(localStorage.getItem("inscricoes")) || [];

        const tbMaratona = document.querySelector("#tabelaMaratona tbody");
        const tbTrail = document.querySelector("#tabelaTrail tbody");

        tbMaratona.innerHTML = "";
        tbTrail.innerHTML = "";

        lista.forEach(insc => {

            const linha = `
                <tr>
                    <td>${insc.atletaNome}</td>
                    <td>${insc.competicaoNome}</td>
                    <td>
                        <button class="btn-excluir" onclick="removerInscricao(${insc.id})">
                            Remover
                        </button>
                    </td>
                </tr>
            `;

            if (insc.modalidade === "maratona") {
                tbMaratona.innerHTML += linha;
            } else if (insc.modalidade === "trailrun") {
                tbTrail.innerHTML += linha;
            }
        });
    }

    window.removerInscricao = function(id) {
        let lista = JSON.parse(localStorage.getItem("inscricoes")) || [];
        lista = lista.filter(i => i.id !== id);
        localStorage.setItem("inscricoes", JSON.stringify(lista));
        carregarTabelasSeparadas();
    };

    btCadastra.addEventListener("click", (e) => {
        e.preventDefault();
        salvarInscricao();
    });

    carregarAtletas();
    carregarCompeticoes();
    carregarTabelasSeparadas();
});
