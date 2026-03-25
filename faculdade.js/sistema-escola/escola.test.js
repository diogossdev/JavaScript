//Criando testes para as funções do sistema da escola

import test from 'node:test'
import assert from 'node:assert'
import { calcularMedia, verificarAprovacao } from './escola.js'

test('calcular a média de 3 notas', () => {
    const resultado = calcularMedia(7, 8, 9);
    assert.strictEqual(resultado, 8);
})

test('Calcular a média de 2 notas', () => {
    const resultado = calcularMedia(6, 8);
    assert.strictEqual(resultado, 7);
})

test('Calcular a média de 1 nota', () => {
    const resultado = calcularMedia(8);
    assert.strictEqual(resultado, 8);
})

test('Mostrar resultado verdadeiro', () => {
    const resultado = verificarAprovacao(7.0, (m) => m >= 7.0);
    assert.strictEqual(resultado, true)
})

test('Mostrar resultado falso', () =>{
    const resultado = verificarAprovacao(6.0, (m) => m >= 7.0);
    assert.strictEqual(resultado, false)
})