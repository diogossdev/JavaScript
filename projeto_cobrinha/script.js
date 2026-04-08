//JavaScript do Projeto da Cobrinha

//Variáveis Globais do Programa
const canvas = document.querySelector("#gameboard");
const ctx = canvas.getContext("2d");
const tamanhoBloco = 20

//Variáveis de Estado
let cobra = [
    {x:200, y:200}
]

let velx = tamanhoBloco
let vely = 0

let maca = {x:100, y:100}

//Funções

//Função para desenhar a cobra no jogo
function desenharCobra(){
    for (let pedaco of cobra){
        ctx.fillStyle = "green";
        ctx.fillRect(pedaco.x, pedaco.y, tamanhoBloco, tamanhoBloco);
    }
}

//Função para criar a comida no jogo
function desenharComida(){
    ctx.fillStyle = "red";
    ctx.fillRect(maca.x, maca.y, tamanhoBloco, tamanhoBloco)
}

//Função para gerar nova posição da maça
function gerarPosicaoAleatoria(){
    const valor = Math.floor(Math.random() * (canvas.width / tamanhoBloco)) * tamanhoBloco
    return valor
}

//Função para mover a cobra no jogo
function moverCobra(){
    const novaCabeca = {x: (cobra[0].x + velx), y: (cobra[0].y + vely)}
    if (novaCabeca.x === maca.x && novaCabeca.y === maca.y){
        cobra.unshift(novaCabeca)
        maca.x = gerarPosicaoAleatoria()
        maca.y = gerarPosicaoAleatoria()
    } else{
        cobra.unshift(novaCabeca)
        cobra.pop()
    }
}

//Função de verificar colisão da cobra nos cantos do jogo
function verificarColisao(){
    if (cobra[0].x < 0 || cobra[0].x >= canvas.width || cobra[0].y < 0 || cobra[0].y >= canvas.height){
        clearInterval(jogo)
        window.alert("Game Over!")
        location.reload()
    }
    for (let i = 1; i < cobra.length; i++){
        if (cobra[i].x === cobra[0].x && cobra[i].y === cobra[0].y){
            clearInterval(jogo)
            window.alert("Game Over!")
            location.reload()
        }
    }
}

//Função para limpar a tela do jogo
function limparTela(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

//Função para mudança de eventos da cobrinha
function mudarDirecao(evento){
    switch (evento.key) {
        case "ArrowUp":
            if (vely !== tamanhoBloco){
                velx = 0
                vely = -tamanhoBloco
            };
            break
        case "ArrowDown":
            if (vely !== -tamanhoBloco){
                velx = 0
                vely = tamanhoBloco
            };
            break
        case "ArrowLeft":
            if (velx !== tamanhoBloco){
                velx = -tamanhoBloco
                vely = 0
            };
            break
        case "ArrowRight":
            if (velx !== -tamanhoBloco){
                velx = tamanhoBloco
                vely = 0
            };
            break
    }
}

//Função Principal para iniciar em loop todas as outras
function atualizarJogo(){
    limparTela()
    moverCobra()
    verificarColisao()
    desenharComida()
    desenharCobra()
}

//Programa Principal
document.addEventListener("keydown", mudarDirecao)
let jogo = setInterval(atualizarJogo, 100)