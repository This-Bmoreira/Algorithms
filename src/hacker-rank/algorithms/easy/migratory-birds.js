/* eslint-disable no-param-reassign */
/*
Problema: Dado um array de avistamentos de pássaros onde cada
elemento representa um id de tipo de pássaro, determinar o id do tipo mais
frequentemente avistado. Se mais de 1 tipo foi avistado na quantidade máxima,
retornar o menor dos seus ids.
Exemplos: São fornecidos três exemplos de entradas e saídas
esperadas, com explicações de como chegar ao resultado.
Função: É preciso completar a função migratoryBirds no editor
abaixo, que recebe um inteiro n, o tamanho do array, e uma linha
com n inteiros separados por espaço, cada um um número de tipo do pássaro avistado.
Restrições: São especificadas as restrições
sobre os valores de n e dos elementos do array,
bem como o formato da saída esperada.
*/

function contarFrequencia(arr) {
  return arr.reduce((counter, currentValue) => {
    counter[currentValue] = (counter[currentValue] || 0) + 1;
    return counter;
  }, {});
}

function encontrarTipoMaisFrequenteComMenorID(contagem) {
  let tipoMaisFrequenteComMenorID = null;
  let maiorFrequencia = 0;

  Object.keys(contagem).forEach((tipo) => {
    const frequencia = contagem[tipo];
    if (frequencia > maiorFrequencia
      || (frequencia === maiorFrequencia && tipo < tipoMaisFrequenteComMenorID)) {
      tipoMaisFrequenteComMenorID = tipo;
      maiorFrequencia = frequencia;
    }
  });
  return tipoMaisFrequenteComMenorID;
}

function migratoryBirds(arr) {
  const frequencia = contarFrequencia(arr);
  const tipoMaisFrequente = encontrarTipoMaisFrequenteComMenorID(frequencia);
  return parseInt(tipoMaisFrequente, 10);
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
