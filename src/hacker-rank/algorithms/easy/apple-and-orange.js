/* eslint-disable consistent-return */
/*
Um problema de matemática: O documento apresenta um problema de
matemática envolvendo duas árvores frutíferas, uma casa e
as distâncias que as frutas caem das árvores. O objetivo é determinar
quantas maçãs e laranjas caem na casa de Sam, usando as informações dadas.
Uma função para resolver o problema: O documento fornece o esboço de uma
função chamada countApplesAndOranges que deve imprimir o número de maçãs e
laranjas que caem na casa de Sam, cada um em uma linha separada. A função
recebe como parâmetros as posições das árvores, da casa e das frutas, e usa
a fórmula s + d para calcular onde cada fruta cai, onde s é a
posição da árvore e d é a distância que a fruta cai da árvore.
Um exemplo de entrada e saída: O documento mostra um exemplo de como a função
deve funcionar, usando valores numéricos para as posições das árvores, da casa e
das frutas. O exemplo mostra que apenas uma maçã e uma laranja caem na
casa de Sam, e imprime 1 e 1 como resultado.
*/

/*
* Complete the 'countApplesAndOranges' function below.
*
* The function accepts following parameters:
*  1. INTEGER s
*  2. INTEGER t
*  3. INTEGER a
*  4. INTEGER b
*  5. INTEGER_ARRAY apples
*  6. INTEGER_ARRAY oranges
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesInHouse = apples.filter((distance) => {
    if (distance > 0 && distance + a >= s && distance + a <= t) {
      return distance;
    }
  });

  const orangesInHouse = oranges.filter((distance) => {
    if (distance < 0 && distance + b >= s && distance + b <= t) {
      return distance;
    }
  });

  console.log(applesInHouse.length);
  console.log(orangesInHouse.length);
}
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
