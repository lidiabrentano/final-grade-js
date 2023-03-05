/* 
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

-  Crie uma função que irá calcular a média das notas de cada aluno;
-  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

let students = [
    {
        name: "Pedro",
        firstTestScore: 5.4,
        secondTestScore: 8.5,
    },
    {
        name: "Júlia",
        firstTestScore: 3.7,
        secondTestScore: 4.6,
    },
    {
        name: "Patrícia",
        firstTestScore: 9.1,
        secondTestScore: 8.3,
    },
    {
        name: "Henrique",
        firstTestScore: 9.4,
        secondTestScore: 5.8,
    },
    {
        name: "Lucas",
        firstTestScore: 4.4,
        secondTestScore: 7.5,
    }
]
let grade;

function averageGrade(student) {
    grade = ((student.firstTestScore + student.secondTestScore) / 2)

    if(grade >= 7 ) {
        alert(`A média do(a) aluno(a) ${student.name} é: ${grade}. Parabéns, ${student.name}! Você foi aprovado(a).`)
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${grade}. Não foi desta vez, tente novamente.`)
    }
}

for(let student of students) {
    averageGrade(student)
}