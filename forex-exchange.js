var request = require('request');
const getPesoValue =(dollar,currency_code)=>{
  request('https://api.fixer.io/latest?base=' + currency_code, function (error, response, body) {
    const exchange_rates = JSON.parse(body);
    const peso_value = exchange_rates.rates.PHP * dollar;
    console.log(`${dollar} ${currency_code} is ${peso_value}` );
  });
}

getPesoValue(300,'YEN');
