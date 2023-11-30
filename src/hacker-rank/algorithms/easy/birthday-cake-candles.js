/*
Você está encarregado do bolo para o aniversário de uma criança.
Você decidiu que o bolo terá uma vela para cada ano de idade da criança.
Eles só poderão apagar a vela mais alta. Conte quantas velas são as mais altas.

Exemplo
candles = [4,4,1,3]
As velas mais altas têm 4 unidades de altura. Há 2 delas, então retorne 2.

Descrição da Função
birthdayCakeCandles possui o(s) seguinte(s) parâmetro(s):

int candles[n]: as alturas das velas

Retorna

int: o número de velas que são as mais altas

Formato de Entrada

A primeira linha contém um único inteiro,n, o tamanho de candles[] .
A segunda linha contém n inteiros separados por espaço, onde cada inteiro i descreve a altura de
candles.

Restrições

Exemplo de Entrada 0
4
3 2 1 3
Exemplo de Saída 0
2
Explicação 0

As alturas das velas são [3,2,1,3]
. As velas mais altas têm 3 unidades de altura, e há 2 delas.
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
