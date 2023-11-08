/*
Desafio de programação: Você deve escrever uma função que calcule
e imprima a soma dos elementos de um array,
considerando que alguns desses inteiros podem ser muito grandes.
Entrada e saída: A primeira linha da entrada consiste de um inteiro.
A próxima linha contém inteiros separados por espaço contidos no array.
Você deve retornar a soma inteira dos elementos do array.
Restrição e dica: O intervalo do inteiro de 32 bits é.
Quando você soma vários valores inteiros,
a soma resultante pode exceder esse intervalo.
https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
*/

function sum(total, value) {
  return total + value;
}

function aVeryBigSum(ar) {
  return ar.reduce(sum);
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
