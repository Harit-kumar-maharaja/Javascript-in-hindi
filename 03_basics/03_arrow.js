console.log("Arrow and this function in javascript");

// function chai(){
//     let username = "harit"
//     console.log(this.username);
// }


const chai = () => {
    let username = "Harit";
    console.log(this.username);
}

chai()

const addtwo =  (num1 , num2) => {
    return num1 + num2;
}

const adddtwo = (num1 , num2) => (num1 + num2)