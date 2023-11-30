/*
Dado um horário no formato AM/PM de 12 horas, converta-o para o formato militar de 24 horas.
Nota: - 12:00:00 AM em um relógio de 12 horas é 00:00:00 em um relógio de 24 horas.
12:00:00 PM em um relógio de 12 horas é 12:00:00 em um relógio de 24 horas.

Exemplo:

s = '12:01:00PM'
return '12:01:00'
s = '12:01:00PM'
return '00:01:00'

Descrição da Função:
Deve retornar uma nova string representando o horário de entrada no formato de 24 horas.

timeConversion tem o(s) seguinte(s) parâmetro(s):

string s: um horário no formato de 12 hora

Retorna
string: o horário no formato de 24 hora

Restrições:
Todos os horários de entrada são válidos

Exemplo de Entrada 0:
07:05:45 PM
Exemplo de Saída 0:
19:05:45

https://www.hackerrank.com/challenges/time-conversion/problem
*/

function timeConversion(s) {
  // Extrair as partes relevantes da string
  let hours = parseInt(s.slice(0, 2), 10);
  const ampm = s.slice(-2);

  // Verificar se é AM e se as horas são 12, então ajustar para 00
  if (ampm === 'AM' && hours === 12) {
    hours = 0;
  }

  // Verificar se é PM e se as horas não são 12, então adicionar 12
  if (ampm === 'PM' && hours !== 12) {
    hours += 12;
  }

  // Formatar as horas para ter sempre dois dígitos
  const hours24 = hours.toString().padStart(2, '0');

  // Retornar a string no formato de 24 horas
  return hours24 + s.slice(2, -2);
}

console.log(timeConversion('12:00:00AM'));
