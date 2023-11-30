/*
Dado um array de inteiros, encontre a soma de seus elementos.
Por exemplo, se o array for [1, 2, 3, 4, 10, 11], a soma será 31.

Descrição da Função
Ela deve retornar a soma dos elementos do array como um inteiro.

simpleArraySum tem o seguinte parâmetro(s):
ar: um array de inteiros

Formato de Entrada:

A primeira linha contém um inteiro, n, denotando o tamanho do array.
A segunda linha contém n inteiros separados por espaço representando os elementos do array.

Restrições:

0 < n, ar[i] <= 1000

Formato de Saída:

Imprima a soma dos elementos do array como um único inteiro.

Exemplo de Entrada
6 (denotando o tamanho do array)
1 2 3 4 10 11 (inteiros separados por espaço representando os elementos do array)

Exemplo de Saída
31

Explicação
Imprimimos a soma dos elementos do array:
1 + 2 + 3 + 4 + 10 + 11 = 31.
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
