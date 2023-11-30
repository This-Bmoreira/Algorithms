/*
Marie inventou uma Máquina do Tempo e quer testá-la viajando no tempo para
visitar a Rússia no Dia do Programador (o 256º dia do ano)
durante um ano no intervalo inclusivo de 1700 a 2700.

De 1700 a 1917, o calendário oficial da Rússia era o calendário juliano;
desde 1919, eles usam o sistema de calendário gregoriano. A transição do
calendário juliano para o calendário gregoriano ocorreu em 1918, quando o dia seguinte
após 31 de janeiro foi 14 de fevereiro. Isso significa que em 1918,
14 de fevereiro foi o 32º dia do ano na Rússia.

Em ambos os sistemas de calendário, fevereiro é o único mês com uma quantidade variável de dias;
tem 29 dias durante um ano bissexto e 28 dias durante todos os outros anos. No calendário juliano,
anos bissextos são divisíveis por 4; no calendário gregoriano, anos bissextos são:

Divisíveis por 400.
Divisíveis por 4 e não divisíveis por 100.

Dado um ano ,y, encontre a data do 256º dia desse ano de acordo
com o calendário oficial russo durante esse ano.
Em seguida, imprima-a no formato dd.mm.aaaa, onde dd é o dia com dois dígitos,
mm é o mês com dois dígitos e aaaa é o ano.

Por exemplo, dado o = 1984. 1984 é divisível por 4,
então é um ano bissexto. O 256º dia de um ano bissexto
após 1918 é 12 de setembro, então a resposta é 12.09.1984.

Descrição da Função:
Deve retornar uma string representando a data do 256º dia do ano fornecido.
dayOfProgrammer tem o(s) seguinte(s) parâmetro(s):
year: um número inteiro

Formato da Entrada:
Um único número inteiro denotando o ano.

Restrições:
1700≤y≤2700

Formato de Saída:
Imprima a data completa do Dia do Programador durante o ano y
no formato dd.mm.aaaa, onde dd é o dia com dois dígitos, mm é o mês com dois dígitos e aaaa é o ano.

Exemplo de Entrada 0:

2017

Exemplo de Saída 0:

13.09.2017

Explicação 0:

No ano y = 2017, janeiro tem 31 dias, fevereiro tem 28 dias,
março tem 31 dias, abril tem 30 dias, maio tem 31 dias, junho tem 30 dias,
julho tem 31 dias e agosto tem 31 dias. Quando somamos o número total de dias
nos oito primeiros meses, obtemos 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243.
O Dia do Programador é o 256º dia, então calculamos 256 - 243 = 13 para determinar
que cai no dia 13 do 9º mês (setembro). Em seguida, imprimimos a data completa no formato
especificado, que é 13.09.2017.

Exemplo de Entrada 1:

2016

Exemplo de Saída 1:

12.09.2016

Explicação 1:

O ano y = 2016 é um ano bissexto, então fevereiro tem 29 dias,
mas todos os outros meses têm o mesmo número de dias que em 2017.
Quando somamos o número total de dias nos oito primeiros meses,
obtemos 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244. O Dia do Programador é o 256º dia,
então calculamos 256 - 244 = 12 para determinar que cai no dia 12 do 9º mês (setembro).
Em seguida, imprimimos a data completa no formato especificado, que é 12.09.2016.

Exemplo de Entrada 2:

1800

Exemplo de Saída 2:

12.09.1800

Explicação 2:

Como 1800 é um ano bissexto de acordo com o calendário juliano, o dia cai em 12 de setembro.
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
