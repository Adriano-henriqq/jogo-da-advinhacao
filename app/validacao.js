function verificaSeOChuteEValido(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML+= '<div>valor invalido</div>'
        return
    }
    if(numroForMaiorQueOPermitido(numero)){
        elementoChute.innerHTML+=`
        <div>Valor invalido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    
    }

    if(numero===numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero>numeroSecreto){
        elementoChute.innerHTML+=`
        <div>o numero secreto é menor <i class="fa-solid fa-arrow-down"></i> 
        </div>
        `
    }else{
        elementoChute.innerHTML+=`
        <div>o numero secreto é maior <i class="fa-solid fa-arrow-up"></i> 
        </div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}


function numroForMaiorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})