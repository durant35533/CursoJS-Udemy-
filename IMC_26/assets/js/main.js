//Capturar evento de submit do formulário

const form = document.querySelector('.formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso'); //Elemento que está recebendo o evento (O form).
    const inputAltura = event.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {//Se não for peso. 
        inserirResultado('Peso inválido', false);
        return;
    }

    if (!altura) {//Se não for altura
        inserirResultado('Altura inválida', false);
    }

    const IMC = getIMC(peso, altura); //Criando uma função aqui. 
    const nivelIMC = getNivelIMC(IMC);

    const mensagem = `Seu IMC É ${IMC}, que é ${nivelIMC}.`
    inserirResultado(mensagem, true); //True é valido. 

    console.log(IMC);
    console.log(nivelIMC);
});

function getNivelIMC (IMC) {
   const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']; 

    if (IMC < 18.5) {
        return nivel[0];
    }
    if (IMC >= 18.5 && IMC <= 24.9) {
        return nivel[1];
    }
    if (IMC >= 25 && IMC <= 29.9) {
        return nivel[2];
    }
    if (IMC >= 30 && IMC <= 34.9) {
        return nivel[3];
    }
    if (IMC >= 35 && IMC <= 39.9) {
        return nivel[4];
    } 
    if (IMC >= 40) {
        return nivel[5];
    }
}

function getIMC (peso,altura) {
    const IMC = peso/altura**2;
    return IMC.toFixed(2); //Duas casas decimais.
}

function criarParagrafo() {
    const paragrafo = document.createElement('p'); //Criar a tag do parágrafo.
    return paragrafo;
}

function inserirResultado(mensagem, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ''; //Serve para zerar/limpar o HTML assim que inserir um novo resultado.
    const paragrafo = criarParagrafo();
    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } 
    else {
        paragrafo.classList.add('bad');
    }
    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo);
}