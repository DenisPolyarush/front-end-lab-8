var euro = Number(prompt('Enter the amount of the Euro', 0));
var usd = Number(prompt('Enter the amount of the USD', 0));

var oneEuro = 33.2324;
var oneUsd = 27.1240;

if(Math.sign(euro) > 0 && Math.sign(usd) > 0){
    var exchangeEuro = euro * oneEuro;
    var exchangeUsd = usd * oneUsd;
    var exchangeEuroToUsd = oneEuro / oneUsd;
    console.log(euro + ' euros are equal ' + parseFloat(exchangeEuro.toFixed(2))  + ' UAH, ' + usd + ' dollars are equal ' + parseFloat(exchangeUsd.toFixed(2)) + ' UAH, one euro is equal ' + parseFloat(exchangeEuroToUsd.toFixed(2)) + ' dollars.');
}else{
    console.log('Incorrect data');
}