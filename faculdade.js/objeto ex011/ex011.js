//Simulando criação de personagem com JS

//Programa Principal
const personagem = {
    nome: "Diogo",
    nivel: 1,
    vida: 100
};

const equipamentos = {
    arma: "Estilingue Maneiro",
    armadura: "Obisidiana"
};

const personagemEquipado = {
    ...personagem,
    ...equipamentos,
    classe: "Atirador"
}

const saveGame = JSON.stringify(personagemEquipado)
console.log(saveGame)