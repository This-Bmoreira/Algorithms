/*
Regras de arredondamento: Sam é um professor na universidade e gosta de arredondar
a nota de cada aluno de acordo com algumas regras. Se a diferença entre a nota e
o próximo múltiplo de 5 for menor que 3, arredonda para o próximo múltiplo de 5.
Se a nota for menor que 40, não arredonda pois ainda será uma nota reprovada.
Função de arredondamento: O documento pede para escrever um código
que automatize o processo de arredondamento. A função deve receber
um número inteiro que representa a quantidade de alunos e uma lista
de números inteiros que representam as notas originais dos alunos.
A função deve retornar uma lista de números inteiros que representam
as notas arredondadas dos alunos.
Exemplos de arredondamento: O documento dá
alguns exemplos de como a função de arredondamento
deve funcionar. Por exemplo, se a nota original for 73,
a nota arredondada será 75. Se a nota original for 67, a nota
arredondada será 67. Se a nota original for 38, a nota arredondada
será 40. Se a nota original for 33, a nota arredondada será 33.
*/

function gradingStudents(grades) {
  function roundGrade(grade) {
    let roundedGrade;

    if (grade <= 37) {
      // Não arredonda notas abaixo de 37
      roundedGrade = grade;
    } else {
      const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
      const isWithinThreshold = nextMultipleOfFive - grade < 3;
      if (isWithinThreshold) {
        // Arredonda para o próximo múltiplo de 5 se estiver dentro do limite
        roundedGrade = nextMultipleOfFive;
      } else {
        // Mantém a nota inalterada se não estiver dentro do limite
        roundedGrade = grade;
      }
    }

    return roundedGrade;
  }

  return grades.map(roundGrade);
}

console.log(gradingStudents([73, 67, 37, 38, 50]));
