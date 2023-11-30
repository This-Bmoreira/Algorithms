/* eslint-disable no-param-reassign */
/*
Dado um array de avistamentos de pássaros,
onde cada elemento representa um identificador de tipo de pássaro,
determine o identificador do tipo mais frequentemente avistado.
Se mais de um tipo foi avistado a quantidade máxima de vezes,
retorne o menor entre os identificadores.

Exemplo:

arr = [1, 1, 2, 2, 3]

Há dois avistamentos de cada tipo 1 e 2 , e um avistamento do tipo 3.
Escolha o menor dos dois tipos vistos duas vezes: tipo 1.

Descrição da Função:

Complete a função migratoryBirds no editor abaixo.

migratoryBirds tem o(s) seguinte(s) parâmetro(s):
int arr[n]: os tipos de pássaros avistados.

Retorna:
int: o identificador do tipo mais frequente entre os pássaros avistados.

Formato da Entrada:
A primeira linha contém um inteiro,n , o tamanho de arr.
A segunda linha descreve como arr e n inteiros separados por espaço,
cada um representando um número de tipo de pássaro avistado.

Restrições:

5 <= n < 2 x 10⁵

É garantido que cada tipo é 1,2,3, 4, ou 5

Exemplo de Entrada 0:

6 (A primeira linha contém um inteiro,n , o tamanho de arr.)
1 4 4 4 5 3 (A segunda linha descreve como arr e n inteiros separados por espaço,
cada um representando um número de tipo de pássaro avistado.)

Exemplo de Saída 0:
4
Explicação 0:

Os diferentes tipos de pássaros ocorrem nas seguintes frequências:

Tipo 1:1 pássaro
Tipo 2:0 pássaros
Tipo 3:1 pássaro
Tipo 4:3 pássaros
Tipo 5:1 pássaro

O número do tipo que ocorre com maior frequência é o tipo 4 , então imprimimos 4
como nossa resposta.

Exemplo de Entrada 1:

11
1 2 3 4 5 4 3 2 1 3 4

Exemplo de Saída 1:

3

Explicação 1:

Os diferentes tipos de pássaros ocorrem nas seguintes frequências:
Tipo 1:2
Tipo 2:2
Tipo 3:3
Tipo 4:3
Tipo 5:1

Dois tipos têm uma frequência de 3, e o menor entre eles é o tipo 3.
https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
*/

function contarFrequencia(arr) {
  return arr.reduce((counter, currentValue) => {
    counter[currentValue] = (counter[currentValue] || 0) + 1;
    return counter;
  }, {});
}

function encontrarTipoMaisFrequenteComMenorID(contagem) {
  let tipoMaisFrequenteComMenorID = null;
  let maiorFrequencia = 0;

  Object.keys(contagem).forEach((tipo) => {
    const frequencia = contagem[tipo];
    if (frequencia > maiorFrequencia
      || (frequencia === maiorFrequencia && tipo < tipoMaisFrequenteComMenorID)) {
      tipoMaisFrequenteComMenorID = tipo;
      maiorFrequencia = frequencia;
    }
  });
  return tipoMaisFrequenteComMenorID;
}

function migratoryBirds(arr) {
  const frequencia = contarFrequencia(arr);
  const tipoMaisFrequente = encontrarTipoMaisFrequenteComMenorID(frequencia);
  return parseInt(tipoMaisFrequente, 10);
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
