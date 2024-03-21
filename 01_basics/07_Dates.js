console.log("Dates in javascript");

const date = new Date()
// console.log(date.toString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());
// console.log(date.toJSON());
console.log(typeof date);

const mycreateddate = new Date(2004 , 6 , 4 , 4 , 30);
console.log(mycreateddate.toString());

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(mycreateddate.getMinutes());