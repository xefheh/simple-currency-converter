const input = require('sync-input');
//Write your code here

function make() {
    console.log("What do you want to convert?");
    let currencyFrom = input('From: ').toUpperCase();
    if (!Object.keys(currency).includes(currencyFrom)) {
        console.log('Unknown currency');
        return;
    }
    let currencyTo = input('To: ').toUpperCase();
    if (!Object.keys(currency).includes(currencyTo)) {
        console.log('Unknown currency');
        return;
    } else {
        const amount = Number(input('Amount: '));
        if (isNaN(amount)) {
            console.log('The amount has to be a number');
        } else if (amount < 1) {
            console.log('The amount cannot be less than 1');
        } else {
            const result = amount * (currency[currencyTo] / currency[currencyFrom]);
            console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`)
        }
    }
}
const currency = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};
console.log("Welcome to Currency Converter!");
for (let c of Object.keys(currency)) {
    console.log(`1 USD equals ${currency[c]} ${c}`);
}

while(true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let choose = Number(input());
    switch (choose) {
        case 1:
            make();
            continue
        case 2:
            console.log("Have a nice day!");
            break;
        default:
            console.log("Unknown input");
            continue;
    }
    break;
}
