const sltTipo = document.getElementById('sltTipo');
const optTrail = document.getElementById('optTrail');
const inCheck = document.getElementById('inCheck');
const inDificuldade = document.getElementById('inDificuldade');


function alterarOpcoes(){
    if(sltTipo.value == 'optTrail'){
        inCheck.disabled = false;
        inDificuldade.disabled = false;
    } else{
        inCheck.disabled = true;
        inDificuldade.disabled = true;
    }
}

sltTipo.addEventListener('change', alterarOpcoes);