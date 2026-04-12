//função de somar valores
function somar(){
    const texto1 = document.getElementById('txtn1')
    const texto2 = document.getElementById('txtn2')
    const div = document.getElementById('resultado')
    const numero1 = Number(texto1.value)
    const numero2 = Number(texto2.value)
    const soma = numero1 + numero2
    div.textContent = `Resultado = ${soma}`
}