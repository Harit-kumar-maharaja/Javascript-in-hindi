// For of loop

// [{} , {} , {}];

const arr = [1,2,3,4,5]

for (const val of arr) {
    console.log(val);    
}

//Maps

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "America")
map.set("CN" , "Canada")

for (const [key , value] of map) {
    console.log(key , value );
}

// console.log(map);