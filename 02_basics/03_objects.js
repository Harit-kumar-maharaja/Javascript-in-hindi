console.log("Objects in javascript");

//object literals

const mysym = Symbol("key1")

const juser = {
    name : "Harit",
    age : 19,
    email : "hk@google.com",
    isloggedin : false,
    [mysym] : "mykey1" //************************
}

// console.log(juser.email);
// console.log(juser["email"]);
// console.log(juser[mysym]);

juser.email = "haritkumar1949@gmail.com"
// Object.freeze(juser)
juser.email = "haritkumar4147@gmail.com"
// console.log(juser);

juser.greeting = function(){
    console.log("Hello js User");
}

juser.greetingtwo = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(juser.greeting());
console.log(juser.greetingtwo());