// console.log("Scopes in javascript");

let a = 100;

function scope(){
    let a = 10;
    let b = 100;
    // console.log(a);
}

// console.log(a);

function one(){
    const username = "harit";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);
    two();
}
one();

// *********** Interesting example ************

const addtwo = function(num){
    return num+1;
}

addtwo(5)