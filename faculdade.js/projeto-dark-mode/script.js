// Criando aplicação de Dark Mode

const botao = document.querySelector('button#botao_dark')
const corpo = document.querySelector('body')

botao.addEventListener('click', () => {
    corpo.classList.toggle('modo_escuro')

    if (corpo.classList.contains('modo_escuro')) {
        botao.innerText = "Ativar Light Mode";
    } else {
        botao.innerText = "Ativar Dark Mode";
    }
})