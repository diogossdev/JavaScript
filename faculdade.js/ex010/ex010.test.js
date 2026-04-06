// Teste Unitário do exercício de organização de nomes
import { organizarChamada } from "./ex010.js";

import test from "node:test";
import assert from "node:assert";

test('Este teste deve pegar a lista ["ana", "Zeca", "CARLOS" e "BIa"] e retornar ["Ana", "Zeca", "Carlos", "Bia"]', () => {
    const array = ["ana", "Zeca", "CARLOS", "BIa"]
    const resultado = organizarChamada(array)
    const esperado = ["Ana", "Bia", "Carlos", "Zeca"]
    assert.deepStrictEqual(resultado, esperado)
})