/*
Dois amigos, Anna e Brian, estão decidindo como dividir a conta em um jantar.
Cada um só pagará pelos itens que consumirem. Brian pega a conta e calcula
a parte de Anna. Você deve determinar se o cálculo dele está correto.

Por exemplo, suponha que a conta tem os seguintes preços: bill = [2,4,6].
Anna recusa-se a comer o item k= bill[2] que custa 6 . Se Brian calcular a conta corretamente,
Anna pagará (2 + 4 )/ 2 . Se ele incluir o custo de bill[2] , ele calculará (2 + 4 + 6)/2 = 6.
No segundo caso, ele deverá reembolsar a Anna. Se Brian cobrou demais de Anna, ele deve reembolsar
a diferença 3. Caso contrário, tudo está correto e podemos dizer “Bon Appétit”.

A função bonAppetit deve ser completada no editor abaixo.
Ela deve imprimir “Bon Appetit” se a conta for dividida de maneira justa.
Caso contrário, deve imprimir a quantidade em dinheiro que Brian deve a Anna.
A função bonAppetit tem os seguintes parâmetros:

bill: um array de inteiros representando o custo de cada item pedido
k: um inteiro representando o índice baseado em zero do item que Anna não come
b: a quantidade de dinheiro que Anna contribuiu para a conta
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
