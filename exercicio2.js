//1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.



//2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

// let v1 = 70;

// if(v1 % 2 == 0){
//     console.log('Par');
// }else{
//     console.log('Impar')
// }
// if(v1 < 0){
//     console.log('Este numero é negativo')
// }else{
//     console.log('Este numero é positivo')
// }

//3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.

// let a = 86;
// let b = 534;

// if(a == b){
//     let c= a+b;
//     console.log(c)
// }else{
//     let c= a*b;
//     console.log(c)
// }

//4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

// let num = 7;

// console.log(num -1);
// console.log(num +1);

// 5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse 
// usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

// let salario = 1300;

// console.log(salario * 12);


// 6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.
// let salario = 1293;
// let reajuste = (5 * salario) /100;

// console.log(reajuste);
// console.log(salario + reajuste);

// 7 - Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.

// console.log(7 > 8);

// console.log(7 < 8);

// 8 - Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.
// for(i =10; i>=0; i--){
//     console.log(i)
// }

//9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição 
// de acordo com a tabela abaixo:
// Fórmula do IMC = peso / (altura) ²

// let nome = 'Jubileu';
// let peso =80;
// let altura = 1.80;
// let imc = peso/ (altura * altura)

// console.log("Ola", nome, ", seu IMC é", imc.toFixed(2));

// if(imc < 18.5){
//     console.log(imc.toFixed(2),' Vc esta abaixo do peso');

// }else if(imc >=18.6 && imc <= 24.9){
//     console.log( 'Vc esta no peso ideal');

// }else if(imc >= 25.0 && imc <= 29.9){
//     console.log('Vc esta levemente acima do peso')

// }else if(imc >= 30.0 && imc <= 34.9){
//     console.log('Obesidade grau 1')

// }
// else if(imc >= 35.0 && imc <= 39.9){
//     console.log('Obesidade grau 2')

// }else{
//     console.log('Obesidade grau 3')

// }

// 10 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.

let aluno = {
    bimestre1: 8,
    bimestre2: 6,
    bimestre3: 5,
    bimestre4: 9
}

let quant = aluno.length;
let media= (aluno.bimestre1 + aluno.bimestre2 + aluno.bimestre3 + aluno.bimestre4) / 4
console.log('A media do aluno é '+ media)
