//Exercício de Carrinho de Compras

//Função para calcular o valor total de todas as compras
function calcularTotal(listaDeCompras){
    let valor_total = 0
    for (let objeto of listaDeCompras){
        valor_total += objeto['preco']*objeto['quantidade']
    }
    return valor_total
}

//Programa Principal
const array = [
    {nome: "teclado", preco: 100.00, quantidade: 1},
    {nome: "caneta", preco: 2.50, quantidade: 8},
    {nome: "caderno", preco: 20.00, quantidade: 5}
]

console.log(`O valor total das compras será ${calcularTotal(array)}R$.`)