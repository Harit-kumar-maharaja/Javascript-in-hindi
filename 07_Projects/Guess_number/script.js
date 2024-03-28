let randomnumber = console.log(parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessfield')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const loworhi = document.querySelector('.loworhi')
const startover = document.querySelector('.resultparas')

const p = document.createElement('p')

let prevguess = []
let numguess = 1

let playgame = true

if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        parseInt(userinput.value)
        console.log(guess);
        validateguess(guess)
    })
}

function validateguess(guess){
    if(guess.NaN){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a valid number more than 1')
    }
    else if(guess>100){
        alert('Please enter a valid number less than 100')
    }
    else{
        prevguess.push(guess)
        if(numguess == 11){
            displayguess(guess)
            displaymessage(`Game over. Random no was ${randomnumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess===randomnumber){
        displaymessage(`You guessed right`);
        endgame();
    }
    else if(guess < randomnumber){
        displaymessage(`Number is too low`);
    }
    else if(guess > randomnumber){
        displaymessage(`Number is too high`);
    }
}

function displaymessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function displayguess(guess){
    userinput.value = '';
  guessslot.innerHTML += `${guess}, `;
  numguess++;
  remaining.innerHTML = `${11 - numguess} `;
}

function newgame(){

}

function endgame(){

}