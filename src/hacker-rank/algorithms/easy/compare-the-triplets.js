/*
Desafio de programação: A página apresenta um problema de programação
que envolve comparar dois conjuntos de três números, chamados de tripletos,
e atribuir pontos baseados em qual é maior em cada posição.
Entrada e saída: A página explica como a entrada e a saída do problema devem ser formatadas.
A entrada consiste em dois tripletos, um para Alice e outro para Bob, separados por uma linha.
A saída consiste em um par de números, representando os pontos de Alice e Bob, respectivamente.
https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
*/

function compareTriplets(a, b) {
  const alice = a;
  const bob = b;

  function determineIndividualScores(value, index) {
    let alicePoints = 0;
    let bobPoints = 0;

    if (value !== bob[index]) {
      if (value > bob[index]) {
        alicePoints += 1;
      } else {
        bobPoints += 1;
      }
    }
    return [alicePoints, bobPoints];
  }

  const results = alice.map(determineIndividualScores);

  let aliceTotalPoints = 0;
  let bobTotalPoints = 0;

  results.forEach((element) => {
    aliceTotalPoints += element[0];
    bobTotalPoints += element[1];
  });

  return [aliceTotalPoints, bobTotalPoints];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
