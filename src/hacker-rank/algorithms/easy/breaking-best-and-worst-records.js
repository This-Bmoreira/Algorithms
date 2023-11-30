/*
Maria joga basquete universitário e quer se tornar profissional.
A cada temporada, ela mantém um registro de sua performance.
Ela tabula o número de vezes que quebra seu recorde de
mais pontos e menos pontos em um jogo.
Os pontos marcados no primeiro jogo estabelecem seu recorde para a
temporada, e ela começa a contar a partir daí.

Exemplo
scores = [12, 24, 10, 24]
As pontuações estão na mesma ordem dos jogos disputados.
Ela tabula seus resultados da seguinte forma:

Contagem
Jogo  Pontuação  Mínimo  Máximo   Mín Máx
0      12        12       12       0   0
1      24        12       24       0   1
2      10        10       24       1   1
3      24        10       24       1   1

Dadas as pontuações de uma temporada,
determine o número de vezes que Maria quebra seus recordes
de mais e menos pontos marcados durante a temporada.

Descrição da Função

breakingRecords tem o(s) seguinte(s) parâmetro(s):

int scores[n]: pontos marcados por jogo

Retorna

int[2]: Um array com os números de vezes que ela quebrou seus recordes. O índice 0
é para quebrar recordes de mais pontos, e o índice 1 é para quebrar recordes de menos pontos.

Formato de Entrada

A primeira linha contém um número inteiro n, o número de jogos.
A segunda linha contém inteiros separados por espaço descrevendo os valores respectivos de
score0, score1, .....

Restrições

1 <= n <= 1000
0 <= scores[i] <= 10⁸

Exemplo de Entrada 0

9 ( o número de jogos.)
10 5 20 20 4 5 2 25 1 (descrevendo os valores respectivos de score0, score1)

Exemplo de Saída 0

2 4

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
