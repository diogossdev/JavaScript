// Verificar se é par ou ímpar
for (let i = 1; i <= 20; i++){
    let tipo = (i % 2 === 0) ? 'par!' : 'ímpar!'
    console.log(`O número ${i} é ${tipo}`)
}