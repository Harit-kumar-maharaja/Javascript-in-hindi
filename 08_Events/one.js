// Not a good approch as doesn't provide with all features of events 

// document.getElementById('owl').onclick = function(){
//     alert("Owl image clicked");
// }

// document.getElementById('owl').addEventListener('click' , function(){
//     alert("Owl clicked again")
// } , false)

document.getElementById('google').addEventListener('click' , function(e){
    console.log("google clicked");
    e.preventDefault();
})

document.querySelector('#images').addEventListener('click' , function(e){
    console.log(e.target);
})

//type , timestamp , defaultprevented
//target , toelement , srcelement , currenttarget
//clienX , clientY , screenx , screeny              



//more methods to add events
//attaachEvent()
//jQuery - on

