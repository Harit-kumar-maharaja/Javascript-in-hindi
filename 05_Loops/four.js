console.log("Loops for traversing ojects in javascript");

const myobj = {
    js : "javascript",
    cp : "c++",
    r : "ruby"
}

for (const key in  myobj) {
    console.log(myobj[key]);
}

//forin loop can also be use for arrays but it will start printing from zero index

//the main d/f b/w arrays and objects is that in arrays index or keys start from zero but in ojects we have user defined keys

//maps are non - iterable