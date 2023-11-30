/*
Dois amigos, Anna e Brian, estão decidindo como dividir a conta em um jantar.
Cada um pagará apenas pelos itens que consumiu. Brian recebe a conta e calcula a parte de Anna.
Você deve determinar se o cálculo dele está correto.

Por exemplo, suponha que a conta tenha os seguintes preços: conta = [2, 4, 6].
Anna opta por não comer o item k = conta[2], que custa 6.
Se Brian calcular a conta corretamente, Anna pagará (2 + 4)/2 = 3.
Se ele incluir o custo do item conta[2], ele calculará (2 + 4 + 6)/2 = 6.
Nesse segundo caso, ele deveria reembolsar 3 para Anna.

Descrição da Função:
Complete a função bonAppetit no editor abaixo.
Ela deve imprimir "Bon Appétit" se a conta estiver dividida de forma justa.
Caso contrário, deve imprimir a quantia inteira que Brian deve a Anna.

bonAppetit possui o(s) seguinte(s) parâmetro(s):

conta: uma matriz de inteiros representando o custo de cada item pedido.
k: um inteiro representando o índice baseado em zero do item que Anna não comeu.
b: a quantia de dinheiro que Anna contribuiu para a conta.

Formato de Entrada:
A primeira linha contém dois inteiros separados por espaço, n e k,
o número de itens pedidos e o índice baseado em zero do item que Anna não comeu.

A segunda linha contém n inteiros separados por espaço, conta[i], onde 0 < i < n.

A terceira linha contém um inteiro, b, a quantia
de dinheiro que Brian cobrou de Anna pela parte dela da conta.

Restrições

2 < n < 100
0 < k < n
0 < conta[i] < 100

A quantia de dinheiro devido a Anna será sempre um número inteiro

Formato de Saída

Se Brian não cobrou a mais de Anna, imprima "Bon Appétit" em uma nova linha;
caso contrário, imprima a diferença (ou seja, Cobrado - Real) que Brian deve reembolsar a Anna.
Isso sempre será um número inteiro.

Sample Input 0

4 1
3 10 2 9
12

Sample Output 0

5

Explicação 0
Anna não comeu o item conta[1] = 10, mas ela compartilhou o
restante dos itens com Brian. O custo total dos itens compartilhados é 3 + 2 + 9 = 14
e, dividido ao meio, o custo por pessoa é Real = 7.
Brian a cobrou Cobrado = 12 pela parte dela na conta.
Imprimimos a quantia pela qual Anna foi cobrada a mais, ou seja,
Cobrado - Real = 12 - 7 = 5, em uma nova linha.

Sample Input 1

4 1
3 10 2 9
7

Sample Output 1

Bon Appetit

Anna não comeu o item conta[1] = 10, mas ela compartilhou o restante dos itens com Brian.
O custo total dos itens compartilhados é 3 + 2 + 9 = 14 e,
dividido ao meio, o custo por pessoa é Real = 7.
Como Real é igual a Cobrado = 7, imprimimos "Bon Appétit" em uma nova linha.

https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
*/

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill: um array de inteiros representando o custo de cada item pedido
 *  2. INTEGER k : um inteiro representando o índice baseado em zero do item que Anna não come
 *  3. INTEGER b:  a quantidade de dinheiro que Anna contribuiu para a conta
 */

function bonAppetit(bill, k, b) {
  function sum(totalCust, current) {
    return totalCust + current;
  }

  const totalCost = bill.reduce(sum, 0);
  const annaShare = (totalCost - bill[k]) / 2;

  if (annaShare === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - annaShare);
  }
}

bonAppetit([3, 10, 2, 9], 1, 7);
