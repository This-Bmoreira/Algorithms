/*
Detalhes da Escada

Esta é uma escada de tamanho N=4:
   #
  ##
 ###
####
Sua base e altura são ambas iguais a n.
Ela é desenhada usando símbolos # e espaços.
A última linha não é precedida por nenhum espaço.
Escreva um programa que imprima uma escada de tamanho n.

Descrição da Função

A função escada tem o seguinte parâmetro(s):
int n: um inteiro

Imprimir
Imprima uma escada conforme descrito acima.

Formato de Entrada
Um único inteiro, n, denotando o tamanho da escada.

Restrições
0 < n ≤ 100.

Formato de Saída

Imprima uma escada de tamanho n usando símbolos # e espaços.

Nota: A última linha deve ter 0 espaços à sua frente.

Entrada de Amostra

6
Saída de Amostra
     #
    ##
   ###
  ####
 #####
######

Explicação

A escada está alinhada à direita, composta por símbolos #
e espaços, e tem uma altura e largura de n = 6.
https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
*/

function staircase(n) {
  for (let i = 1; i <= n; i += 1) {
    const spaces = ' '.repeat(n - i); // Adiciona espaços à esquerda
    const hashes = '#'.repeat(i); // Adiciona os símbolos '#'
    console.log(spaces + hashes);
  }
}

staircase(5);
