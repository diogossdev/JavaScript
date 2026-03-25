//Código que altera os múltiplos de 3 e 5
for (let i = 1; i <= 30; i++){
    let verificador = 
        (i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz' :
        (i % 3 === 0) ? 'Fizz' :
        (i % 5 === 0) ? 'Buzz' :
        i
    console.log(verificador)
}