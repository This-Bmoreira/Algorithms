/*
Esta página é um desafio de regex (expressão regular)
que pede para você preencher um padrão que combine
uma sequência de um dígito e um caractere não-dígito.
A página explica que:

\d corresponde a qualquer dígito [0-9].
\D corresponde a qualquer caractere que não seja um dígito.
Teste é a string que você deve usar para testar o seu padrão.
Aqui denota um caractere dígito, e X denota um caractere não-dígito.
Você não precisa escrever nenhum código, apenas preencher o padrão na lacuna ( _________ ).
https://www.hackerrank.com/challenges/matching-digits-non-digit-character/problem?isFullScreen=true
*/

const text = '06-11-2015';

const regex = /\d{2}\D{1}\d{2}\D{1}\d{4}/gmi;
const result = regex.test(text);

console.log(result);
