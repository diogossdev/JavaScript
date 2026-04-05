//Programa de Teste Unitário da função de Inverter Palavras
import { inverterPalavras } from "./ex008.js";

import test from 'node:test';
import assert from "node:assert";

//Primeiro Teste
test('Este teste precisa retornar a frase "Eu gosto de Javascript!" invertida.', () => {
    const array = "Eu gosto de JavaScript!"
    const frase_invertida = inverterPalavras(array)
    assert.strictEqual(frase_invertida, 'JavaScript! de gosto Eu')
})