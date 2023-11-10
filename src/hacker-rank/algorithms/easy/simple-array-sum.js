/*
O problema consiste em encontrar a soma dos elementos de um array de inteiros.
https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
*/

function sum(total, value) {
  return total + value;
}

function simpleArraySum(ar) {
  const result = ar.reduce(sum);
  return result;
}

simpleArraySum([1, 2, 3, 4, 5]);
