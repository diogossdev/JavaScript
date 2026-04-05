//Exercício do Filtro de Palavrões

export function censurarTexto(texto, palavrasProibidas){
    for (let palavrao of palavrasProibidas){
        texto = texto.replaceAll(palavrao, '***')
    }
    return texto
}

//Programa Principal
const texto = "O gato bobo derrubou o vaso."
const palavrasProibidas = ['bobo', 'vaso']
console.log(`Frase censurada: ${censurarTexto(texto, palavrasProibidas)}`)