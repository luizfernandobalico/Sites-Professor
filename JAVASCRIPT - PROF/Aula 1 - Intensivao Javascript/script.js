// Criação das variaveis
const botaoPlayPause= document.getElementById("play-pause");  // Diz pegue o elemento que vc deseja
const botaoAvancar = document.getElementById("proximo"); // Diz pegue o elemento e avance a faixa
const botaoVoltar = document.getElementById("anterior");
const audioCapitulo=document.getElementById("audio-capitulo"); // Diz pegue o elemento audio-capitulo
const nomeCapitulo=document.getElementById("capitulo");// Diz pega o elemento capitulo no html

botaoPlayPause.addEventListener('click', tocarFaixa); // Adicione a este botão a capacidade de escutar um elemento

// Javascript como se fosse cozinheiro
// criaremos as variaveis const é constante qdo não quiser mudar o numero da caixa

const numeroCapitulos = 10; // construindo caixa nome numeroCapitulos guarda a informação 10 o var ja esta ultrapassado
let taTocando = 0; // let variavel que pode mudar const não posso mudar a variavel
let capituloAtual= 1; // reconhecer a variavel a faixa que esta tocando

// Conceito de Função - É uma funcionalidade que deixarei preparada que vou usar quando achar conveniente
function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar() { // Função If - Then e Else ( Tocar e Pausar)
    if ( taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capitulo" + capituloAtual;     //Texto interior o que esta dentro dele
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos){
        capituloAtual= 1;
    } else {
        capituloAtual = capituloAtual + 1    
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando= 1;
    trocarNomeFaixa();
    }

function voltarFaixa(){
    if (capituloAtual ===  1 ){
        capituloAtual= numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1    
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando= 1;
    trocarNomeFaixa();
}



botaoPlayPause.addEventListener('click', tocarOuPausar); // Adicione a este botão a capacidade de escutar um elemento
                                         // Exemplo saiu a carne do churrasco
botaoAvancar.addEventListener('click', proximaFaixa); // Adicione a este botão a capacidade proxima faixa

botaoVoltar.addEventListener('click', voltarFaixa); // Adicione a este botão a capacidade voltar a faixa