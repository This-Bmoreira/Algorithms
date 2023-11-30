/*
Você está coreografando um show de circo com vários animais.
Para um ato, você recebe dois cangurus em uma linha numérica
prontos para pular na direção positiva (ou seja, em direção ao infinito positivo).

O primeiro canguru começa na localização x1 e se move a uma taxa v1 de metros por pulo.

O segundo canguru começa na localização x1 e se move a uma taxa v2 de metros por pulo.

Você tem que descobrir uma maneira de fazer com que ambos os cangurus estejam
no mesmo local ao mesmo tempo como parte do show.
Se for possível, retorne YES, caso contrário, retorne NO.

Exemplo
X1 = 2
V1 = 1
X2 = 1
V2 = 2

Após um pulo, eles estão ambos em X = 3,(X1 + V1 = 2 + 1, X2 + V2 = 1 + 2)  então a resposta é SIM.

Descrição da Função
A função canguru tem os seguintes parâmetros:
int x1, int v1: posição inicial e distância do pulo para o canguru 1
int x2, int v2: posição inicial e distância do pulo para o canguru 2

Retorna string:
YES ou NO

Formato de Entrada
Uma única linha
com quatro inteiros separados por espaço
denotando os respectivos valores de  X1 ,V1 ,X2 , e V2.

Restrições
0 <= X1 < X2 <= 1000
1 <= V1 <= 1000
1 <= V2 <= 1000

Entrada de Amostra 0

0 3 4 2

Saída de Amostra 0

YES

Explicação 0
Os dois cangurus pulam através da seguinte sequência de localizações:
A partir da imagem, fica claro que os cangurus se encontram no mesmo local
(número 14 na linha numérica) após o mesmo número de pulos (4 pulos), e imprimimos YES.

Entrada de Amostra 1
0 2 5 3

Saída de Amostra 1
NO

Explicação 1
O segundo canguru tem uma localização inicial que está à frente (mais à direita)
da localização inicial do primeiro canguru (ou seja, X2 > X1 ).
Como o segundo canguru se move a uma taxa mais rápida (significando V2 > V1 )
e já está à frente do primeiro canguru, o primeiro canguru nunca será capaz de alcançá-lo.
Assim, imprimimos NO.

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
