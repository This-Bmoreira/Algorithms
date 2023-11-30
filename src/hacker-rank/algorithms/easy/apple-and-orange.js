/* eslint-disable consistent-return */
/*
A casa de Sam tem uma macieira e uma laranjeira que produzem uma abundância de frutas.
Usando as informações fornecidas abaixo,
determine o número de maçãs e laranjas que caem na casa de Sam.

No diagrama abaixo:

A região vermelha denota a casa, onde s é o ponto inicial, e t é o ponto final.
A macieira está à esquerda da casa, e a laranjeira está à direita.
Assuma que as árvores estão localizadas em um único ponto , onde a macieira está no ponto a
e a laranjeira está no ponto b.
Quando uma fruta cai da sua árvore, ela aterra d unidades de distância da sua árvore de origem ao longo do eixo x -axis. *Um valor negativo de d significa que a fruta caiu d unidades à esquerda da árvore, e um valor positivo de significa que ela cai d unidades à direita da árvore. *

Dado o valor  de d para m maçãs e laranjas, determine quantas maçãs e laranjas cairão na casa de Sam (ou seja, na faixa inclusiva
[s,t]
)?

Por exemplo, a casa de Sam está entre s = 7 e t = 10.
A macieira está localizada em a = 4 e a laranjeira em b = 12.
Há m = 3 maçãs e n = 3 laranjas.
As maçãs são lançadas a distâncias apples = [2,3, —4] unidades de a,
e as laranjas a distâncias oranges = [3, —2, —4] unidades.
Adicionando cada distância de maçã à posição da árvore,
elas aterram em [4+2,4+3,4+ —4] = [6,7,0]. As laranjas aterram em
[12 + 3,12 + —2,12 + —4] = [15, 10, 8].
Uma maçã e duas laranjas aterrissam na faixa inclusiva de 7 a 10, então imprimimos:

então imprimimos

1
2

Descrição da Função

Ela deve imprimir o número de maçãs e laranjas que caem na casa de Sam,
cada uma em uma linha separada.

countApplesAndOranges tem os seguintes parâmetros:

makefile

s: inteiro, ponto inicial da localização da casa de Sam.
t: inteiro, localização final da casa de Sam.
a: inteiro, localização da árvore de maçã.
b: inteiro, localização da árvore de laranja.
maçãs: array de inteiros, distâncias em que cada maçã cai da árvore.
laranjas: array de inteiros, distâncias em que cada laranja cai da árvore.

Formato de Entrada

A primeira linha contém dois inteiros separados por espaço
que denotam os respectivos valores de s e t.
A segunda linha contém dois inteiros separados por
espaço que denotam os valores respectivos de a e b.
A terceira linha contém dois inteiros separados por espaço
que denotam os valores respectivos de m e n .
A quarta linha contém m inteiros separados por espaço que denotam
as distâncias respectivas que cada maçã cai do ponto a .
A quinta linha contém n inteiros separados por espaço que denotam as distâncias
respectivas que cada laranja cai do ponto b.

.

Restrições

1 <= s, t, a b, m , n <= 10⁵
-10⁵ <= d <= 10⁵
a <= s < t < b

Formato de Saída

Imprima dois inteiros em duas linhas diferentes:

O primeiro inteiro: o número de maçãs que caem na casa de Sam.
O segundo inteiro: o número de laranjas que caem na casa de Sam.

Entrada de Exemplo 0

7 11 (que denotam os respectivos valores de s e t.)
5 15 (denotam os valores respectivos de a e b.)
3 2 (denotam os valores respectivos de m e n )
-2 2 1 (denotam
as distâncias respectivas que cada maçã cai do ponto a .)
5 -6 (denotam as distâncias
respectivas que cada laranja cai do ponto b.)

Saída de Exemplo 0

1
1

Explicação 0

a casa de Sam está entre s = 7 e t = 10.
A macieira está localizada em a = 4 e a laranjeira em b = 12.
Há m = 3 maçãs e n = 3 laranjas. As maçãs são lançadas a distâncias apples = [2,3, —4]
unidades de a, e as laranjas a distâncias oranges = [3, —2, —4] unidades.
Adicionando cada distância de maçã à posição da árvore,
elas aterram em [4+2,4+3,4+ —4] = [6,7,0].
As laranjas aterram em [12 + 3,12 + —2,12 + —4] = [15, 10, 8].
Uma maçã e duas laranjas aterrissam na faixa inclusiva de 7 a 10,
então imprimimos:

https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
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
