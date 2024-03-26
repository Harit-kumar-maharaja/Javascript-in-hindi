console.log("Truthy values in javascript");

const useremail = [];

if(useremail){
    console.log("User email is present");
}
else{
    console.log("User email not present");
}

// ******** falsy values

// false , 0 , -0 , Bigint , "" , null , undefined , NaN

//********** truthy values 

// "0" , 'false' , " "  , [] ,{} , function(){}

const   oj = {};

if(Object.keys(obj) === 0){
    console.log("Object is empty");
}

//ternary operator

// condition ? true : false