import { Atleta } from './Atleta.js'
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
    new Atleta("Maria Silva", "01/05/1998", "12345678900", "maria@email.com", "Maratona"),
    new Atleta("João Pereira", "15/10/2000", "98765432100", "joao@email.com", "Trail Running"),
    new Atleta("Ana Costa", "20/03/2005", "11223344556", "ana@email.com", "Natação"),
    new Atleta("Pedro Santos", "12/11/1995", "99887766554", "pedro@email.com", "Maratona"),
    new Atleta("Lúcia Mendes", "25/07/1989", "12312312312", "lucia@email.com", "Ciclismo"),
    new Atleta("Ricardo Oliveira", "03/04/2001", "45645645645", "ricardo@email.com", "Trail Running"),
    new Atleta("Camila Ferreira", "18/09/1997", "78978978978", "camila@email.com", "Natação"),
    new Atleta("Gustavo Lima", "30/01/1992", "10110110110", "gustavo@email.com", "Ciclismo"),
    new Atleta("Sofia Rocha", "08/12/2003", "20220220220", "sofia@email.com", "Maratona"),
    new Atleta("Daniel Alves", "05/06/1985", "30330330330", "daniel@email.com", "Trail Running"),
    new Atleta("Fernanda Brito", "14/02/1999", "40440440440", "fernanda@email.com", "Natação"),
    new Atleta("Marcelo Gomes", "22/08/1994", "50550550550", "marcelo@email.com", "Ciclismo"),
    new Atleta("Viviane Dias", "07/03/1996", "60660660660", "viviane@email.com", "Maratona"),
    new Atleta("Rafael Nunes", "19/04/1991", "70770770770", "rafael@email.com", "Trail Running"),
    new Atleta("Helena Souza", "29/11/2002", "80880880880", "helena@email.com", "Natação")
];

const listaDeCompeticoes = [
    new Competicao("Maratona IFES 2026", "Corrida de Rua", "Vitória", "42.195 km", "10/12/2026", "07:00", 500),
    new Competicao("Trail Running Desafio Montanha", "Trail Running", "Serra", "21 km", "20/01/2027", "08:30", 200),
    new Competicao("Travessia Aquática", "Natação", "Praia de Camburi", "1.5 km", "05/03/2027", "09:00", 350),
    new Competicao("Iron Biker Capixaba", "Ciclismo", "Guarapari", "100 km", "15/04/2027", "06:30", 150),
    new Competicao("Meia Maratona de Vila Velha", "Corrida de Rua", "Vila Velha", "21.097 km", "01/05/2027", "07:00", 800),
    new Competicao("Ultra Trail Pedra Azul", "Trail Running", "Venda Nova", "50 km", "10/06/2027", "05:00", 100),
    new Competicao("Copa Natação Velocidade", "Natação", "Piscina IFES", "50m", "25/07/2027", "14:00", 120),
    new Competicao("Volta Ciclística da Capital", "Ciclismo", "Vitória", "50 km", "12/08/2027", "08:00", 250),
    new Competicao("Corrida Noturna da Orla", "Corrida de Rua", "Praia da Costa", "10 km", "03/09/2027", "19:30", 1000),
    new Competicao("Vertical Challenge", "Trail Running", "Mata Atlântica", "10 km", "18/10/2027", "09:00", 300),
    new Competicao("Revezamento Aquático", "Natação", "Rio Doce", "3 km", "05/11/2027", "10:00", 180),
    new Competicao("Gran Fondo Serra", "Ciclismo", "Serra", "150 km", "22/12/2027", "06:00", 80),
    new Competicao("5km Solidário", "Corrida de Rua", "Parque da Cidade", "5 km", "14/01/2028", "08:00", 1200),
    new Competicao("Desafio das Serras", "Trail Running", "Afonso Cláudio", "30 km", "02/02/2028", "06:30", 150),
    new Competicao("Natação Infantil IFES", "Natação", "Piscina IFES", "25m", "10/03/2028", "15:00", 90)
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