/*
Esta página é um desafio de programação
que pede para escrever uma função que calcule as proporções de valores positivos,
negativos e zero em um array de inteiros. O resumo da página é:
Objetivo: Escrever uma função chamada plusMinus que receba um array de inteiros
como parâmetro e imprima na tela as frações de valores positivos, negativos e zero no array,
com seis casas decimais após a vírgula. Entrada: A primeira linha contém um inteiro n,
que representa o tamanho do array. A segunda linha contém n inteiros separados por espaços,
que são os elementos do array.
Saída: Imprimir três linhas, cada uma com um valor decimal representando
a proporção de valores positivos, negativos e zero no array,
respectivamente. Não retornar nenhum valor.
Exemplo: Se a entrada for 6 [-4, 3, -9, 0, 4, 1], a saída deve ser 0.500000 0.333333 0.166667.
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
