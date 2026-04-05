//Criando Testes Unitários do exercício da filtragem de palavrões
import { censurarTexto } from "./ex009.js";

import test from "node:test";
import assert from "node:assert";

test('Nesse teste, a frase "o gato bobo quebrou o vaso" deve retornar como "o gato *** quebrou o ***"', () => {
    const frase = "O gato bobo quebrou o vaso."
    const palavras_proibidas = ["bobo", "vaso"]
    const frase_censurada = censurarTexto(frase, palavras_proibidas)
    assert.strictEqual(frase_censurada, "O gato *** quebrou o ***.")
})

