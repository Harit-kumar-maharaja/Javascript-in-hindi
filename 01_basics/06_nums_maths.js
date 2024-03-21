console.log("Numbers and maps in javascript");

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernum = 123.897
console.log(othernum.toPrecision(4));

// ******MATHS********

// console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(8.6333333334));
console.log(Math.ceil(8.65464656));
console.log(Math.floor(8.65464656));

console.log(Math.random());
console.log((Math.random()*10) + 1);


// ********************

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))  + min);   