let taxad = {
    dollar: 5.70,
    euro: 5.50,
    libra: 6.30,
    argentino: 0.05
};
let real = 400;
let dollar = taxad.dollar;
let resultado_dollar = real / dollar;


console.log('O valor em dolar será: ', resultado_dollar.toFixed(2) );