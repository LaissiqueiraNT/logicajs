let alunos = {
    aluno1: {
        Matematica: { Bimestre1: 7, Bimestre2: 8, Bimestre3: 9, Bimestre4: 7 },
        Ciências: { Bimestre1: 4, Bimestre2: 6, Bimestre3: 7, Bimestre4: 5 },
        Português: { Bimestre: 5, Bimestre: 7, Bimestre: 6, Bimestre: 8 },
    },
    aluno2: {
        Matematica: { Bimestre1: 5, Bimestre2: 7, Bimestre3: 4, Bimestre4: 5 },
        Ciências: { Bimestre1: 7, Bimestre2: 4, Bimestre3: 8, Bimestre4: 7 },
        Português: { Bimestre: 5, Bimestre: 4, Bimestre: 2, Bimestre: 8 },
    },
    aluno3: {
        Matematica: { Bimestre1: 5, Bimestre2: 5, Bimestre3: 9, Bimestre4: 7 },
        Ciências: { Bimestre1: 6, Bimestre2: 6, Bimestre3: 5, Bimestre4: 5 },
        Português: { Bimestre: 4, Bimestre: 6, Bimestre: 3, Bimestre: 2 },
    },
}
for (let aluno in alunos) {
    console.log(`Notas de ${aluno}:`);
    
    for (let materia in alunos[aluno]) {
        let soma = Object.values(alunos[aluno][materia]).reduce((acc, nota) => acc + nota, 0);
        
        console.log(`  ${materia}: ${soma}`);
    }

    console.log("---------------------");
}