/*
Duas crianças, Lily e Ron,
querem compartilhar uma barra de chocolate.
Cada quadrado tem um número inteiro.

Lily decide compartilhar um segmento contíguo
da barra selecionado de forma que:

O comprimento do segmento corresponda ao
mês de nascimento de Ron, e, A soma dos números nos quadrados
seja igual ao dia do nascimento dele.

Determine de quantas maneiras
ela pode dividir o chocolate.

Exemplo

s=[2,2,1,3,2]
d=4
m=2

Lily quer encontrar segmentos que somam ao dia do nascimento
de Ron d=4, com um comprimento igual ao mês de nascimento dele m=2.
Neste caso, existem dois segmentos que atendem aos critérios dela: [2,2] e [1,3].

Descrição da Função

A função de aniversário tem os seguintes parâmetros:

int s[n]: os números em cada um dos quadrados de chocolate
int d: o dia do aniversário de Ron
int m: o mês do aniversário de Ron

Retorna
int: o número de maneiras que a barra pode ser dividida

Formato de Entrada

A primeira linha contém um número inteiro n,
o número de quadrados na barra de chocolate.
A segunda linha contém 'n' números inteiros separados por espaço s[i],
os números nos quadrados de chocolate onde 0<= i <n .
A terceira linha contém dois números inteiros separados
por espaço d, e m, o dia do aniversário de Ron e o mês do aniversário dele.

Restrições
1 <= n <= 100
1 < s[i] <= 5, where (0 <= i < n)
i <= d <= 31
1 <= m <= 12

Entrada de Amostra
5 (o número de quadrados na barra de chocolate.)
1 2 1 3 2 (os números nos quadrados de chocolate)
3 2 ( d, e m, o dia do aniversário de Ron e o mês do aniversário dele.)

Saída de Amostra
2

exemplo

Lily quer dar a Ron quadrados que somam a m=2.
Os seguintes dois segmentos d=3 atendem aos critérios:

Entrada de Amostra 1
6
1 1 1 1 1 1
3 2

Saída de Amostra 1
0

Explicação 1 Lily só quer dar a Ron m=2 quadrados consecutivos de
chocolate cujos números somam a d=3 . Não há possíveis pedaços
que satisfaçam essas restrições:

Assim, imprimimos como nossa resposta 0.

https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
*/

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  return s.reduce((count, value, index) => {
    if (index + m <= s.length) {
      const segment = s.slice(index, index + m);
      const sum = segment.reduce((acc, curr) => acc + curr, 0);
      /*
      Em JavaScript, true é considerado como 1
      em expressões matemáticas, e false é considerado
      como 0. Portanto, a expressão count + (sum === d)
      incrementa count se a soma é igual a d (retornando 1)
      e não faz nada
      se não for (retornando 0).
      */
      return count + (sum === d);
    }
    return count;
  }, 0);
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
