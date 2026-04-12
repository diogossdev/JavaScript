//Criação de eventos de mouse

const div = document.getElementById('area')

function clicar(){
    div.textContent = "Clicou :)"
    div.style.backgroundColor = "gray"
}

function pedir(){
    div.textContent = "Sem medo!"
}

function voltar(){
    div.textContent = "Clique em mim..."
    div.style.backgroundColor = "green"
}

div.addEventListener('click', clicar)
div.addEventListener('mouseout', voltar)
div.addEventListener('mouseenter', pedir)