//Exercício de Organização de Nomes Bagunçados

//Criando função de Organização
export function organizarChamada(nomes){
    const lista_nova = []
    for (let nome of nomes){
        let nova_palavra = ""
        nova_palavra += nome.charAt(0).toUpperCase()
        nova_palavra += nome.slice(1, nome.lenght).toLowerCase()
        lista_nova.push(nova_palavra)
    }
    return lista_nova.sort()
}