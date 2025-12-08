import { Organizador } from './Organizador.js';
import { Atleta } from './Atleta.js';
import { Competicao } from './Competicao.js';

const listaDeAtletas = [
    new Atleta("Maria Silva", "01/05/1998", "12345678900", "maria@email.com", "Maratona", "SportsMax"),
    new Atleta("João Pereira", "15/10/2000", "98765432100", "joao@email.com", "Trail Running", "FitLife"),
    new Atleta("Ana Costa", "20/03/2005", "11223344556", "ana@email.com", "Maratona", "SunGear"),
    new Atleta("Otto Hightower", "21/08/1968", "11223344556", "otto@email.com", "Trail Running", "EASports"),
];

const organizadorEvento = new Organizador("Carlos Souza", "10/10/1985", "10101010101", "carlos@ifes.br", "Coordenação");

const listaDeCompeticoes = [
    new Competicao("Maratona IFES 2026", "Vitória", "42.195 km"),
    new Competicao("Trail Running Desafio da Montanha", "Serra", "21 km"),
    new Competicao("Copa Natação Velocidade", "Piscina IFES", "50m"),
    new Competicao("Meia Maratona Capixaba", "Vila Velha", "21.097 km"),
];

function carregarListaAtletas(filtroModalidade = 'todos', filtroNome = '') {
    const listaHtml = document.getElementById('listaAtletas');
    listaHtml.innerHTML = '<h2>Lista de Atletas</h2>';
    const termoBusca = filtroNome.toLowerCase().trim();
    
    const atletasFiltrados = listaDeAtletas.filter(atleta => {
        const passaNoFiltroModalidade = (filtroModalidade == 'todos' || atleta.modalidade == filtroModalidade);
        const nomeAtletaNormalizado = atleta.nome.toLowerCase();
        const passaNoFiltroNome = nomeAtletaNormalizado.includes(termoBusca);

        return passaNoFiltroModalidade && passaNoFiltroNome;
    });
    
    if (atletasFiltrados.length == 0) {
        listaHtml.innerHTML += `<p>Nenhum atleta encontrado com o nome <strong>"${filtroNome}"</strong> na modalidade selecionada.</p>`;
    }

    atletasFiltrados.forEach(atleta => {
        const divAtleta = document.createElement('div');
        divAtleta.classList.add('item-lista');
        divAtleta.innerHTML = `<pre>${atleta.toString()}</pre>`;
        listaHtml.appendChild(divAtleta);
    });
}

function carregarListaCompeticoes(filtroNome = '', filtroLocal = '', filtroDistancia = '') {
    const listaHtml = document.getElementById('listaCompeticoes');
    listaHtml.innerHTML = '<h2>Lista de Competições</h2>';
    
    const buscaNome = filtroNome.toLowerCase();
    const buscaLocal = filtroLocal.toLowerCase();
    const buscaDistancia = filtroDistancia.toLowerCase();
    
    const competicoesFiltradas = listaDeCompeticoes.filter(competicao => {
        const passaNoNome = competicao.nome.toLowerCase().includes(buscaNome);
        const passaNoLocal = competicao.local.toLowerCase().includes(buscaLocal);
        const passaNaDistancia = competicao.distancia.toLowerCase().includes(buscaDistancia);

        return passaNoNome && passaNoLocal && passaNaDistancia;
    });

    if (competicoesFiltradas.length == 0) {
        listaHtml.innerHTML += `<p>Nenhuma competição encontrada com os filtros especificados.</p>`;
    }

    competicoesFiltradas.forEach(competicao => {
        const divCompeticao = document.createElement('div');
        divCompeticao.classList.add('item-lista');
        divCompeticao.innerHTML = `<pre>${competicao.toString()}</pre>`;
        listaHtml.appendChild(divCompeticao);
    });
}


function alternarVisualizacao() {
    const radioAtletas = document.getElementById('radioAtletas');
    const listaAtletasDiv = document.getElementById('listaAtletas');
    const listaCompeticoesDiv = document.getElementById('listaCompeticoes');
    
    const filtroModalidadeDiv = document.getElementById('filtroModalidade');
    const filtroNomeDiv = document.getElementById('filtroNome');
    
    const filtroCompeticaoNomeDiv = document.getElementById('filtroCompeticaoNome');
    const filtroCompeticaoLocalDiv = document.getElementById('filtroCompeticaoLocal');
    const filtroCompeticaoDistanciaDiv = document.getElementById('filtroCompeticaoDistancia');

    const selectModalidade = document.getElementById('selectModalidade');
    const inputNomeAtleta = document.getElementById('inputNomeAtleta');
    const inputNomeCompeticao = document.getElementById('inputNomeCompeticao');
    const inputLocalCompeticao = document.getElementById('inputLocalCompeticao');
    const inputDistanciaCompeticao = document.getElementById('inputDistanciaCompeticao'); 


    if (radioAtletas.checked) {
        listaAtletasDiv.style.display = 'block';
        listaCompeticoesDiv.style.display = 'none';

        filtroModalidadeDiv.style.display = 'block';
        filtroNomeDiv.style.display = 'block';
        
        filtroCompeticaoNomeDiv.style.display = 'none';
        filtroCompeticaoLocalDiv.style.display = 'none';
        filtroCompeticaoDistanciaDiv.style.display = 'none';

        carregarListaAtletas(selectModalidade.value, inputNomeAtleta.value);
        
    } else {
        listaAtletasDiv.style.display = 'none';
        listaCompeticoesDiv.style.display = 'block';
        
        filtroModalidadeDiv.style.display = 'none';
        filtroNomeDiv.style.display = 'none';
        
        filtroCompeticaoNomeDiv.style.display = 'block';
        filtroCompeticaoLocalDiv.style.display = 'block';
        filtroCompeticaoDistanciaDiv.style.display = 'block';

        carregarListaCompeticoes(inputNomeCompeticao.value, inputLocalCompeticao.value, inputDistanciaCompeticao.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    alternarVisualizacao();

    const selectModalidade = document.getElementById('selectModalidade');
    const inputNomeAtleta = document.getElementById('inputNomeAtleta');
    const inputNomeCompeticao = document.getElementById('inputNomeCompeticao');
    const inputLocalCompeticao = document.getElementById('inputLocalCompeticao');
    const inputDistanciaCompeticao = document.getElementById('inputDistanciaCompeticao');

    document.getElementById('radioAtletas').addEventListener('change', alternarVisualizacao);
    document.getElementById('radioCompeticoes').addEventListener('change', alternarVisualizacao);

    selectModalidade.addEventListener('change', () => {
        carregarListaAtletas(selectModalidade.value, inputNomeAtleta.value);
    });

    inputNomeAtleta.addEventListener('input', () => {
        carregarListaAtletas(selectModalidade.value, inputNomeAtleta.value);
    });

    const filtroCompeticaoHandler = () => {
        carregarListaCompeticoes(inputNomeCompeticao.value, inputLocalCompeticao.value, inputDistanciaCompeticao.value);
    };

    inputNomeCompeticao.addEventListener('input', filtroCompeticaoHandler);
    inputLocalCompeticao.addEventListener('input', filtroCompeticaoHandler);
    inputDistanciaCompeticao.addEventListener('input', filtroCompeticaoHandler);
});