/*
Problema de divisão de chocolate: Duas crianças, Lily e Ron,
querem dividir uma barra de chocolate. Cada quadrado tem um número inteiro.
Lily decide compartilhar um segmento contíguo da barra selecionado de forma que a
soma dos números nos quadrados seja igual ao dia do seu aniversário. Ron quer um segmento
com comprimento igual ao mês do seu aniversário. O documento pergunta quantas formas Lily pode
dividir o chocolate.
Função de aniversário: O documento apresenta uma função em pseudocódigo que
recebe um array de números, o comprimento do segmento e a soma desejada, e retorna o
número de subarrays de comprimento k que têm soma s. A função usa um loop para percorrer
o array e verificar se cada segmento satisfaz as condições.
Exemplos: O documento fornece três exemplos de entrada e saída
da função de aniversário, ilustrando diferentes casos possíveis.
O primeiro exemplo mostra dois segmentos que atendem aos critérios de Lily
e Ron. O segundo exemplo mostra que não há segmentos possíveis. O terceiro exemplo
mostra que há apenas um segmento possível.
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
