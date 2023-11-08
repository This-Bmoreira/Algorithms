/*
Um problema de programação: O problema consiste em calcular
a diferença absoluta entre as somas das diagonais de uma matriz quadrada.
O problema fornece a definição de uma função que recebe como parâmetro
o número de linhas e colunas da matriz e a própria matriz.
Um exemplo de entrada e saída: O problema mostra um exemplo de como
a função deve retornar o resultado. No exemplo,
a matriz tem 3 linhas e 3 colunas,
e a diferença absoluta entre as somas das diagonais é 15.
Uma descrição do problema: O problema explica o que são as
diagonais de uma matriz, como calcular as suas somas e
como obter a diferença absoluta entre elas.
O problema também especifica as restrições e os formatos de entrada e saída.
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
