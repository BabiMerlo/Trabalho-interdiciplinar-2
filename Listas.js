import { Organizador } from './Organizador.js';
import { Atleta } from './Atleta.js';

const listaDeAtletas = [
    new Atleta("Maria Silva", "01/05/1998", "12345678900", "maria@email.com", "Natação", "SportsMax"),
    new Atleta("João Pereira", "15/10/2000", "98765432100", "joao@email.com", "Atletismo", "FitLife"),
    new Atleta("Ana Costa", "20/03/2005", "11223344556", "ana@email.com", "Vôlei de Praia", "SunGear")
];

const organizadorEvento = new Organizador("Carlos Souza", "10/10/1985", "10101010101", "carlos@ifes.br", "Coordenação");

const listaDeCompeticoes = [
    organizadorEvento.atribuirTarefa("Maratona IFES 2026 - Atletismo"),
    organizadorEvento.atribuirTarefa("Torneio de Vôlei de Praia - Outono"),
    organizadorEvento.atribuirTarefa("Copa Natação Velocidade")
];

function carregarListaAtletas() {
    const listaHtml = document.getElementById('listaAtletas');
    listaHtml.innerHTML = '<h2>Lista de Atletas</h2>';

    listaDeAtletas.forEach(atleta => {
        const divAtleta = document.createElement('div');
        divAtleta.classList.add('item-lista');
        divAtleta.innerHTML = `<pre>${atleta.toString()}</pre>`;
        listaHtml.appendChild(divAtleta);
    });
}

function carregarListaCompeticoes() {
    const listaHtml = document.getElementById('listaCompeticoes');
    listaHtml.innerHTML = '<h2>Lista de Competições</h2>';

    listaDeCompeticoes.forEach(competicao => {
        const divCompeticao = document.createElement('div');
        divCompeticao.classList.add('item-lista');
        divCompeticao.innerHTML = `<p>${competicao}</p>`;
        listaHtml.appendChild(divCompeticao);
    });
}

function alternarVisualizacao() {
    const radioAtletas = document.getElementById('radioAtletas');
    const listaAtletasDiv = document.getElementById('listaAtletas');
    const listaCompeticoesDiv = document.getElementById('listaCompeticoes');

    if (radioAtletas.checked) {
        listaAtletasDiv.style.display = 'block';
        listaCompeticoesDiv.style.display = 'none';
        carregarListaAtletas();
    } else {
        listaAtletasDiv.style.display = 'none';
        listaCompeticoesDiv.style.display = 'block';
        carregarListaCompeticoes();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    alternarVisualizacao();
    document.getElementById('radioAtletas').addEventListener('change', alternarVisualizacao);
    document.getElementById('radioCompeticoes').addEventListener('change', alternarVisualizacao);
});