/*
Conversão de tempo: A página explica como converter um tempo em formato de 12 horas (AM/PM)
para um formato de 24 horas (militar).
A página fornece uma função chamada timeConversion que recebe uma string
que representa um tempo em formato de 12 horas e retorna uma nova string que representa
o mesmo tempo em formato de 24 horas.
Regras de conversão: A página também fornece algumas regras para fazer
a conversão de tempo, tais como:
12:00:00AM em um relógio de 12 horas é 00:00:00 em um relógio de 24 horas.
12:00:00PM em um relógio de 12 horas é 12:00:00 em um relógio de 24 horas.
Para qualquer outro tempo, basta adicionar 12 horas ao tempo em formato de 12
horas se for PM, ou manter o mesmo tempo se for AM.
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
