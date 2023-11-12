/*
Esta página é um desafio de regex (expressão regular) que ensina como usar
\s e \S para combinar caracteres de espaço em branco e não espaço em branco.
O desafio consiste em preencher o padrão regex em branco ( _________ )
para corresponder à string de teste. O desafio não requer escrever código, apenas regex.
https://www.hackerrank.com/challenges/matching-whitespace-non-whitespace-character/problem?isFullScreen=true
*/

const text1 = '123 123 123';
const text2 = '12 11 15';

const regex = /\S{2}\s{1}\S{2}\s{1}\S{2}/gmi;
const result1 = regex.test(text1);
const result2 = regex.test(text2);
console.log(result1, result2);
