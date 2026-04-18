// Passo 1: Pegar os elementos do HTML usando o DOM
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const pergunta = document.getElementById('pergunta');
const provocacao = document.getElementById('mensagem-provocacao');
const areaBotoes = document.getElementById('area-botoes');

let tentativas = 0;

// Frases que vão aparecer para provocar ela hahah
const frases = [
    "Tem certeza?",
    "Clica direito poxa...",
    "Não fuja de mim!",
    "Você sabe que me ama...",
    "Desiste, você não tem escolha hehe"
];

// Passo 2: Criar o evento para o botão "Sim!"
btnSim.addEventListener('click', function() {
    pergunta.innerText = "Eu também te amo muuuito!!! <33";
    provocacao.innerText = "";
    areaBotoes.style.display = "none";
});

// Passo 3: Criar a função que faz o botão "Não" fugir
function fogeBotao() {
    tentativas++;

    // Muda a frase de provocação baseada no número de tentativas
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

    // Aplica as novas posições ao botão
    btnNao.style.left = aleatorioX + "px";
    btnNao.style.top = aleatorioY + "px";
}

// Passo 4: Adicionar os eventos ao botão "Não."

btnNao.addEventListener('mouseover', fogeBotao);
btnNao.addEventListener('touchstart', fogeBotao);