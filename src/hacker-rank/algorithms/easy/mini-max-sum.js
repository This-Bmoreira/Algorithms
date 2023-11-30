/*
Dado cinco números inteiros positivos,
encontre os valores mínimo e máximo que podem ser calculados
somando exatamente quatro dos cinco inteiros. Em seguida,
imprima os valores mínimo e máximo respectivos em uma única linha,
como dois inteiros longos separados por espaço.

Exemplo:
arr = [1, 3, 4, 7, 9]
A soma mínima é 1 + 3 + 5 + 7 = 16  e a soma máxima é 3 + 5 + 7 + 9 = 24.
A função imprime

16 24.

Descrição da Função:

miniMaxSum tem o(s) seguinte(s) parâmetro(s):
arr: um array de cinco inteiros.

Imprimir

Imprima dois inteiros separados por espaço em uma linha: a soma mínima e a soma máxima de 4
de 5 elementos.

Imput:
Uma única linha com cinco inteiros separados por espaço.

Restrições:
1 <= arr[i] <= 10⁹

Saída:
Imprima dois inteiros longos separados por espaço,
representando os valores mínimo e máximo que podem ser calculados
somando exatamente quatro dos cinco inteiros.

Exemplo de Entrada:
1 2 3 4 5

Exemplo de Saída:
10 14

Explicação:
Os números são 1, 2, 3, 4 e 5. Calcule as seguintes somas usando quatro dos cinco inteiros:

  Soma de tudo, exceto 1; a soma é 2 + 3 + 4 + 5 = 14.
  Soma de tudo, exceto 2; a soma é 1 + 3 + 4 + 5 = 13.
  Soma de tudo, exceto 3; a soma é 1 + 2 + 4 + 5 = 12.
  Soma de tudo, exceto 4; a soma é 1 + 2 + 3 + 5 = 11.
  Soma de tudo, exceto 5; a soma é 1 + 2 + 3 + 4 = 10.

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
