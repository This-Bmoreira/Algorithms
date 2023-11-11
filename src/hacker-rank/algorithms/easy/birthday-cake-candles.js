/*
Esta página é um desafio de programação
que pede para escrever uma função que conte
quantas velas de aniversário são sopradas.
O desafio é o seguinte:
Dados de entrada: A função recebe dois parâmetros:
um número inteiro que representa o tamanho do array de alturas das velas,
e um array de números inteiros que representa as alturas das velas.
Lógica do problema: Apenas as velas mais altas podem ser sopradas.
O objetivo é contar quantas velas têm a altura máxima.
Saída esperada: A função deve retornar um número inteiro que representa
o número de velas sopradas. Por exemplo, se as alturas das velas são [4, 4, 1, 3],
a função deve retornar 2, pois há duas velas com altura 4, que é a máxima.
https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
*/

function findOccurrences(array, numberToFind) {
  return array.filter((element) => element === numberToFind).length;
}

function birthdayCakeCandles(candles) {
  const maxValue = Math.max.apply(null, candles);

  const occurrences = findOccurrences(candles, maxValue);
  return occurrences;
}

birthdayCakeCandles([4, 4, 1, 3]);
