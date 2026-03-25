// Testes para ver se as funções estão sendo executadas corretamente

import { calcularMedia, verificarAprovacao } from "./escola.js";

const media = calcularMedia(8, 10, 10)
console.log(calcularMedia(8, 10, 10))
console.log(verificarAprovacao(media, (m) => m >= 7.0))