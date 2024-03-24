console.log("Functions in Javascript");

function myfun(number1 , number2 ){
    console.log(number1 + number2);
}

myfun( 2 , "a");

function isloggedin(username){
    if(!username){
        console.log("Please enter a valid username");
        return;
    }
    return  `${username} just logged in`
}

console.log(isloggedin("Harit"));

function calculate(val1 , val2 , ...num1){
    return num1;
}

console.log(calculate(200 , 300 , 400 , 500));

//ojects

const user = {
    username : "Harit",
    prices  :199
}

function handleoject(anyoject) {
    console.log(`username is ${anyoject.username} and price is ${anyoject.prices}`);
}

handleoject(user)