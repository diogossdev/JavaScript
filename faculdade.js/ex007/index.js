// Fazendo aplicação JS usando IA para aprender

// index.js

// Aqui é o equivalente ao 'import' do Python!
import { somarTudo, calcularComCallback } from './matematica.js';

console.log("Testando a soma:", somarTudo(10, 20, 30)); // 60

console.log("Testando o callback com multiplicação:");
console.log(calcularComCallback(5, 5, (x, y) => x * y)); // 25

