const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const pergunta = document.getElementById('pergunta');
const provocacao = document.getElementById('mensagem-provocacao');
const areaBotoes = document.getElementById('area-botoes');

let tentativas = 0;

const frases = [
    "Tem certeza?",
    "Clica direito poxa...",
    "Não fuja de mim!",
    "Você sabe que me ama...",
    "Desiste, você não tem escolha :P"
];

btnSim.addEventListener('click', function() {
    pergunta.innerText = "Eu também te amo muuuito!!! <33";
    provocacao.innerText = "";
    areaBotoes.style.display = "none";
});

function fogeBotao(e) { 
    if (e) {
        e.preventDefault();
    }

    tentativas++;

    if (tentativas <= frases.length) {
        provocacao.innerText = frases[tentativas - 1];
    } else {
        provocacao.innerText = "Como pode ser tão teimosa :^";
    }

    btnNao.style.position = 'absolute';

    const maxX = window.innerWidth - btnNao.offsetWidth;
    const maxY = window.innerHeight - btnNao.offsetHeight;

    const aleatorioX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY);

    btnNao.style.left = aleatorioX + "px";
    btnNao.style.top = aleatorioY + "px";
}

btnNao.addEventListener('mouseover', fogeBotao);
btnNao.addEventListener('touchstart', fogeBotao);