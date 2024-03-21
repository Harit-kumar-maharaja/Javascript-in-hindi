const tinderid = {}

tinderid.nane = "hk"
tinderid.uniqueid = "123abc"
tinderid.isloggedin = false;

// console.log(tinderid);

const reguleruser = {
    email : "hk@google.com",
    fullname : {
        userfullname : {
            firstname : "harit",
            lastname : "kumar"
        }
    }
}

console.log(reguleruser.fullname?.userfullname?.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 = Object.assign(obj1 , obj2 )

const obj3 = {...obj1 , ...obj2}

console.log(obj3);

console.log(Object.keys(tinderid));
console.log(Object.values(tinderid));


//Object DE - Structure 

const course = {
    coursename : "js in hindi",
    price : 999,
    courseinstructor : "hitesh choudhary"
}

const {courseinstructor : instructor} = course;

console.log(instructor);

// **********API***********

//OBJECT API
// {
//     "name" : "harit",
//     "firstname" : "harit",
//     "lastname" : "kumar"   
// }

//ARRAY API
// [
//     {},
//     {},
//     {}
// ]