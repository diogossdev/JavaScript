// matematica_test.js

// Importamos ferramentas nativas do Node para fazer testes
import test from 'node:test';
import assert from 'node:assert';

// Importamos a SUA função que queremos testar
import { somarTudo, calcularComCallback } from './matematica.js';

// Escrevemos o teste
test('A função somarTudo deve somar 1, 2 e 3 e retornar 6', () => {
    
    // 1. Executamos a função
    const resultado = somarTudo(1, 2, 3);
    
    // 2. Fazemos a afirmação (assert). Se não for 6, o teste quebra e acusa erro!
    assert.strictEqual(resultado, 6);
});

