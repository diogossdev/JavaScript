// Exercício de Inversor de Frases

//Função de Inverter Frases
export function inverterPalavras(frase){
    const array = frase.split(" ")
    array.reverse()
    const frase_invertida = array.join(' ')
    return frase_invertida
}
