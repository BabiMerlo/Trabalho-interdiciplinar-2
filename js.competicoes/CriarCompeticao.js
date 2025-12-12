const formCompeticao = document.getElementById('formCompeticao');
const inNome = document.getElementById('inNome');
const sltEvento = document.getElementById('sltEvento'); 
const sltDificuldade = document.getElementById('sltDificuldade'); 
const inDistancia = document.getElementById('inDistancia');
const inData = document.getElementById('inData');
const inHorario = document.getElementById('inHorario');
const inLocal = document.getElementById('inLocal');
const inVagas = document.getElementById('inVagas');
const tabelaBody = document.querySelector('#tabelaCompeticoes tbody');
const outSaida = document.getElementById('outSaida');
const btCriar = document.getElementById('btCriar');
const btEditar = document.getElementById('btEditar'); 

const STORAGE_KEY = 'ifesRacesCompeticoes';

function getCompeticoes() {
    const competicoesJson = localStorage.getItem(STORAGE_KEY);
    return competicoesJson ? JSON.parse(competicoesJson) : [];
}

function saveCompeticoes(competicoes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(competicoes));
}

function adicionarLinhaTabela(competicao) {
    const newRow = tabelaBody.insertRow();
    newRow.dataset.id = competicao.id; 
    
    const dataFormatada = new Date(competicao.data + 'T00:00:00').toLocaleDateString('pt-BR');
    
    const dadosTabela = [
        competicao.nome,
        competicao.tipo,
        competicao.distancia,
        dataFormatada,
        competicao.local,
        competicao.vagas
    ];

    dadosTabela.forEach(text => {
        const cell = newRow.insertCell();
        cell.textContent = text;
    });

    const cellAcoes = newRow.insertCell();

    const btExcluirLinha = document.createElement('button');
    btExcluirLinha.textContent = 'Excluir';
    btExcluirLinha.classList.add('delete-inline');
    btExcluirLinha.onclick = () => excluirCompeticao(competicao.id); 
    cellAcoes.appendChild(btExcluirLinha);

    const btEditarLinha = document.createElement('button');
    btEditarLinha.textContent = 'Editar';
    btEditarLinha.classList.add('edit-inline');
    btEditarLinha.onclick = () => preencherFormularioParaEdicao(competicao.id); 
    cellAcoes.appendChild(btEditarLinha);
}

function carregarCompeticoes() {
    tabelaBody.innerHTML = ''; 
    const competicoes = getCompeticoes();
    competicoes.forEach(adicionarLinhaTabela);
}

function toggleDificuldade() {
    const isTrailRun = sltEvento.value == 'Trail Run';
    sltDificuldade.disabled = !isTrailRun;
    
    if (!isTrailRun) {
        sltDificuldade.value = 'Selecione'; 
    }
}

function excluirCompeticao(id) {
    if (confirm("Tem certeza que deseja excluir esta competição?")) {
        let competicoes = getCompeticoes();
        const novaLista = competicoes.filter(c => c.id !== id); 
        saveCompeticoes(novaLista);
        carregarCompeticoes(); 
        
        outSaida.innerHTML = '🗑️ Competição excluída com sucesso!';
        
        if (formCompeticao.dataset.modo === 'edicao') {
            resetFormulario();
        }
    }
}

function preencherFormularioParaEdicao(id) {
    const competicoes = getCompeticoes();
    const competicao = competicoes.find(c => c.id == id); 

    if (!competicao) {
        outSaida.innerHTML = 'Erro: Competição não encontrada.';
    } else {
        inNome.value = competicao.nome;
        sltEvento.value = competicao.tipo;
        inDistancia.value = competicao.distancia;
        inData.value = competicao.data; 
        inHorario.value = competicao.horario;
        inLocal.value = competicao.local;
        inVagas.value = competicao.vagas;

        toggleDificuldade();
        if (competicao.tipo === 'Trail Run' && competicao.dificuldade !== 'N/A') {
            sltDificuldade.value = competicao.dificuldade;
        }

        formCompeticao.dataset.modo = 'edicao';
        formCompeticao.dataset.idEdicao = id; 
        btCriar.textContent = 'Atualizar';
        btCriar.classList.remove('save');
        btCriar.classList.add('update'); 
        btEditar.textContent = 'Cancelar Edição';
        btEditar.style.display = 'inline-block';
        
        outSaida.innerHTML = `📝 Formulário carregado para edição da competição: **${competicao.nome}**`;
    }
}

function resetFormulario() {
    formCompeticao.reset();
    delete formCompeticao.dataset.modo;
    delete formCompeticao.dataset.idEdicao;
    btCriar.textContent = 'Salvar';
    btCriar.classList.remove('update');
    btCriar.classList.add('save');
    btEditar.textContent = 'Editar';
    btEditar.style.display = 'none'; 
    
    toggleDificuldade();
    outSaida.innerHTML = ''; 
}

function handleSubmit(event) {
    event.preventDefault(); 
    
    const camposObrigatoriosVazios = (
        inNome.value == "" || 
        sltEvento.value == "Selecione" || 
        inData.value == "" || 
        inVagas.value == ""
    );

    if (camposObrigatoriosVazios) {
        outSaida.innerHTML = '⚠️ Por favor, preencha pelo menos o Nome, Tipo, Data e Limite de Vagas.';
    } else {
        const dadosFormulario = {
            nome: inNome.value,
            tipo: sltEvento.value,
            distancia: inDistancia.value,
            dificuldade: sltDificuldade.disabled ? 'N/A' : sltDificuldade.value,
            data: inData.value,
            horario: inHorario.value,
            local: inLocal.value,
            vagas: parseInt(inVagas.value),
        };

        let competicoes = getCompeticoes();
        const modo = formCompeticao.dataset.modo;

        if (modo === 'edicao') {
            const idEdicao = parseInt(formCompeticao.dataset.idEdicao);
            const index = competicoes.findIndex(c => c.id === idEdicao); 
            
            if (index !== -1) {
                const objetoAtualizado = {
                    id: idEdicao, 
                    ...dadosFormulario
                };

                competicoes[index] = objetoAtualizado; 
                
                outSaida.innerHTML = `🔄 Competição **${dadosFormulario.nome}** atualizada com sucesso!`;
            } else {
                outSaida.innerHTML = 'Erro ao tentar atualizar a competição (ID não encontrado).';
            }

        } else {
            const novaCompeticao = {
                id: Date.now(),
                ...dadosFormulario
            };
            competicoes.push(novaCompeticao);
            outSaida.innerHTML = `✅ Competição **${novaCompeticao.nome}** criada com sucesso!`;
        }

        saveCompeticoes(competicoes);
        carregarCompeticoes();
        resetFormulario(); 
    }
}

document.addEventListener('DOMContentLoaded', carregarCompeticoes);
formCompeticao.addEventListener('submit', handleSubmit);
sltEvento.addEventListener('change', toggleDificuldade);
btEditar.addEventListener('click', resetFormulario);

toggleDificuldade();
btEditar.style.display = 'none';
