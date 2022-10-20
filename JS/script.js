// selecionando o botao
const botao = document.querySelector('#botao')
// selecionando os inputs
const inputPeso = document.querySelector('#peso-digitado')
const inputAltura = document.querySelector('#altura-digitada')

// function que confere os dados
function verificaDados() {
    let peso = inputPeso.value
    let altura = inputAltura.value
    if (peso <= 0) {
        return false
    }
    else if (altura <= 0) {
        return false
    }
    else{
        return true
    }
}


// funcao que calcula
function calcula() {
    var peso = inputPeso.value;
    var altura = inputAltura.value;
    var imc = peso / (altura * altura)
    return imc.toFixed(2)
};


// funcao define o imc
function defineIMC() {
    imc = calcula()
    var div = document.querySelector('#div')
    let titulo = document.createElement('h2')
    let subtitulo = document.createElement('strong')
    let texto = document.createElement('p')
    let subtituloErro = document.createElement('strong')
    let textoErro = document.createElement('p')

    titulo.setAttribute('id', 'titulo-seu-imc')
    subtitulo.setAttribute('id', 'subtitulo-nivel-imc')
    texto.setAttribute('id', 'texto-seu-imc')
    subtituloErro.setAttribute('id', 'erro-subtitulo')
    textoErro.setAttribute('id', 'erro-texto')

    if (verificaDados() === false) { // DADOS INVALIDOS
        
        subtituloErro.innerHTML = `Dados invalidos!`
        textoErro.innerHTML = `Você digitou algum dado invalido, tente de novo!`

        div.style.backgroundColor = 'rgba(252, 0, 0, 0.2)'
        div.style.borderTopRightRadius = '12px'
        div.style.borderBottomRightRadius = '12px'

        div.innerHTML = ''
        div.append(subtituloErro)
        div.append(textoErro)
    }
    else if (verificaDados() === true) { // DADOS VALIDOS
        if (imc < 18.5) { //  ABAIXO DO PESO

            titulo.innerHTML = `Seu IMC é de <strong id="imc-color" style="color: rgb(0, 110, 255);">${imc}</strong>`
            subtitulo.innerHTML = `Abaixo do peso`
            texto.innerHTML = `Você com um IMC de <strong> ${imc}</strong> está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico `
            div.style.backgroundColor = 'rgba( 0, 0, 0, 0.124)'
            div.innerHTML = ''
            div.append(titulo)
            div.append(subtitulo)
            div.append(texto)
        }
        else if (imc >= 18.6 && imc <= 24.9) { // PESO NORMAL

            titulo.innerHTML = `Seu IMC é de <strong id="imc-color" style="color: rgb(3, 252, 53);">${imc}</strong>`
            subtitulo.innerHTML = `Peso ideal`
            texto.innerHTML = `Parabéns,um IMC de <strong>${imc}</strong> significa que você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais`
            div.style.backgroundColor = 'rgba( 0, 0, 0, 0.124)'
            div.innerHTML = ''
            div.append(titulo)
            div.append(subtitulo)
            div.append(texto)
        }
        else if (imc >= 25.0 && imc <= 29.9) { // ACIMA DO PESO

            titulo.innerHTML = `Seu IMC é de <strong id="imc-color" style="color: rgb(215, 252, 3);">${imc}</strong>`
            subtitulo.innerHTML = `Acima do peso`
            texto.innerHTML = `Você com um IMC de <strong> ${imc}</strong> está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico `
            div.style.backgroundColor = 'rgba( 0, 0, 0, 0.124)'
            div.innerHTML = ''
            div.append(titulo)
            div.append(subtitulo)
            div.append(texto)
        }
        else if (imc >= 30.0 && imc <= 34.9) { // OBESIDADE 1

            titulo.innerHTML = `Seu IMC é de <strong id="imc-color" style="color: rgb(252, 119, 3);">${imc}</strong>`
            subtitulo.innerHTML = `Obesidade de 1°`
            texto.innerHTML = `Sinal de alerta! A partir de <strong> ${imc}</strong> O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você`
            div.style.backgroundColor = 'rgba( 0, 0, 0, 0.124)'
            div.innerHTML = ''
            div.append(titulo)
            div.append(subtitulo)
            div.append(texto)
        }
        else if (imc >= 35.0 && imc <= 39.9) { // OBESIDADE 2

            titulo.innerHTML = `Seu IMC é de <strong id="imc-color" style="color: rgb(252, 73, 3);">${imc}</strong>`
            subtitulo.innerHTML = `Obesidade de 2°`
            texto.innerHTML = `Sinal vermelho! Ao atingir este nível de IMC <strong>${imc}</strong>, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde.`
            div.style.backgroundColor = 'rgba( 0, 0, 0, 0.124)'
            div.innerHTML = ''
            div.append(titulo)
            div.append(subtitulo)
            div.append(texto)

        }
        else if (imc >= 40.0 && imc <= 80.0) { // OBESIDADE 3

            titulo.innerHTML = `Seu IMC é de <strong id="imc-color" style="color: rgb(252, 3, 3);">${imc}</strong>`
            subtitulo.innerHTML = `Obesidade de 3°`
            texto.innerHTML = `Procure um medico! Ao atingir este nível de IMC <strong>${imc}</strong>, o risco de doenças associadas está muito alto. Obesidade de grau 3, também é conhecida como <strong>Obesidade morbida</strong>.`
            div.style.backgroundColor = 'rgba( 0, 0, 0, 0.124)'
            div.innerHTML = ''
            div.append(titulo)
            div.append(subtitulo)
            div.append(texto)
        }
        else if (imc > 80.0){ // IMC FORA DO COMUM
            subtituloErro.innerHTML = `Dados invalidos!`
            textoErro.innerHTML = `Você digitou algum dado invalido, tente de novo!`
    
            div.style.backgroundColor = 'rgba(252, 0, 0, 0.2)'
            div.style.borderTopRightRadius = '12px'
            div.style.borderBottomRightRadius = '12px'
    
            div.innerHTML = ''
            div.append(subtituloErro)
            div.append(textoErro)
        }
    }
};



botao.addEventListener('click', function (e) {
    e.preventDefault()
    calcula()
    defineIMC()

});
