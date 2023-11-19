/* eslint-disable no-param-reassign */
/*
Problema: Dado um array de inteiros e um inteiro positivo
, determinar o número de pares onde e + é divisível por .
Solução: Completar a função divisibleSumPairs no editor abaixo.
Entrada: A primeira linha contém dois inteiros separados por espaço,
e . A segunda linha contém inteiros separados por espaço, cada um um valor de .
Saída: Contar o número de pares em um array que têm somas que são divisíveis por um dado número.
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

// function divisibleSumPairs(n, k, ar) {
//   return ar.reduce((count, value, index, array) => {
//     for (let i = index + 1; i < n; i += 1) {
//       const sum = value + array[i];
//       console.log(sum)
//       if (sum % k === 0) {
//         count += 1;
//       }
//     }
//     return count;
//   }, 0);
// }

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
