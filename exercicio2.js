// 12 - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.

// let monitor = 800;

// Tabela de Código de Condições de Pagamento

// 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

// let desconto15 = (monitor * 15) / 100;
// let dinheiro_ou_pix = monitor - desconto15;

//  2 - À Vista no cartão de crédito, recebe 10% de desconto

// let desconto10 = (monitor * 10) / 100;
// let credito = monitor - desconto10;

//  3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

// let parcelado2 = (monitor /2);

//  4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%

// let porcentagem = (monitor * 10) /100;
// let juros = monitor + porcentagem;
// let parcelada3 = (monitor /3);
// let par3 = parcelada3.toFixed(2)

// //Mude a variavel
// let comprador = 'parcel';

// if (comprador == 'dinheiro_ou_pix'){
//     console.log('Vc pagará R$', dinheiro_ou_pix );
// }else if(comprador == 'credito'){
//     console.log('Vc pagará R$', credito );
// }else if(comprador == 'parcelado2'){
//     console.log('Vc pagará em 2 meses R$', parcelado2, 'de R$',monitor, 'sem juros');
// }else if(comprador == 'parcelado3'){
//     console.log('Vc pagará R$', par3);
// }else{
//     console.log('Selecione um tipo de pagamento')
// }

//13 - Faça algoritmo que leia o nome e a idade de uma peso e imprima na tela o nome da pessoa e se ela é maior ou menor de idade.

// let pessoa = { nome: "Lais", idade: 19 };

// console.log(pessoa.nome);
// console.log(pessoa.idade);

// if (pessoa.idade < 18) {
//   console.log("O(a) " + pessoa.nome + " é menor de idade");
// } else {
//   console.log("O(a) " + pessoa.nome + " é maior de idade");
// }

//14 - Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

// let A = 5;
// let B = 7;

// [A, B] = [B, A];

// console.log(A);
// console.log(B);

//15 - Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.
// (Ex: 5 anos, 2 meses e 15 dias de vida)

//16 - Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.

//17 - Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas.

//Fórmula: C = (5 * ( F-32) / 9)

//18 - Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Francisco seja maior que Sara.

//19 - Faça um algoritmo que imprima na tela a tabuada de 1 até 10.

// for (i = 1; i <= 10; i++) {
//   console.log(i * 1,
//     i * 2,
//     i * 3,
//     i * 4,
//     i * 5,
//     i * 6,
//     i * 7,
//     i * 8,
//     i * 9,
//     i * 10);
// }

//20 - Faça um algoritmo que receba um valor inteiro e imprima na tela a sua tabuada.

// for (i = 1; i <= 10; i++) {
//       console.log(i * 6);
// }

//21 - Faça um algoritmo que mostre um valor aleatório entre 0 e 100.

// for (i = 1; i <= 100; i++) {
//     console.log(i);
// }

//22 - Faça um algoritmo que leia dois valores inteiros A e B, imprima na tela o quociente e o resto da divisão inteira entre eles.

// let a = 8;
// let b = 2;

// res = a / b;
// console.log(a, "/", b, "=", res);

//21 - Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações fornecidas serão: valor da hora aula, número de aulas selecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final.

// let aulas = 20;
// let valor = 25;
// let horast = 3;
// let salario = (aulas * horast * valor);
// let inss = (salario * 7.5) /100;
// let res = salario - inss
// console.log(res)

//22 - Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, distância percorrida e a quantidade de litros utilizados para fazer a viagem.

//Escolhi a distância de Nova York até o Monumento Washington (371,8 km)
// let tempo = 3.47;
// let velocidade = 80;
// let litro = 12;

// let d = tempo * velocidade;
// let l = (tempo * velocidade) / 12;
// console.log(d.toFixed(2), "Km");
// console.log(l.toFixed(2), "Litros");

//Fórmula: distância = tempo x velocidade.
//litros usados = distância / 12.
