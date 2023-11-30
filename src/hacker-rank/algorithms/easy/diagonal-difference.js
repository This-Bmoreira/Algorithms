/*
Dado uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais.

Por exemplo, a matriz quadrada arr é mostrada abaixo:

1 2 3
4 5 6
9 8 9

A diagonal da esquerda para a direita é 1 + 5 + 9 = 15.
A diagonal da direita para a esquerda é 3 + 5 + 9 = 17.
A diferença absoluta entre elas é |15 - 17| = 2.

A função que completa essa tarefa pode ser chamada de diagonalDifference
e recebe uma matriz de inteiros como parâmetro.
Ela retorna a diferença absoluta entre as somas das diagonais.

A entrada é formatada da seguinte maneira:

A primeira linha contém um único número inteiro, n,
o número de linhas e colunas na matriz quadrada arr.
Cada uma das próximas linhas descreve uma linha, arr[i],
e consiste em n inteiros separados por espaços.

Restrições:

-100 <= arr[i][j] <= 100

A saída é formatada como um único número inteiro,
representando a diferença absoluta entre as somas das diagonais.

Exemplo de Entrada:

3 ( contém um único número inteiro, n,
o número de linhas e colunas na matriz quadrada arr.)
11 2 4
4 5 6
10 8 -12

Exemplo de Saída:

15

Explicação:

A diagonal primária é:

11
   5
     -12

Soma ao longo da diagonal primária: 11 + 5 - 12 = 4

A diagonal secundária é:

     4
   5
10

Soma ao longo da diagonal secundária: 4 + 5 + 10 = 19

Diferença: |4 - 19| = 15

Nota: |x| é o valor absoluto de x.
https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
*/

function diagonalDifference(arr) {
  let leftToRightDiagonal = 0;
  let rightToLeftDiagonal = 0;

  arr.forEach((row, rowIndex) => {
    row.forEach((element, colIndex, array) => {
      if (rowIndex === colIndex) {
        leftToRightDiagonal += element;
      }
      if (rowIndex + colIndex === array.length - 1) {
        rightToLeftDiagonal += element;
      }
    });
  });
  return Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
