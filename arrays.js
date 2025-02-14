const aluno = {
    pessoa: {
        Nome: 'Luiz',
        Data_de_nascimento: '20/10/1990',
        Documentos: {
            ID: "1",
            CPF: "32.867.432-78",
            CNH: "63265874358"
        },
        Endereco: {
            Tipo: "Casa",
            Logradouro: "Rua ",
            Num: "802",
            Complemento: "Padaria do seu zé",
            Bairro: "Maria das dores",
            Cidade: "Valença",
            UF: "RJ",
            CEP: "27600742"
        },
        Filiacao: {
            Nome_pai: "Ricardo",
            Nome_mãe: "Helena"
        },
        Contatos: {
            Celular:  "24780453267",
            Fixo:  "2424538954",
            Email:  "luizao@gmail.com"
        }
    }
}

for (let categoria in aluno.pessoa) {
    console.log(categoria);
    
    // Se o valor for um objeto, percorremos ele também
    if (typeof aluno.pessoa[categoria] === "object") {
        for (let chave in aluno.pessoa[categoria]) {
            console.log(chave + ": " + aluno.pessoa[categoria][chave]);
        }
    } else {
        console.log(aluno.pessoa[categoria]);
    }}