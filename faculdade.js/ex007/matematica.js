// matematica.js

// Criamos uma Arrow Function que usa o Parâmetro Rest (...)
// E colocamos a palavra 'export' para que outros arquivos possam usá-la.
export const somarTudo = (...numeros) => {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma;
};

// Aqui temos um Callback! Uma função que recebe outra função para calcular.
export const calcularComCallback = (param1, param2, callback) => {
    return callback(param1, param2);
};