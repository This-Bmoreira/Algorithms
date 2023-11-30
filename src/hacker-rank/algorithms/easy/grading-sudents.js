/*
A Universidade HackerLand possui a seguinte política de notas:

Todo aluno recebe uma nota na faixa inclusiva de 0 a 100.
Qualquer nota abaixo de 40 é uma nota de reprovação.

Sam é professor na universidade e gosta de arredondar
a nota de cada aluno de acordo com estas regras:

Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3,
arredonde a nota para cima até o próximo múltiplo de 5.
Se o valor da nota for menor que 38, nenhum arredondamento ocorre,
pois o resultado ainda será uma nota de reprovação.

Exemplos:

Nota = 84, arredondada para 85 (85 - 84 é menor que 3).
Nota = 29, não arredondada (o resultado é menor que 40).
Nota = 57, não arredondada (60 - 57 é 3 ou mais).

Dado o valor inicial da nota para cada um dos n alunos de Sam,
escreva um código para automatizar o processo de arredondamento.

Descrição da Função:

gradingStudents tem o(s) seguinte(s) parâmetro(s):
grades[n]: as notas antes do arredondamento.

Retorna

Int[n]: as notas após o arredondamento conforme apropriado

Formato de Entrada

A primeira linha contém um único número inteiro, 7, o número de estudantes.
Cada uma das n linhas subsequentes contém um único número inteiro, grades[i].

Restrições

1 < n < 60
0 < notas[i] < 100

Sample Input 0

4
73
67
38
33

Sample Output 0

75
67
40
33

O Estudante 1 recebeu uma nota 73, e o próximo múltiplo de 5 a partir de 73 é 75.
Como 75 — 73 < 3, a nota do aluno é arredondada para 75.

O Estudante 2 recebeu uma nota 67, e o próximo múltiplo de 5 a partir de 67 é 70.
Como 70 — 67 = 3, a nota não será modificada, e a nota final do aluno é 67.

O Estudante 3 recebeu uma nota 38, e o próximo múltiplo de 5 a partir de 38 é 40.
Como 40 — 38 < 3, a nota do aluno será arredondada para 40.

O Estudante 4 recebeu uma nota abaixo de 33, então a nota
não será modificada, e a nota final do aluno é 33.

https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
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
