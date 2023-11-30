/*
Alice e Bob criaram cada um um problema para o HackerRank.
Um revisor avalia os dois desafios, atribuindo pontos em uma escala de 1 a 100 para três
categorias: clareza do problema, originalidade e dificuldade.

A avaliação para o desafio de Alice é a tripla a = (a[0], a[1], a[2]),
e a avaliação para o desafio de Bob é a tripla b = (b[0], b[1], b[2]).

A tarefa é encontrar os pontos de comparação deles,
comparando a[0] com b[0], a[1] com b[1] e a[2] com b[2].

Se a[i] > b[i], então Alice recebe 1 ponto.
Se a[i] < b[i], então Bob recebe 1 ponto.
Se a[i] = b[i], então nenhuma pessoa recebe ponto.

Os pontos de comparação são o total de pontos que uma pessoa ganhou.

Dado a e b, determine seus pontos de comparação respectivos.

Exemplo

a = [1, 2, 3]
b = [3, 2, 1]

Para o elemento 0, Bob recebe um ponto porque a[0] < b[0].
Para os elementos iguais a[1] e b[1], ninguém ganha ponto.
Finalmente, para o elemento 2, a[2] > b[2], então Alice recebe um ponto.

O array de retorno é [1, 1], com a pontuação de Alice primeiro e a de Bob segundo.

Descrição da Função

compareTriplets tem o(s) seguinte(s) parâmetro(s):

int a[3]: Avaliação do desafio de Alice
int b[3]: Avaliação do desafio de Bob

Retorno

int[2]: A pontuação de Alice está na primeira posição, e a pontuação de Bob está na segunda.

Formato de Entrada

A primeira linha contém 3 inteiros separados por espaço,
a[0], a[1] e a[2], os valores respectivos na tripla a.
A segunda linha contém 3 inteiros separados por espaço, b[0], b[1] e b[2],
os valores respectivos na tripla b.

Restrições

1 ≤ a[i] ≤ 100
1 ≤ b[i] ≤ 100

Exemplo de Entrada 0

5 6 7
3 6 10

Exemplo de Saída 0

1 1

Explicação 0

Neste exemplo:
a = (a[0], a[1], a[2]) = (5, 6, 7)
a = (b[0], b[1], b[2]) = (3, 6, 10)
Agora, vamos comparar cada pontuação individual:

a[0] > b[0]    Para o elemento 0, Alice recebe 1 ponto.
a[1] = b[1]    Para os elementos iguais a[1] e b[1], ninguém recebe ponto.
a[2] < b[2]    Para o elemento 2, a[2] < b[2], então Bob recebe 1 ponto.

A pontuação de comparação de Alice é 1, e a pontuação de comparação de
Bob é 1. Assim, retornamos o array [1, 1].

Exemplo de Entrada 1

17 28 30
99 16 8

Exemplo de Saída 1

2 1

Explicação 1

Comparando os elementos:

Para o elemento 0, a[0] < b[0], então Bob recebe 1 ponto.
Para os elementos 1 e 2, a[1] > b[1] e a[2] > b[2], então Alice recebe 2 pontos.

O array de retorno é [2, 1].
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
