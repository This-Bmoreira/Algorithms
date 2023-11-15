/*
Problema de cangurus: Você está
coreografando um show de circo com vários animais e precisa
fazer dois cangurus saltarem na mesma posição ao mesmo tempo.
Os cangurus estão em uma reta numérica e saltam em direção positiva com velocidades diferentes.
Função canguru: Você tem que completar a função canguru no editor
abaixo, que recebe quatro números inteiros: as posições iniciais e as
velocidades dos dois cangurus. A função deve retornar SIM se os cangurus
podem se encontrar após o mesmo número de saltos, ou NÃO caso contrário.
Exemplos de entrada e saída: A página mostra três exemplos de entrada e
saída da função canguru, com explicações e imagens ilustrativas. No primeiro exemplo,
os cangurus se encontram após quatro saltos. No segundo exemplo,
os cangurus nunca se encontram porque o segundo é mais rápido e já está à frente
do primeiro. No terceiro exemplo, os cangurus também nunca se encontram porque
têm a mesma velocidade mas começam em posições diferentes.
https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
*/

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    // Se os cangurus têm a mesma velocidade, eles nunca vão se encontrar.
    return 'NO';
  }

  /*
  A expressão dentro do if verifica se a diferença
  entre as posições iniciais dos cangurus (x2 - x1)
  é um múltiplo da diferença entre suas velocidades (v1 - v2).
  Se essa condição for verdadeira, isso significa que os cangurus
  vão se encontrar após o mesmo número de saltos.

  Além disso, a parte && (x2 - x1) / (v1 - v2) >= 0 verifica se a divisão
  da diferença das posições pela diferença das velocidades é não negativa.
  Isso é feito para garantir que os cangurus estão se movendo na direção certa,
  ou seja, se estão se aproximando ao longo do tempo. Se essa condição também
  for atendida, a função retorna 'YES', indicando que os cangurus se encontram.
*/
  if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
    return 'YES';
  }

  // Se as condições não forem atendidas, os cangurus nunca se encontrarão
  return 'NO';
}

console.log(kangaroo(2, 0, 2, 0));
