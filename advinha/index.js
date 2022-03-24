 const comparaNumero = (numeroSecreto)=>{
    var numeroSecreto = Math.floor(Math.random()*10)+1

    const input = document.querySelector('#input')
    const valor = input.value
    const paragrafo = document.querySelector('#paragrafo')
    const chuteCerto = `UAU! Você acertou na mosca o número ${numeroSecreto}`
    const chuteErrado = `Que pena você errou desta vez o número era ${numeroSecreto}`

    if(numeroSecreto == valor){
        paragrafo.innerHTML = chuteCerto
    }else{
        paragrafo.innerHTML = chuteErrado
    }
}

const botaoConfere = document.querySelector('#botaoConfere');
botaoConfere.addEventListener("click", comparaNumero)

const botaoLoad = document.querySelector('#load')
botaoLoad.addEventListener("click", ()=>{
    location.reload()
})