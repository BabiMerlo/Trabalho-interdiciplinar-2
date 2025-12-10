import { Atleta } from './Atleta.js';
import { Competicao } from './Competicao.js';

const radioAtletas = document.getElementById('radioAtletas');
const divAtletas = document.getElementById('listaAtletas');
const divCompeticoes = document.getElementById('listaCompeticoes');
const filtroModalidade = document.getElementById('filtroModalidade');
const filtroAtleta = document.getElementById('filtroAtleta');
const filtroCompeticao = document.getElementById('filtroCompeticao');
const filtroLocal = document.getElementById('filtroLocal');
const filtroDistancia = document.getElementById('filtroDistancia');
const sltModalidade = document.getElementById('sltModalidade');
const inAtleta = document.getElementById('inAtleta');
const inCompeticao = document.getElementById('inCompeticao');
const inLocal = document.getElementById('inLocal');
const inDistancia = document.getElementById('inDistancia'); 

const listaDeAtletas = [
    new Atleta("Maria Silva", "01/05/1998", "12345678900", "maria@email.com", "Maratona", "SportsMax"),
    new Atleta("João Pereira", "15/10/2000", "98765432100", "joao@email.com", "Trail Running", "FitLife"),
    new Atleta("Ana Costa", "20/03/2005", "11223344556", "ana@email.com", "Maratona", "SunGear"),
    new Atleta("Otto Hightower", "21/08/1968", "11223344556", "otto@email.com", "Trail Running", "EASports"),
];

const listaDeCompeticoes = [
    new Competicao("Maratona IFES 2026", "Vitória", "42.195 km"),
    new Competicao("Trail Running Desafio da Montanha", "Serra", "21 km"),
    new Competicao("Copa Natação Velocidade", "Piscina IFES", "50m"),
    new Competicao("Meia Maratona Capixaba", "Vila Velha", "21.097 km"),
];

function carregarListaAtletas(filtroModalidade = 'todos', filtroAtleta = '') {
    divAtletas.innerHTML = '<h2>Lista de Atletas</h2>';
    const termoBusca = filtroAtleta.toLowerCase();
    
    const atletasFiltrados = listaDeAtletas.filter(atleta => {
        const passaNoFiltroModalidade = (filtroModalidade == 'todos' || atleta.modalidade == filtroModalidade);
        const nomeAtletaNormalizado = atleta.nome.toLowerCase();
        const passaNoFiltroNome = nomeAtletaNormalizado.includes(termoBusca);

        return passaNoFiltroModalidade && passaNoFiltroNome;
    });
    
    if (atletasFiltrados.length == 0) {
        divAtletas.innerHTML += `<p>Nenhum atleta encontrado com o nome <strong>"${filtroAtleta}"</strong> na modalidade selecionada.</p>`;
    }

    atletasFiltrados.forEach(atleta => {
        const divAtleta = document.createElement('div');
        divAtleta.classList.add('item-lista');
        divAtleta.innerHTML = `<pre>${atleta.toString()}</pre>`;
        divAtletas.appendChild(divAtleta);
    });
}

function carregarListaCompeticoes(filtroCompeticao = '', filtroLocal = '', filtroDistancia = '') {
    divCompeticoes.innerHTML = '<h2>Lista de Competições</h2>';
    
    const buscaNome = filtroCompeticao.toLowerCase();
    const buscaLocal = filtroLocal.toLowerCase();
    const buscaDistancia = filtroDistancia.toLowerCase();
    
    const competicoesFiltradas = listaDeCompeticoes.filter(competicao => {
        const passaNoNome = competicao.nome.toLowerCase().includes(buscaNome);
        const passaNoLocal = competicao.local.toLowerCase().includes(buscaLocal);
        const passaNaDistancia = competicao.distancia.toLowerCase().includes(buscaDistancia);

        return passaNoNome && passaNoLocal && passaNaDistancia;
    });

    if (competicoesFiltradas.length == 0) {
        divCompeticoes.innerHTML += `<p>Nenhuma competição encontrada com os filtros especificados.</p>`;
    }

    competicoesFiltradas.forEach(competicao => {
        const divCompeticao = document.createElement('div');
        divCompeticao.classList.add('item-lista');
        divCompeticao.innerHTML = `<pre>${competicao.toString()}</pre>`;
        divCompeticoes.appendChild(divCompeticao);
    });
}


function alternarVisualizacao() {

    if (radioAtletas.checked) {
        divAtletas.style.display = 'block';
        divCompeticoes.style.display = 'none';

        filtroModalidade.style.display = 'block';
        filtroAtleta.style.display = 'block';
        
        filtroCompeticao.style.display = 'none';
        filtroLocal.style.display = 'none';
        filtroDistancia.style.display = 'none';

        carregarListaAtletas(sltModalidade.value, inAtleta.value);
        
    } else {
        divAtletas.style.display = 'none';
        divCompeticoes.style.display = 'block';
        
        filtroModalidade.style.display = 'none';
        filtroAtleta.style.display = 'none';
        
        filtroCompeticao.style.display = 'block';
        filtroLocal.style.display = 'block';
        filtroDistancia.style.display = 'block';

        carregarListaCompeticoes(inCompeticao.value, inLocal.value, inDistancia.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    alternarVisualizacao();

    document.getElementById('radioAtletas').addEventListener('change', alternarVisualizacao);
    document.getElementById('radioCompeticoes').addEventListener('change', alternarVisualizacao);

    sltModalidade.addEventListener('change', () => {
        carregarListaAtletas(sltModalidade.value, inAtleta.value);
    });

    inAtleta.addEventListener('input', () => {
        carregarListaAtletas(sltModalidade.value, inAtleta.value);
    });

    const filtroCompeticaoHandler = () => {
        carregarListaCompeticoes(inCompeticao.value, inLocal.value, inDistancia.value);
    };

    inCompeticao.addEventListener('input', filtroCompeticaoHandler);
    inLocal.addEventListener('input', filtroCompeticaoHandler);
    inDistancia.addEventListener('input', filtroCompeticaoHandler);
});