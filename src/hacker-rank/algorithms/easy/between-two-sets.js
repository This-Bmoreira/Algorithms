/*
Problema de programação: O documento apresenta um problema de programação
que envolve encontrar números inteiros que satisfaçam certos critérios
relativos a dois conjuntos de números. O problema é definir uma
função chamada getTotalX que retorne o número de inteiros que estão entre os conjuntos.
Condições do problema: As condições do problema são as seguintes:
Os elementos do primeiro conjunto são todos fatores do inteiro sendo considerado
O inteiro sendo considerado é um fator de todos os elementos do segundo conjunto
Exemplo do problema: O documento fornece um exemplo do problema com
dois conjuntos de números: [2, 4] e [16, 32, 96]. O documento explica
que os números entre os conjuntos são 4, 8 e 16, pois eles satisfazem
as condições do problema. O documento também mostra que a função getTotalX
deve retornar 3, que é o número de inteiros entre os conjuntos.
*/

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Encontrar o máximo do primeiro array e o mínimo do segundo array
  const maxA = Math.max(...a);
  const minB = Math.min(...b);

  // Criar um array com números entre o máximo de a e o mínimo de b
  const numsBetween = Array.from({ length: minB - maxA + 1 }, (_, i) => maxA + i);

  // Filtrar os números que são fatores de a e múltiplos de b
  const result = numsBetween.filter(
    (num) => a.every((factor) => num % factor === 0)
    && b.every((multiple) => multiple % num === 0),
  );

  return result.length;
}

console.log(getTotalX([2, 4], [24, 36]));
