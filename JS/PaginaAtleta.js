const sltTipo = document.getElementById('sltTipo');
const optTrail = document.getElementById('optTrail');


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