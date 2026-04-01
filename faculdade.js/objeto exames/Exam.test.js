import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert';
import Exam from './Exam.js';

describe('Testes da Classe Exam (Node Nativo com ESM)', () => {
  let pweb2;

  beforeEach(() => {
    const gabarito = ["a", "b", "a", "c", "d"];
    const pesos = [2, 2, 2, 2, 2];
    pweb2 = new Exam(gabarito, pesos);
  });

  test('Deve calcular corretamente a nota 4.0 do aluno de exemplo da imagem', () => {
    pweb2.add(["a", "b", "b", "b", "b"]);
    assert.deepStrictEqual(pweb2.max(1), [4]);
  });

  test('Deve calcular a média (avg) corretamente com múltiplas provas', () => {
    pweb2.add(["a", "b", "b", "b", "b"]); // Nota: 4
    pweb2.add(["a", "b", "a", "c", "d"]); // Nota: 10
    assert.strictEqual(pweb2.avg(), 7);
  });

  test('Deve retornar as N menores notas (min)', () => {
    pweb2.add(["a", "b", "b", "b", "b"]); // 4
    pweb2.add(["a", "b", "a", "c", "d"]); // 10
    pweb2.add(["a", "a", "a", "a", "a"]); // 4 
    pweb2.add(["b", "c", "d", "a", "b"]); // 0 

    assert.deepStrictEqual(pweb2.min(2), [0, 4]);
  });

  test('Deve retornar as N maiores notas (max)', () => {
    pweb2.add(["a", "b", "b", "b", "b"]); // 4
    pweb2.add(["a", "b", "a", "c", "d"]); // 10
    pweb2.add(["a", "b", "a", "c", "a"]); // 8

    assert.deepStrictEqual(pweb2.max(2), [10, 8]);
  });

  test('Deve retornar notas estritamente menores que o limite (lt)', () => {
    pweb2.add(["a", "b", "b", "b", "b"]); // 4
    pweb2.add(["a", "b", "a", "c", "d"]); // 10
    pweb2.add(["a", "b", "a", "c", "a"]); // 8

    assert.deepStrictEqual(pweb2.lt(5), [4]);
  });

  test('Deve retornar notas estritamente maiores que o limite (gt)', () => {
    pweb2.add(["a", "b", "b", "b", "b"]); // 4
    pweb2.add(["a", "b", "a", "c", "d"]); // 10
    pweb2.add(["a", "b", "a", "c", "a"]); // 8

    assert.deepStrictEqual(pweb2.gt(5), [10, 8]); 
  });
});