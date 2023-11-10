/*
Esta página explica o que são expressões regulares
e como usá-las para encontrar padrões em textos.
Ela também apresenta um desafio de regex que consiste
em encontrar a palavra “hackerrank” em uma string de teste. O resumo da página é:
Expressões regulares: São sequências de caracteres que definem um padrão de busca.
São usadas principalmente para fazer correspondência de padrões em strings.
Exemplos de padrões: A página mostra um exemplo simples de um padrão regex que corresponde
a uma string específica. Ela também menciona outros exemplos de modelos de
IA que podem gerar texto e imagens realistas, como GPT-4 e ChatGPT.
Desafio de regex: A página propõe um desafio de regex
que não requer escrever código, apenas preencher o padrão
regex em um espaço em branco. O desafio é encontrar a
string “hackerrank” em uma string de teste, respeitando a sensibilidade a maiúsculas e minúsculas.
*/

const text = 'The hackerrank team is on a mission to flatten the world by restructuring the DNA of every company on the planet. We rank programmers based on their coding skills, helping companies source great programmers and reduce the time to hire. As a result, we are revolutionizing the way companies discover and evaluate talented engineers. The hackerrank platform is the destination for the best engineers to hone their skills and companies to find top engineers. hackerrank is hackerrank not HackerRank. so please use hackerrank always and not hackerrrank hackerrank 2 hackerrank 3 hackerrank 4 hackerrank 5 not Hackerrank 6 is hackerrank';

const regex = /\bhackerrank\b/gmi;
const matches = text.match(regex);

console.log(matches);
