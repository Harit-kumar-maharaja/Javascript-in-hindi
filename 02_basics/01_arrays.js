console.log("Intro to Arrays in js");

const myarr= [0,1,2,3,4,5,6,7]
const myheroes = ["shaktiman" , "nagraj"] 

//arrays methods
myarr.push(8);
myarr.push(9);
myarr.pop();

myarr.unshift(10);
myarr.shift();

console.log(myarr);

const newarr = myarr.join()
console.log(typeof newarr);

//splice changes the original array but slice does't change the original array