/*
Desafio: Proporções de Números

Dado um array de inteiros, precisamos calcular as proporções de elementos positivos,
negativos e zeros. As proporções devem ser impressas com 6 casas decimais.

Por exemplo, se o array for [1, 1, 0, -1, -1], há 5 elementos:
dois positivos, dois negativos e um zero.
As proporções são 2/5 = 0.400000, 2/5 = 0.400000 e 1/5 = 0.200000, respectivamente.

A função plusMinus deve ser completada.
Ela recebe um array de inteiros como parâmetro e
imprime as proporções de valores positivos, negativos e zeros no array.

Formato de Entrada:

A primeira linha contém um inteiro, n, o tamanho do array.
A segunda linha contém n inteiros separados por espaço que descrevem o array.

Restrições:

0 < n <= 100
-100 < arr[i] <= 100

Saída:
Imprima as seguintes 3 linhas, cada uma com 6 casas decimais:

Proporção de valores positivos.
Proporção de valores negativos.
Proporção de zeros.

Exemplo:

Entrada:
6 (tamanho do array)
-4 3 -9 0 4 1 (inteiros separados por espaço que descrevem o array)

Saída:
0.500000
0.333333
0.166667

Explicação:
Existem 3 números positivos, 2 números negativos e 1 zero no array. As proporções são:

Positivos: 0.500000
Negativos: 0.333333
Zeros: 0.166667

https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
*/

function plusMinus(arr) {
  let totalNegatives = 0;
  let totalPositives = 0;
  let totalZero = 0;
  arr.forEach((element) => {
    if (element < 0) {
      totalNegatives += 1;
    } else if (element > 0) {
      totalPositives += 1;
    } else {
      totalZero += 1;
    }
  });
  console.log((totalPositives / arr.length).toFixed(6));
  console.log((totalNegatives / arr.length).toFixed(6));
  console.log((totalZero / arr.length).toFixed(6));
}

plusMinus([0, 0, -1, 1, 1]);
