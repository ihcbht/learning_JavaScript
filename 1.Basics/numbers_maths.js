const score = 400
console.log(score); //400


const balance = new Number(100)
console.log(balance); //[Number: 100]


console.log(balance.toString()); //100
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber =23.8966
console.log(balance.toPrecision(3));// 23.9 (string) for 123.89656 : 124 (rounds off)


const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//----------------------Maths---------------------
console.log(Math); //Object [Math] {}
console.log(Math.abs(-89)); //89
console.log(Math.round(123.8956)); //124
console.log(Math.ceil(123.875)); //124
console.log(Math.floor(123.89)); //123
console.log(Math.min(4.3,6,8,1)); //1
console.log(Math.max(4.3,6,8,1)); //8


console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min +1))+min);







