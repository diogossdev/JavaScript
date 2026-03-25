// Criando funções do sistema da escola

//Função de calcular a média

/* export function calcularMedia(...notas){
    let somador = 0
    for (let nota of notas) {
        somador += nota
    }
    const quantidade_notas = notas.length
    const media = somador / quantidade_notas
    return media  
} */

//Fazendo com arrow function (para treinar)
export const calcularMedia = (...notas) => {
    let somador = 0
    for (let nota of notas) {
        somador += nota
    }
    const quantidade_notas = notas.length
    const media = somador / quantidade_notas
    return media
}

//Função de verificar aprovação

/* export function verificarAprovacao(media, verificador){
    return verificador(media)
} */

//Fazendo com arrow function (para treinar)
export const verificarAprovacao = (media, verificador) => verificador(media);