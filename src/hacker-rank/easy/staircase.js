/*
Esta página é um desafio de programação
que pede para escrever uma função que imprima uma escada
de tamanho n usando símbolos # e espaços. O resumo da página é:
Função: A função deve se chamar staircase e receber
um inteiro n como parâmetro, que representa o tamanho da escada.
Entrada: A entrada consiste em uma única linha com um inteiro
n, que deve ser lido da entrada padrão.
Saída: A saída deve consistir em n linhas,
cada uma com n caracteres, formando uma escada alinhada à direita.
Os caracteres devem ser # ou espaços, de acordo com a posição na escada.
A saída deve ser impressa na saída padrão.
Exemplo: Se a entrada for 4, a saída deve ser:
*/

function staircase(n) {
  for (let i = 1; i <= n; i += 1) {
    const spaces = ' '.repeat(n - i); // Adiciona espaços à esquerda
    const hashes = '#'.repeat(i); // Adiciona os símbolos '#'
    console.log(spaces + hashes);
  }
}

staircase(5);
