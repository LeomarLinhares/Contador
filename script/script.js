function contar() {
    let resTxt = document.getElementById('resultado')
    let inicio = document.getElementById('inpInicio')
    let fim = document.getElementById('inpFim')
    let passo = document.getElementById('inpPasso')

    let inValue = Number(inicio.value);
    let fiValue = Number(fim.value);
    let paValue = Number(passo.value);

    resTxt.innerHTML = "";

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] - Insira os dados nos campos vazios');
        resTxt.innerText = `Impossível contar! \u{2639}`
    } else {
        if (paValue == 0) {
            window.alert(`Sério? Passo zero? Você realmente quer que um contador conte de um número até outro pulando de 0 em 0? Vou fingir que você não fez isso e vou por o número 1 no passo.\nSenhor, me dá paciência! \u{1F644}`)
            paValue = 1;
        }
        if (inValue < fiValue) {
            // Contagem crescente
            for (let count = inValue; count <= fiValue; count += paValue) {
                if (resTxt.innerHTML == "") {
                    resTxt.innerHTML = `${count}`
                } else {
                    resTxt.innerHTML += `, ${count}`
                }
            }
        } else {
            // Contagem regressiva
            for (let count = inValue; count >= fiValue; count -= paValue) {
                if (resTxt.innerHTML == "") {
                    resTxt.innerHTML = `${count}`
                } else {
                    resTxt.innerHTML += `, ${count}`
                }
            }
        }
        
        resTxt.innerHTML += ".<p>Fim da contagem!</p>"
    }
    
}