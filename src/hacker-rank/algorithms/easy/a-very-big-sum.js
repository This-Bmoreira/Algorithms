/*
Neste desafio, você precisa calcular e imprimir a soma dos elementos de um array,
lembrando que alguns desses inteiros podem ser bastante grandes.

Descrição da Função
Ela deve retornar a soma de todos os elementos do array.
aVeryBigSum tem o seguinte parâmetro(s):
int ar[n]: um array de inteiros.

Retorno
long: a soma de todos os elementos do array.

Formato de Entrada
A primeira linha da entrada consiste em um inteiro n.
A próxima linha contém n inteiros separados por espaço contidos no array.

Formato de Saída
Retorne a soma dos elementos do array como um único inteiro.

Restrições
1 <= n <= 10
0 <= ar[i] <= 10^10

Exemplo de Entrada
5  (consiste em um inteiro n)
1000000001 1000000002 1000000003 1000000004 1000000005 (n inteiros
  separados por espaço contidos no array
)

Saída:

5000000015

Nota: O alcance do inteiro de 32 bits é (-2^31) para (2^31 -1).
Quando adicionamos vários valores inteiros, a soma resultante pode exceder
o alcance acima. Você pode precisar usar long int C/C++/Java para armazenar tais somas.

https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
*/

function sum(total, value) {
  return total + value;
}

function aVeryBigSum(ar) {
  return ar.reduce(sum);
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
