/* eslint-disable no-param-reassign */
/*
Dado um array de inteiros e um inteiro positivo k,
determine o número de  pares (i, j) onde i < j e
ar[i] + ar[j] é divisível por k.

Exemplo:

ar = [1, 2, 3, 4, 5, 6]
k = 5

Três pares atendem aos critérios: [1, 4], [2, 3] e [4, 6].

Descrição da Função:

Complete a função divisibleSumPairs no editor abaixo.

divisibleSumPairs tem o(s) seguinte(s) parâmetro(s):

int n: o comprimento do array
int ar[n]: um array de inteiros
int k: o divisor inteiro

Retorno:
int: o número de pares

Formato de Entrada:
A primeira linha contém dois inteiros separados por espaço, n  e  k.
A segunda linha contém n inteiros separados por espaço, cada um representando um valor de arr[i] .

Restrições:

2 <= n <= 100
1 <= k <= 100
1 <= ar[i] <= 100

Exemplo de Entrada:

6 3 (inteiros separados por espaço, n  e  k.)
1 3 2 6 1 2 (cada um representando um valor de arr[i])

Exemplo de Saída:
5

Explicação:

Aqui estão os pares válidos quando :

(1, 2) -> ar[0] + ar[2] = 1 + 2 = 3
(2, 1) -> ar[0] + ar[5] = 1 + 2 = 3
(3, 6) -> ar[1] + ar[3] = 3 + 6 = 3
(6, 3) -> ar[2] + ar[4] = 2 + 1 = 3
(1, 2) -> ar[4] + ar[5] = 1 + 2 = 3

https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
*/

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  return ar.reduce((count, value, index, array) => {
    const remainingElements = array.slice(index + 1);

    remainingElements.forEach((element) => {
      const sum = value + element;
      if (sum % k === 0) {
        count += 1;
      }
    });

    return count;
  }, 0);
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
