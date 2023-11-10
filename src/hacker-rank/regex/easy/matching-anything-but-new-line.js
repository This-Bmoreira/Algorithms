/*
Esta página é um desafio de expressão regular.
Você tem que preencher o padrão regex em branco ( _________ )
que corresponde apenas e exatamente a strings da forma:  abc.def.gih.jkx,
onde cada variável a,b,c,d,e,f,g,h,i,j,k,x
pode ser qualquer caractere único, exceto a quebra de linha.
https://www.hackerrank.com/challenges/matching-anything-but-new-line/problem?isFullScreen=true
*/

const regexPattern = /^...\....\....\....$/g;
const testString0 = ['123.123.123.132.123.123'];
const testString1 = ['asd.asd.asd.asd'];
const result0 = regexPattern.test(testString0);
const result1 = regexPattern.test(testString1);
console.log(result0);
console.log(result1);
