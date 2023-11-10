/*
Esta página é um problema de programação que pede para encontrar
os valores mínimo e máximo que podem ser calculados somando exatamente
quatro dos cinco inteiros dados.
Em seguida, imprime os valores mínimo e máximo como uma única linha
de dois inteiros longos separados por espaço.

Aqui estão alguns pontos principais da página:

Entrada: Uma linha de cinco inteiros positivos separados por espaço.
Saída: Dois inteiros longos separados por espaço, representando o valor
mínimo e máximo que podem ser obtidos somando quatro dos cinco inteiros.
Exemplo: Se os números são 1, 2, 3, 4 e 5,
as possíveis somas são 10, 11, 12, 13 e 14. A saída seria 10 14.
Dica: Cuidado com o estouro de inteiro! Use inteiro de 64 bits.

https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
*/

function miniMaxSum(arr) {
  function sum(total, value) {
    return total + value;
  }

  const sumResult = arr.reduce(sum);
  const orderArray = arr.sort((a, b) => a - b);

  const minSum = sumResult - orderArray[arr.length - 1];
  const maxSum = sumResult - orderArray[0];
  console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
