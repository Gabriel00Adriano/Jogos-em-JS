const escolhaComputadorMostrar = document.getElementById('escolha-computador')
const escolhaJogadorMostrar = document.getElementById('escolha-jogador')
const resultadoMostrar = document.getElementById('resultado')
const escolhasPossiveis = document.querySelectorAll('button')
let escolhaJogador
let escolhaComputador
let resultado

escolhasPossiveis.forEach(escolhaPossivel => escolhaPossivel.addEventListener('click', (e) =>{
    escolhaJogador = e.target.id
    escolhaJogadorMostrar.innerHTML = escolhaJogador
    gerarEscolhaComputador()
    pegarResultado()
}))

function gerarEscolhaComputador(){
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1
    
    if(numeroAleatorio === 1){
        escolhaComputador = 'Pedra'
    }
    
    if(numeroAleatorio === 2){
        escolhaComputador = 'Papel'
    }

    if(numeroAleatorio === 3){
        escolhaComputador = 'Tesoura'
    }

    escolhaComputadorMostrar.innerHTML = escolhaComputador
}

function pegarResultado(){//Poderia ser feito com o switch de forma muito mais eficiente
    if(escolhaComputador === escolhaJogador){
        resultado = 'Empate'
    }

    if(escolhaComputador === 'Pedra' &&  escolhaJogador === 'Papel'){
        resultado = 'Vitoria'
    }

    if(escolhaComputador === 'Pedra' &&  escolhaJogador === 'Tesoura'){
        resultado = 'Derrota'
    }

    if(escolhaComputador === 'Tesoura' &&  escolhaJogador === 'Papel'){
        resultado = 'Derrota'
    }

    if(escolhaComputador === 'Tesoura' &&  escolhaJogador === 'Pedra'){
        resultado = 'Vitoria'
    }

    if(escolhaComputador === 'Papel' &&  escolhaJogador === 'Tesoura'){
        resultado = 'Vitoria'
    }

    if(escolhaComputador === 'Papel' &&  escolhaJogador === 'Pedra'){
        resultado = 'Derrota'
    }

    resultadoMostrar.innerHTML = resultado
}