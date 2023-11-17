/*
Desafio de programação: O documento apresenta um problema de
programação que envolve calcular o número de vezes que Maria
quebra seus recordes de maior e menor pontuação em uma temporada
de basquete universitário.
Dados de entrada: O documento especifica os dados de entrada esperados
para a função breakingRecords, que são um inteiro n representando o número
de jogos e um array de inteiros scores representando as pontuações de Maria em cada jogo.
Dados de saída: O documento especifica os dados de saída esperados para a
função breakingRecords, que são um array de inteiros result contendo o número
de vezes que Maria quebrou seu recorde de maior pontuação no índice 0 e o número
de vezes que ela quebrou seu recorde de menor pontuação no índice 1.
Exemplos: O documento fornece dois exemplos de entrada e saída, com
diagramas ilustrando como os recordes de Maria mudaram ao longo da temporada.
O documento também explica a lógica por trás dos resultados.
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
*/

// output [numero de vezes que quebrou o recorde, numero de vezes recorde de menor pontuação]

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let maxRecord = 0;
  let minRecord = 0;
  let maxValue = scores[0];
  let minValue = scores[0];

  function updateMaxRecord(value) {
    if (value > maxValue) {
      maxRecord += 1;
      maxValue = value;
    }
  }

  function updateMinRecord(value) {
    if (value < minValue) {
      minRecord += 1;
      minValue = value;
    }
  }

  scores.forEach((score) => {
    updateMaxRecord(score);
    updateMinRecord(score);
  });

  return [maxRecord, minRecord];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
