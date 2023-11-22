/*
Objetivo do problema: Encontrar a data do 256º
dia do ano (Dia do Programador) na Rússia, de acordo com o calendário oficial russo,
dado um ano entre 1700 e 2700.
Mudança de calendário: A Rússia usou o calendário juliano até 1917 e o calendário
gregoriano desde 1919. A transição ocorreu em 1918, quando o dia seguinte a 31 de
janeiro foi 14 de fevereiro.
Regras de ano bissexto: No calendário juliano, os anos bissextos são divisíveis por 4.
No calendário gregoriano, os anos bissextos são aqueles que são divisíveis por 4, mas
não por 100, ou que são divisíveis por 400.
Função a ser completada: A função dayOfProgrammer recebe um inteiro que
representa o ano e deve retornar uma string no formato dd.mm.aaaa, onde dd é o
dia com dois dígitos, mm é o mês com dois dígitos e aaaa é o ano.
Exemplos de entrada e saída: A página fornece três exemplos de como a
função deve funcionar para os anos 2017, 2016 e 1800. A página também explica
como chegar às respostas para cada exemplo.
https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true
*/

function dayOfProgrammer(year) {
  let day = 0;
  let month = 0;
  let isLeapYear = false;

  if (year === 1918) {
    // Special case: Transition year
    day = 26; // February 14th was the 32nd day of the year
    month = 9;
  } else if (year <= 1917) {
    // Julian calendar
    isLeapYear = year % 4 === 0;
    day = isLeapYear ? 12 : 13;
    month = 9;
  } else {
    // Gregorian calendar
    isLeapYear = (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
    day = isLeapYear ? 12 : 13;
    month = 9;
  }

  return `${day}.0${month}.${year}`;
}

console.log(dayOfProgrammer(2023));
