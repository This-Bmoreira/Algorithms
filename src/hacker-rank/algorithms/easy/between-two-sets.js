/*
Problema: Números Entre Conjuntos

Haverá dois conjuntos de inteiros.
Determine todos os inteiros que satisfazem as seguintes duas condições:

Os elementos do primeiro conjunto são todos fatores do inteiro considerado.
O inteiro considerado é um fator de todos os elementos do segundo conjunto.

Esses números são referidos como estando entre os dois conjuntos.
Determine quantos números assim existem.

Exemplo:
a = [2, 6]
b = [24, 36]

Há dois números entre os conjuntos: 6 e 12.
Para o primeiro valor:

6 % 2 = 0,
6 % 6 = 0,
24 % 6 = 0,
36 % 6 = 0.

Para o segundo valor:

12 % 2 = 0,
12 % 6 = 0,
24 % 12 = 0,
36 % 12 = 0.

Retorne 2.

Descrição da Função:

python

def getTotalX(a, b):
# Implementação da lógica para contar os números entre os conjuntos
pass

getTotalX tem o(s) seguinte(s) parâmetro(s):

int a[n]: um conjunto de inteiros
int b[m]: um conjunto de inteiros

Retorna:

int: o número de inteiros que estão entre os conjuntos

Formato de Entrada:

A primeira linha contém dois inteiros separados por espaço, n e m,
o número de elementos nos conjuntos a e b.
A segunda linha contém n inteiros distintos separados por espaço, a[i] onde 0 <= i < n.
A terceira linha contém m inteiros distintos separados por espaço, b[j] onde 0 <= j < m.

Restrições:

1 <= n, m <= 10
1 <= a[i] <= 100
1 <= b[j] <= 100

Exemplo de Entrada:
2 3
2 4
16 32 96

Exemplo de Saída:
3
Explicação:

2 e 4 dividem uniformemente em 4, 8, 12 e 16.
4, 8 e 16 dividem uniformemente em 16, 32, 96.
4, 8 e 16 são os únicos três números para os quais cada elemento de a é
um fator e cada um é um fator de todos os elementos de b.

https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true
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
